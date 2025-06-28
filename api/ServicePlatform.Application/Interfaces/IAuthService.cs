using ServicePlatform.Application.DTOs;

namespace ServicePlatform.Application.Interfaces;

public interface IAuthService
{
    Task<ServiceResponse<LoginResponse>> LoginAsync(LoginRequest request);
    Task<ServiceResponse<UserDto>> RegisterAsync(RegisterRequest request);
    Task<ServiceResponse<LoginResponse>> RefreshTokenAsync(RefreshTokenRequest request);
    Task<ServiceResponse<string>> ForgotPasswordAsync(ForgotPasswordRequest request);
    Task<ServiceResponse<string>> ResetPasswordAsync(ResetPasswordRequest request);
    Task<ServiceResponse<string>> VerifyEmailAsync(EmailVerificationRequest request);
    Task<ServiceResponse<string>> ChangePasswordAsync(Guid userId, ChangePasswordRequest request);
    Task<ServiceResponse<UserDto>> GetUserProfileAsync(Guid userId);
    Task<ServiceResponse<UserDto>> UpdateUserProfileAsync(Guid userId, UpdateProfileRequest request);
    Task<ServiceResponse<UserDto>> UpdateProfileAsync(Guid userId, UpdateProfileRequest request);
    Task<ServiceResponse<List<UserDocumentDto>>> GetUserDocumentsAsync(Guid userId);
    Task<bool> IsEmailConfirmedAsync(string email);
    Task<bool> IsUserVerifiedAsync(Guid userId);
}

public interface IUserService
{
    Task<ServiceResponse<UserDto>> GetUserByIdAsync(Guid userId);
    Task<ServiceResponse<List<UserDto>>> GetAllUsersAsync(int page = 1, int pageSize = 10);
    Task<ServiceResponse<UserDto>> UpdateUserStatusAsync(Guid userId, string status);
    Task<ServiceResponse<UserDto>> UpdateUserVerificationStatusAsync(Guid userId, string verificationStatus);
    Task<ServiceResponse<bool>> DeleteUserAsync(Guid userId);
    Task<ServiceResponse<List<UserDto>>> GetUsersByTypeAsync(string userType, int page = 1, int pageSize = 10);
    Task<ServiceResponse<int>> GetUserCountAsync(string? userType = null);
}

public interface IUserDocumentService
{
    Task<ServiceResponse<UserDocumentDto>> GetDocumentByIdAsync(Guid documentId);
    Task<ServiceResponse<UserDocumentDto>> UpdateDocumentStatusAsync(Guid documentId, string status, string? rejectionReason = null);
    Task<ServiceResponse<List<UserDocumentDto>>> GetPendingDocumentsAsync(int page = 1, int pageSize = 10);
    Task<ServiceResponse<bool>> DeleteDocumentAsync(Guid documentId);
} 