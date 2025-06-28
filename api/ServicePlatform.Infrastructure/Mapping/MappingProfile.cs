using AutoMapper;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Domain.Entities;

namespace ServicePlatform.Infrastructure.Mapping;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        // User mappings
        CreateMap<User, UserDto>()
            .ForMember(dest => dest.FullName, opt => opt.MapFrom(src => $"{src.FirstName} {src.LastName}"));
        
        CreateMap<RegisterDto, User>()
            .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.UserName))
            .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
            .ForMember(dest => dest.PhoneNumber, opt => opt.MapFrom(src => src.PhoneNumber))
            .ForMember(dest => dest.UserType, opt => opt.MapFrom(src => src.UserType));

        CreateMap<RegisterRequest, User>()
            .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.UserName))
            .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
            .ForMember(dest => dest.PhoneNumber, opt => opt.MapFrom(src => src.PhoneNumber))
            .ForMember(dest => dest.UserType, opt => opt.MapFrom(src => src.UserType));

        CreateMap<UpdateProfileDto, User>();
        CreateMap<UpdateProfileRequest, User>();

        // Service mappings
        CreateMap<Service, ServiceDto>()
            .ForMember(dest => dest.ProviderName, opt => opt.MapFrom(src => $"{src.Provider.FirstName} {src.Provider.LastName}"))
            .ForMember(dest => dest.CategoryName, opt => opt.MapFrom(src => src.Category.Name));

        CreateMap<CreateServiceDto, Service>();
        CreateMap<UpdateServiceDto, Service>();

        // ServiceCategory mappings
        CreateMap<ServiceCategory, ServiceCategoryDto>();
        CreateMap<CreateServiceCategoryDto, ServiceCategory>();
        CreateMap<UpdateServiceCategoryDto, ServiceCategory>();

        // Contract mappings
        CreateMap<Contract, ContractDto>()
            .ForMember(dest => dest.ProviderName, opt => opt.MapFrom(src => $"{src.Provider.FirstName} {src.Provider.LastName}"))
            .ForMember(dest => dest.RequesterName, opt => opt.MapFrom(src => $"{src.Requester.FirstName} {src.Requester.LastName}"))
            .ForMember(dest => dest.ServiceTitle, opt => opt.MapFrom(src => src.Service.Title));

        CreateMap<CreateContractDto, Contract>();
        CreateMap<UpdateContractDto, Contract>();

        // Payment mappings
        CreateMap<Payment, PaymentDto>();
        CreateMap<CreatePaymentDto, Payment>();

        // Rating mappings
        CreateMap<Rating, RatingDto>()
            .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => $"{src.Rater.FirstName} {src.Rater.LastName}"));

        CreateMap<CreateRatingDto, Rating>();

        // Notification mappings
        CreateMap<Notification, NotificationDto>();
        CreateMap<CreateNotificationDto, Notification>();

        // ServiceRequest mappings
        CreateMap<ServiceRequest, ServiceRequestDto>()
            .ForMember(dest => dest.RequesterName, opt => opt.MapFrom(src => $"{src.Requester.FirstName} {src.Requester.LastName}"));

        CreateMap<CreateServiceRequestDto, ServiceRequest>();
        CreateMap<UpdateServiceRequestDto, ServiceRequest>();

        // ServiceRequestResponse mappings
        CreateMap<ServiceRequestResponse, ServiceRequestResponseDto>()
            .ForMember(dest => dest.ProviderName, opt => opt.MapFrom(src => $"{src.Provider.FirstName} {src.Provider.LastName}"));

        CreateMap<CreateServiceRequestResponseDto, ServiceRequestResponse>();

        // Availability mappings
        CreateMap<Availability, AvailabilityDto>();
        CreateMap<AvailabilityRequest, Availability>();
        CreateMap<UpdateAvailabilityDto, Availability>();

        // ServicePricing mappings
        CreateMap<ServicePricing, ServicePricingDto>();
        CreateMap<CreateServicePricingDto, ServicePricing>();
        CreateMap<UpdateServicePricingDto, ServicePricing>();

        // ContractSession mappings
        CreateMap<CreateContractSessionDto, ContractSession>();
        CreateMap<UpdateContractSessionDto, ContractSession>();

        // UserDocument mappings
        CreateMap<UserDocument, UserDocumentDto>();
        CreateMap<CreateUserDocumentDto, UserDocument>();

        // SystemSetting mappings
        CreateMap<SystemSetting, SystemSettingDto>();
        CreateMap<CreateSystemSettingDto, SystemSetting>();
        CreateMap<UpdateSystemSettingDto, SystemSetting>();

        // AuditLog mappings
        CreateMap<AuditLog, AuditLogDto>();

        // Additional mappings for request DTOs
        CreateMap<RegisterRequest, User>()
            .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.UserName))
            .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
            .ForMember(dest => dest.PhoneNumber, opt => opt.MapFrom(src => src.PhoneNumber))
            .ForMember(dest => dest.UserType, opt => opt.MapFrom(src => src.UserType));

        CreateMap<UpdateProfileRequest, User>();
        CreateMap<CreateContractRequest, Contract>();
        CreateMap<CreateServiceCategoryRequest, ServiceCategory>();
        CreateMap<UpdateServiceCategoryRequest, ServiceCategory>();
        CreateMap<CreateRatingRequest, Rating>();
        CreateMap<UpdateRatingRequest, Rating>();
        CreateMap<CreatePaymentRequest, Payment>();
        CreateMap<CreateContractSessionRequest, ContractSession>();
        CreateMap<UpdateContractSessionRequest, ContractSession>();
        CreateMap<AvailabilityRequest, Availability>();
        CreateMap<ServicePricingRequest, ServicePricing>();
    }
} 