using System.ComponentModel.DataAnnotations;

namespace ServicePlatform.Domain.Entities;

public class Notification
{
    public Guid Id { get; set; }

    [Required]
    public Guid UserId { get; set; }

    [Required]
    [MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [MaxLength(2000)]
    public string Message { get; set; } = string.Empty;

    [Required]
    [MaxLength(50)]
    public string Type { get; set; } = string.Empty; // Contract, Payment, System, etc.

    public bool IsRead { get; set; } = false;

    public DateTime? ReadAt { get; set; }

    [Required]
    [MaxLength(20)]
    public string NotificationChannel { get; set; } = "InApp"; // InApp, Email, SMS, WhatsApp

    [MaxLength(20)]
    public string Channel { get; set; } = "InApp";

    [MaxLength(20)]
    public string Status { get; set; } = "Pending";

    [MaxLength(100)]
    public string? ExternalReferenceId { get; set; } // For external service IDs

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // Navigation properties
    public virtual User User { get; set; } = null!;

    // Computed properties
    public bool IsInApp => NotificationChannel == "InApp";
    public bool IsEmail => NotificationChannel == "Email";
    public bool IsSMS => NotificationChannel == "SMS";
    public bool IsWhatsApp => NotificationChannel == "WhatsApp";
    public string TimeAgo => GetTimeAgo();
    public bool IsRecent => CreatedAt > DateTime.UtcNow.AddDays(-7);

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