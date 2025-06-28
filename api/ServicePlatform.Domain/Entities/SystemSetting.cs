using System.ComponentModel.DataAnnotations;

namespace ServicePlatform.Domain.Entities;

public class SystemSetting
{
    public Guid Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string Key { get; set; } = string.Empty;

    [Required]
    [MaxLength(2000)]
    public string Value { get; set; } = string.Empty;

    [Required]
    [MaxLength(100)]
    public string SettingKey { get; set; } = string.Empty;

    [MaxLength(500)]
    public string? Description { get; set; }

    public bool IsActive { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // Computed properties
    public bool IsBoolean => bool.TryParse(Value, out _);
    public bool IsInteger => int.TryParse(Value, out _);
    public bool IsDecimal => decimal.TryParse(Value, out _);
    public bool IsDateTime => DateTime.TryParse(Value, out _);
    
    public bool GetBooleanValue() => bool.Parse(Value);
    public int GetIntegerValue() => int.Parse(Value);
    public decimal GetDecimalValue() => decimal.Parse(Value);
    public DateTime GetDateTimeValue() => DateTime.Parse(Value);
} 