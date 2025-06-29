using System;
using System.Threading.Tasks;
using FluentAssertions;
using Moq;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Application.Interfaces;
using ServicePlatform.Infrastructure.Services;
using Xunit;

namespace ServicePlatform.Tests
{
    public class AuthServiceTests
    {
        private readonly Mock<IAuthService> _mockAuthService;

        public AuthServiceTests()
        {
            _mockAuthService = new Mock<IAuthService>();
        }

        [Fact]
        public async Task LoginAsync_WithValidCredentials_ShouldReturnSuccessResponse()
        {
            // Arrange
            var loginRequest = new LoginRequest
            {
                Email = "test@example.com",
                Password = "password123"
            };

            var expectedResponse = ServiceResponse<LoginResponse>.SuccessResult(
                new LoginResponse
                {
                    Token = "jwt-token-here",
                    RefreshToken = "refresh-token-here",
                    User = new UserDto
                    {
                        Id = Guid.NewGuid(),
                        Email = "test@example.com",
                        UserName = "testuser",
                        FirstName = "Test",
                        LastName = "User"
                    }
                },
                "Login successful"
            );

            _mockAuthService
                .Setup(x => x.LoginAsync(It.IsAny<LoginRequest>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockAuthService.Object.LoginAsync(loginRequest);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().NotBeNull();
            result.Data.Token.Should().NotBeEmpty();
            result.Data.User.Email.Should().Be("test@example.com");
        }

        [Fact]
        public async Task LoginAsync_WithInvalidCredentials_ShouldReturnFailureResponse()
        {
            // Arrange
            var loginRequest = new LoginRequest
            {
                Email = "invalid@example.com",
                Password = "wrongpassword"
            };

            var expectedResponse = ServiceResponse<LoginResponse>.FailureResult("Invalid credentials");

            _mockAuthService
                .Setup(x => x.LoginAsync(It.IsAny<LoginRequest>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockAuthService.Object.LoginAsync(loginRequest);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeFalse();
            result.Message.Should().Be("Invalid credentials");
            result.Data.Should().BeNull();
        }

        [Fact]
        public async Task RegisterAsync_WithValidData_ShouldReturnSuccessResponse()
        {
            // Arrange
            var registerRequest = new RegisterRequest
            {
                UserName = "newuser",
                Email = "newuser@example.com",
                Password = "password123",
                PhoneNumber = "+1234567890",
                UserType = "Client",
                FirstName = "New",
                LastName = "User"
            };

            var expectedResponse = ServiceResponse<UserDto>.SuccessResult(
                new UserDto
                {
                    Id = Guid.NewGuid(),
                    UserName = "newuser",
                    Email = "newuser@example.com",
                    FirstName = "New",
                    LastName = "User",
                    UserType = "Client"
                },
                "Registration successful"
            );

            _mockAuthService
                .Setup(x => x.RegisterAsync(It.IsAny<RegisterRequest>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockAuthService.Object.RegisterAsync(registerRequest);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().NotBeNull();
            result.Data.Email.Should().Be("newuser@example.com");
            result.Data.UserName.Should().Be("newuser");
        }

        [Fact]
        public async Task ForgotPasswordAsync_WithValidEmail_ShouldReturnSuccessResponse()
        {
            // Arrange
            var forgotPasswordRequest = new ForgotPasswordRequest
            {
                Email = "user@example.com"
            };

            var expectedResponse = ServiceResponse<string>.SuccessResult(
                "Password reset email sent successfully",
                "Password reset email sent"
            );

            _mockAuthService
                .Setup(x => x.ForgotPasswordAsync(It.IsAny<ForgotPasswordRequest>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockAuthService.Object.ForgotPasswordAsync(forgotPasswordRequest);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Message.Should().Be("Password reset email sent");
        }

        [Fact]
        public async Task GetUserProfileAsync_WithValidUserId_ShouldReturnUserProfile()
        {
            // Arrange
            var userId = Guid.NewGuid();
            var expectedResponse = ServiceResponse<UserDto>.SuccessResult(
                new UserDto
                {
                    Id = userId,
                    UserName = "testuser",
                    Email = "test@example.com",
                    FirstName = "Test",
                    LastName = "User",
                    UserType = "Client"
                },
                "Profile retrieved successfully"
            );

            _mockAuthService
                .Setup(x => x.GetUserProfileAsync(It.IsAny<Guid>()))
                .ReturnsAsync(expectedResponse);

            // Act
            var result = await _mockAuthService.Object.GetUserProfileAsync(userId);

            // Assert
            result.Should().NotBeNull();
            result.Success.Should().BeTrue();
            result.Data.Should().NotBeNull();
            result.Data.Id.Should().Be(userId);
            result.Data.Email.Should().Be("test@example.com");
        }
    }
} 