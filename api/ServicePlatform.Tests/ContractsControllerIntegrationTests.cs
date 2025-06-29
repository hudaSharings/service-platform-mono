using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ServicePlatform.Api;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Infrastructure.Data;
using Xunit;

namespace ServicePlatform.Tests
{
    public class ContractsControllerIntegrationTests : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly WebApplicationFactory<Program> _factory;

        public ContractsControllerIntegrationTests(WebApplicationFactory<Program> factory)
        {
            _factory = factory.WithWebHostBuilder(builder =>
            {
                builder.ConfigureServices(services =>
                {
                    // Replace real DB with in-memory DB for testing
                    var descriptor = services.SingleOrDefault(
                        d => d.ServiceType == typeof(DbContextOptions<ApplicationDbContext>));
                    if (descriptor != null)
                        services.Remove(descriptor);
                    services.AddDbContext<ApplicationDbContext>(options =>
                    {
                        options.UseInMemoryDatabase("TestContractsDb");
                    });
                });
            });
        }

        private HttpClient CreateAuthenticatedClient()
        {
            var client = _factory.CreateClient();
            client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Test");
            return client;
        }

        [Fact]
        public async Task GetContract_WithValidId_ShouldReturnNotFound()
        {
            // Arrange
            var client = CreateAuthenticatedClient();
            var contractId = Guid.NewGuid();

            // Act
            var response = await client.GetAsync($"/api/contracts/{contractId}");

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.NotFound);
        }

        [Fact]
        public async Task GetMyContracts_ShouldReturnOkResult()
        {
            // Arrange
            var client = CreateAuthenticatedClient();

            // Act
            var response = await client.GetAsync("/api/contracts/my-contracts");

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            var contracts = await response.Content.ReadFromJsonAsync<ServiceResponse<ContractSearchResponse>>();
            contracts.Should().NotBeNull();
            contracts.Success.Should().BeTrue();
        }

        [Fact]
        public async Task CreateContract_WithValidData_ShouldReturnCreatedResult()
        {
            // Arrange
            var client = CreateAuthenticatedClient();
            var createContractRequest = new CreateContractRequest
            {
                ProviderId = Guid.NewGuid(),
                ServiceId = Guid.NewGuid(),
                ContractType = "Fixed",
                StartDate = DateTime.Now.AddDays(1),
                EndDate = DateTime.Now.AddDays(30),
                TotalAmount = 1000.00m
            };

            // Act
            var response = await client.PostAsJsonAsync("/api/contracts", createContractRequest);

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.Created);
            var result = await response.Content.ReadFromJsonAsync<ServiceResponse<ContractDto>>();
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().NotBeNull();
            result.Data.ContractType.Should().Be("Fixed");
        }

        [Fact]
        public async Task UpdateContractStatus_WithValidData_ShouldReturnOkResult()
        {
            // Arrange
            var client = CreateAuthenticatedClient();
            
            // First, create a contract
            var createContractRequest = new CreateContractRequest
            {
                ProviderId = Guid.NewGuid(),
                ServiceId = Guid.NewGuid(),
                ContractType = "Fixed",
                StartDate = DateTime.Now.AddDays(1),
                EndDate = DateTime.Now.AddDays(30),
                TotalAmount = 1000.00m
            };
            var createResponse = await client.PostAsJsonAsync("/api/contracts", createContractRequest);
            var created = await createResponse.Content.ReadFromJsonAsync<ServiceResponse<ContractDto>>();
            var contractId = created.Data.Id;

            // Now, update its status
            var updateStatusRequest = new UpdateContractStatusRequest
            {
                Status = "InProgress"
            };
            var response = await client.PutAsJsonAsync($"/api/contracts/{contractId}/status", updateStatusRequest);

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            var result = await response.Content.ReadFromJsonAsync<ServiceResponse<ContractDto>>();
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
        }

        [Fact]
        public async Task CancelContract_WithValidData_ShouldReturnOkResult()
        {
            // Arrange
            var client = CreateAuthenticatedClient();
            
            // First, create a contract
            var createContractRequest = new CreateContractRequest
            {
                ProviderId = Guid.NewGuid(),
                ServiceId = Guid.NewGuid(),
                ContractType = "Fixed",
                StartDate = DateTime.Now.AddDays(1),
                EndDate = DateTime.Now.AddDays(30),
                TotalAmount = 1000.00m
            };
            var createResponse = await client.PostAsJsonAsync("/api/contracts", createContractRequest);
            var created = await createResponse.Content.ReadFromJsonAsync<ServiceResponse<ContractDto>>();
            var contractId = created.Data.Id;

            // Now, cancel it
            var cancellationReason = "Test cancellation";
            var response = await client.PutAsJsonAsync($"/api/contracts/{contractId}/cancel", cancellationReason);

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            var result = await response.Content.ReadFromJsonAsync<ServiceResponse<bool>>();
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
        }

        [Fact]
        public async Task GetContractPayments_ShouldReturnOkResult()
        {
            // Arrange
            var client = CreateAuthenticatedClient();
            var contractId = Guid.NewGuid();

            // Act
            var response = await client.GetAsync($"/api/contracts/{contractId}/payments");

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            var payments = await response.Content.ReadFromJsonAsync<ServiceResponse<List<PaymentDto>>>();
            payments.Should().NotBeNull();
            payments.Success.Should().BeTrue();
        }

        [Fact]
        public async Task CreatePayment_WithValidData_ShouldReturnCreatedResult()
        {
            // Arrange
            var client = CreateAuthenticatedClient();
            var contractId = Guid.NewGuid();
            var createPaymentRequest = new CreatePaymentRequest
            {
                PaymentMethod = "CreditCard",
                Amount = 500.00m,
                Currency = "USD",
                Description = "Test payment"
            };

            // Act
            var response = await client.PostAsJsonAsync($"/api/contracts/{contractId}/payments", createPaymentRequest);

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.Created);
            var result = await response.Content.ReadFromJsonAsync<ServiceResponse<PaymentDto>>();
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().NotBeNull();
            result.Data.PaymentMethod.Should().Be("CreditCard");
        }

        [Fact]
        public async Task GetContractRatings_ShouldReturnOkResult()
        {
            // Arrange
            var client = CreateAuthenticatedClient();
            var contractId = Guid.NewGuid();

            // Act
            var response = await client.GetAsync($"/api/contracts/{contractId}/ratings");

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            var ratings = await response.Content.ReadFromJsonAsync<ServiceResponse<List<RatingDto>>>();
            ratings.Should().NotBeNull();
            ratings.Success.Should().BeTrue();
        }

        [Fact]
        public async Task CreateRating_WithValidData_ShouldReturnCreatedResult()
        {
            // Arrange
            var client = CreateAuthenticatedClient();
            var contractId = Guid.NewGuid();
            var createRatingRequest = new CreateRatingRequest
            {
                RatingValue = 5,
                Comment = "Excellent service!",
                IsAnonymous = false
            };

            // Act
            var response = await client.PostAsJsonAsync($"/api/contracts/{contractId}/ratings", createRatingRequest);

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.Created);
            var result = await response.Content.ReadFromJsonAsync<ServiceResponse<RatingDto>>();
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().NotBeNull();
            result.Data.RatingValue.Should().Be(5);
        }
    }
} 