using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Application.Interfaces;
using ServicePlatform.Domain.Entities;
using ServicePlatform.Infrastructure.Mapping;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ServicePlatform.Infrastructure.Services;

public class AuthService : IAuthService
{
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;
    private readonly IJwtService _jwtService;
    private readonly IMapper _mapper;
    private readonly RoleManager<IdentityRole<Guid>> _roleManager;

    public AuthService(
        UserManager<User> userManager,
        SignInManager<User> signInManager,
        IJwtService jwtService,
        IMapper mapper,
        RoleManager<IdentityRole<Guid>> roleManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _jwtService = jwtService;
        _mapper = mapper;
        _roleManager = roleManager;
    }

    public async Task<ServiceResponse<LoginResponse>> LoginAsync(LoginRequest request)
    {
        try
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user == null)
            {
                return ServiceResponse<LoginResponse>.FailureResult("Invalid email or password");
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false);
            if (!result.Succeeded)
            {
                return ServiceResponse<LoginResponse>.FailureResult("Invalid email or password");
            }

            var token = _jwtService.GenerateToken(user);
            var userDto = _mapper.Map<UserDto>(user);

            var loginResponse = new LoginResponse
            {
                Token = token,
                RefreshToken = "", // TODO: Implement refresh token
                ExpiresIn = 3600, // TODO: Get from JWT settings
                User = userDto
            };

