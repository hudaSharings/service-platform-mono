using System;

namespace ServicePlatform.Application.Interfaces
{
    public interface IUserContextService
    {
        Guid GetCurrentUserId();
    }
} 