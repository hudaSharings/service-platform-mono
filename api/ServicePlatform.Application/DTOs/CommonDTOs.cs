using System.ComponentModel.DataAnnotations;

namespace ServicePlatform.Application.DTOs;

// Common response DTOs
public class ServiceResponse<T>
{
    public bool Success { get; set; }
    public string Message { get; set; } = string.Empty;
    public T? Data { get; set; }

    public static ServiceResponse<T> SuccessResult(T data, string message = "Operation completed successfully")
    {
        return new ServiceResponse<T>
        {
            Success = true,
            Data = data,
            Message = message
        };
    }

    public static ServiceResponse<T> FailureResult(string message)
    {
        return new ServiceResponse<T>
        {
            Success = false,
            Message = message
        };
    }
}

public class AuthResponseDto
{
    public bool Success { get; set; }
    public string Message { get; set; } = string.Empty;
    public AuthDataDto? Data { get; set; }
}

public class AuthDataDto
{
    public string Token { get; set; } = string.Empty;
    public UserDto User { get; set; } = new();
}

public class PaginatedResponseDto<T>
{
    public List<T> Data { get; set; } = new();
    public int TotalCount { get; set; }
    public int Page { get; set; }
    public int PageSize { get; set; }
    public int TotalPages { get; set; }
}

