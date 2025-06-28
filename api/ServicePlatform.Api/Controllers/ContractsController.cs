using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Application.Interfaces;
using System.Security.Claims;

namespace ServicePlatform.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class ContractsController : ControllerBase
{
    private readonly IContractService _contractService;
    private readonly IPaymentService _paymentService;
    private readonly IRatingService _ratingService;

    public ContractsController(
        IContractService contractService,
        IPaymentService paymentService,
        IRatingService ratingService)
    {
        _contractService = contractService;
        _paymentService = paymentService;
        _ratingService = ratingService;
    }

    /// <summary>
    /// Get contract by ID
    /// </summary>
    /// <param name="id">Contract ID</param>
    /// <returns>Contract details</returns>
    [HttpGet("{id}")]
    [ProducesResponseType(typeof(ServiceResponse<ContractDto>), 200)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<ContractDto>>> GetContract(Guid id)
    {
        var result = await _contractService.GetContractByIdAsync(id);
        
        if (!result.Success)
            return NotFound(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Get user contracts with filtering
    /// </summary>
    /// <param name="request">Search request</param>
    /// <returns>Paginated list of contracts</returns>
    [HttpGet("my-contracts")]
    [ProducesResponseType(typeof(ServiceResponse<ContractSearchResponse>), 200)]
    public async Task<ActionResult<ServiceResponse<ContractSearchResponse>>> GetMyContracts([FromQuery] ContractSearchRequest request)
    {
        var userId = GetCurrentUserId();
        var result = await _contractService.GetUserContractsAsync(userId, request);
        return Ok(result);
    }

    /// <summary>
    /// Create new contract
    /// </summary>
    /// <param name="request">Contract creation request</param>
    /// <returns>Created contract</returns>
    [HttpPost]
    [ProducesResponseType(typeof(ServiceResponse<ContractDto>), 201)]
    [ProducesResponseType(400)]
    public async Task<ActionResult<ServiceResponse<ContractDto>>> CreateContract([FromBody] CreateContractRequest request)
    {
        var requesterId = GetCurrentUserId();
        var result = await _contractService.CreateContractAsync(requesterId, request);
        
        if (!result.Success)
            return BadRequest(result);
        
        return CreatedAtAction(nameof(GetContract), new { id = result.Data?.Id }, result);
    }

    /// <summary>
    /// Update contract status
    /// </summary>
    /// <param name="id">Contract ID</param>
    /// <param name="request">Status update request</param>
    /// <returns>Updated contract</returns>
    [HttpPut("{id}/status")]
    [ProducesResponseType(typeof(ServiceResponse<ContractDto>), 200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<ContractDto>>> UpdateContractStatus(Guid id, [FromBody] UpdateContractStatusRequest request)
    {
        var userId = GetCurrentUserId();
        var result = await _contractService.UpdateContractStatusAsync(id, userId, request);
        
        if (!result.Success)
            return BadRequest(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Cancel contract
    /// </summary>
    /// <param name="id">Contract ID</param>
    /// <param name="cancellationReason">Reason for cancellation</param>
    /// <returns>Success response</returns>
    [HttpPut("{id}/cancel")]
    [ProducesResponseType(typeof(ServiceResponse<bool>), 200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<bool>>> CancelContract(Guid id, [FromBody] string cancellationReason)
    {
        var userId = GetCurrentUserId();
        var result = await _contractService.CancelContractAsync(id, userId, cancellationReason);
        
        if (!result.Success)
            return BadRequest(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Complete contract
    /// </summary>
    /// <param name="id">Contract ID</param>
    /// <returns>Success response</returns>
    [HttpPut("{id}/complete")]
    [ProducesResponseType(typeof(ServiceResponse<bool>), 200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<bool>>> CompleteContract(Guid id)
    {
        var userId = GetCurrentUserId();
        var result = await _contractService.CompleteContractAsync(id, userId);
        
        if (!result.Success)
            return BadRequest(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Get payments for contract
    /// </summary>
    /// <param name="contractId">Contract ID</param>
    /// <returns>List of payments</returns>
    [HttpGet("{contractId}/payments")]
    [ProducesResponseType(typeof(ServiceResponse<List<PaymentDto>>), 200)]
    public async Task<ActionResult<ServiceResponse<List<PaymentDto>>>> GetContractPayments(Guid contractId)
    {
        var result = await _paymentService.GetPaymentsByContractAsync(contractId);
        return Ok(result);
    }

    /// <summary>
    /// Create payment for contract
    /// </summary>
    /// <param name="contractId">Contract ID</param>
    /// <param name="request">Payment request</param>
    /// <returns>Created payment</returns>
    [HttpPost("{contractId}/payments")]
    [ProducesResponseType(typeof(ServiceResponse<PaymentDto>), 201)]
    [ProducesResponseType(400)]
    public async Task<ActionResult<ServiceResponse<PaymentDto>>> CreatePayment(Guid contractId, [FromBody] CreatePaymentRequest request)
    {
        var result = await _paymentService.CreatePaymentAsync(contractId, request);
        
        if (!result.Success)
            return BadRequest(result);
        
        return CreatedAtAction(nameof(GetContractPayments), new { contractId }, result);
    }

    /// <summary>
    /// Get ratings for contract
    /// </summary>
    /// <param name="contractId">Contract ID</param>
    /// <returns>List of ratings</returns>
    [HttpGet("{contractId}/ratings")]
    [ProducesResponseType(typeof(ServiceResponse<List<RatingDto>>), 200)]
    public async Task<ActionResult<ServiceResponse<List<RatingDto>>>> GetContractRatings(Guid contractId)
    {
        var result = await _ratingService.GetRatingsByContractAsync(contractId);
        return Ok(result);
    }

    /// <summary>
    /// Create rating for contract
    /// </summary>
    /// <param name="contractId">Contract ID</param>
    /// <param name="request">Rating request</param>
    /// <returns>Created rating</returns>
    [HttpPost("{contractId}/ratings")]
    [ProducesResponseType(typeof(ServiceResponse<RatingDto>), 201)]
    [ProducesResponseType(400)]
    public async Task<ActionResult<ServiceResponse<RatingDto>>> CreateRating(Guid contractId, [FromBody] CreateRatingRequest request)
    {
        var raterId = GetCurrentUserId();
        var result = await _ratingService.CreateRatingAsync(contractId, raterId, request);
        
        if (!result.Success)
            return BadRequest(result);
        
        return CreatedAtAction(nameof(GetContractRatings), new { contractId }, result);
    }

    private Guid GetCurrentUserId()
    {
        var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        return Guid.Parse(userIdClaim ?? throw new InvalidOperationException("User ID not found in claims"));
    }
} 