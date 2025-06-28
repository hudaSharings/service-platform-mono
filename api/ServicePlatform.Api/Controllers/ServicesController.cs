using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Application.Interfaces;

namespace ServicePlatform.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ServicesController : ControllerBase
{
    private readonly IServiceService _serviceService;

    public ServicesController(IServiceService serviceService)
    {
        _serviceService = serviceService;
    }

    /// <summary>
    /// Get all services with optional filtering
    /// </summary>
    /// <param name="search">Search term</param>
    /// <param name="categoryId">Category filter</param>
    /// <param name="location">Location filter</param>
    /// <param name="minPrice">Minimum price</param>
    /// <param name="maxPrice">Maximum price</param>
    /// <param name="isActive">Active status filter</param>
    /// <param name="page">Page number</param>
    /// <param name="pageSize">Page size</param>
    /// <returns>Paginated list of services</returns>
    [HttpGet]
    [ProducesResponseType(typeof(PaginatedResponseDto<ServiceDto>), 200)]
    public async Task<ActionResult<PaginatedResponseDto<ServiceDto>>> GetServices(
        [FromQuery] string? search = null,
        [FromQuery] Guid? categoryId = null,
        [FromQuery] string? location = null,
        [FromQuery] decimal? minPrice = null,
        [FromQuery] decimal? maxPrice = null,
        [FromQuery] bool? isActive = null,
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 20)
    {
        var result = await _serviceService.GetServicesAsync(search, categoryId, location, minPrice, maxPrice, isActive, page, pageSize);
        return Ok(result);
    }

    /// <summary>
    /// Get service by ID
    /// </summary>
    /// <param name="id">Service ID</param>
    /// <returns>Service details</returns>
    [HttpGet("{id}")]
    [ProducesResponseType(typeof(ServiceResponse<ServiceDto>), 200)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<ServiceDto>>> GetService(Guid id)
    {
        var result = await _serviceService.GetServiceByIdAsync(id);
        if (result == null || !result.Success)
            return NotFound(result);
        return Ok(result);
    }

    /// <summary>
    /// Create new service (authenticated providers only)
    /// </summary>
    /// <param name="createServiceDto">Service creation data</param>
    /// <returns>Created service</returns>
    [HttpPost]
    [Authorize(Roles = "Provider")]
    [ProducesResponseType(typeof(ServiceResponse<ServiceDto>), 201)]
    [ProducesResponseType(typeof(ServiceResponse<ServiceDto>), 400)]
    public async Task<ActionResult<ServiceResponse<ServiceDto>>> CreateService([FromBody] CreateServiceDto createServiceDto)
    {
        var result = await _serviceService.CreateServiceAsync(createServiceDto);
        if (result == null || !result.Success)
            return BadRequest(result);
        return CreatedAtAction(nameof(GetService), new { id = result.Data?.Id }, result);
    }

    /// <summary>
    /// Update service (authenticated providers only)
    /// </summary>
    /// <param name="id">Service ID</param>
    /// <param name="updateServiceDto">Service update data</param>
    /// <returns>Updated service</returns>
    [HttpPut("{id}")]
    [Authorize(Roles = "Provider")]
    [ProducesResponseType(typeof(ServiceResponse<ServiceDto>), 200)]
    [ProducesResponseType(typeof(ServiceResponse<ServiceDto>), 404)]
    public async Task<ActionResult<ServiceResponse<ServiceDto>>> UpdateService(Guid id, [FromBody] UpdateServiceDto updateServiceDto)
    {
        var result = await _serviceService.UpdateServiceAsync(id, updateServiceDto);
        if (result == null || !result.Success)
            return NotFound(result);
        return Ok(result);
    }

    /// <summary>
    /// Delete service (authenticated providers only)
    /// </summary>
    /// <param name="id">Service ID</param>
    /// <returns>No content</returns>
    [HttpDelete("{id}")]
    [Authorize(Roles = "Provider")]
    [ProducesResponseType(typeof(ServiceResponse<bool>), 200)]
    [ProducesResponseType(typeof(ServiceResponse<bool>), 404)]
    public async Task<ActionResult<ServiceResponse<bool>>> DeleteService(Guid id)
    {
        var result = await _serviceService.DeleteServiceAsync(id);
        if (result == null || !result.Success)
            return NotFound(result);
        return Ok(result);
    }

    /// <summary>
    /// Get services by provider
    /// </summary>
    /// <param name="providerId">Provider ID</param>
    /// <param name="page">Page number</param>
    /// <param name="pageSize">Page size</param>
    /// <returns>Paginated list of provider services</returns>
    [HttpGet("provider/{providerId}")]
    [ProducesResponseType(typeof(PaginatedResponseDto<ServiceDto>), 200)]
    public async Task<ActionResult<PaginatedResponseDto<ServiceDto>>> GetServicesByProvider(
        Guid providerId,
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 20)
    {
        var result = await _serviceService.GetServicesByProviderAsync(providerId, page, pageSize);
        return Ok(result);
    }

    /// <summary>
    /// Get services by category
    /// </summary>
    /// <param name="categoryId">Category ID</param>
    /// <param name="page">Page number</param>
    /// <param name="pageSize">Page size</param>
    /// <returns>Paginated list of category services</returns>
    [HttpGet("category/{categoryId}")]
    [ProducesResponseType(typeof(PaginatedResponseDto<ServiceDto>), 200)]
    public async Task<ActionResult<PaginatedResponseDto<ServiceDto>>> GetServicesByCategory(
        Guid categoryId,
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 20)
    {
        var result = await _serviceService.GetServicesByCategoryAsync(categoryId, page, pageSize);
        return Ok(result);
    }

    /// <summary>
    /// Update service status (admin only)
    /// </summary>
    /// <param name="id">Service ID</param>
    /// <param name="isActive">Active status</param>
    /// <returns>Updated service</returns>
    [HttpPut("{id}/status")]
    [Authorize(Roles = "Admin")]
    [ProducesResponseType(typeof(ServiceResponse<bool>), 200)]
    [ProducesResponseType(typeof(ServiceResponse<bool>), 404)]
    public async Task<ActionResult<ServiceResponse<bool>>> UpdateServiceStatus(Guid id, [FromBody] bool isActive)
    {
        var result = await _serviceService.UpdateServiceStatusAsync(id, isActive);
        if (result == null || !result.Success)
            return NotFound(result);
        return Ok(result);
    }

    /// <summary>
    /// Update service verification (admin only)
    /// </summary>
    /// <param name="id">Service ID</param>
    /// <param name="isVerified">Verification status</param>
    /// <returns>Updated service</returns>
    [HttpPut("{id}/verification")]
    [Authorize(Roles = "Admin")]
    [ProducesResponseType(typeof(ServiceResponse<bool>), 200)]
    [ProducesResponseType(typeof(ServiceResponse<bool>), 404)]
    public async Task<ActionResult<ServiceResponse<bool>>> UpdateServiceVerification(Guid id, [FromBody] bool isVerified)
    {
        var result = await _serviceService.UpdateServiceVerificationAsync(id, isVerified);
        if (result == null || !result.Success)
            return NotFound(result);
        return Ok(result);
    }
} 