// Main DTOs
public class UserDto
{
    public Guid Id { get; set; }
    public string UserName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string? ProfilePictureUrl { get; set; }
    public DateTime? DateOfBirth { get; set; }
    public string? Gender { get; set; }
    public string? Address { get; set; }
    public string? City { get; set; }
    public string? State { get; set; }
    public string? Country { get; set; }
    public string? PostalCode { get; set; }
    public string UserType { get; set; } = string.Empty;
    public string VerificationStatus { get; set; } = string.Empty;
    public bool DocumentsVerified { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public string FullName => $"{FirstName} {LastName}";
}

public class ServiceDto
{
    public Guid Id { get; set; }
    public Guid ProviderId { get; set; }
    public Guid CategoryId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public decimal BasePrice { get; set; }
    public string Currency { get; set; } = string.Empty;
    public string PricingType { get; set; } = string.Empty;
    public string ServiceType { get; set; } = "Regular";
    public string? Location { get; set; }
    public string? ServiceImages { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public string ProviderName { get; set; } = string.Empty;
    public string CategoryName { get; set; } = string.Empty;
}

public class ContractDto
{
    public Guid Id { get; set; }
    public string ContractNumber { get; set; } = string.Empty;
    public Guid RequesterId { get; set; }
    public Guid ProviderId { get; set; }
    public Guid ServiceId { get; set; }
    public string ContractType { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public decimal TotalAmount { get; set; }
    public string Currency { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? Terms { get; set; }
    public string? CancellationReason { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public string ProviderName { get; set; } = string.Empty;
    public string RequesterName { get; set; } = string.Empty;
    public string ServiceTitle { get; set; } = string.Empty;
}

public class RatingDto
{
    public Guid Id { get; set; }
    public Guid ContractId { get; set; }
    public Guid RaterId { get; set; }
    public Guid RatedUserId { get; set; }
    public decimal RatingValue { get; set; }
    public string? Comment { get; set; }
    public bool IsAnonymous { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public string UserName { get; set; } = string.Empty;
}

public class PaymentDto
{
    public Guid Id { get; set; }
    public Guid ContractId { get; set; }
    public string PaymentMethod { get; set; } = string.Empty;
    public string? TransactionId { get; set; }
    public string Status { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public string Currency { get; set; } = string.Empty;
    public string? Description { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class ContractSessionDto
{
    public Guid Id { get; set; }
    public Guid ContractId { get; set; }
    public DateTime SessionDate { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime? EndTime { get; set; }
    public decimal? HoursWorked { get; set; }
    public string Status { get; set; } = string.Empty;
    public string? Notes { get; set; }
    public decimal? Amount { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class ServiceCategoryDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? Icon { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class AvailabilityDto
{
    public Guid Id { get; set; }
    public Guid ServiceId { get; set; }
    public string? DayOfWeek { get; set; }
    public TimeSpan? StartTime { get; set; }
    public TimeSpan? EndTime { get; set; }
    public string? TimeSlot { get; set; }
    public bool IsAvailable { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class ServicePricingDto
{
    public Guid Id { get; set; }
    public Guid ServiceId { get; set; }
    public string PricingType { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public string Currency { get; set; } = string.Empty;
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class UserDocumentDto
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string DocumentType { get; set; } = string.Empty;
    public string FileName { get; set; } = string.Empty;
    public string FilePath { get; set; } = string.Empty;
    public long FileSize { get; set; }
    public string? ContentType { get; set; }
    public string Status { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

// Contract-related DTOs
public class ContractSearchRequest
{
    public string? Status { get; set; }
    public string? ContractType { get; set; }
    public int Page { get; set; } = 1;
    public int PageSize { get; set; } = 10;
}

public class ContractSearchResponse
{
    public List<ContractDto> Contracts { get; set; } = new();
    public int TotalCount { get; set; }
    public int Page { get; set; }
    public int PageSize { get; set; }
    public int TotalPages { get; set; }
}

public class CreateContractRequest
{
    public Guid ProviderId { get; set; }
    public Guid ServiceId { get; set; }
    public string ContractType { get; set; } = string.Empty;
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public decimal TotalAmount { get; set; }
}

public class UpdateContractStatusRequest
{
    public string Status { get; set; } = string.Empty;
}

public class ResetPasswordRequest
{
    public string Email { get; set; } = string.Empty;
    public string Token { get; set; } = string.Empty;
    public string NewPassword { get; set; } = string.Empty;
}

// Auth Request DTOs
public class LoginRequest
{
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}

public class RegisterRequest
{
    public string UserName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string UserType { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
}

public class LoginResponse
{
    public string Token { get; set; } = string.Empty;
    public string RefreshToken { get; set; } = string.Empty;
    public UserDto User { get; set; } = new();
    public int ExpiresIn { get; set; } = 3600; // 1 hour in seconds
}

public class RefreshTokenRequest
{
    public string RefreshToken { get; set; } = string.Empty;
}

public class ForgotPasswordRequest
{
    public string Email { get; set; } = string.Empty;
}

public class EmailVerificationRequest
{
    public string Email { get; set; } = string.Empty;
    public string Token { get; set; } = string.Empty;
}

public class ChangePasswordRequest
{
    public string CurrentPassword { get; set; } = string.Empty;
    public string NewPassword { get; set; } = string.Empty;
}

public class UpdateProfileRequest
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? PhoneNumber { get; set; }
    public string? Address { get; set; }
    public string? City { get; set; }
    public string? State { get; set; }
    public string? Country { get; set; }
    public string? PostalCode { get; set; }
}

// Auth DTOs (matching the service expectations)
public class LoginDto
{
    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;
}

public class RegisterDto
{
    [Required]
    [MaxLength(50)]
    public string UserName { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    [MaxLength(256)]
    public string Email { get; set; } = string.Empty;

    [Required]
    [MinLength(8)]
    [MaxLength(100)]
    public string Password { get; set; } = string.Empty;

    [Required]
    [MaxLength(20)]
    public string PhoneNumber { get; set; } = string.Empty;

    [Required]
    [MaxLength(20)]
    public string UserType { get; set; } = string.Empty;

    [Required]
    [MaxLength(50)]
    public string FirstName { get; set; } = string.Empty;

    [Required]
    [MaxLength(50)]
    public string LastName { get; set; } = string.Empty;
}

public class ForgotPasswordDto
{
    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;
}

public class ResetPasswordDto
{
    [Required]
    public string Email { get; set; } = string.Empty;

    [Required]
    public string Token { get; set; } = string.Empty;

    [Required]
    [MinLength(8)]
    public string NewPassword { get; set; } = string.Empty;
}

public class ChangePasswordDto
{
    [Required]
    public string CurrentPassword { get; set; } = string.Empty;

    [Required]
    [MinLength(8)]
    public string NewPassword { get; set; } = string.Empty;
}

public class UpdateProfileDto
{
    [MaxLength(50)]
    public string? FirstName { get; set; }

    [MaxLength(50)]
    public string? LastName { get; set; }

    [MaxLength(20)]
    public string? PhoneNumber { get; set; }

    [MaxLength(500)]
    public string? Address { get; set; }

    [MaxLength(100)]
    public string? City { get; set; }

    [MaxLength(100)]
    public string? State { get; set; }

    [MaxLength(100)]
    public string? Country { get; set; }

    [MaxLength(20)]
    public string? PostalCode { get; set; }
}

// Service DTOs (matching the service expectations)
public class CreateServiceDto
{
    [Required]
    public Guid ProviderId { get; set; }

    [Required]
    public Guid CategoryId { get; set; }

    [Required]
    [MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [MaxLength(2000)]
    public string Description { get; set; } = string.Empty;

    [Required]
    [Range(0, double.MaxValue)]
    public decimal BasePrice { get; set; }

    [Required]
    [MaxLength(3)]
    public string Currency { get; set; } = "USD";

    [Required]
    [MaxLength(20)]
    public string PricingType { get; set; } = string.Empty;

    [MaxLength(200)]
    public string? Location { get; set; }
}

public class UpdateServiceDto
{
    [MaxLength(200)]
    public string? Title { get; set; }

    [MaxLength(2000)]
    public string? Description { get; set; }

    [Range(0, double.MaxValue)]
    public decimal? BasePrice { get; set; }

    [MaxLength(3)]
    public string? Currency { get; set; }

    [MaxLength(20)]
    public string? PricingType { get; set; }

    [MaxLength(200)]
    public string? Location { get; set; }
}

public class CreateServiceCategoryDto
{
    [Required]
    [MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [MaxLength(500)]
    public string? Description { get; set; }

    [MaxLength(100)]
    public string? Icon { get; set; }
}

public class UpdateServiceCategoryDto
{
    [MaxLength(100)]
    public string? Name { get; set; }

    [MaxLength(500)]
    public string? Description { get; set; }

    [MaxLength(100)]
    public string? Icon { get; set; }
}

// Contract DTOs
public class CreateContractDto
{
    [Required]
    public Guid RequesterId { get; set; }

    [Required]
    public Guid ProviderId { get; set; }

    [Required]
    public Guid ServiceId { get; set; }

    [Required]
    [MaxLength(20)]
    public string ContractType { get; set; } = string.Empty;

    public DateTime? StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    [Required]
    [Range(0, double.MaxValue)]
    public decimal TotalAmount { get; set; }

    [Required]
    [MaxLength(3)]
    public string Currency { get; set; } = "USD";

    [MaxLength(1000)]
    public string? Description { get; set; }

    [MaxLength(2000)]
    public string? Terms { get; set; }
}

public class UpdateContractDto
{
    [MaxLength(20)]
    public string? Status { get; set; }

    public DateTime? StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    [Range(0, double.MaxValue)]
    public decimal? TotalAmount { get; set; }

    [MaxLength(3)]
    public string? Currency { get; set; }

    [MaxLength(1000)]
    public string? Description { get; set; }

    [MaxLength(2000)]
    public string? Terms { get; set; }
}

// Payment DTOs
public class CreatePaymentDto
{
    [Required]
    public Guid ContractId { get; set; }

    [Required]
    [MaxLength(50)]
    public string PaymentMethod { get; set; } = string.Empty;

    [Required]
    [Range(0, double.MaxValue)]
    public decimal Amount { get; set; }

    [Required]
    [MaxLength(3)]
    public string Currency { get; set; } = "USD";
}

// Rating DTOs
public class CreateRatingDto
{
    [Required]
    public Guid ContractId { get; set; }

    [Required]
    public Guid RaterId { get; set; }

    [Required]
    [Range(1, 5)]
    public int RatingValue { get; set; }

    [Required]
    [MaxLength(1000)]
    public string Comment { get; set; } = string.Empty;

    public bool IsAnonymous { get; set; } = false;
}

// Notification DTOs
public class CreateNotificationDto
{
    [Required]
    public Guid UserId { get; set; }

    [Required]
    [MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [MaxLength(1000)]
    public string Message { get; set; } = string.Empty;

    [Required]
    [MaxLength(50)]
    public string Type { get; set; } = string.Empty;

    [Required]
    [MaxLength(20)]
    public string Channel { get; set; } = string.Empty;
}

// Service Request DTOs
public class CreateServiceRequestDto
{
    [Required]
    public Guid RequesterId { get; set; }

    [Required]
    public Guid CategoryId { get; set; }

    [Required]
    [MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [MaxLength(2000)]
    public string Description { get; set; } = string.Empty;

    [Range(0, double.MaxValue)]
    public decimal? Budget { get; set; }

    [Required]
    [MaxLength(3)]
    public string Currency { get; set; } = "USD";

    [MaxLength(200)]
    public string? Location { get; set; }
}

public class UpdateServiceRequestDto
{
    [MaxLength(200)]
    public string? Title { get; set; }

    [MaxLength(2000)]
    public string? Description { get; set; }

    [Range(0, double.MaxValue)]
    public decimal? Budget { get; set; }

    [MaxLength(3)]
    public string? Currency { get; set; }

    [MaxLength(200)]
    public string? Location { get; set; }
}

public class CreateServiceRequestResponseDto
{
    [Required]
    public Guid RequestId { get; set; }

    [Required]
    public Guid ProviderId { get; set; }

    [Required]
    [Range(0, double.MaxValue)]
    public decimal ProposedPrice { get; set; }

    [Required]
    [MaxLength(3)]
    public string Currency { get; set; } = "USD";

    [MaxLength(1000)]
    public string? Message { get; set; }
}

// Availability DTOs
public class UpdateAvailabilityDto
{
    public TimeSpan? StartTime { get; set; }

    public TimeSpan? EndTime { get; set; }

    public bool? IsAvailable { get; set; }
}

// Service Pricing DTOs
public class CreateServicePricingDto
{
    [Required]
    public Guid ServiceId { get; set; }

    [Required]
    [MaxLength(20)]
    public string PricingType { get; set; } = string.Empty;

    [Required]
    [Range(0, double.MaxValue)]
    public decimal Price { get; set; }

    [Required]
    [MaxLength(3)]
    public string Currency { get; set; } = "USD";
}

public class UpdateServicePricingDto
{
    [MaxLength(20)]
    public string? PricingType { get; set; }

    [Range(0, double.MaxValue)]
    public decimal? Price { get; set; }

    [MaxLength(3)]
    public string? Currency { get; set; }
}

// Contract Session DTOs
public class CreateContractSessionDto
{
    [Required]
    public Guid ContractId { get; set; }

    [Required]
    public DateTime SessionDate { get; set; }

    [Required]
    public DateTime StartTime { get; set; }

    public DateTime? EndTime { get; set; }

    [Range(0, 24)]
    public decimal? HoursWorked { get; set; }

    [MaxLength(500)]
    public string? Notes { get; set; }
}

public class UpdateContractSessionDto
{
    public DateTime? SessionDate { get; set; }

    public DateTime? StartTime { get; set; }

    public DateTime? EndTime { get; set; }

    [Range(0, 24)]
    public decimal? HoursWorked { get; set; }

    [MaxLength(20)]
    public string? Status { get; set; }

    [MaxLength(500)]
    public string? Notes { get; set; }
}

// User Document DTOs
public class CreateUserDocumentDto
{
    [Required]
    public Guid UserId { get; set; }

    [Required]
    [MaxLength(50)]
    public string DocumentType { get; set; } = string.Empty;

    [Required]
    [MaxLength(200)]
    public string FileName { get; set; } = string.Empty;

    [Required]
    [MaxLength(500)]
    public string FilePath { get; set; } = string.Empty;

    public long FileSize { get; set; }

    [MaxLength(100)]
    public string? ContentType { get; set; }
}

// System Setting DTOs
public class CreateSystemSettingDto
{
    [Required]
    [MaxLength(100)]
    public string Key { get; set; } = string.Empty;

    [Required]
    [MaxLength(1000)]
    public string Value { get; set; } = string.Empty;

    [MaxLength(500)]
    public string? Description { get; set; }
}

public class UpdateSystemSettingDto
{
    [MaxLength(1000)]
    public string? Value { get; set; }

    [MaxLength(500)]
    public string? Description { get; set; }

    public bool? IsActive { get; set; }
}

// Audit Log DTOs
public class AuditLogDto
{
    public Guid Id { get; set; }
    public Guid? UserId { get; set; }
    public string Action { get; set; } = string.Empty;
    public string EntityName { get; set; } = string.Empty;
    public string? EntityId { get; set; }
    public string? OldValues { get; set; }
    public string? NewValues { get; set; }
    public string? IpAddress { get; set; }
    public string? UserAgent { get; set; }
    public DateTime CreatedAt { get; set; }
}

// Service Request DTOs
public class ServiceRequestDto
{
    public Guid Id { get; set; }
    public Guid RequesterId { get; set; }
    public Guid CategoryId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public decimal? Budget { get; set; }
    public string Currency { get; set; } = string.Empty;
    public string? Location { get; set; }
    public DateTime? PreferredDate { get; set; }
    public string Status { get; set; } = string.Empty;
    public string RequesterName { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class ServiceRequestResponseDto
{
    public Guid Id { get; set; }
    public Guid RequestId { get; set; }
    public Guid ProviderId { get; set; }
    public decimal ProposedPrice { get; set; }
    public string Currency { get; set; } = string.Empty;
    public string? Message { get; set; }
    public string Status { get; set; } = string.Empty;
    public string ProviderName { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

// System Setting DTOs
public class SystemSettingDto
{
    public Guid Id { get; set; }
    public string Key { get; set; } = string.Empty;
    public string Value { get; set; } = string.Empty;
    public string? Description { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

// Notification DTOs
public class NotificationDto
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public bool IsRead { get; set; }
    public DateTime? ReadAt { get; set; }
    public string Channel { get; set; } = string.Empty;
    public string? ExternalReferenceId { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

// Payment-related DTOs
public class RazorpayPaymentRequest
{
    public Guid ContractId { get; set; }
    public decimal Amount { get; set; }
    public string Currency { get; set; } = "INR";
    public string Description { get; set; } = string.Empty;
}

// Contract Session Request DTOs
public class CreateContractSessionRequest
{
    public DateTime SessionDate { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime? EndTime { get; set; }
    public decimal? HoursWorked { get; set; }
    public string? Notes { get; set; }
}

public class UpdateContractSessionRequest
{
    public DateTime? SessionDate { get; set; }
    public DateTime? StartTime { get; set; }
    public DateTime? EndTime { get; set; }
    public decimal? HoursWorked { get; set; }
    public string? Status { get; set; }
    public string? Notes { get; set; }
}

// Rating Request DTOs
public class CreateRatingRequest
{
    public int RatingValue { get; set; }
    public string Comment { get; set; } = string.Empty;
    public bool IsAnonymous { get; set; } = false;
}

public class UpdateRatingRequest
{
    public int RatingValue { get; set; }
    public string Comment { get; set; } = string.Empty;
}

// Payment Request DTOs
public class CreatePaymentRequest
{
    public string PaymentMethod { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public string Currency { get; set; } = "USD";
    public string? Description { get; set; }
}

// Service Search DTOs
public class ServiceSearchRequest
{
    public Guid? CategoryId { get; set; }
    public Guid? ProviderId { get; set; }
    public string? Location { get; set; }
    public decimal? MinPrice { get; set; }
    public decimal? MaxPrice { get; set; }
    public int? Rating { get; set; }
    public bool? IsActive { get; set; } = true;
    public int Page { get; set; } = 1;
    public int PageSize { get; set; } = 10;
    public string SortBy { get; set; } = "createdAt";
    public string SortOrder { get; set; } = "desc";
}

public class ServiceSearchResponse
{
    public List<ServiceDto> Services { get; set; } = new();
    public PaginationDto Pagination { get; set; } = new();
}

public class PaginationDto
{
    public int Page { get; set; }
    public int PageSize { get; set; }
    public int TotalCount { get; set; }
    public int TotalPages { get; set; }
    public bool HasNext { get; set; }
    public bool HasPrevious { get; set; }
}

// Service Category Request DTOs
public class CreateServiceCategoryRequest
{
    [Required]
    [MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [MaxLength(500)]
    public string? Description { get; set; }

    [MaxLength(100)]
    public string? Icon { get; set; }

    public Guid? ParentCategoryId { get; set; }
}

public class UpdateServiceCategoryRequest
{
    [MaxLength(100)]
    public string? Name { get; set; }

    [MaxLength(500)]
    public string? Description { get; set; }

    [MaxLength(100)]
    public string? Icon { get; set; }

    public Guid? ParentCategoryId { get; set; }

    public bool? IsActive { get; set; }
}

// Service Request DTOs
public class CreateServiceRequest
{
    [Required]
    public Guid CategoryId { get; set; }

    [Required]
    [MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [MaxLength(2000)]
    public string Description { get; set; } = string.Empty;

    [Required]
    [Range(0, double.MaxValue)]
    public decimal BasePrice { get; set; }

    [Required]
    [MaxLength(3)]
    public string Currency { get; set; } = "USD";

    [Required]
    [MaxLength(20)]
    public string PricingType { get; set; } = string.Empty;

    [MaxLength(200)]
    public string? Location { get; set; }

    [MaxLength(1000)]
    public string? Requirements { get; set; }

    public int? ExperienceYears { get; set; }

    public string[] Certifications { get; set; } = Array.Empty<string>();

    public List<ServicePricingRequest> Pricing { get; set; } = new();

    public List<AvailabilityRequest> Availability { get; set; } = new();
}

public class UpdateServiceRequest
{
    [MaxLength(200)]
    public string? Title { get; set; }

    [MaxLength(2000)]
    public string? Description { get; set; }

    [Range(0, double.MaxValue)]
    public decimal? BasePrice { get; set; }

    [MaxLength(3)]
    public string? Currency { get; set; }

    [MaxLength(20)]
    public string? PricingType { get; set; }

    [MaxLength(200)]
    public string? Location { get; set; }

    [MaxLength(1000)]
    public string? Requirements { get; set; }

    public int? ExperienceYears { get; set; }

    public string[]? Certifications { get; set; }

    public bool? IsActive { get; set; }
}

// Service Pricing Request DTOs
public class ServicePricingRequest
{
    [Required]
    [MaxLength(20)]
    public string ContractType { get; set; } = string.Empty;

    [Required]
    [Range(0, double.MaxValue)]
    public decimal Price { get; set; }

    [Required]
    [MaxLength(3)]
    public string Currency { get; set; } = "USD";

    public int? MinimumHours { get; set; }

    public int? MaximumHours { get; set; }
}

// Availability Request DTOs
public class AvailabilityRequest
{
    [Required]
    [Range(0, 6)]
    public int DayOfWeek { get; set; }

    [Required]
    public TimeSpan StartTime { get; set; }

    [Required]
    public TimeSpan EndTime { get; set; }

    public bool IsAvailable { get; set; } = true;
}

public class CreateAvailabilityDto
{
    [Required]
    [Range(0, 6)]
    public int DayOfWeek { get; set; }

    [Required]
    public TimeSpan StartTime { get; set; }

    [Required]
    public TimeSpan EndTime { get; set; }

    public bool IsAvailable { get; set; } = true;
}
