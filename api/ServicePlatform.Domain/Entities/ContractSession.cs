using System.ComponentModel.DataAnnotations;

namespace ServicePlatform.Domain.Entities;

public class ContractSession
{
    public Guid Id { get; set; }

    [Required]
    public Guid ContractId { get; set; }

    [Required]
    public DateTime SessionDate { get; set; }

    [Required]
    public DateTime StartTime { get; set; }

    public DateTime? EndTime { get; set; }

    [Range(0, 24)]
    public decimal? HoursWorked { get; set; }

    [Range(0, double.MaxValue)]
    public decimal? Amount { get; set; }

    [Required]
    [MaxLength(20)]
    public string Status { get; set; } = "Scheduled"; // Scheduled, InProgress, Completed, Cancelled

    [MaxLength(500)]
    public string? Notes { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // Navigation properties
    public virtual Contract Contract { get; set; } = null!;

    // Computed properties
    public bool IsScheduled => Status == "Scheduled";
    public bool IsInProgress => Status == "InProgress";
    public bool IsCompleted => Status == "Completed";
    public bool IsCancelled => Status == "Cancelled";
    public TimeSpan? Duration => EndTime?.Subtract(StartTime);
    public string DisplayDate => SessionDate.ToString("MMM dd, yyyy");
    public string DisplayTime => $"{StartTime:HH:mm} - {EndTime:HH:mm}";
} 