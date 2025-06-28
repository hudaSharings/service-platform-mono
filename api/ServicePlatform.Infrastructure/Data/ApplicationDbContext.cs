using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ServicePlatform.Domain.Entities;

namespace ServicePlatform.Infrastructure.Data;

public class ApplicationDbContext : IdentityDbContext<User, IdentityRole<Guid>, Guid>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<ServiceCategory> ServiceCategories { get; set; }
    public DbSet<Service> Services { get; set; }
    public DbSet<ServicePricing> ServicePricings { get; set; }
    public DbSet<Availability> Availabilities { get; set; }
    public DbSet<Contract> Contracts { get; set; }
    public DbSet<ContractSession> ContractSessions { get; set; }
    public DbSet<Payment> Payments { get; set; }
    public DbSet<Rating> Ratings { get; set; }
    public DbSet<Notification> Notifications { get; set; }
    public DbSet<UserDocument> UserDocuments { get; set; }
    public DbSet<ServiceRequest> ServiceRequests { get; set; }
    public DbSet<ServiceRequestResponse> ServiceRequestResponses { get; set; }
    public DbSet<SystemSetting> SystemSettings { get; set; }
    public DbSet<AuditLog> AuditLogs { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        // Configure User entity
        builder.Entity<User>(entity =>
        {
            entity.ToTable("Users");
            entity.Property(u => u.FirstName).IsRequired().HasMaxLength(50);
            entity.Property(u => u.LastName).IsRequired().HasMaxLength(50);
            entity.Property(u => u.UserName).IsRequired().HasMaxLength(50);
            entity.Property(u => u.Email).IsRequired().HasMaxLength(100);
            entity.Property(u => u.PhoneNumber).HasMaxLength(20);
            entity.Property(u => u.Address).HasMaxLength(200);
            entity.Property(u => u.City).HasMaxLength(50);
            entity.Property(u => u.State).HasMaxLength(50);
            entity.Property(u => u.Country).HasMaxLength(50);
            entity.Property(u => u.PostalCode).HasMaxLength(20);
            entity.Property(u => u.ProfilePictureUrl).HasMaxLength(500);
            entity.Property(u => u.VerificationStatus).HasMaxLength(20);
            entity.Property(u => u.UserType).HasMaxLength(20);
        });

        // Configure ServiceCategory entity
        builder.Entity<ServiceCategory>(entity =>
        {
            entity.ToTable("ServiceCategories");
            entity.Property(sc => sc.Name).IsRequired().HasMaxLength(100);
            entity.Property(sc => sc.Description).HasMaxLength(500);
            entity.Property(sc => sc.Icon).HasMaxLength(50);
            
            // Configure self-referencing relationship to avoid cascade cycles
            entity.HasOne(sc => sc.ParentCategory)
                .WithMany(sc => sc.SubCategories)
                .HasForeignKey(sc => sc.ParentCategoryId)
                .OnDelete(DeleteBehavior.Restrict);
        });

        // Configure Service entity
        builder.Entity<Service>(entity =>
        {
            entity.ToTable("Services");
            entity.Property(s => s.Title).IsRequired().HasMaxLength(200);
            entity.Property(s => s.Description).IsRequired().HasMaxLength(2000);
            entity.Property(s => s.Location).IsRequired().HasMaxLength(200);
            entity.Property(s => s.ServiceImages).HasMaxLength(2000); // JSON array
            entity.Property(s => s.BasePrice).HasColumnType("decimal(18,2)");
            entity.Property(s => s.Currency).HasMaxLength(3);
            
            entity.HasOne(s => s.Provider)
                .WithMany(u => u.Services)
                .HasForeignKey(s => s.ProviderId)
                .OnDelete(DeleteBehavior.Restrict);

            entity.HasOne(s => s.Category)
                .WithMany(sc => sc.Services)
                .HasForeignKey(s => s.CategoryId)
                .OnDelete(DeleteBehavior.Restrict);
        });

        // Configure ServicePricing entity
        builder.Entity<ServicePricing>(entity =>
        {
            entity.ToTable("ServicePricings");
            entity.Property(sp => sp.Price).HasColumnType("decimal(18,2)");
            entity.Property(sp => sp.Currency).HasMaxLength(3);
            entity.Property(sp => sp.PricingType).HasMaxLength(20);
            
            // Configure relationship to avoid cascade cycles
            entity.HasOne(sp => sp.Service)
                .WithMany()
                .HasForeignKey(sp => sp.ServiceId)
                .OnDelete(DeleteBehavior.Restrict);
        });

        // Configure Availability entity
        builder.Entity<Availability>(entity =>
        {
            entity.ToTable("Availabilities");
            entity.Property(a => a.DayOfWeek).HasMaxLength(20);
            entity.Property(a => a.TimeSlot).HasMaxLength(50);
            
            // Configure relationship to avoid cascade cycles
            entity.HasOne(a => a.Service)
                .WithMany()
                .HasForeignKey(a => a.ServiceId)
                .OnDelete(DeleteBehavior.Restrict);
        });

        // Configure Contract entity
        builder.Entity<Contract>(entity =>
        {
            entity.ToTable("Contracts");
            entity.Property(c => c.ContractNumber).IsRequired().HasMaxLength(50);
            entity.Property(c => c.ContractType).HasMaxLength(20);
            entity.Property(c => c.Status).HasMaxLength(20);
            entity.Property(c => c.TotalAmount).HasColumnType("decimal(18,2)");
            entity.Property(c => c.Currency).HasMaxLength(3);
            entity.Property(c => c.Description).HasMaxLength(1000);
            entity.Property(c => c.Terms).HasMaxLength(2000);
            
            entity.HasOne(c => c.Provider)
                .WithMany(u => u.ProviderContracts)
                .HasForeignKey(c => c.ProviderId)
                .OnDelete(DeleteBehavior.Restrict);

            entity.HasOne(c => c.Requester)
                .WithMany(u => u.RequesterContracts)
                .HasForeignKey(c => c.RequesterId)
                .OnDelete(DeleteBehavior.Restrict);

            entity.HasOne(c => c.Service)
                .WithMany(s => s.Contracts)
                .HasForeignKey(c => c.ServiceId)
                .OnDelete(DeleteBehavior.Restrict);
        });

        // Configure ContractSession entity
        builder.Entity<ContractSession>(entity =>
        {
            entity.ToTable("ContractSessions");
            entity.Property(cs => cs.Status).HasMaxLength(20);
            entity.Property(cs => cs.Notes).HasMaxLength(1000);
            entity.Property(cs => cs.HoursWorked).HasColumnType("decimal(5,2)");
            entity.Property(cs => cs.Amount).HasColumnType("decimal(18,2)");
            
            // Configure relationship to avoid cascade cycles
            entity.HasOne(cs => cs.Contract)
                .WithMany()
                .HasForeignKey(cs => cs.ContractId)
                .OnDelete(DeleteBehavior.Restrict);
        });

        // Configure Payment entity
        builder.Entity<Payment>(entity =>
        {
            entity.ToTable("Payments");
            entity.Property(p => p.PaymentMethod).HasMaxLength(50);
            entity.Property(p => p.TransactionId).HasMaxLength(100);
            entity.Property(p => p.Status).HasMaxLength(20);
            entity.Property(p => p.Amount).HasColumnType("decimal(18,2)");
            entity.Property(p => p.Currency).HasMaxLength(3);
            entity.Property(p => p.Description).HasMaxLength(500);
            
            // Configure relationship to avoid cascade cycles
            entity.HasOne(p => p.Contract)
                .WithMany()
                .HasForeignKey(p => p.ContractId)
                .OnDelete(DeleteBehavior.Restrict);
        });

        // Configure Rating entity
        builder.Entity<Rating>(entity =>
        {
            entity.ToTable("Ratings");
            entity.Property(r => r.Comment).HasMaxLength(1000);
            entity.Property(r => r.RatingValue).HasColumnType("int");
            
            // Configure relationships with User entity
            entity.HasOne(r => r.Rater)
                .WithMany(u => u.GivenRatings)
                .HasForeignKey(r => r.RaterId)
                .OnDelete(DeleteBehavior.Restrict);

            entity.HasOne(r => r.RatedUser)
                .WithMany(u => u.ReceivedRatings)
                .HasForeignKey(r => r.RatedUserId)
                .OnDelete(DeleteBehavior.Restrict);

            entity.HasOne(r => r.Contract)
                .WithMany(c => c.Ratings)
                .HasForeignKey(r => r.ContractId)
                .OnDelete(DeleteBehavior.Restrict);
        });

        // Configure Notification entity
        builder.Entity<Notification>(entity =>
        {
            entity.ToTable("Notifications");
            entity.Property(n => n.Title).IsRequired().HasMaxLength(200);
            entity.Property(n => n.Message).IsRequired().HasMaxLength(1000);
            entity.Property(n => n.Type).HasMaxLength(50);
            entity.Property(n => n.Channel).HasMaxLength(20);
            entity.Property(n => n.Status).HasMaxLength(20);
            
            // Configure relationship to avoid cascade cycles
            entity.HasOne(n => n.User)
                .WithMany()
                .HasForeignKey(n => n.UserId)
                .OnDelete(DeleteBehavior.Restrict);
        });

        // Configure UserDocument entity
        builder.Entity<UserDocument>(entity =>
        {
            entity.ToTable("UserDocuments");
            entity.Property(ud => ud.DocumentType).HasMaxLength(50);
            entity.Property(ud => ud.FileName).IsRequired().HasMaxLength(200);
            entity.Property(ud => ud.FilePath).IsRequired().HasMaxLength(500);
            entity.Property(ud => ud.FileSize).HasColumnType("bigint");
            entity.Property(ud => ud.ContentType).HasMaxLength(100);
            entity.Property(ud => ud.Status).HasMaxLength(20);
            
            // Configure relationships to avoid cascade cycles
            entity.HasOne(ud => ud.User)
                .WithMany()
                .HasForeignKey(ud => ud.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            entity.HasOne(ud => ud.Verifier)
                .WithMany()
                .HasForeignKey(ud => ud.VerifiedBy)
                .OnDelete(DeleteBehavior.Restrict);
        });

        // Configure ServiceRequest entity
        builder.Entity<ServiceRequest>(entity =>
        {
            entity.ToTable("ServiceRequests");
            entity.Property(sr => sr.Title).IsRequired().HasMaxLength(200);
            entity.Property(sr => sr.Description).IsRequired().HasMaxLength(2000);
            entity.Property(sr => sr.Location).IsRequired().HasMaxLength(200);
            entity.Property(sr => sr.Budget).HasColumnType("decimal(18,2)");
            entity.Property(sr => sr.Currency).HasMaxLength(3);
            entity.Property(sr => sr.Status).HasMaxLength(20);
            
            // Configure relationships to avoid cascade cycles
            entity.HasOne(sr => sr.Requester)
                .WithMany()
                .HasForeignKey(sr => sr.RequesterId)
                .OnDelete(DeleteBehavior.Restrict);

            entity.HasOne(sr => sr.Category)
                .WithMany()
                .HasForeignKey(sr => sr.CategoryId)
                .OnDelete(DeleteBehavior.Restrict);
        });

        // Configure ServiceRequestResponse entity
        builder.Entity<ServiceRequestResponse>(entity =>
        {
            entity.ToTable("ServiceRequestResponses");
            entity.Property(srr => srr.Message).IsRequired().HasMaxLength(1000);
            entity.Property(srr => srr.ProposedPrice).HasColumnType("decimal(18,2)");
            entity.Property(srr => srr.Status).HasMaxLength(20);
            
            // Configure relationships to avoid cascade cycles
            entity.HasOne(srr => srr.Request)
                .WithMany()
                .HasForeignKey(srr => srr.RequestId)
                .OnDelete(DeleteBehavior.Restrict);

            entity.HasOne(srr => srr.Provider)
                .WithMany()
                .HasForeignKey(srr => srr.ProviderId)
                .OnDelete(DeleteBehavior.Restrict);
        });

        // Configure SystemSetting entity
        builder.Entity<SystemSetting>(entity =>
        {
            entity.ToTable("SystemSettings");
            entity.Property(ss => ss.Key).IsRequired().HasMaxLength(100);
            entity.Property(ss => ss.Value).IsRequired().HasMaxLength(1000);
            entity.Property(ss => ss.Description).HasMaxLength(500);
        });

        // Configure AuditLog entity
        builder.Entity<AuditLog>(entity =>
        {
            entity.ToTable("AuditLogs");
            entity.Property(al => al.Action).IsRequired().HasMaxLength(50);
            entity.Property(al => al.EntityName).IsRequired().HasMaxLength(100);
            entity.Property(al => al.EntityId).IsRequired().HasMaxLength(50);
            entity.Property(al => al.OldValues).HasMaxLength(4000);
            entity.Property(al => al.NewValues).HasMaxLength(4000);
            entity.Property(al => al.IpAddress).HasMaxLength(45);
            entity.Property(al => al.UserAgent).HasMaxLength(500);
            
            // Configure relationship to avoid cascade cycles
            entity.HasOne(al => al.User)
                .WithMany()
                .HasForeignKey(al => al.UserId)
                .OnDelete(DeleteBehavior.Restrict);
        });

        // Seed data for ServiceCategories
        builder.Entity<ServiceCategory>().HasData(
            new ServiceCategory { Id = Guid.NewGuid(), Name = "Housekeeping", Description = "Cleaning and household services", Icon = "🧹", IsActive = true, CreatedAt = DateTime.UtcNow },
            new ServiceCategory { Id = Guid.NewGuid(), Name = "Cooking", Description = "Food preparation and cooking services", Icon = "👨‍🍳", IsActive = true, CreatedAt = DateTime.UtcNow },
            new ServiceCategory { Id = Guid.NewGuid(), Name = "Driving", Description = "Transportation and driving services", Icon = "🚗", IsActive = true, CreatedAt = DateTime.UtcNow },
            new ServiceCategory { Id = Guid.NewGuid(), Name = "Gardening", Description = "Landscaping and gardening services", Icon = "🌱", IsActive = true, CreatedAt = DateTime.UtcNow },
            new ServiceCategory { Id = Guid.NewGuid(), Name = "Pet Care", Description = "Pet sitting and care services", Icon = "🐕", IsActive = true, CreatedAt = DateTime.UtcNow },
            new ServiceCategory { Id = Guid.NewGuid(), Name = "Tutoring", Description = "Educational and tutoring services", Icon = "📚", IsActive = true, CreatedAt = DateTime.UtcNow },
            new ServiceCategory { Id = Guid.NewGuid(), Name = "Handyman", Description = "Repair and maintenance services", Icon = "🔧", IsActive = true, CreatedAt = DateTime.UtcNow },
            new ServiceCategory { Id = Guid.NewGuid(), Name = "Beauty", Description = "Beauty and personal care services", Icon = "💄", IsActive = true, CreatedAt = DateTime.UtcNow }
        );
    }
} 