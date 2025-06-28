using System.ComponentModel.DataAnnotations;

namespace ServicePlatform.Domain.Entities;

public class ServiceRequestResponse
{
    public Guid Id { get; set; }

    [Required]
    public Guid RequestId { get; set; }

    [Required]
    public Guid ProviderId { get; set; }

    [Required]
    [Range(0, double.MaxValue)]
    public decimal ProposedPrice { get; set; }

    [Required]
    [MaxLength(3)]
    public string Currency { get; set; } = "USD";

    [MaxLength(1000)]
    public string? Message { get; set; }

    [Required]
    [MaxLength(20)]
    public string Status { get; set; } = "Pending"; // Pending, Accepted, Rejected

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // Navigation properties
    public virtual ServiceRequest Request { get; set; } = null!;
    public virtual User Provider { get; set; } = null!;

    // Computed properties
    public bool IsPending => Status == "Pending";
    public bool IsAccepted => Status == "Accepted";
    public bool IsRejected => Status == "Rejected";
    public string DisplayPrice => $"{ProposedPrice:C}";
    public bool HasMessage => !string.IsNullOrEmpty(Message);
} 