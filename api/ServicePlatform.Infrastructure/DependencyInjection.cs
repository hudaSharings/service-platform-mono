using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ServicePlatform.Application.Interfaces;
using ServicePlatform.Domain.Entities;
using ServicePlatform.Infrastructure.Data;
using ServicePlatform.Infrastructure.Mapping;
using ServicePlatform.Infrastructure.Repositories;
using ServicePlatform.Infrastructure.Services;

namespace ServicePlatform.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        // Add DbContext
        services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlServer(
                configuration.GetConnectionString("DefaultConnection"),
                b => b.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName)
            ));

        // Add Identity
        services.AddIdentity<User, Microsoft.AspNetCore.Identity.IdentityRole<Guid>>(options =>
        {
            options.Password.RequireDigit = true;
            options.Password.RequireLowercase = true;
            options.Password.RequireUppercase = true;
            options.Password.RequireNonAlphanumeric = true;
            options.Password.RequiredLength = 8;
            options.User.RequireUniqueEmail = true;
            options.SignIn.RequireConfirmedEmail = false;
        })
        .AddEntityFrameworkStores<ApplicationDbContext>()
        .AddDefaultTokenProviders();

        // Add AutoMapper
        services.AddAutoMapper(typeof(MappingProfile).Assembly);

        // Add Repositories
        services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));

        // Add Services
        services.AddScoped<IJwtService, JwtService>();
        services.AddScoped<IAuthService, AuthService>();
        services.AddScoped<IServiceService, ServiceService>();
        services.AddScoped<IContractService, ContractService>();
        services.AddScoped<IUserService, UserService>();
        services.AddScoped<IPaymentService, PaymentService>();
        services.AddScoped<IRatingService, RatingService>();

        return services;
    }
} 