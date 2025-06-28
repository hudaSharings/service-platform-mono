using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Application.Interfaces;

namespace ServicePlatform.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriesController : ControllerBase
{
    private readonly IServiceService _serviceService;

    public CategoriesController(IServiceService serviceService)
    {
        _serviceService = serviceService;
    }

    /// <summary>
    /// Get all service categories
    /// </summary>
    /// <param name="isActive">Active status filter</param>
    /// <returns>List of service categories</returns>
    [HttpGet]
    [ProducesResponseType(typeof(ServiceResponse<List<ServiceCategoryDto>>), 200)]
    public async Task<ActionResult<ServiceResponse<List<ServiceCategoryDto>>>> GetCategories([FromQuery] bool? isActive = null)
    {
        var result = await _serviceService.GetCategoriesAsync(isActive);
        return Ok(result);
    }

    /// <summary>
    /// Get category by ID
    /// </summary>
    /// <param name="id">Category ID</param>
    /// <returns>Category details</returns>
    [HttpGet("{id}")]
    [ProducesResponseType(typeof(ServiceResponse<ServiceCategoryDto>), 200)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<ServiceCategoryDto>>> GetCategory(Guid id)
    {
        var result = await _serviceService.GetCategoryByIdAsync(id);
        
        if (!result.Success)
            return NotFound(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Create new category (admin only)
    /// </summary>
    /// <param name="createCategoryDto">Category creation data</param>
    /// <returns>Created category</returns>
    [HttpPost]
    [Authorize(Roles = "Admin")]
    [ProducesResponseType(typeof(ServiceResponse<ServiceCategoryDto>), 201)]
    [ProducesResponseType(400)]
    public async Task<ActionResult<ServiceResponse<ServiceCategoryDto>>> CreateCategory([FromBody] CreateServiceCategoryDto createCategoryDto)
    {
        var result = await _serviceService.CreateCategoryAsync(createCategoryDto);
        
        if (!result.Success)
            return BadRequest(result);
        
        return CreatedAtAction(nameof(GetCategory), new { id = result.Data.Id }, result);
    }

    /// <summary>
    /// Update category (admin only)
    /// </summary>
    /// <param name="id">Category ID</param>
    /// <param name="updateCategoryDto">Category update data</param>
    /// <returns>Updated category</returns>
    [HttpPut("{id}")]
    [Authorize(Roles = "Admin")]
    [ProducesResponseType(typeof(ServiceResponse<ServiceCategoryDto>), 200)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<ServiceCategoryDto>>> UpdateCategory(Guid id, [FromBody] UpdateServiceCategoryDto updateCategoryDto)
    {
        var result = await _serviceService.UpdateCategoryAsync(id, updateCategoryDto);
        
        if (!result.Success)
            return NotFound(result);
        
        return Ok(result);
    }

    /// <summary>
    /// Delete category (admin only)
    /// </summary>
    /// <param name="id">Category ID</param>
    /// <returns>No content</returns>
    [HttpDelete("{id}")]
    [Authorize(Roles = "Admin")]
    [ProducesResponseType(typeof(ServiceResponse<bool>), 204)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<bool>>> DeleteCategory(Guid id)
    {
        var result = await _serviceService.DeleteCategoryAsync(id);
        
        if (!result.Success)
            return NotFound(result);
        
        return NoContent();
    }

    /// <summary>
    /// Update category status (admin only)
    /// </summary>
    /// <param name="id">Category ID</param>
    /// <param name="isActive">Active status</param>
    /// <returns>Updated category</returns>
    [HttpPut("{id}/status")]
    [Authorize(Roles = "Admin")]
    [ProducesResponseType(typeof(ServiceResponse<ServiceCategoryDto>), 200)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ServiceResponse<ServiceCategoryDto>>> UpdateCategoryStatus(Guid id, [FromBody] bool isActive)
    {
        var result = await _serviceService.UpdateCategoryStatusAsync(id, isActive);
        
        if (!result.Success)
            return NotFound(result);
        
        return Ok(result);
    }
} 