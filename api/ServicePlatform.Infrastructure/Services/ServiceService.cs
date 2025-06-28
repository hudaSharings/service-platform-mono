using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Application.Interfaces;
using ServicePlatform.Domain.Entities;
using ServicePlatform.Infrastructure.Data;
using ServicePlatform.Infrastructure.Repositories;

namespace ServicePlatform.Infrastructure.Services;

public class ServiceService : IServiceService
{
    private readonly IGenericRepository<Service> _serviceRepository;
    private readonly IGenericRepository<ServiceCategory> _categoryRepository;
    private readonly IGenericRepository<User> _userRepository;
    private readonly IMapper _mapper;
    private readonly ApplicationDbContext _context;

    public ServiceService(
        IGenericRepository<Service> serviceRepository,
        IGenericRepository<ServiceCategory> categoryRepository,
        IGenericRepository<User> userRepository,
        IMapper mapper,
        ApplicationDbContext context)
    {
        _serviceRepository = serviceRepository;
        _categoryRepository = categoryRepository;
        _userRepository = userRepository;
        _mapper = mapper;
        _context = context;
    }

    public async Task<ServiceResponse<ServiceDto>> GetServiceByIdAsync(Guid serviceId)
    {
        try
        {
            var service = await _context.Services
                .Include(s => s.Provider)
                .Include(s => s.Category)
                .FirstOrDefaultAsync(s => s.Id == serviceId);

            if (service == null)
                return ServiceResponse<ServiceDto>.FailureResult("Service not found");

            var serviceDto = _mapper.Map<ServiceDto>(service);
            return ServiceResponse<ServiceDto>.SuccessResult(serviceDto);
        }
        catch (Exception ex)
        {
            return ServiceResponse<ServiceDto>.FailureResult($"Error retrieving service: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<ServiceSearchResponse>> SearchServicesAsync(ServiceSearchRequest request)
    {
        try
        {
            var query = _context.Services
                .Include(s => s.Provider)
                .Include(s => s.Category)
                .AsQueryable();

            if (request.CategoryId.HasValue)
                query = query.Where(s => s.CategoryId == request.CategoryId);

            if (request.ProviderId.HasValue)
                query = query.Where(s => s.ProviderId == request.ProviderId);

            if (!string.IsNullOrEmpty(request.Location))
                query = query.Where(s => s.Location != null && s.Location.Contains(request.Location));

            if (request.MinPrice.HasValue)
                query = query.Where(s => s.BasePrice >= request.MinPrice);

            if (request.MaxPrice.HasValue)
                query = query.Where(s => s.BasePrice <= request.MaxPrice);

            if (request.Rating.HasValue)
                query = query.Where(s => s.AverageRating >= request.Rating);

            if (request.IsActive.HasValue)
                query = query.Where(s => s.IsActive == request.IsActive);

            // Apply sorting
            query = request.SortBy.ToLower() switch
            {
                "price" => request.SortOrder.ToLower() == "asc" ? query.OrderBy(s => s.BasePrice) : query.OrderByDescending(s => s.BasePrice),
                "rating" => request.SortOrder.ToLower() == "asc" ? query.OrderBy(s => s.AverageRating) : query.OrderByDescending(s => s.AverageRating),
                "createdat" => request.SortOrder.ToLower() == "asc" ? query.OrderBy(s => s.CreatedAt) : query.OrderByDescending(s => s.CreatedAt),
                _ => query.OrderByDescending(s => s.CreatedAt)
            };

            var totalCount = await query.CountAsync();
            var services = await query
                .Skip((request.Page - 1) * request.PageSize)
                .Take(request.PageSize)
                .ToListAsync();

            var serviceDtos = _mapper.Map<List<ServiceDto>>(services);
            var pagination = new PaginationDto
            {
                Page = request.Page,
                PageSize = request.PageSize,
                TotalCount = totalCount,
                TotalPages = (int)Math.Ceiling((double)totalCount / request.PageSize),
                HasNext = request.Page < (int)Math.Ceiling((double)totalCount / request.PageSize),
                HasPrevious = request.Page > 1
            };

            var response = new ServiceSearchResponse
            {
                Services = serviceDtos,
                Pagination = pagination
            };

            return ServiceResponse<ServiceSearchResponse>.SuccessResult(response);
        }
        catch (Exception ex)
        {
            return ServiceResponse<ServiceSearchResponse>.FailureResult($"Error searching services: {ex.Message}");
        }
    }

    public async Task<PaginatedResponseDto<ServiceDto>> GetServicesAsync(string? search = null, Guid? categoryId = null, string? location = null, decimal? minPrice = null, decimal? maxPrice = null, bool? isActive = null, int page = 1, int pageSize = 20)
    {
        try
        {
            var query = _context.Services
                .Include(s => s.Provider)
                .Include(s => s.Category)
                .AsQueryable();

            if (!string.IsNullOrEmpty(search))
                query = query.Where(s => s.Title.Contains(search) || s.Description.Contains(search));

            if (categoryId.HasValue)
                query = query.Where(s => s.CategoryId == categoryId.Value);

            if (!string.IsNullOrEmpty(location))
                query = query.Where(s => s.Location != null && s.Location.Contains(location));

            if (minPrice.HasValue)
                query = query.Where(s => s.BasePrice >= minPrice.Value);

            if (maxPrice.HasValue)
                query = query.Where(s => s.BasePrice <= maxPrice.Value);

            if (isActive.HasValue)
                query = query.Where(s => s.IsActive == isActive.Value);

            var totalCount = await query.CountAsync();
            var services = await query
                .OrderByDescending(s => s.CreatedAt)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            var serviceDtos = _mapper.Map<List<ServiceDto>>(services);

            return new PaginatedResponseDto<ServiceDto>
            {
                Data = serviceDtos,
                TotalCount = totalCount,
                Page = page,
                PageSize = pageSize,
                TotalPages = (int)Math.Ceiling((double)totalCount / pageSize)
            };
        }
        catch (Exception ex)
        {
            return new PaginatedResponseDto<ServiceDto>
            {
                Data = new List<ServiceDto>(),
                TotalCount = 0,
                Page = page,
                PageSize = pageSize,
                TotalPages = 0
            };
        }
    }

    public async Task<ServiceResponse<ServiceDto>> CreateServiceAsync(CreateServiceDto createServiceDto)
    {
        try
        {
            var service = _mapper.Map<Service>(createServiceDto);
            service.CreatedAt = DateTime.UtcNow;
            service.UpdatedAt = DateTime.UtcNow;

            var result = await _serviceRepository.AddAsync(service);
            var serviceDto = _mapper.Map<ServiceDto>(result);
            return ServiceResponse<ServiceDto>.SuccessResult(serviceDto, "Service created successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<ServiceDto>.FailureResult($"Error creating service: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<ServiceDto>> UpdateServiceAsync(Guid serviceId, UpdateServiceDto updateServiceDto)
    {
        try
        {
            var service = await _serviceRepository.GetByIdAsync(serviceId);
            if (service == null)
                return ServiceResponse<ServiceDto>.FailureResult("Service not found");

            _mapper.Map(updateServiceDto, service);
            service.UpdatedAt = DateTime.UtcNow;

            await _serviceRepository.UpdateAsync(service);
            var serviceDto = _mapper.Map<ServiceDto>(service);
            return ServiceResponse<ServiceDto>.SuccessResult(serviceDto, "Service updated successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<ServiceDto>.FailureResult($"Error updating service: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<bool>> DeleteServiceAsync(Guid serviceId)
    {
        try
        {
            var service = await _serviceRepository.GetByIdAsync(serviceId);
            if (service == null)
                return ServiceResponse<bool>.FailureResult("Service not found");

            await _serviceRepository.DeleteAsync(service);
            return ServiceResponse<bool>.SuccessResult(true, "Service deleted successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<bool>.FailureResult($"Error deleting service: {ex.Message}");
        }
    }

    public async Task<PaginatedResponseDto<ServiceDto>> GetServicesByProviderAsync(Guid providerId, int page = 1, int pageSize = 20)
    {
        try
        {
            var query = _context.Services
                .Include(s => s.Provider)
                .Include(s => s.Category)
                .Where(s => s.ProviderId == providerId)
                .OrderByDescending(s => s.CreatedAt);

            var totalCount = await query.CountAsync();
            var services = await query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            var serviceDtos = _mapper.Map<List<ServiceDto>>(services);
            return new PaginatedResponseDto<ServiceDto>
            {
                Data = serviceDtos,
                TotalCount = totalCount,
                Page = page,
                PageSize = pageSize,
                TotalPages = (int)Math.Ceiling((double)totalCount / pageSize)
            };
        }
        catch (Exception ex)
        {
            return new PaginatedResponseDto<ServiceDto>
            {
                Data = new List<ServiceDto>(),
                TotalCount = 0,
                Page = page,
                PageSize = pageSize,
                TotalPages = 0
            };
        }
    }

    public async Task<PaginatedResponseDto<ServiceDto>> GetServicesByCategoryAsync(Guid categoryId, int page = 1, int pageSize = 20)
    {
        try
        {
            var query = _context.Services
                .Include(s => s.Provider)
                .Include(s => s.Category)
                .Where(s => s.CategoryId == categoryId && s.IsActive)
                .OrderByDescending(s => s.CreatedAt);

            var totalCount = await query.CountAsync();
            var services = await query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            var serviceDtos = _mapper.Map<List<ServiceDto>>(services);
            return new PaginatedResponseDto<ServiceDto>
            {
                Data = serviceDtos,
                TotalCount = totalCount,
                Page = page,
                PageSize = pageSize,
                TotalPages = (int)Math.Ceiling((double)totalCount / pageSize)
            };
        }
        catch (Exception ex)
        {
            return new PaginatedResponseDto<ServiceDto>
            {
                Data = new List<ServiceDto>(),
                TotalCount = 0,
                Page = page,
                PageSize = pageSize,
                TotalPages = 0
            };
        }
    }

    public async Task<ServiceResponse<bool>> UpdateServiceStatusAsync(Guid serviceId, bool isActive)
    {
        try
        {
            var service = await _serviceRepository.GetByIdAsync(serviceId);
            if (service == null)
                return ServiceResponse<bool>.FailureResult("Service not found");

            service.IsActive = isActive;
            service.UpdatedAt = DateTime.UtcNow;

            await _serviceRepository.UpdateAsync(service);
            return ServiceResponse<bool>.SuccessResult(true, $"Service {(isActive ? "activated" : "deactivated")} successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<bool>.FailureResult($"Error updating service status: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<bool>> VerifyServiceAsync(Guid serviceId)
    {
        try
        {
            var service = await _serviceRepository.GetByIdAsync(serviceId);
            if (service == null)
                return ServiceResponse<bool>.FailureResult("Service not found");

            service.IsVerified = true;
            service.UpdatedAt = DateTime.UtcNow;

            await _serviceRepository.UpdateAsync(service);
            return ServiceResponse<bool>.SuccessResult(true, "Service verified successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<bool>.FailureResult($"Error verifying service: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<bool>> UpdateServiceVerificationAsync(Guid serviceId, bool isVerified)
    {
        try
        {
            var service = await _serviceRepository.GetByIdAsync(serviceId);
            if (service == null)
                return ServiceResponse<bool>.FailureResult("Service not found");

            service.IsVerified = isVerified;
            service.UpdatedAt = DateTime.UtcNow;

            await _serviceRepository.UpdateAsync(service);
            return ServiceResponse<bool>.SuccessResult(true, $"Service {(isVerified ? "verified" : "unverified")} successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<bool>.FailureResult($"Error updating service verification: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<List<ServiceCategoryDto>>> GetCategoriesAsync(bool? isActive = null)
    {
        try
        {
            var query = _context.ServiceCategories.AsQueryable();
            
            if (isActive.HasValue)
                query = query.Where(c => c.IsActive == isActive.Value);

            var categories = await query
                .OrderBy(c => c.Name)
                .ToListAsync();

            var categoryDtos = _mapper.Map<List<ServiceCategoryDto>>(categories);
            return ServiceResponse<List<ServiceCategoryDto>>.SuccessResult(categoryDtos, "Categories retrieved successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<List<ServiceCategoryDto>>.FailureResult($"Error retrieving categories: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<ServiceCategoryDto>> UpdateCategoryStatusAsync(Guid categoryId, bool isActive)
    {
        try
        {
            var category = await _categoryRepository.GetByIdAsync(categoryId);
            if (category == null)
                return ServiceResponse<ServiceCategoryDto>.FailureResult("Category not found");

            category.IsActive = isActive;
            category.UpdatedAt = DateTime.UtcNow;

            await _categoryRepository.UpdateAsync(category);
            var categoryDto = _mapper.Map<ServiceCategoryDto>(category);
            return ServiceResponse<ServiceCategoryDto>.SuccessResult(categoryDto, $"Category {(isActive ? "activated" : "deactivated")} successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<ServiceCategoryDto>.FailureResult($"Error updating category status: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<ServiceCategoryDto>> GetCategoryByIdAsync(Guid categoryId)
    {
        try
        {
            var category = await _categoryRepository.GetByIdAsync(categoryId);
            if (category == null)
                return ServiceResponse<ServiceCategoryDto>.FailureResult("Category not found");
            var dto = _mapper.Map<ServiceCategoryDto>(category);
            return ServiceResponse<ServiceCategoryDto>.SuccessResult(dto, "Category retrieved successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<ServiceCategoryDto>.FailureResult($"Error retrieving category: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<ServiceCategoryDto>> UpdateCategoryAsync(Guid categoryId, UpdateServiceCategoryDto updateCategoryDto)
    {
        try
        {
            var category = await _categoryRepository.GetByIdAsync(categoryId);
            if (category == null)
                return ServiceResponse<ServiceCategoryDto>.FailureResult("Category not found");
            _mapper.Map(updateCategoryDto, category);
            category.UpdatedAt = DateTime.UtcNow;
            await _categoryRepository.UpdateAsync(category);
            var dto = _mapper.Map<ServiceCategoryDto>(category);
            return ServiceResponse<ServiceCategoryDto>.SuccessResult(dto, "Category updated successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<ServiceCategoryDto>.FailureResult($"Error updating category: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<bool>> DeleteCategoryAsync(Guid categoryId)
    {
        try
        {
            var category = await _categoryRepository.GetByIdAsync(categoryId);
            if (category == null)
                return ServiceResponse<bool>.FailureResult("Category not found");
            await _categoryRepository.DeleteAsync(category);
            return ServiceResponse<bool>.SuccessResult(true, "Category deleted successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<bool>.FailureResult($"Error deleting category: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<ServiceCategoryDto>> CreateCategoryAsync(CreateServiceCategoryDto createCategoryDto)
    {
        try
        {
            var category = _mapper.Map<ServiceCategory>(createCategoryDto);
            category.CreatedAt = DateTime.UtcNow;
            category.UpdatedAt = DateTime.UtcNow;

            var result = await _categoryRepository.AddAsync(category);
            var categoryDto = _mapper.Map<ServiceCategoryDto>(result);
            return ServiceResponse<ServiceCategoryDto>.SuccessResult(categoryDto, "Category created successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<ServiceCategoryDto>.FailureResult($"Error creating category: {ex.Message}");
        }
    }
} 