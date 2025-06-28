using ServicePlatform.Application.DTOs;

namespace ServicePlatform.Application.Interfaces;

public interface IServiceService
{
    Task<ServiceResponse<ServiceDto>> GetServiceByIdAsync(Guid serviceId);
    Task<ServiceResponse<ServiceSearchResponse>> SearchServicesAsync(ServiceSearchRequest request);
    Task<PaginatedResponseDto<ServiceDto>> GetServicesAsync(string? search = null, Guid? categoryId = null, string? location = null, decimal? minPrice = null, decimal? maxPrice = null, bool? isActive = null, int page = 1, int pageSize = 20);
    Task<ServiceResponse<ServiceDto>> CreateServiceAsync(CreateServiceDto createServiceDto);
    Task<ServiceResponse<ServiceDto>> UpdateServiceAsync(Guid serviceId, UpdateServiceDto updateServiceDto);
    Task<ServiceResponse<bool>> DeleteServiceAsync(Guid serviceId);
    Task<PaginatedResponseDto<ServiceDto>> GetServicesByProviderAsync(Guid providerId, int page = 1, int pageSize = 20);
    Task<PaginatedResponseDto<ServiceDto>> GetServicesByCategoryAsync(Guid categoryId, int page = 1, int pageSize = 20);
    Task<ServiceResponse<bool>> UpdateServiceStatusAsync(Guid serviceId, bool isActive);
    Task<ServiceResponse<bool>> VerifyServiceAsync(Guid serviceId);
    Task<ServiceResponse<bool>> UpdateServiceVerificationAsync(Guid serviceId, bool isVerified);
    
    // Category methods
    Task<ServiceResponse<List<ServiceCategoryDto>>> GetCategoriesAsync(bool? isActive = null);
    Task<ServiceResponse<ServiceCategoryDto>> GetCategoryByIdAsync(Guid categoryId);
    Task<ServiceResponse<ServiceCategoryDto>> CreateCategoryAsync(CreateServiceCategoryDto createCategoryDto);
    Task<ServiceResponse<ServiceCategoryDto>> UpdateCategoryAsync(Guid categoryId, UpdateServiceCategoryDto updateCategoryDto);
    Task<ServiceResponse<bool>> DeleteCategoryAsync(Guid categoryId);
    Task<ServiceResponse<ServiceCategoryDto>> UpdateCategoryStatusAsync(Guid categoryId, bool isActive);
}

public interface IServiceCategoryService
{
    Task<ServiceResponse<ServiceCategoryDto>> GetCategoryByIdAsync(Guid categoryId);
    Task<ServiceResponse<List<ServiceCategoryDto>>> GetAllCategoriesAsync(bool includeInactive = false);
    Task<PaginatedResponseDto<ServiceCategoryDto>> GetCategoriesAsync(int page = 1, int pageSize = 10);
    Task<ServiceResponse<List<ServiceCategoryDto>>> GetSubCategoriesAsync(Guid parentCategoryId);
    Task<ServiceResponse<ServiceCategoryDto>> CreateCategoryAsync(CreateServiceCategoryRequest request);
    Task<ServiceResponse<ServiceCategoryDto>> UpdateCategoryAsync(Guid categoryId, UpdateServiceCategoryRequest request);
    Task<ServiceResponse<bool>> DeleteCategoryAsync(Guid categoryId);
    Task<ServiceResponse<bool>> ActivateCategoryAsync(Guid categoryId);
    Task<ServiceResponse<bool>> DeactivateCategoryAsync(Guid categoryId);
    Task<ServiceResponse<bool>> UpdateCategoryStatusAsync(Guid categoryId, bool isActive);
}

public interface IServicePricingService
{
    Task<ServiceResponse<List<ServicePricingDto>>> GetPricingByServiceAsync(Guid serviceId);
    Task<ServiceResponse<ServicePricingDto>> CreatePricingAsync(Guid serviceId, ServicePricingRequest request);
    Task<ServiceResponse<ServicePricingDto>> UpdatePricingAsync(Guid pricingId, ServicePricingRequest request);
    Task<ServiceResponse<bool>> DeletePricingAsync(Guid pricingId);
    Task<ServiceResponse<ServicePricingDto>> GetPricingByIdAsync(Guid pricingId);
}

public interface IAvailabilityService
{
    Task<ServiceResponse<List<AvailabilityDto>>> GetAvailabilityByServiceAsync(Guid serviceId);
    Task<ServiceResponse<List<AvailabilityDto>>> UpdateAvailabilityAsync(Guid serviceId, List<AvailabilityRequest> availability);
    Task<ServiceResponse<bool>> CheckAvailabilityAsync(Guid serviceId, DateTime startDate, DateTime endDate);
    Task<ServiceResponse<List<AvailabilityDto>>> GetAvailabilityByDateRangeAsync(Guid serviceId, DateTime startDate, DateTime endDate);
    Task<ServiceResponse<bool>> IsAvailableAsync(Guid serviceId, DateTime date, TimeSpan startTime, TimeSpan endTime);
} 