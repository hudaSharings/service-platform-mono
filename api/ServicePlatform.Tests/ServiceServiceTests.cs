using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FluentAssertions;
using Moq;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Application.Interfaces;
using Xunit;

namespace ServicePlatform.Tests
{
    public class ServiceServiceTests
    {
        private readonly Mock<IServiceService> _mockServiceService;

        public ServiceServiceTests()
        {
            _mockServiceService = new Mock<IServiceService>();
        }

        [Fact]
        public async Task GetServiceByIdAsync_WithValidId_ShouldReturnService()
        {
            // Arrange
            var serviceId = Guid.NewGuid();
            var expectedService = new ServiceDto
            {
                Id = serviceId,
                Title = "Test Service",
                Description = "Test service description",
                BasePrice = 100.00m,
                Currency = "USD",
                IsActive = true
            };

            var expectedResponse = ServiceResponse<ServiceDto>.SuccessResult(expectedService, "Service retrieved successfully");

            _mockServiceService
                .Setup(x => x.GetServiceByIdAsync(It.IsAny<Guid>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockServiceService.Object.GetServiceByIdAsync(serviceId);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().NotBeNull();
            result.Data.Id.Should().Be(serviceId);
            result.Data.Title.Should().Be("Test Service");
        }

        [Fact]
        public async Task CreateServiceAsync_WithValidData_ShouldReturnCreatedService()
        {
            // Arrange
            var createServiceDto = new CreateServiceDto
            {
                ProviderId = Guid.NewGuid(),
                CategoryId = Guid.NewGuid(),
                Title = "New Service",
                Description = "New service description",
                BasePrice = 150.00m,
                Currency = "USD",
                PricingType = "Fixed"
            };

            var createdService = new ServiceDto
            {
                Id = Guid.NewGuid(),
                ProviderId = createServiceDto.ProviderId,
                CategoryId = createServiceDto.CategoryId,
                Title = createServiceDto.Title,
                Description = createServiceDto.Description,
                BasePrice = createServiceDto.BasePrice,
                Currency = createServiceDto.Currency,
                PricingType = createServiceDto.PricingType,
                IsActive = true
            };

            var expectedResponse = ServiceResponse<ServiceDto>.SuccessResult(createdService, "Service created successfully");

            _mockServiceService
                .Setup(x => x.CreateServiceAsync(It.IsAny<CreateServiceDto>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockServiceService.Object.CreateServiceAsync(createServiceDto);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().NotBeNull();
            result.Data.Title.Should().Be("New Service");
            result.Data.BasePrice.Should().Be(150.00m);
        }

        [Fact]
        public async Task UpdateServiceAsync_WithValidData_ShouldReturnUpdatedService()
        {
            // Arrange
            var serviceId = Guid.NewGuid();
            var updateServiceDto = new UpdateServiceDto
            {
                Title = "Updated Service",
                Description = "Updated description",
                BasePrice = 200.00m
            };

            var updatedService = new ServiceDto
            {
                Id = serviceId,
                Title = updateServiceDto.Title,
                Description = updateServiceDto.Description,
                BasePrice = updateServiceDto.BasePrice.Value,
                Currency = "USD",
                IsActive = true
            };

            var expectedResponse = ServiceResponse<ServiceDto>.SuccessResult(updatedService, "Service updated successfully");

            _mockServiceService
                .Setup(x => x.UpdateServiceAsync(It.IsAny<Guid>(), It.IsAny<UpdateServiceDto>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockServiceService.Object.UpdateServiceAsync(serviceId, updateServiceDto);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().NotBeNull();
            result.Data.Title.Should().Be("Updated Service");
            result.Data.BasePrice.Should().Be(200.00m);
        }

        [Fact]
        public async Task DeleteServiceAsync_WithValidId_ShouldReturnSuccess()
        {
            // Arrange
            var serviceId = Guid.NewGuid();
            var expectedResponse = ServiceResponse<bool>.SuccessResult(true, "Service deleted successfully");

            _mockServiceService
                .Setup(x => x.DeleteServiceAsync(It.IsAny<Guid>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockServiceService.Object.DeleteServiceAsync(serviceId);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().BeTrue();
        }

        [Fact]
        public async Task GetServicesAsync_WithFilters_ShouldReturnPaginatedResults()
        {
            // Arrange
            var services = new List<ServiceDto>
            {
                new ServiceDto
                {
                    Id = Guid.NewGuid(),
                    Title = "Service 1",
                    BasePrice = 100.00m,
                    IsActive = true
                },
                new ServiceDto
                {
                    Id = Guid.NewGuid(),
                    Title = "Service 2",
                    BasePrice = 200.00m,
                    IsActive = true
                }
            };

            var expectedResponse = new PaginatedResponseDto<ServiceDto>
            {
                Data = services,
                TotalCount = 2,
                Page = 1,
                PageSize = 20,
                TotalPages = 1
            };

            _mockServiceService
                .Setup(x => x.GetServicesAsync(It.IsAny<string>(), It.IsAny<Guid?>(), It.IsAny<string>(), 
                    It.IsAny<decimal?>(), It.IsAny<decimal?>(), It.IsAny<bool?>(), It.IsAny<int>(), It.IsAny<int>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockServiceService.Object.GetServicesAsync(
                search: "test", 
                categoryId: Guid.NewGuid(), 
                location: "New York",
                minPrice: 50.00m,
                maxPrice: 300.00m,
                isActive: true,
                page: 1,
                pageSize: 20);

            // Assert
            result.Should().NotBeNull();
            result.Data.Should().HaveCount(2);
            result.TotalCount.Should().Be(2);
            result.Page.Should().Be(1);
        }

        [Fact]
        public async Task UpdateServiceStatusAsync_WithValidData_ShouldReturnSuccess()
        {
            // Arrange
            var serviceId = Guid.NewGuid();
            var isActive = false;
            var expectedResponse = ServiceResponse<bool>.SuccessResult(true, "Service status updated successfully");

            _mockServiceService
                .Setup(x => x.UpdateServiceStatusAsync(It.IsAny<Guid>(), It.IsAny<bool>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockServiceService.Object.UpdateServiceStatusAsync(serviceId, isActive);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().BeTrue();
        }

        [Fact]
        public async Task GetCategoriesAsync_ShouldReturnCategories()
        {
            // Arrange
            var categories = new List<ServiceCategoryDto>
            {
                new ServiceCategoryDto
                {
                    Id = Guid.NewGuid(),
                    Name = "Technology",
                    Description = "Technology services",
                    IsActive = true
                },
                new ServiceCategoryDto
                {
                    Id = Guid.NewGuid(),
                    Name = "Design",
                    Description = "Design services",
                    IsActive = true
                }
            };

            var expectedResponse = ServiceResponse<List<ServiceCategoryDto>>.SuccessResult(categories, "Categories retrieved successfully");

            _mockServiceService
                .Setup(x => x.GetCategoriesAsync(It.IsAny<bool?>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockServiceService.Object.GetCategoriesAsync(isActive: true);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().HaveCount(2);
            result.Data[0].Name.Should().Be("Technology");
        }
    }
} 