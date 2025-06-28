using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Application.Interfaces;
using System.Security.Claims;

namespace ServicePlatform.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class RatingsController : ControllerBase
{
    private readonly IRatingService _ratingService;

    public RatingsController(IRatingService ratingService)
    {
        _ratingService = ratingService;
    }

    /// <summary>
    /// Get rating by ID
    /// </summary>
    /// <param name="id">Rating ID</param>
    /// <returns>Rating details</returns>
    [HttpGet("{id}")]
    [ProducesResponseType(typeof(ServiceResponse<RatingDto>), 200)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<RatingDto>>> GetRating(Guid id)
    {
        var result = await _ratingService.GetRatingByIdAsync(id);
        
        if (!result.Success)
            return NotFound(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Get recent ratings
    /// </summary>
    /// <param name="page">Page number</param>
    /// <param name="pageSize">Page size</param>
    /// <returns>Paginated list of recent ratings</returns>
    [HttpGet("recent")]
    [ProducesResponseType(typeof(ServiceResponse<List<RatingDto>>), 200)]
    public async Task<ActionResult<ServiceResponse<List<RatingDto>>>> GetRecentRatings(
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 10)
    {
        var result = await _ratingService.GetRecentRatingsAsync(page, pageSize);
        return Ok(result);
    }

    /// <summary>
    /// Update rating
    /// </summary>
    /// <param name="id">Rating ID</param>
    /// <param name="request">Rating update request</param>
    /// <returns>Updated rating</returns>
    [HttpPut("{id}")]
    [ProducesResponseType(typeof(ServiceResponse<RatingDto>), 200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<RatingDto>>> UpdateRating(Guid id, [FromBody] UpdateRatingRequest request)
    {
        var raterId = GetCurrentUserId();
        var result = await _ratingService.UpdateRatingAsync(id, raterId, request);
        
        if (!result.Success)
            return BadRequest(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Delete rating
    /// </summary>
    /// <param name="id">Rating ID</param>
    /// <returns>Success response</returns>
    [HttpDelete("{id}")]
    [ProducesResponseType(typeof(ServiceResponse<bool>), 200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<bool>>> DeleteRating(Guid id)
    {
        var raterId = GetCurrentUserId();
        var result = await _ratingService.DeleteRatingAsync(id, raterId);
        
        if (!result.Success)
            return BadRequest(result);
        
        return Ok(result);
    }

    private Guid GetCurrentUserId()
    {
        var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        return Guid.Parse(userIdClaim ?? throw new InvalidOperationException("User ID not found in claims"));
    }
} 