using System.ComponentModel.DataAnnotations;

namespace ServicePlatform.Domain.Entities;

public class Rating
{
    public Guid Id { get; set; }

    [Required]
    public Guid ContractId { get; set; }

    [Required]
    public Guid RaterId { get; set; }

    [Required]
    public Guid RatedUserId { get; set; }

    [Required]
    [Range(1, 5)]
    public int RatingValue { get; set; } // 1-5 stars

    [MaxLength(1000)]
    public string? Comment { get; set; }

    [MaxLength(1000)]
    public string? Review { get; set; }

    public bool IsAnonymous { get; set; } = false;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // Navigation properties
    public virtual Contract Contract { get; set; } = null!;
    public virtual User Rater { get; set; } = null!;
    public virtual User RatedUser { get; set; } = null!;

    // Computed properties
    public string StarRating => new string('\u2605', RatingValue) + new string('\u2606', 5 - RatingValue);
    public bool HasReview => !string.IsNullOrEmpty(Review);
    public string DisplayName => IsAnonymous ? "Anonymous" : Rater?.FullName ?? "Unknown";
} 