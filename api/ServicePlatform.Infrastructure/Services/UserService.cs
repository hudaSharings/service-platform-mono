using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Application.Interfaces;
using ServicePlatform.Domain.Entities;
using ServicePlatform.Infrastructure.Data;

namespace ServicePlatform.Infrastructure.Services;

public class UserService : IUserService
{
    private readonly UserManager<User> _userManager;
    private readonly IMapper _mapper;
    private readonly ApplicationDbContext _context;

    public UserService(UserManager<User> userManager, IMapper mapper, ApplicationDbContext context)
    {
        _userManager = userManager;
        _mapper = mapper;
        _context = context;
    }

    public async Task<ServiceResponse<UserDto>> GetUserByIdAsync(Guid userId)
    {
        try
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());
            if (user == null)
                return ServiceResponse<UserDto>.FailureResult("User not found");

            var userDto = _mapper.Map<UserDto>(user);
            return ServiceResponse<UserDto>.SuccessResult(userDto);
        }
        catch (Exception ex)
        {
            return ServiceResponse<UserDto>.FailureResult($"Error retrieving user: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<List<UserDto>>> GetAllUsersAsync(int page = 1, int pageSize = 10)
    {
        try
        {
            var query = _userManager.Users.AsQueryable();
            var totalCount = await query.CountAsync();
            var users = await query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            var userDtos = _mapper.Map<List<UserDto>>(users);
            return ServiceResponse<List<UserDto>>.SuccessResult(userDtos);
        }
        catch (Exception ex)
        {
            return ServiceResponse<List<UserDto>>.FailureResult($"Error retrieving users: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<UserDto>> UpdateUserStatusAsync(Guid userId, string status)
    {
        try
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());
            if (user == null)
                return ServiceResponse<UserDto>.FailureResult("User not found");

            user.IsActive = status == "Active";
            user.UpdatedAt = DateTime.UtcNow;

            var result = await _userManager.UpdateAsync(user);
            if (!result.Succeeded)
                return ServiceResponse<UserDto>.FailureResult("Failed to update user status");

            var userDto = _mapper.Map<UserDto>(user);
            return ServiceResponse<UserDto>.SuccessResult(userDto, "User status updated successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<UserDto>.FailureResult($"Error updating user status: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<UserDto>> UpdateUserVerificationStatusAsync(Guid userId, string verificationStatus)
    {
        try
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());
            if (user == null)
                return ServiceResponse<UserDto>.FailureResult("User not found");

            user.VerificationStatus = verificationStatus;
            user.UpdatedAt = DateTime.UtcNow;

            var result = await _userManager.UpdateAsync(user);
            if (!result.Succeeded)
                return ServiceResponse<UserDto>.FailureResult("Failed to update user verification status");

            var userDto = _mapper.Map<UserDto>(user);
            return ServiceResponse<UserDto>.SuccessResult(userDto, "User verification status updated successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<UserDto>.FailureResult($"Error updating user verification status: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<bool>> DeleteUserAsync(Guid userId)
    {
        try
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());
            if (user == null)
                return ServiceResponse<bool>.FailureResult("User not found");

            var result = await _userManager.DeleteAsync(user);
            if (!result.Succeeded)
                return ServiceResponse<bool>.FailureResult("Failed to delete user");

            return ServiceResponse<bool>.SuccessResult(true, "User deleted successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<bool>.FailureResult($"Error deleting user: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<List<UserDto>>> GetUsersByTypeAsync(string userType, int page = 1, int pageSize = 10)
    {
        try
        {
            var query = _userManager.Users.Where(u => u.UserType == userType);
            var totalCount = await query.CountAsync();
            var users = await query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            var userDtos = _mapper.Map<List<UserDto>>(users);
            return ServiceResponse<List<UserDto>>.SuccessResult(userDtos);
        }
        catch (Exception ex)
        {
            return ServiceResponse<List<UserDto>>.FailureResult($"Error retrieving users by type: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<int>> GetUserCountAsync(string? userType = null)
    {
        try
        {
            var query = _userManager.Users.AsQueryable();
            if (!string.IsNullOrEmpty(userType))
                query = query.Where(u => u.UserType == userType);

            var count = await query.CountAsync();
            return ServiceResponse<int>.SuccessResult(count);
        }
        catch (Exception ex)
        {
            return ServiceResponse<int>.FailureResult($"Error getting user count: {ex.Message}");
        }
    }
} 