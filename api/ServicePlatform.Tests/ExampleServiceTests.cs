using Xunit;
using Moq;
using FluentAssertions;

namespace ServicePlatform.Tests
{
    public class ExampleService
    {
        public int Add(int a, int b) => a + b;
    }

    public class ExampleServiceTests
    {
        [Fact]
        public void Add_ShouldReturnSumOfTwoNumbers()
        {
            // Arrange
            var service = new ExampleService();

            // Act
            var result = service.Add(2, 3);

            // Assert
            result.Should().Be(5);
        }
    }
} 