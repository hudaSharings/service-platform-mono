using System.ComponentModel.DataAnnotations;

namespace ServicePlatform.Domain.Entities;

public class Contract
{
    public Guid Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string ContractNumber { get; set; } = string.Empty;

    [Required]
    public Guid ServiceId { get; set; }

    [Required]
    public Guid RequesterId { get; set; }

    [Required]
    public Guid ProviderId { get; set; }

    [Required]
    [MaxLength(20)]
    public string ContractType { get; set; } = string.Empty; // Hourly, Weekly, Monthly, Fixed

    [Required]
    [MaxLength(20)]
    public string Status { get; set; } = "Pending"; // Pending, Active, Completed, Cancelled, Disputed

    [Required]
    public DateTime StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    [Required]
    [Range(0, double.MaxValue)]
    public decimal TotalAmount { get; set; }

    [Required]
    [MaxLength(3)]
    public string Currency { get; set; } = "USD";

    public int? HoursPerWeek { get; set; }

    public int? TotalHours { get; set; }

    [MaxLength(1000)]
    public string? Description { get; set; }

    [MaxLength(2000)]
    public string? Terms { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? CompletedAt { get; set; }

    public DateTime? CancelledAt { get; set; }

    [MaxLength(500)]
    public string? CancellationReason { get; set; }

    [Range(1, 5)]
    public int? RequesterRating { get; set; }

    [MaxLength(1000)]
    public string? RequesterReview { get; set; }

    [Range(1, 5)]
    public int? ProviderRating { get; set; }

    [MaxLength(1000)]
    public string? ProviderReview { get; set; }

    // Navigation properties
    public virtual Service Service { get; set; } = null!;
    public virtual User Requester { get; set; } = null!;
    public virtual User Provider { get; set; } = null!;
    public virtual ICollection<ContractSession> Sessions { get; set; } = new List<ContractSession>();
    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();
    public virtual ICollection<Rating> Ratings { get; set; } = new List<Rating>();

    // Computed properties
    public bool IsActive => Status == "Active";
    public bool IsCompleted => Status == "Completed";
    public bool IsCancelled => Status == "Cancelled";
    public bool IsPending => Status == "Pending";
    public bool IsDisputed => Status == "Disputed";
    public string DisplayAmount => $"{TotalAmount:C}";
    public bool HasRequesterFeedback => RequesterRating.HasValue || !string.IsNullOrEmpty(RequesterReview);
    public bool HasProviderFeedback => ProviderRating.HasValue || !string.IsNullOrEmpty(ProviderReview);
} 