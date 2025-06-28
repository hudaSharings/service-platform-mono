using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Application.Interfaces;
using ServicePlatform.Domain.Entities;
using ServicePlatform.Infrastructure.Data;
using System.Security.Claims;

namespace ServicePlatform.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize(Roles = "Admin")]
public class AdminController : ControllerBase
{
    private readonly UserManager<User> _userManager;
    private readonly ApplicationDbContext _context;
    private readonly IServiceService _serviceService;
    private readonly IContractService _contractService;

    public AdminController(
        UserManager<User> userManager,
        ApplicationDbContext context,
        IServiceService serviceService,
        IContractService contractService)
    {
        _userManager = userManager;
        _context = context;
        _serviceService = serviceService;
        _contractService = contractService;
    }

    /// <summary>
    /// Get dashboard statistics
    /// </summary>
    /// <returns>Dashboard statistics</returns>
    [HttpGet("statistics")]
    [ProducesResponseType(typeof(ServiceResponse<DashboardStatsDto>), 200)]
    public async Task<ActionResult<ServiceResponse<DashboardStatsDto>>> GetStatistics()
    {
        try
        {
            var totalUsers = await _userManager.Users.CountAsync();
            var totalServices = await _context.Services.CountAsync();
            var totalContracts = await _context.Contracts.CountAsync();
            var totalRevenue = await _context.Payments
                .Where(p => p.Status == "Completed")
                .SumAsync(p => p.Amount);
            var pendingVerifications = await _userManager.Users
                .CountAsync(u => u.VerificationStatus == "Pending");
            var activeContracts = await _context.Contracts
                .CountAsync(c => c.Status == "Active");
            var averageRatingDouble = await _context.Ratings.AverageAsync(r => r.RatingValue);
            var averageRating = (decimal)averageRatingDouble;

            var recentActivity = await _context.AuditLogs
                .OrderByDescending(a => a.CreatedAt)
                .Take(10)
                .Select(a => new ActivityDto
                {
                    Id = a.Id,
                    Type = a.Action,
                    Message = $"{a.Action} on {a.EntityName}",
                    Timestamp = a.CreatedAt.ToString("yyyy-MM-dd HH:mm:ss")
                })
                .ToListAsync();

            var stats = new DashboardStatsDto
            {
                TotalUsers = totalUsers,
                TotalServices = totalServices,
                TotalContracts = totalContracts,
                TotalRevenue = totalRevenue,
                PendingVerifications = pendingVerifications,
                ActiveContracts = activeContracts,
                AverageRating = averageRating,
                RecentActivity = recentActivity
            };

            return Ok(new ServiceResponse<DashboardStatsDto>
            {
                Success = true,
                Data = stats,
                Message = "Dashboard statistics retrieved successfully"
            });
        }
        catch (Exception ex)
        {
            return Ok(new ServiceResponse<DashboardStatsDto>
            {
                Success = false,
                Message = $"Error retrieving dashboard statistics: {ex.Message}"
            });
        }
    }

