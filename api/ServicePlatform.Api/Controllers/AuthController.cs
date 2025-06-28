using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Application.Interfaces;
using System.Security.Claims;

namespace ServicePlatform.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    /// <summary>
    /// User login
    /// </summary>
    /// <param name="request">Login credentials</param>
    /// <returns>Authentication token and user data</returns>
    [HttpPost("login")]
    [ProducesResponseType(typeof(ServiceResponse<LoginResponse>), 200)]
    [ProducesResponseType(typeof(ServiceResponse<LoginResponse>), 400)]
    public async Task<ActionResult<ServiceResponse<LoginResponse>>> Login([FromBody] LoginRequest request)
    {
        var result = await _authService.LoginAsync(request);
        
        if (!result.Success)
            return BadRequest(result);
        
        return Ok(result);
    }

    /// <summary>
    /// User registration
    /// </summary>
    /// <param name="request">Registration data</param>
    /// <returns>Authentication token and user data</returns>
    [HttpPost("register")]
    [ProducesResponseType(typeof(ServiceResponse<UserDto>), 200)]
    [ProducesResponseType(typeof(ServiceResponse<UserDto>), 400)]
    public async Task<ActionResult<ServiceResponse<UserDto>>> Register([FromBody] RegisterRequest request)
    {
        var result = await _authService.RegisterAsync(request);
        
        if (!result.Success)
            return BadRequest(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Forgot password request
    /// </summary>
    /// <param name="request">Email address</param>
    /// <returns>Success message</returns>
    [HttpPost("forgot-password")]
    [ProducesResponseType(typeof(ServiceResponse<string>), 200)]
    [ProducesResponseType(typeof(ServiceResponse<string>), 400)]
    public async Task<ActionResult<ServiceResponse<string>>> ForgotPassword([FromBody] ForgotPasswordRequest request)
    {
        var result = await _authService.ForgotPasswordAsync(request);
        
        if (!result.Success)
            return BadRequest(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Reset password with token
    /// </summary>
    /// <param name="request">Reset password data</param>
    /// <returns>Success message</returns>
    [HttpPost("reset-password")]
    [ProducesResponseType(typeof(ServiceResponse<string>), 200)]
    [ProducesResponseType(typeof(ServiceResponse<string>), 400)]
    public async Task<ActionResult<ServiceResponse<string>>> ResetPassword([FromBody] ResetPasswordRequest request)
    {
        var result = await _authService.ResetPasswordAsync(request);
        
        if (!result.Success)
            return BadRequest(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Change password (authenticated users only)
    /// </summary>
    /// <param name="request">Password change data</param>
    /// <returns>Success message</returns>
    [HttpPost("change-password")]
    [Authorize]
    [ProducesResponseType(typeof(ServiceResponse<string>), 200)]
    [ProducesResponseType(typeof(ServiceResponse<string>), 400)]
    public async Task<ActionResult<ServiceResponse<string>>> ChangePassword([FromBody] ChangePasswordRequest request)
    {
        var userIdStr = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(userIdStr) || !Guid.TryParse(userIdStr, out var userId))
            return Unauthorized();

        var result = await _authService.ChangePasswordAsync(userId, request);
        
        if (!result.Success)
            return BadRequest(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Get user profile (authenticated users only)
    /// </summary>
    /// <returns>User profile data</returns>
    [HttpGet("profile")]
    [Authorize]
    [ProducesResponseType(typeof(ServiceResponse<UserDto>), 200)]
    [ProducesResponseType(typeof(ServiceResponse<UserDto>), 404)]
    public async Task<ActionResult<ServiceResponse<UserDto>>> GetProfile()
    {
        var userIdStr = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(userIdStr) || !Guid.TryParse(userIdStr, out var userId))
            return Unauthorized();

        var result = await _authService.GetUserProfileAsync(userId);
        
        if (!result.Success)
            return NotFound(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Update user profile (authenticated users only)
    /// </summary>
    /// <param name="request">Profile update data</param>
    /// <returns>Updated user profile</returns>
    [HttpPut("profile")]
    [Authorize]
    [ProducesResponseType(typeof(ServiceResponse<UserDto>), 200)]
    [ProducesResponseType(typeof(ServiceResponse<UserDto>), 400)]
    public async Task<ActionResult<ServiceResponse<UserDto>>> UpdateProfile([FromBody] UpdateProfileRequest request)
    {
        var userIdStr = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(userIdStr) || !Guid.TryParse(userIdStr, out var userId))
            return Unauthorized();

        var result = await _authService.UpdateProfileAsync(userId, request);
        
        if (!result.Success)
            return BadRequest(result);
        
        return Ok(result);
    }
} 