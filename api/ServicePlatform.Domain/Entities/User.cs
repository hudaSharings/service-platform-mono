using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace ServicePlatform.Domain.Entities;

public class User : IdentityUser<Guid>
{
    [Required]
    [MaxLength(50)]
    public string FirstName { get; set; } = string.Empty;

    [Required]
    [MaxLength(50)]
    public string LastName { get; set; } = string.Empty;

    [MaxLength(500)]
    public string? ProfilePictureUrl { get; set; }

    public DateTime? DateOfBirth { get; set; }

    [MaxLength(10)]
    public string? Gender { get; set; }

    [MaxLength(500)]
    public string? Address { get; set; }

    [MaxLength(100)]
    public string? City { get; set; }

    [MaxLength(100)]
    public string? State { get; set; }

    [MaxLength(100)]
    public string? Country { get; set; }

    [MaxLength(20)]
    public string? PostalCode { get; set; }

    [Required]
    [MaxLength(20)]
    public string UserType { get; set; } = string.Empty; // Provider, Requester, Admin

    [Required]
    [MaxLength(20)]
    public string VerificationStatus { get; set; } = "Pending"; // Pending, Verified, Rejected

    public bool DocumentsVerified { get; set; } = false;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    public bool IsActive { get; set; } = true;

    // Navigation properties
    public virtual ICollection<Service> Services { get; set; } = new List<Service>();
    public virtual ICollection<Contract> RequesterContracts { get; set; } = new List<Contract>();
    public virtual ICollection<Contract> ProviderContracts { get; set; } = new List<Contract>();
    public virtual ICollection<Rating> GivenRatings { get; set; } = new List<Rating>();
    public virtual ICollection<Rating> ReceivedRatings { get; set; } = new List<Rating>();
    public virtual ICollection<Notification> Notifications { get; set; } = new List<Notification>();
    [NotMapped]
    public virtual ICollection<UserDocument> Documents { get; set; } = new List<UserDocument>();
    public virtual ICollection<ServiceRequest> ServiceRequests { get; set; } = new List<ServiceRequest>();
    public virtual ICollection<ServiceRequestResponse> ServiceRequestResponses { get; set; } = new List<ServiceRequestResponse>();
    public virtual ICollection<AuditLog> AuditLogs { get; set; } = new List<AuditLog>();

    // Computed properties
    public string FullName => $"{FirstName} {LastName}";
    public bool IsProvider => UserType == "Provider";
    public bool IsRequester => UserType == "Requester";
    public bool IsAdmin => UserType == "Admin";
    public bool IsVerified => VerificationStatus == "Verified";
} 