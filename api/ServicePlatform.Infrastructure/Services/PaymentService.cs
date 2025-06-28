using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Application.Interfaces;
using ServicePlatform.Domain.Entities;
using ServicePlatform.Infrastructure.Data;
using ServicePlatform.Infrastructure.Repositories;

namespace ServicePlatform.Infrastructure.Services;

public class PaymentService : IPaymentService
{
    private readonly IGenericRepository<Payment> _paymentRepository;
    private readonly IGenericRepository<Contract> _contractRepository;
    private readonly IMapper _mapper;
    private readonly ApplicationDbContext _context;

    public PaymentService(
        IGenericRepository<Payment> paymentRepository,
        IGenericRepository<Contract> contractRepository,
        IMapper mapper,
        ApplicationDbContext context)
    {
        _paymentRepository = paymentRepository;
        _contractRepository = contractRepository;
        _mapper = mapper;
        _context = context;
    }

    public async Task<ServiceResponse<List<PaymentDto>>> GetPaymentsByContractAsync(Guid contractId)
    {
        try
        {
            var payments = await _context.Payments
                .Where(p => p.ContractId == contractId)
                .OrderByDescending(p => p.CreatedAt)
                .ToListAsync();

            var paymentDtos = _mapper.Map<List<PaymentDto>>(payments);
            return ServiceResponse<List<PaymentDto>>.SuccessResult(paymentDtos);
        }
        catch (Exception ex)
        {
            return ServiceResponse<List<PaymentDto>>.FailureResult($"Error retrieving payments: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<PaymentDto>> GetPaymentByIdAsync(Guid paymentId)
    {
        try
        {
            var payment = await _paymentRepository.GetByIdAsync(paymentId);
            if (payment == null)
                return ServiceResponse<PaymentDto>.FailureResult("Payment not found");

            var paymentDto = _mapper.Map<PaymentDto>(payment);
            return ServiceResponse<PaymentDto>.SuccessResult(paymentDto);
        }
        catch (Exception ex)
        {
            return ServiceResponse<PaymentDto>.FailureResult($"Error retrieving payment: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<PaymentDto>> CreatePaymentAsync(Guid contractId, CreatePaymentRequest request)
    {
        try
        {
            var contract = await _contractRepository.GetByIdAsync(contractId);
            if (contract == null)
                return ServiceResponse<PaymentDto>.FailureResult("Contract not found");

            var payment = new Payment
            {
                ContractId = contractId,
                PaymentMethod = request.PaymentMethod,
                Amount = request.Amount,
                Currency = request.Currency,
                Status = "Pending",
                Description = request.Description,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            await _paymentRepository.AddAsync(payment);
            var paymentDto = _mapper.Map<PaymentDto>(payment);
            return ServiceResponse<PaymentDto>.SuccessResult(paymentDto, "Payment created successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<PaymentDto>.FailureResult($"Error creating payment: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<PaymentDto>> ProcessRazorpayPaymentAsync(RazorpayPaymentRequest request)
    {
        try
        {
            // TODO: Implement actual Razorpay integration
            var payment = new Payment
            {
                ContractId = request.ContractId,
                PaymentMethod = "Razorpay",
                Amount = request.Amount,
                Currency = request.Currency,
                Status = "Completed",
                Description = request.Description,
                TransactionId = Guid.NewGuid().ToString(),
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            await _paymentRepository.AddAsync(payment);
            var paymentDto = _mapper.Map<PaymentDto>(payment);
            return ServiceResponse<PaymentDto>.SuccessResult(paymentDto, "Payment processed successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<PaymentDto>.FailureResult($"Error processing payment: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<bool>> UpdatePaymentStatusAsync(Guid paymentId, string status, string? failureReason = null)
    {
        try
        {
            var payment = await _paymentRepository.GetByIdAsync(paymentId);
            if (payment == null)
                return ServiceResponse<bool>.FailureResult("Payment not found");

            payment.Status = status;
            payment.UpdatedAt = DateTime.UtcNow;

            await _paymentRepository.UpdateAsync(payment);
            return ServiceResponse<bool>.SuccessResult(true, "Payment status updated successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<bool>.FailureResult($"Error updating payment status: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<List<PaymentDto>>> GetPaymentHistoryAsync(Guid userId, int page = 1, int pageSize = 10)
    {
        try
        {
            var query = _context.Payments
                .Include(p => p.Contract)
                .Where(p => p.Contract.RequesterId == userId || p.Contract.ProviderId == userId)
                .OrderByDescending(p => p.CreatedAt);

            var totalCount = await query.CountAsync();
            var payments = await query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            var paymentDtos = _mapper.Map<List<PaymentDto>>(payments);
            return ServiceResponse<List<PaymentDto>>.SuccessResult(paymentDtos);
        }
        catch (Exception ex)
        {
            return ServiceResponse<List<PaymentDto>>.FailureResult($"Error retrieving payment history: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<decimal>> GetTotalPaymentsAsync(Guid userId)
    {
        try
        {
            var total = await _context.Payments
                .Include(p => p.Contract)
                .Where(p => (p.Contract.RequesterId == userId || p.Contract.ProviderId == userId) && p.Status == "Completed")
                .SumAsync(p => p.Amount);

            return ServiceResponse<decimal>.SuccessResult(total);
        }
        catch (Exception ex)
        {
            return ServiceResponse<decimal>.FailureResult($"Error calculating total payments: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<bool>> RefundPaymentAsync(Guid paymentId, string reason)
    {
        try
        {
            var payment = await _paymentRepository.GetByIdAsync(paymentId);
            if (payment == null)
                return ServiceResponse<bool>.FailureResult("Payment not found");

            payment.Status = "Refunded";
            payment.UpdatedAt = DateTime.UtcNow;

            await _paymentRepository.UpdateAsync(payment);
            return ServiceResponse<bool>.SuccessResult(true, "Payment refunded successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<bool>.FailureResult($"Error refunding payment: {ex.Message}");
        }
    }
} 