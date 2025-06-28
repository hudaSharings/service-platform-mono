using System.ComponentModel.DataAnnotations;

namespace ServicePlatform.Domain.Entities;

public class ServicePricing
{
    public Guid Id { get; set; }

    [Required]
    public Guid ServiceId { get; set; }

    [Required]
    [MaxLength(20)]
    public string ContractType { get; set; } = string.Empty; // Hourly, Weekly, Monthly, Fixed

    [Required]
    [MaxLength(20)]
    public string PricingType { get; set; } = string.Empty; // Hourly, Weekly, Monthly, Fixed

    [Required]
    [Range(0, double.MaxValue)]
    public decimal Price { get; set; }

    [Required]
    [MaxLength(3)]
    public string Currency { get; set; } = "USD";

    public int? MinimumHours { get; set; }

    public int? MaximumHours { get; set; }

    public bool IsActive { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // Navigation properties
    public virtual Service Service { get; set; } = null!;

    // Computed properties
    public string DisplayPrice => $"{Price:C}";
    public bool HasHourConstraints => MinimumHours.HasValue || MaximumHours.HasValue;
} 