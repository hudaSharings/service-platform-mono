using System.ComponentModel.DataAnnotations;

namespace ServicePlatform.Domain.Entities;

public class AuditLog
{
    public Guid Id { get; set; }

    public Guid? UserId { get; set; }

    [Required]
    [MaxLength(100)]
    public string Action { get; set; } = string.Empty;

    [Required]
    [MaxLength(100)]
    public string EntityType { get; set; } = string.Empty;

    [Required]
    [MaxLength(100)]
    public string EntityName { get; set; } = string.Empty;

    [MaxLength(100)]
    public string? EntityId { get; set; }

    [MaxLength(4000)]
    public string? OldValues { get; set; }

    [MaxLength(4000)]
    public string? NewValues { get; set; }

    [MaxLength(45)]
    public string? IpAddress { get; set; }

    [MaxLength(500)]
    public string? UserAgent { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Navigation properties
    public virtual User? User { get; set; }

    // Computed properties
    public bool HasUser => UserId.HasValue;
    public bool HasChanges => !string.IsNullOrEmpty(OldValues) || !string.IsNullOrEmpty(NewValues);
    public bool HasEntityId => !string.IsNullOrEmpty(EntityId);
    public string DisplayAction => $"{Action} on {EntityType}";
    public string TimeAgo => GetTimeAgo();

    private string GetTimeAgo()
    {
        var timeSpan = DateTime.UtcNow - CreatedAt;
        
        if (timeSpan.TotalDays > 1)
            return $"{(int)timeSpan.TotalDays} days ago";
        if (timeSpan.TotalHours > 1)
            return $"{(int)timeSpan.TotalHours} hours ago";
        if (timeSpan.TotalMinutes > 1)
            return $"{(int)timeSpan.TotalMinutes} minutes ago";
        
        return "Just now";
    }
} 