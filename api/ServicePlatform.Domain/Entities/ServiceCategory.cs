using System.ComponentModel.DataAnnotations;

namespace ServicePlatform.Domain.Entities;

public class ServiceCategory
{
    public Guid Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [MaxLength(500)]
    public string? Description { get; set; }

    [MaxLength(100)]
    public string? Icon { get; set; }

    public bool IsActive { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // Self-referencing relationship for subcategories
    public Guid? ParentCategoryId { get; set; }
    public virtual ServiceCategory? ParentCategory { get; set; }
    public virtual ICollection<ServiceCategory> SubCategories { get; set; } = new List<ServiceCategory>();

    // Navigation properties
    public virtual ICollection<Service> Services { get; set; } = new List<Service>();
    public virtual ICollection<ServiceRequest> ServiceRequests { get; set; } = new List<ServiceRequest>();
} 