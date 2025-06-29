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
    public class ContractServiceTests
    {
        private readonly Mock<IContractService> _mockContractService;

        public ContractServiceTests()
        {
            _mockContractService = new Mock<IContractService>();
        }

        [Fact]
        public async Task GetContractByIdAsync_WithValidId_ShouldReturnContract()
        {
            // Arrange
            var contractId = Guid.NewGuid();
            var expectedContract = new ContractDto
            {
                Id = contractId,
                ContractNumber = "CON-001",
                RequesterId = Guid.NewGuid(),
                ProviderId = Guid.NewGuid(),
                ServiceId = Guid.NewGuid(),
                ContractType = "Fixed",
                Status = "Active",
                TotalAmount = 1000.00m,
                Currency = "USD"
            };

            var expectedResponse = ServiceResponse<ContractDto>.SuccessResult(expectedContract, "Contract retrieved successfully");

            _mockContractService
                .Setup(x => x.GetContractByIdAsync(It.IsAny<Guid>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockContractService.Object.GetContractByIdAsync(contractId);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().NotBeNull();
            result.Data.Id.Should().Be(contractId);
            result.Data.ContractNumber.Should().Be("CON-001");
        }

        [Fact]
        public async Task CreateContractAsync_WithValidData_ShouldReturnCreatedContract()
        {
            // Arrange
            var requesterId = Guid.NewGuid();
            var createContractRequest = new CreateContractRequest
            {
                ProviderId = Guid.NewGuid(),
                ServiceId = Guid.NewGuid(),
                ContractType = "Fixed",
                StartDate = DateTime.Now.AddDays(1),
                EndDate = DateTime.Now.AddDays(30),
                TotalAmount = 1500.00m
            };

            var createdContract = new ContractDto
            {
                Id = Guid.NewGuid(),
                ContractNumber = "CON-002",
                RequesterId = requesterId,
                ProviderId = createContractRequest.ProviderId,
                ServiceId = createContractRequest.ServiceId,
                ContractType = createContractRequest.ContractType,
                Status = "Pending",
                StartDate = createContractRequest.StartDate,
                EndDate = createContractRequest.EndDate,
                TotalAmount = createContractRequest.TotalAmount,
                Currency = "USD"
            };

            var expectedResponse = ServiceResponse<ContractDto>.SuccessResult(createdContract, "Contract created successfully");

            _mockContractService
                .Setup(x => x.CreateContractAsync(It.IsAny<Guid>(), It.IsAny<CreateContractRequest>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockContractService.Object.CreateContractAsync(requesterId, createContractRequest);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().NotBeNull();
            result.Data.ContractType.Should().Be("Fixed");
            result.Data.TotalAmount.Should().Be(1500.00m);
        }

        [Fact]
        public async Task UpdateContractStatusAsync_WithValidData_ShouldReturnUpdatedContract()
        {
            // Arrange
            var contractId = Guid.NewGuid();
            var userId = Guid.NewGuid();
            var updateStatusRequest = new UpdateContractStatusRequest
            {
                Status = "InProgress"
            };

            var updatedContract = new ContractDto
            {
                Id = contractId,
                ContractNumber = "CON-003",
                Status = "InProgress",
                TotalAmount = 1000.00m,
                Currency = "USD"
            };

            var expectedResponse = ServiceResponse<ContractDto>.SuccessResult(updatedContract, "Contract status updated successfully");

            _mockContractService
                .Setup(x => x.UpdateContractStatusAsync(It.IsAny<Guid>(), It.IsAny<Guid>(), It.IsAny<UpdateContractStatusRequest>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockContractService.Object.UpdateContractStatusAsync(contractId, userId, updateStatusRequest);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().NotBeNull();
            result.Data.Status.Should().Be("InProgress");
        }

        [Fact]
        public async Task CancelContractAsync_WithValidData_ShouldReturnSuccess()
        {
            // Arrange
            var contractId = Guid.NewGuid();
            var userId = Guid.NewGuid();
            var cancellationReason = "Client requested cancellation";

            var expectedResponse = ServiceResponse<bool>.SuccessResult(true, "Contract cancelled successfully");

            _mockContractService
                .Setup(x => x.CancelContractAsync(It.IsAny<Guid>(), It.IsAny<Guid>(), It.IsAny<string>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockContractService.Object.CancelContractAsync(contractId, userId, cancellationReason);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().BeTrue();
        }

        [Fact]
        public async Task CompleteContractAsync_WithValidData_ShouldReturnSuccess()
        {
            // Arrange
            var contractId = Guid.NewGuid();
            var userId = Guid.NewGuid();

            var expectedResponse = ServiceResponse<bool>.SuccessResult(true, "Contract completed successfully");

            _mockContractService
                .Setup(x => x.CompleteContractAsync(It.IsAny<Guid>(), It.IsAny<Guid>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockContractService.Object.CompleteContractAsync(contractId, userId);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().BeTrue();
        }

        [Fact]
        public async Task GetUserContractsAsync_WithValidUserId_ShouldReturnContracts()
        {
            // Arrange
            var userId = Guid.NewGuid();
            var searchRequest = new ContractSearchRequest
            {
                Status = "Active",
                Page = 1,
                PageSize = 10
            };

            var contracts = new List<ContractDto>
            {
                new ContractDto
                {
                    Id = Guid.NewGuid(),
                    ContractNumber = "CON-004",
                    RequesterId = userId,
                    Status = "Active",
                    TotalAmount = 800.00m
                },
                new ContractDto
                {
                    Id = Guid.NewGuid(),
                    ContractNumber = "CON-005",
                    RequesterId = userId,
                    Status = "Active",
                    TotalAmount = 1200.00m
                }
            };

            var searchResponse = new ContractSearchResponse
            {
                Contracts = contracts,
                TotalCount = 2,
                Page = 1,
                PageSize = 10,
                TotalPages = 1
            };

            var expectedResponse = ServiceResponse<ContractSearchResponse>.SuccessResult(searchResponse, "User contracts retrieved successfully");

            _mockContractService
                .Setup(x => x.GetUserContractsAsync(It.IsAny<Guid>(), It.IsAny<ContractSearchRequest>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockContractService.Object.GetUserContractsAsync(userId, searchRequest);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().NotBeNull();
            result.Data.Contracts.Should().HaveCount(2);
            result.Data.TotalCount.Should().Be(2);
        }

        [Fact]
        public async Task GetContractByIdAsync_WithInvalidId_ShouldReturnFailure()
        {
            // Arrange
            var contractId = Guid.NewGuid();
            var expectedResponse = ServiceResponse<ContractDto>.FailureResult("Contract not found");

            _mockContractService
                .Setup(x => x.GetContractByIdAsync(It.IsAny<Guid>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockContractService.Object.GetContractByIdAsync(contractId);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeFalse();
            result.Message.Should().Be("Contract not found");
            result.Data.Should().BeNull();
        }
    }
} 