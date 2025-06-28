using System.ComponentModel.DataAnnotations;

namespace ServicePlatform.Domain.Entities;

public class Availability
{
    public Guid Id { get; set; }

    [Required]
    public Guid ServiceId { get; set; }

    [Required]
    [Range(0, 6)]
    public int DayOfWeek { get; set; } // 0=Sunday, 1=Monday, etc.

    [Required]
    public TimeSpan StartTime { get; set; }

    [Required]
    public TimeSpan EndTime { get; set; }

    [MaxLength(50)]
    public string? TimeSlot { get; set; }

    public bool IsAvailable { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // Navigation properties
    public virtual Service Service { get; set; } = null!;

    // Computed properties
    public string DayName => DayOfWeek switch
    {
        0 => "Sunday",
        1 => "Monday",
        2 => "Tuesday",
        3 => "Wednesday",
        4 => "Thursday",
        5 => "Friday",
        6 => "Saturday",
        _ => "Unknown"
    };

    public string TimeRange => $"{StartTime:hh\\:mm} - {EndTime:hh\\:mm}";
    public TimeSpan Duration => EndTime - StartTime;
} 