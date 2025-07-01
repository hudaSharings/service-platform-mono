using System.ComponentModel.DataAnnotations;

namespace ServicePlatform.Domain.Entities;

public class Service
{
    public Guid Id { get; set; }

    [Required]
    public Guid ProviderId { get; set; }

    [Required]
    public Guid CategoryId { get; set; }

    [Required]
    [MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [MaxLength(2000)]
    public string Description { get; set; } = string.Empty;

    [Required]
    [Range(0, double.MaxValue)]
    public decimal BasePrice { get; set; }

    [Required]
    [MaxLength(3)]
    public string Currency { get; set; } = "USD";

    [Required]
    [MaxLength(20)]
    public string PricingType { get; set; } = string.Empty; // Hourly, Weekly, Monthly, Fixed

    [Required]
    [MaxLength(20)]
    public string ServiceType { get; set; } = "Regular"; // Regular, Estimation

    [MaxLength(200)]
    public string? Location { get; set; }

    public bool IsActive { get; set; } = true;

    public bool IsVerified { get; set; } = false;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    [Range(0, 5)]
    public decimal? AverageRating { get; set; }

    public int TotalReviews { get; set; } = 0;

    public string[] ServiceImages { get; set; } = Array.Empty<string>();

    [MaxLength(1000)]
    public string? Requirements { get; set; }

    public int? ExperienceYears { get; set; }

    public string[] Certifications { get; set; } = Array.Empty<string>();

    // Navigation properties
    public virtual User Provider { get; set; } = null!;
    public virtual ServiceCategory Category { get; set; } = null!;
    public virtual ICollection<ServicePricing> Pricing { get; set; } = new List<ServicePricing>();
    public virtual ICollection<Availability> Availability { get; set; } = new List<Availability>();
    public virtual ICollection<Contract> Contracts { get; set; } = new List<Contract>();

    // Computed properties
    public bool HasImages => ServiceImages.Length > 0;
    public bool HasCertifications => Certifications.Length > 0;
    public string DisplayPrice => $"{BasePrice:C}";
    public bool IsEstimationService => ServiceType.Equals("Estimation", StringComparison.OrdinalIgnoreCase);
} 