using System.ComponentModel.DataAnnotations;

namespace ServicePlatform.Domain.Entities;

public class ServiceRequest
{
    public Guid Id { get; set; }

    [Required]
    public Guid RequesterId { get; set; }

    [Required]
    public Guid CategoryId { get; set; }

    [Required]
    [MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [MaxLength(2000)]
    public string Description { get; set; } = string.Empty;

    [Range(0, double.MaxValue)]
    public decimal? Budget { get; set; }

    [Required]
    [MaxLength(3)]
    public string Currency { get; set; } = "USD";

    [MaxLength(200)]
    public string? Location { get; set; }

    public DateTime? PreferredDate { get; set; }

    [Required]
    [MaxLength(20)]
    public string Status { get; set; } = "Open"; // Open, InProgress, Completed, Cancelled

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // Navigation properties
    public virtual User Requester { get; set; } = null!;
    public virtual ServiceCategory Category { get; set; } = null!;
    public virtual ICollection<ServiceRequestResponse> Responses { get; set; } = new List<ServiceRequestResponse>();

    // Computed properties
    public bool IsOpen => Status == "Open";
    public bool IsInProgress => Status == "InProgress";
    public bool IsCompleted => Status == "Completed";
    public bool IsCancelled => Status == "Cancelled";
    public string DisplayBudget => Budget.HasValue ? $"{Budget:C}" : "Not specified";
    public bool HasResponses => Responses.Any();
    public int ResponseCount => Responses.Count;
    public bool HasPreferredDate => PreferredDate.HasValue;
} 