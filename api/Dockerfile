# Use the official .NET 8 SDK image for build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy the solution file first
COPY ServicePlatform.sln ./

# Copy all project files
COPY ServicePlatform.Api/ServicePlatform.Api.csproj ./ServicePlatform.Api/
COPY ServicePlatform.Application/ServicePlatform.Application.csproj ./ServicePlatform.Application/
COPY ServicePlatform.Domain/ServicePlatform.Domain.csproj ./ServicePlatform.Domain/
COPY ServicePlatform.Infrastructure/ServicePlatform.Infrastructure.csproj ./ServicePlatform.Infrastructure/

# Restore dependencies
RUN dotnet restore ServicePlatform.sln

# Copy the rest of the source code
COPY ServicePlatform.Api/ ./ServicePlatform.Api/
COPY ServicePlatform.Application/ ./ServicePlatform.Application/
COPY ServicePlatform.Domain/ ./ServicePlatform.Domain/
COPY ServicePlatform.Infrastructure/ ./ServicePlatform.Infrastructure/

# Build and publish the application
RUN dotnet build ServicePlatform.sln -c Release --no-restore
RUN dotnet publish ServicePlatform.Api/ServicePlatform.Api.csproj -c Release -o /app/publish --no-restore

# Use the official .NET 8 ASP.NET runtime image for runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

# Copy the published application
COPY --from=build /app/publish .

# Set environment variables
ENV ASPNETCORE_URLS=http://+:7001
ENV ASPNETCORE_ENVIRONMENT=Production

# Expose the port
EXPOSE 7001

# Set the entry point
ENTRYPOINT ["dotnet", "ServicePlatform.Api.dll"] 