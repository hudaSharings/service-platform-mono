using Microsoft.AspNetCore.Mvc;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Application.Interfaces;
using ServicePlatform.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using ServicePlatform.Infrastructure.Data;

namespace ServicePlatform.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EstimationRequestsController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<EstimationRequestsController> _logger;

    public EstimationRequestsController(ApplicationDbContext context, ILogger<EstimationRequestsController> logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpPost]
    public async Task<ActionResult<ServiceResponse<ServiceRequestDto>>> CreateEstimationRequest([FromBody] CreateEstimationRequestDto request)
    {
        try
        {
            // Get the current user ID from the token (you'll need to implement this based on your auth setup)
            var currentUserId = GetCurrentUserId();
            if (currentUserId == Guid.Empty)
            {
                return Unauthorized(new ServiceResponse<ServiceRequestDto>
                {
                    Success = false,
                    Message = "User not authenticated"
                });
            }

            // Get the service to verify it exists and is an estimation service
            var service = await _context.Services
                .Include(s => s.Category)
                .FirstOrDefaultAsync(s => s.Id == request.ServiceId);

            if (service == null)
            {
                return NotFound(new ServiceResponse<ServiceRequestDto>
                {
                    Success = false,
                    Message = "Service not found"
                });
            }

            if (!service.IsEstimationService)
            {
                return BadRequest(new ServiceResponse<ServiceRequestDto>
                {
                    Success = false,
                    Message = "This service does not support estimation requests"
                });
            }

            // Create a service request for the estimation
            var serviceRequest = new ServiceRequest
            {
                Id = Guid.NewGuid(),
                RequesterId = currentUserId,
                CategoryId = service.CategoryId,
                Title = request.Title,
                Description = request.Description,
                Location = request.Location,
                PreferredDate = request.PreferredDate,
                Status = "Pending",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _context.ServiceRequests.Add(serviceRequest);
            await _context.SaveChangesAsync();

            // Generate formatted request ID
            var categoryName = service.Category?.Name ?? "GEN";
            var categoryPrefix = categoryName.Replace(" ", "").Substring(0, Math.Min(3, categoryName.Length)).ToUpper();
            var serviceTypePrefix = service.ServiceType == "Estimation" ? "EST" : "REG";
            var requestNumber = serviceRequest.Id.ToString().Substring(0, 8).ToUpper();
            var formattedRequestId = $"{categoryPrefix}-{serviceTypePrefix}-{requestNumber}";

            // Map to DTO for response
            var serviceRequestDto = new ServiceRequestDto
            {
                Id = serviceRequest.Id,
                RequesterId = serviceRequest.RequesterId,
                CategoryId = serviceRequest.CategoryId,
                Title = serviceRequest.Title,
                Description = serviceRequest.Description,
                Location = serviceRequest.Location,
                PreferredDate = serviceRequest.PreferredDate,
                Status = serviceRequest.Status,
                RequesterName = "Current User", // You can get this from the user service
                CreatedAt = serviceRequest.CreatedAt,
                UpdatedAt = serviceRequest.UpdatedAt,
                FormattedRequestId = formattedRequestId
            };

            return Ok(new ServiceResponse<ServiceRequestDto>
            {
                Success = true,
                Message = "Estimation request created successfully",
                Data = serviceRequestDto
            });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating estimation request");
            return StatusCode(500, new ServiceResponse<ServiceRequestDto>
            {
                Success = false,
                Message = "An error occurred while creating the estimation request"
            });
        }
    }

    [HttpGet]
    public async Task<ActionResult<ServiceResponse<List<ServiceRequestDto>>>> GetEstimationRequests()
    {
        try
        {
            var currentUserId = GetCurrentUserId();
            if (currentUserId == Guid.Empty)
            {
                return Unauthorized(new ServiceResponse<List<ServiceRequestDto>>
                {
                    Success = false,
                    Message = "User not authenticated"
                });
            }

            var requests = await _context.ServiceRequests
                .Include(sr => sr.Requester)
                .Where(sr => sr.RequesterId == currentUserId)
                .OrderByDescending(sr => sr.CreatedAt)
                .ToListAsync();

            var requestDtos = requests.Select(sr => new ServiceRequestDto
            {
                Id = sr.Id,
                RequesterId = sr.RequesterId,
                CategoryId = sr.CategoryId,
                Title = sr.Title,
                Description = sr.Description,
                Location = sr.Location,
                PreferredDate = sr.PreferredDate,
                Status = sr.Status,
                RequesterName = $"{sr.Requester.FirstName} {sr.Requester.LastName}",
                CreatedAt = sr.CreatedAt,
                UpdatedAt = sr.UpdatedAt
            }).ToList();

            return Ok(new ServiceResponse<List<ServiceRequestDto>>
            {
                Success = true,
                Message = "Estimation requests retrieved successfully",
                Data = requestDtos
            });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving estimation requests");
            return StatusCode(500, new ServiceResponse<List<ServiceRequestDto>>
            {
                Success = false,
                Message = "An error occurred while retrieving estimation requests"
            });
        }
    }

    private Guid GetCurrentUserId()
    {
        // This is a placeholder - you'll need to implement this based on your authentication setup
        // For now, we'll return a default user ID for testing
        return Guid.Parse("00000000-0000-0000-0000-000000000001");
    }
} 