    /// <summary>
    /// Get all users with filtering
    /// </summary>
    /// <param name="search">Search term</param>
    /// <param name="userType">User type filter</param>
    /// <param name="status">Status filter</param>
    /// <param name="page">Page number</param>
    /// <param name="pageSize">Page size</param>
    /// <returns>Paginated list of users</returns>
    [HttpGet("users")]
    [ProducesResponseType(typeof(ServiceResponse<PaginatedResponseDto<UserDto>>), 200)]
    public async Task<ActionResult<ServiceResponse<PaginatedResponseDto<UserDto>>>> GetUsers(
        [FromQuery] string? search = null,
        [FromQuery] string? userType = null,
        [FromQuery] string? status = null,
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 50)
    {
        try
        {
            var query = _userManager.Users.AsQueryable();

            if (!string.IsNullOrEmpty(search))
            {
                query = query.Where(u => 
                    u.FirstName.Contains(search) || 
                    u.LastName.Contains(search) || 
                    u.Email.Contains(search) || 
                    u.UserName.Contains(search));
            }

            if (!string.IsNullOrEmpty(userType))
            {
                query = query.Where(u => u.UserType == userType);
            }

            if (!string.IsNullOrEmpty(status))
            {
                if (status == "Active")
                    query = query.Where(u => u.IsActive);
                else if (status == "Inactive")
                    query = query.Where(u => !u.IsActive);
            }

            var totalCount = await query.CountAsync();
            var users = await query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            var averageRatingDouble = await _context.Ratings.AverageAsync(r => r.RatingValue);
            var averageRating = (decimal)averageRatingDouble;

            var userDtos = users.Select(u => new UserDto
            {
                Id = u.Id,
                UserName = u.UserName,
                Email = u.Email,
                FirstName = u.FirstName,
                LastName = u.LastName,
                PhoneNumber = u.PhoneNumber,
                UserType = u.UserType,
                VerificationStatus = u.VerificationStatus,
                IsActive = u.IsActive,
                CreatedAt = u.CreatedAt
            }).ToList();

            var result = new PaginatedResponseDto<UserDto>
            {
                Data = userDtos,
                TotalCount = totalCount,
                Page = page,
                PageSize = pageSize,
                TotalPages = (int)Math.Ceiling((double)totalCount / pageSize)
            };

            return Ok(new ServiceResponse<PaginatedResponseDto<UserDto>>
            {
                Success = true,
                Data = result,
                Message = "Users retrieved successfully"
            });
        }
        catch (Exception ex)
        {
            return Ok(new ServiceResponse<PaginatedResponseDto<UserDto>>
            {
                Success = false,
                Message = $"Error retrieving users: {ex.Message}"
            });
        }
    }

    /// <summary>
    /// Update user status
    /// </summary>
    /// <param name="userId">User ID</param>
    /// <param name="status">New status</param>
    /// <returns>Success response</returns>
    [HttpPut("users/{userId}/status")]
    [ProducesResponseType(typeof(ServiceResponse<bool>), 200)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<bool>>> UpdateUserStatus(string userId, [FromBody] string status)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null)
            return NotFound(new ServiceResponse<bool>
            {
                Success = false,
                Message = "User not found"
            });

        user.IsActive = status == "Active";
        user.UpdatedAt = DateTime.UtcNow;

        var result = await _userManager.UpdateAsync(user);
        if (!result.Succeeded)
            return BadRequest(new ServiceResponse<bool>
            {
                Success = false,
                Message = "Failed to update user status"
            });

