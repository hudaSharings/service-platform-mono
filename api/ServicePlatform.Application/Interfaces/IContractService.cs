using ServicePlatform.Application.DTOs;

namespace ServicePlatform.Application.Interfaces;

public interface IContractService
{
    Task<ServiceResponse<ContractDto>> GetContractByIdAsync(Guid contractId);
    Task<ServiceResponse<ContractSearchResponse>> GetUserContractsAsync(Guid userId, ContractSearchRequest request);
    Task<ServiceResponse<PaginatedResponseDto<ContractDto>>> GetContractsAsync(string? search = null, string? status = null, string? contractType = null, int page = 1, int pageSize = 10);
    Task<ServiceResponse<ContractDto>> CreateContractAsync(Guid requesterId, CreateContractRequest request);
    Task<ServiceResponse<ContractDto>> UpdateContractStatusAsync(Guid contractId, Guid userId, UpdateContractStatusRequest request);
    Task<ServiceResponse<bool>> CancelContractAsync(Guid contractId, Guid userId, string cancellationReason);
    Task<ServiceResponse<bool>> CompleteContractAsync(Guid contractId, Guid userId);
    Task<ServiceResponse<List<ContractDto>>> GetContractsByServiceAsync(Guid serviceId, int page = 1, int pageSize = 10);
    Task<ServiceResponse<List<ContractDto>>> GetActiveContractsAsync(int page = 1, int pageSize = 10);
    Task<ServiceResponse<int>> GetContractCountAsync(string? status = null);
}

public interface IContractSessionService
{
    Task<ServiceResponse<List<ContractSessionDto>>> GetSessionsByContractAsync(Guid contractId);
    Task<ServiceResponse<ContractSessionDto>> GetSessionByIdAsync(Guid sessionId);
    Task<ServiceResponse<ContractSessionDto>> CreateSessionAsync(Guid contractId, CreateContractSessionRequest request);
    Task<ServiceResponse<ContractSessionDto>> UpdateSessionAsync(Guid sessionId, UpdateContractSessionRequest request);
    Task<ServiceResponse<bool>> DeleteSessionAsync(Guid sessionId);
    Task<ServiceResponse<bool>> StartSessionAsync(Guid sessionId);
    Task<ServiceResponse<bool>> CompleteSessionAsync(Guid sessionId, decimal hoursWorked);
    Task<ServiceResponse<bool>> CancelSessionAsync(Guid sessionId, string? notes = null);
}

public interface IPaymentService
{
    Task<ServiceResponse<List<PaymentDto>>> GetPaymentsByContractAsync(Guid contractId);
    Task<ServiceResponse<PaymentDto>> GetPaymentByIdAsync(Guid paymentId);
    Task<ServiceResponse<PaymentDto>> CreatePaymentAsync(Guid contractId, CreatePaymentRequest request);
    Task<ServiceResponse<PaymentDto>> ProcessRazorpayPaymentAsync(RazorpayPaymentRequest request);
    Task<ServiceResponse<bool>> UpdatePaymentStatusAsync(Guid paymentId, string status, string? failureReason = null);
    Task<ServiceResponse<List<PaymentDto>>> GetPaymentHistoryAsync(Guid userId, int page = 1, int pageSize = 10);
    Task<ServiceResponse<decimal>> GetTotalPaymentsAsync(Guid userId);
    Task<ServiceResponse<bool>> RefundPaymentAsync(Guid paymentId, string reason);
}

public interface IRatingService
{
    Task<ServiceResponse<List<RatingDto>>> GetRatingsByContractAsync(Guid contractId);
    Task<ServiceResponse<List<RatingDto>>> GetRatingsByUserAsync(Guid userId, int page = 1, int pageSize = 10);
    Task<ServiceResponse<RatingDto>> GetRatingByIdAsync(Guid ratingId);
    Task<ServiceResponse<RatingDto>> CreateRatingAsync(Guid contractId, Guid raterId, CreateRatingRequest request);
    Task<ServiceResponse<RatingDto>> UpdateRatingAsync(Guid ratingId, Guid raterId, UpdateRatingRequest request);
    Task<ServiceResponse<bool>> DeleteRatingAsync(Guid ratingId, Guid raterId);
    Task<ServiceResponse<decimal>> GetAverageRatingAsync(Guid userId);
    Task<ServiceResponse<int>> GetRatingCountAsync(Guid userId);
    Task<ServiceResponse<List<RatingDto>>> GetRecentRatingsAsync(int page = 1, int pageSize = 10);
} 