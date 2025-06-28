using Microsoft.Extensions.DependencyInjection;
using ServicePlatform.Application.Interfaces;

namespace ServicePlatform.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        // AutoMapper is now registered in Infrastructure layer
        // Only register interfaces here; implementations are in Infrastructure
        // services.AddScoped<IAuthService, AuthService>();
        // services.AddScoped<IServiceService, ServiceService>();
        // services.AddScoped<IContractService, ContractService>();

        return services;
    }
} 