using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Application.Interfaces;
using System.Security.Claims;

namespace ServicePlatform.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class PaymentsController : ControllerBase
{
    private readonly IPaymentService _paymentService;

    public PaymentsController(IPaymentService paymentService)
    {
        _paymentService = paymentService;
    }

    /// <summary>
    /// Get payment by ID
    /// </summary>
    /// <param name="id">Payment ID</param>
    /// <returns>Payment details</returns>
    [HttpGet("{id}")]
    [ProducesResponseType(typeof(ServiceResponse<PaymentDto>), 200)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<PaymentDto>>> GetPayment(Guid id)
    {
        var result = await _paymentService.GetPaymentByIdAsync(id);
        
        if (!result.Success)
            return NotFound(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Get user payment history
    /// </summary>
    /// <param name="page">Page number</param>
    /// <param name="pageSize">Page size</param>
    /// <returns>Paginated list of payments</returns>
    [HttpGet("history")]
    [ProducesResponseType(typeof(ServiceResponse<List<PaymentDto>>), 200)]
    public async Task<ActionResult<ServiceResponse<List<PaymentDto>>>> GetPaymentHistory(
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 10)
    {
        var userId = GetCurrentUserId();
        var result = await _paymentService.GetPaymentHistoryAsync(userId, page, pageSize);
        return Ok(result);
    }

    /// <summary>
    /// Get total payments for user
    /// </summary>
    /// <returns>Total payment amount</returns>
    [HttpGet("total")]
    [ProducesResponseType(typeof(ServiceResponse<decimal>), 200)]
    public async Task<ActionResult<ServiceResponse<decimal>>> GetTotalPayments()
    {
        var userId = GetCurrentUserId();
        var result = await _paymentService.GetTotalPaymentsAsync(userId);
        return Ok(result);
    }

    /// <summary>
    /// Process Razorpay payment
    /// </summary>
    /// <param name="request">Payment request</param>
    /// <returns>Processed payment</returns>
    [HttpPost("razorpay")]
    [ProducesResponseType(typeof(ServiceResponse<PaymentDto>), 201)]
    [ProducesResponseType(400)]
    public async Task<ActionResult<ServiceResponse<PaymentDto>>> ProcessRazorpayPayment([FromBody] RazorpayPaymentRequest request)
    {
        var result = await _paymentService.ProcessRazorpayPaymentAsync(request);
        
        if (!result.Success)
            return BadRequest(result);
        
        return CreatedAtAction(nameof(GetPayment), new { id = result.Data?.Id }, result);
    }

    /// <summary>
    /// Update payment status
    /// </summary>
    /// <param name="id">Payment ID</param>
    /// <param name="status">New status</param>
    /// <param name="failureReason">Failure reason (optional)</param>
    /// <returns>Success response</returns>
    [HttpPut("{id}/status")]
    [ProducesResponseType(typeof(ServiceResponse<bool>), 200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<bool>>> UpdatePaymentStatus(
        Guid id,
        [FromBody] string status,
        [FromQuery] string? failureReason = null)
    {
        var result = await _paymentService.UpdatePaymentStatusAsync(id, status, failureReason);
        
        if (!result.Success)
            return BadRequest(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Refund payment
    /// </summary>
    /// <param name="id">Payment ID</param>
    /// <param name="reason">Refund reason</param>
    /// <returns>Success response</returns>
    [HttpPut("{id}/refund")]
    [ProducesResponseType(typeof(ServiceResponse<bool>), 200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<bool>>> RefundPayment(Guid id, [FromBody] string reason)
    {
        var result = await _paymentService.RefundPaymentAsync(id, reason);
        
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