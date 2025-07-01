using System.ComponentModel.DataAnnotations;

namespace ServicePlatform.Application.DTOs;

public class CreateEstimationRequestDto
{
    [Required]
    public Guid ServiceId { get; set; }

    [Required]
    [MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [MaxLength(2000)]
    public string Description { get; set; } = string.Empty;

    [MaxLength(200)]
    public string? Location { get; set; }

    public DateTime? PreferredDate { get; set; }

    [MaxLength(1000)]
    public string? SpecialRequirements { get; set; }
} 