using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Application.Interfaces;
using System.Security.Claims;

namespace ServicePlatform.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class UsersController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IRatingService _ratingService;

    public UsersController(IUserService userService, IRatingService ratingService)
    {
        _userService = userService;
        _ratingService = ratingService;
    }

    /// <summary>
    /// Get current user profile
    /// </summary>
    /// <returns>User profile</returns>
    [HttpGet("profile")]
    [ProducesResponseType(typeof(ServiceResponse<UserDto>), 200)]
    public async Task<ActionResult<ServiceResponse<UserDto>>> GetProfile()
    {
        var userId = GetCurrentUserId();
        var result = await _userService.GetUserByIdAsync(userId);
        return Ok(result);
    }

    /// <summary>
    /// Get user by ID
    /// </summary>
    /// <param name="id">User ID</param>
    /// <returns>User details</returns>
    [HttpGet("{id}")]
    [ProducesResponseType(typeof(ServiceResponse<UserDto>), 200)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<UserDto>>> GetUser(Guid id)
    {
        var result = await _userService.GetUserByIdAsync(id);
        
        if (!result.Success)
            return NotFound(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Get user ratings
    /// </summary>
    /// <param name="userId">User ID</param>
    /// <param name="page">Page number</param>
    /// <param name="pageSize">Page size</param>
    /// <returns>Paginated list of ratings</returns>
    [HttpGet("{userId}/ratings")]
    [ProducesResponseType(typeof(ServiceResponse<List<RatingDto>>), 200)]
    public async Task<ActionResult<ServiceResponse<List<RatingDto>>>> GetUserRatings(
        Guid userId,
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 10)
    {
        var result = await _ratingService.GetRatingsByUserAsync(userId, page, pageSize);
        return Ok(result);
    }

    /// <summary>
    /// Get user average rating
    /// </summary>
    /// <param name="userId">User ID</param>
    /// <returns>Average rating</returns>
    [HttpGet("{userId}/average-rating")]
    [ProducesResponseType(typeof(ServiceResponse<decimal>), 200)]
    public async Task<ActionResult<ServiceResponse<decimal>>> GetUserAverageRating(Guid userId)
    {
        var result = await _ratingService.GetAverageRatingAsync(userId);
        return Ok(result);
    }

    /// <summary>
    /// Get user rating count
    /// </summary>
    /// <param name="userId">User ID</param>
    /// <returns>Rating count</returns>
    [HttpGet("{userId}/rating-count")]
    [ProducesResponseType(typeof(ServiceResponse<int>), 200)]
    public async Task<ActionResult<ServiceResponse<int>>> GetUserRatingCount(Guid userId)
    {
        var result = await _ratingService.GetRatingCountAsync(userId);
        return Ok(result);
    }

    private Guid GetCurrentUserId()
    {
        var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        return Guid.Parse(userIdClaim ?? throw new InvalidOperationException("User ID not found in claims"));
    }
} 