using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ServicePlatform.Domain.Entities;

public class UserDocument
{
    public Guid Id { get; set; }

    [Required]
    public Guid UserId { get; set; }

    [Required]
    [MaxLength(50)]
    public string DocumentType { get; set; } = string.Empty; // IDProof, Certificate, License, etc.

    [Required]
    [MaxLength(200)]
    public string DocumentName { get; set; } = string.Empty;

    [Required]
    [MaxLength(500)]
    public string DocumentUrl { get; set; } = string.Empty;

    [Required]
    [MaxLength(200)]
    public string FileName { get; set; } = string.Empty;

    [Required]
    [MaxLength(500)]
    public string FilePath { get; set; } = string.Empty;

    public long FileSize { get; set; }

    [MaxLength(100)]
    public string? ContentType { get; set; }

    [MaxLength(20)]
    public string Status { get; set; } = "Pending";

    [Required]
    [MaxLength(20)]
    public string VerificationStatus { get; set; } = "Pending"; // Pending, Verified, Rejected

    public DateTime? VerifiedAt { get; set; }

    public Guid? VerifiedBy { get; set; }

    [MaxLength(500)]
    public string? RejectionReason { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // Navigation properties
    [NotMapped]
    public virtual User User { get; set; } = null!;
    public virtual User? Verifier { get; set; }

    // Computed properties
    public bool IsPending => VerificationStatus == "Pending";
    public bool IsVerified => VerificationStatus == "Verified";
    public bool IsRejected => VerificationStatus == "Rejected";
    public bool HasRejectionReason => !string.IsNullOrEmpty(RejectionReason);
    public string FileExtension => Path.GetExtension(DocumentUrl);
    public bool IsImage => new[] { ".jpg", ".jpeg", ".png", ".gif", ".bmp" }.Contains(FileExtension.ToLower());
    public bool IsPdf => FileExtension.ToLower() == ".pdf";
} 