            return ServiceResponse<LoginResponse>.SuccessResult(loginResponse, "Login successful");
        }
        catch (Exception ex)
        {
            return ServiceResponse<LoginResponse>.FailureResult($"Login failed: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<UserDto>> RegisterAsync(RegisterRequest request)
    {
        try
        {
            var existingUser = await _userManager.FindByEmailAsync(request.Email);
            if (existingUser != null)
            {
                return ServiceResponse<UserDto>.FailureResult("User with this email already exists");
            }

            var existingUsername = await _userManager.FindByNameAsync(request.UserName);
            if (existingUsername != null)
            {
                return ServiceResponse<UserDto>.FailureResult("Username already taken");
            }

            var user = _mapper.Map<User>(request);
            user.CreatedAt = DateTime.UtcNow;
            user.VerificationStatus = "Pending";
            user.IsActive = true;

            var result = await _userManager.CreateAsync(user, request.Password);
            if (!result.Succeeded)
            {
                return ServiceResponse<UserDto>.FailureResult(string.Join(", ", result.Errors.Select(e => e.Description)));
            }

            // Add role based on user type
            if (await _roleManager.RoleExistsAsync(request.UserType))
            {
                await _userManager.AddToRoleAsync(user, request.UserType);
            }
            else
            {
                // If role doesn't exist, create it first
                await _roleManager.CreateAsync(new IdentityRole<Guid>(request.UserType));
                await _userManager.AddToRoleAsync(user, request.UserType);
            }

            var userDto = _mapper.Map<UserDto>(user);
            return ServiceResponse<UserDto>.SuccessResult(userDto, "Registration successful");
        }
        catch (Exception ex)
        {
            return ServiceResponse<UserDto>.FailureResult($"Registration failed: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<LoginResponse>> RefreshTokenAsync(RefreshTokenRequest request)
    {
        try
        {
            // TODO: Implement refresh token logic
            return ServiceResponse<LoginResponse>.FailureResult("Refresh token not implemented");
        }
        catch (Exception ex)
        {
            return ServiceResponse<LoginResponse>.FailureResult($"Refresh token failed: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<string>> ForgotPasswordAsync(ForgotPasswordRequest request)
    {
        try
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user == null)
            {
                return ServiceResponse<string>.FailureResult("User not found");
            }

            var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            
            // In a real application, you would send this token via email
            // For now, we'll just return success
            return ServiceResponse<string>.SuccessResult("Password reset instructions have been sent to your email");
        }
        catch (Exception ex)
        {
            return ServiceResponse<string>.FailureResult($"Forgot password failed: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<string>> ResetPasswordAsync(ResetPasswordRequest request)
    {
        try
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user == null)
            {
                return ServiceResponse<string>.FailureResult("User not found");
            }

            var result = await _userManager.ResetPasswordAsync(user, request.Token, request.NewPassword);
            if (!result.Succeeded)
            {
                return ServiceResponse<string>.FailureResult(string.Join(", ", result.Errors.Select(e => e.Description)));
            }

            return ServiceResponse<string>.SuccessResult("Password reset successful");
        }
        catch (Exception ex)
        {
            return ServiceResponse<string>.FailureResult($"Reset password failed: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<string>> VerifyEmailAsync(EmailVerificationRequest request)
    {
        try
        {
            // TODO: Implement email verification logic
            return ServiceResponse<string>.FailureResult("Email verification not implemented");
        }
        catch (Exception ex)
        {
            return ServiceResponse<string>.FailureResult($"Email verification failed: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<string>> ChangePasswordAsync(Guid userId, ChangePasswordRequest request)
    {
        try
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());
            if (user == null)
            {
                return ServiceResponse<string>.FailureResult("User not found");
            }

            var result = await _userManager.ChangePasswordAsync(user, request.CurrentPassword, request.NewPassword);
            if (!result.Succeeded)
            {
                return ServiceResponse<string>.FailureResult(string.Join(", ", result.Errors.Select(e => e.Description)));
            }

            return ServiceResponse<string>.SuccessResult("Password changed successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<string>.FailureResult($"Change password failed: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<UserDto>> GetUserProfileAsync(Guid userId)
    {
        try
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());
            if (user == null)
            {
                return ServiceResponse<UserDto>.FailureResult("User not found");
            }

            var userDto = _mapper.Map<UserDto>(user);
            return ServiceResponse<UserDto>.SuccessResult(userDto);
        }
        catch (Exception ex)
        {
            return ServiceResponse<UserDto>.FailureResult($"Get user profile failed: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<UserDto>> UpdateUserProfileAsync(Guid userId, UpdateProfileRequest request)
    {
        try
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());
            if (user == null)
            {
                return ServiceResponse<UserDto>.FailureResult("User not found");
            }

            // Update user properties
            if (!string.IsNullOrEmpty(request.FirstName))
                user.FirstName = request.FirstName;
            if (!string.IsNullOrEmpty(request.LastName))
                user.LastName = request.LastName;
            if (!string.IsNullOrEmpty(request.PhoneNumber))
                user.PhoneNumber = request.PhoneNumber;
            if (!string.IsNullOrEmpty(request.Address))
                user.Address = request.Address;
            if (!string.IsNullOrEmpty(request.City))
                user.City = request.City;
            if (!string.IsNullOrEmpty(request.State))
                user.State = request.State;
            if (!string.IsNullOrEmpty(request.Country))
                user.Country = request.Country;
            if (!string.IsNullOrEmpty(request.PostalCode))
                user.PostalCode = request.PostalCode;

            user.UpdatedAt = DateTime.UtcNow;

            var result = await _userManager.UpdateAsync(user);
            if (!result.Succeeded)
            {
                return ServiceResponse<UserDto>.FailureResult(string.Join(", ", result.Errors.Select(e => e.Description)));
            }

            var userDto = _mapper.Map<UserDto>(user);
            return ServiceResponse<UserDto>.SuccessResult(userDto, "Profile updated successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<UserDto>.FailureResult($"Update profile failed: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<UserDto>> UpdateProfileAsync(Guid userId, UpdateProfileRequest request)
    {
        return await UpdateUserProfileAsync(userId, request);
    }

    public async Task<ServiceResponse<List<UserDocumentDto>>> GetUserDocumentsAsync(Guid userId)
    {
        try
        {
            // TODO: Implement get user documents logic
            return ServiceResponse<List<UserDocumentDto>>.SuccessResult(new List<UserDocumentDto>());
        }
        catch (Exception ex)
        {
            return ServiceResponse<List<UserDocumentDto>>.FailureResult($"Get user documents failed: {ex.Message}");
        }
    }

    public async Task<bool> IsEmailConfirmedAsync(string email)
    {
        try
        {
            var user = await _userManager.FindByEmailAsync(email);
            return user?.EmailConfirmed ?? false;
        }
        catch
        {
            return false;
        }
    }

    public async Task<bool> IsUserVerifiedAsync(Guid userId)
    {
        try
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());
            return user?.IsVerified ?? false;
        }
        catch
        {
            return false;
        }
    }
} 