        return Ok(new ServiceResponse<bool>
        {
            Success = true,
            Data = true,
            Message = "User status updated successfully"
        });
    }

    /// <summary>
    /// Update user verification status
    /// </summary>
    /// <param name="userId">User ID</param>
    /// <param name="verificationStatus">New verification status</param>
    /// <returns>Success response</returns>
    [HttpPut("users/{userId}/verification")]
    [ProducesResponseType(typeof(ServiceResponse<bool>), 200)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<bool>>> UpdateUserVerification(string userId, [FromBody] string verificationStatus)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null)
            return NotFound(new ServiceResponse<bool>
            {
                Success = false,
                Message = "User not found"
            });

        user.VerificationStatus = verificationStatus;
        user.UpdatedAt = DateTime.UtcNow;

        var result = await _userManager.UpdateAsync(user);
        if (!result.Succeeded)
            return BadRequest(new ServiceResponse<bool>
            {
                Success = false,
                Message = "Failed to update user verification status"
            });

        return Ok(new ServiceResponse<bool>
        {
            Success = true,
            Data = true,
            Message = "User verification status updated successfully"
        });
    }

    /// <summary>
    /// Get admin services with filtering
    /// </summary>
    /// <param name="search">Search term</param>
    /// <param name="categoryId">Category filter</param>
    /// <param name="status">Status filter</param>
    /// <param name="page">Page number</param>
    /// <param name="pageSize">Page size</param>
    /// <returns>Paginated list of services</returns>
    [HttpGet("services")]
    [ProducesResponseType(typeof(ServiceResponse<PaginatedResponseDto<ServiceDto>>), 200)]
    public async Task<ActionResult<ServiceResponse<PaginatedResponseDto<ServiceDto>>>> GetAdminServices(
        [FromQuery] string? search = null,
        [FromQuery] Guid? categoryId = null,
        [FromQuery] string? status = null,
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 50)
    {
        bool? isActive = null;
        if (status == "Active")
            isActive = true;
        else if (status == "Inactive")
            isActive = false;

        var result = await _serviceService.GetServicesAsync(search, categoryId, null, null, null, isActive, page, pageSize);
        return Ok(result);
    }

    /// <summary>
    /// Update service status
    /// </summary>
    /// <param name="serviceId">Service ID</param>
    /// <param name="isActive">Active status</param>
    /// <returns>Updated service</returns>
    [HttpPut("services/{serviceId}/status")]
    [ProducesResponseType(typeof(ServiceResponse<ServiceDto>), 200)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<ServiceDto>>> UpdateServiceStatus(Guid serviceId, [FromBody] bool isActive)
    {
        var result = await _serviceService.UpdateServiceStatusAsync(serviceId, isActive);
        
        if (!result.Success)
            return NotFound(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Update service verification
    /// </summary>
    /// <param name="serviceId">Service ID</param>
    /// <param name="isVerified">Verification status</param>
    /// <returns>Updated service</returns>
    [HttpPut("services/{serviceId}/verification")]
    [ProducesResponseType(typeof(ServiceResponse<ServiceDto>), 200)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<ServiceDto>>> UpdateServiceVerification(Guid serviceId, [FromBody] bool isVerified)
    {
        var result = await _serviceService.UpdateServiceVerificationAsync(serviceId, isVerified);
        
        if (!result.Success)
            return NotFound(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Get admin categories
    /// </summary>
    /// <param name="isActive">Active status filter</param>
    /// <returns>List of categories</returns>
    [HttpGet("categories")]
    [ProducesResponseType(typeof(ServiceResponse<List<ServiceCategoryDto>>), 200)]
    public async Task<ActionResult<ServiceResponse<List<ServiceCategoryDto>>>> GetAdminCategories([FromQuery] bool? isActive = null)
    {
        var result = await _serviceService.GetCategoriesAsync(isActive);
        return Ok(result);
    }

    /// <summary>
    /// Update category status
    /// </summary>
    /// <param name="categoryId">Category ID</param>
    /// <param name="isActive">Active status</param>
    /// <returns>Updated category</returns>
    [HttpPut("categories/{categoryId}/status")]
    [ProducesResponseType(typeof(ServiceResponse<ServiceCategoryDto>), 200)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<ServiceCategoryDto>>> UpdateCategoryStatus(Guid categoryId, [FromBody] bool isActive)
    {
        var result = await _serviceService.UpdateCategoryStatusAsync(categoryId, isActive);
        
        if (!result.Success)
            return NotFound(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Get admin contracts
    /// </summary>
    /// <param name="search">Search term</param>
    /// <param name="status">Status filter</param>
    /// <param name="contractType">Contract type filter</param>
    /// <param name="page">Page number</param>
    /// <param name="pageSize">Page size</param>
    /// <returns>Paginated list of contracts</returns>
    [HttpGet("contracts")]
    [ProducesResponseType(typeof(ServiceResponse<PaginatedResponseDto<ContractDto>>), 200)]
    public async Task<ActionResult<ServiceResponse<PaginatedResponseDto<ContractDto>>>> GetAdminContracts(
        [FromQuery] string? search = null,
        [FromQuery] string? status = null,
        [FromQuery] string? contractType = null,
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 50)
    {
        var result = await _contractService.GetContractsAsync(search, status, contractType, page, pageSize);
        return Ok(result);
    }
}

public class DashboardStatsDto
{
    public int TotalUsers { get; set; }
    public int TotalServices { get; set; }
    public int TotalContracts { get; set; }
    public decimal TotalRevenue { get; set; }
    public int PendingVerifications { get; set; }
    public int ActiveContracts { get; set; }
    public decimal AverageRating { get; set; }
    public List<ActivityDto> RecentActivity { get; set; } = new();
}

public class ActivityDto
{
    public Guid Id { get; set; }
    public string Type { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
    public string Timestamp { get; set; } = string.Empty;
} 