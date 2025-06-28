using System.ComponentModel.DataAnnotations;

namespace ServicePlatform.Domain.Entities;

public class Payment
{
    public Guid Id { get; set; }

    [Required]
    public Guid ContractId { get; set; }

    [Required]
    [Range(0, double.MaxValue)]
    public decimal Amount { get; set; }

    [Required]
    [MaxLength(3)]
    public string Currency { get; set; } = "USD";

    [Required]
    [MaxLength(50)]
    public string PaymentMethod { get; set; } = string.Empty; // Razorpay, Cash, etc.

    [Required]
    [MaxLength(20)]
    public string PaymentStatus { get; set; } = "Pending"; // Pending, Completed, Failed, Refunded

    [MaxLength(100)]
    public string? RazorpayPaymentId { get; set; }

    [MaxLength(100)]
    public string? RazorpayOrderId { get; set; }

    [MaxLength(100)]
    public string? TransactionId { get; set; }

    [MaxLength(20)]
    public string Status { get; set; } = "Pending";

    [MaxLength(500)]
    public string? Description { get; set; }

    public DateTime? PaymentDate { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    [MaxLength(500)]
    public string? FailureReason { get; set; }

    // Navigation properties
    public virtual Contract Contract { get; set; } = null!;

    // Computed properties
    public bool IsPending => PaymentStatus == "Pending";
    public bool IsCompleted => PaymentStatus == "Completed";
    public bool IsFailed => PaymentStatus == "Failed";
    public bool IsRefunded => PaymentStatus == "Refunded";
    public string DisplayAmount => $"{Amount:C}";
    public bool IsRazorpayPayment => PaymentMethod == "Razorpay";
} 