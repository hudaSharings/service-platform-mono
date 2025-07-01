// Unified API service that can use real backend or mock data
import { mockApi } from './mockApi';
console.log("Mock:" +JSON.stringify(process.env.NEXT_PUBLIC_USE_MOCK_API));
// Configuration
const USE_MOCK_API = process.env.NEXT_PUBLIC_USE_MOCK_API === 'true';
const API_BASE_URL = 'http://localhost:5111/api';

// API client configuration
const apiClient = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

// Get auth token from localStorage
const getAuthToken = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  return localStorage.getItem('authToken');
};

// Add auth header to requests
const getAuthHeaders = () => {
  const token = getAuthToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Generic API request function
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${apiClient.baseURL}${endpoint}`;
  const authHeaders = getAuthHeaders();
  const headers: Record<string, string> = {
    ...apiClient.headers,
    ...(authHeaders.Authorization && { Authorization: authHeaders.Authorization }),
    ...(options.headers as Record<string, string>),
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// API service class
class ApiService {
  // Authentication
  async login(email: string, password: string) {
    console.log("login isMock:" +JSON.stringify(USE_MOCK_API));
    if (USE_MOCK_API) {
      return mockApi.login(email, password);
    }

    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(userData: any) {
    console.log("register isMock:" +JSON.stringify(USE_MOCK_API));
    if (USE_MOCK_API) {
      return mockApi.register(userData);
    }

    return apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async forgotPassword(email: string) {
    if (USE_MOCK_API) {
      return mockApi.forgotPassword(email);
    }

    return apiRequest('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // Users
  async getUsers(page = 1, limit = 10, search = '') {
    if (USE_MOCK_API) {
      return mockApi.getUsers(page, limit, search);
    }

    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(search && { search }),
    });

    return apiRequest(`/users?${params}`);
  }

  async updateUserStatus(userId: string, isActive: boolean) {
    if (USE_MOCK_API) {
      return mockApi.updateUserStatus(userId, isActive);
    }

    return apiRequest(`/users/${userId}/status`, {
      method: 'PUT',
      body: JSON.stringify({ isActive }),
    });
  }

  async verifyUser(userId: string) {
    if (USE_MOCK_API) {
      return mockApi.verifyUser(userId);
    }

    return apiRequest(`/users/${userId}/verify`, {
      method: 'PUT',
    });
  }

  // Categories
  async getCategories() {
    if (USE_MOCK_API) {
      return mockApi.getCategories();
    }

    return apiRequest('/categories');
  }

  async createCategory(categoryData: any) {
    if (USE_MOCK_API) {
      return mockApi.createCategory(categoryData);
    }

    return apiRequest('/categories', {
      method: 'POST',
      body: JSON.stringify(categoryData),
    });
  }

  async updateCategory(id: string, categoryData: any) {
    if (USE_MOCK_API) {
      return mockApi.updateCategory(id, categoryData);
    }

    return apiRequest(`/categories/${id}`, {
      method: 'PUT',
      body: JSON.stringify(categoryData),
    });
  }

  async deleteCategory(id: string) {
    if (USE_MOCK_API) {
      return mockApi.deleteCategory(id);
    }

    return apiRequest(`/categories/${id}`, {
      method: 'DELETE',
    });
  }

  // Services
  async getServices(page = 1, limit = 10, filters: any = {}) {
    if (USE_MOCK_API) {
      return mockApi.getServices(page, limit, filters);
    }

    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...filters,
    });

    return apiRequest(`/services?${params}`);
  }

  async getServiceById(id: string) {
    if (USE_MOCK_API) {
      return mockApi.getServiceById(id);
    }

    return apiRequest(`/services/${id}`);
  }

  async deleteService(id: string) {
    if (USE_MOCK_API) {
      return mockApi.deleteService(id);
    }
    return apiRequest(`/services/${id}`, {
      method: 'DELETE',
    });
  }

  async updateServiceStatus(id: string, isVerified: boolean) {
    if (USE_MOCK_API) {
      return mockApi.updateServiceStatus(id, isVerified);
    }

    return apiRequest(`/services/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ isVerified }),
    });
  }

  // Contracts
  async getContracts(page = 1, limit = 10, filters: any = {}) {
    if (USE_MOCK_API) {
      return mockApi.getContracts(page, limit, filters);
    }

    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...filters,
    });

    return apiRequest(`/contracts?${params}`);
  }

  async createContract(contractData: any) {
    if (USE_MOCK_API) {
      return mockApi.createContract(contractData);
    }

    return apiRequest('/contracts', {
      method: 'POST',
      body: JSON.stringify(contractData),
    });
  }

  async updateContractStatus(id: string, status: 'Pending' | 'Active' | 'Completed' | 'Cancelled') {
    if (USE_MOCK_API) {
      return mockApi.updateContractStatus(id, status);
    }
    return apiRequest(`/contracts/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  // Ratings
  async getServiceRatings(serviceId: string) {
    if (USE_MOCK_API) {
      return mockApi.getServiceRatings(serviceId);
    }

    return apiRequest(`/services/${serviceId}/ratings`);
  }

  async createRating(ratingData: any) {
    if (USE_MOCK_API) {
      return mockApi.createRating(ratingData);
    }

    return apiRequest('/ratings', {
      method: 'POST',
      body: JSON.stringify(ratingData),
    });
  }

  // Notifications
  async getNotifications(userId: string) {
    if (USE_MOCK_API) {
      return mockApi.getNotifications(userId);
    }

    return apiRequest(`/users/${userId}/notifications`);
  }

  async markNotificationAsRead(id: string) {
    if (USE_MOCK_API) {
      return mockApi.markNotificationAsRead(id);
    }

    return apiRequest(`/notifications/${id}/read`, {
      method: 'PUT',
    });
  }

  // Dashboard
  async getDashboardStats() {
    if (USE_MOCK_API) {
      return mockApi.getDashboardStats();
    }

    return apiRequest('/admin/dashboard/stats');
  }

  // Search and Filters
  async getSearchFilters() {
    if (USE_MOCK_API) {
      return mockApi.getSearchFilters();
    }

    return apiRequest('/services/filters');
  }

  // Enhanced Dashboard
  async getDashboard(userId: string) {
    if (USE_MOCK_API) {
      return mockApi.getDashboard(userId);
    }

    return apiRequest(`/dashboard/${userId}`);
  }

  async getProviderDashboard(userId: string) {
    if (USE_MOCK_API) {
      return mockApi.getProviderDashboard(userId);
    }

    return apiRequest(`/dashboard/provider/${userId}`);
  }

  async getRequesterDashboard(userId: string) {
    if (USE_MOCK_API) {
      return mockApi.getRequesterDashboard(userId);
    }

    return apiRequest(`/dashboard/requester/${userId}`);
  }

  // Service Requests
  async getServiceRequests(userId: string, filters: any = {}) {
    if (USE_MOCK_API) {
      return mockApi.getServiceRequests(userId, filters);
    }

    const params = new URLSearchParams({
      userId,
      ...filters,
    });

    return apiRequest(`/service-requests?${params}`);
  }

  async getServiceRequestById(id: string) {
    if (USE_MOCK_API) {
      return mockApi.getServiceRequestById(id);
    }

    return apiRequest(`/service-requests/${id}`);
  }

  async updateServiceRequestStatus(id: string, status: string) {
    if (USE_MOCK_API) {
      return mockApi.updateServiceRequestStatus(id, status);
    }

    return apiRequest(`/service-requests/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  async createServiceRequest(requestData: any) {
    if (USE_MOCK_API) {
      return mockApi.createServiceRequest(requestData);
    }

    return apiRequest('/service-requests', {
      method: 'POST',
      body: JSON.stringify(requestData),
    });
  }

  async createEstimationRequest(requestData: any) {
    if (USE_MOCK_API) {
      return mockApi.createEstimationRequest(requestData);
    }

    return apiRequest('/estimation-requests', {
      method: 'POST',
      body: JSON.stringify(requestData),
    });
  }

  // Availability Management
  async getAvailability(userId: string) {
    if (USE_MOCK_API) {
      return mockApi.getAvailability(userId);
    }

    return apiRequest(`/availability/${userId}`);
  }

  async updateAvailability(userId: string, availabilityData: any[]) {
    if (USE_MOCK_API) {
      return mockApi.updateAvailability(userId, availabilityData);
    }

    return apiRequest(`/availability/${userId}`, {
      method: 'PUT',
      body: JSON.stringify({ availability: availabilityData }),
    });
  }

  // User Profile
  async getUserProfile(userId: string) {
    if (USE_MOCK_API) {
      return mockApi.getUserProfile(userId);
    }

    return apiRequest(`/users/${userId}/profile`);
  }

  async updateUserProfile(userId: string, profileData: any) {
    if (USE_MOCK_API) {
      return mockApi.updateUserProfile(userId, profileData);
    }

    return apiRequest(`/users/${userId}/profile`, {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  }

  async createService(serviceData: any) {
    if (USE_MOCK_API) {
      return mockApi.createService(serviceData);
    }
    return apiRequest('/services', {
      method: 'POST',
      body: JSON.stringify(serviceData),
    });
  }

  async updateService(id: string, serviceData: any) {
    if (USE_MOCK_API) {
      return mockApi.updateService(id, serviceData);
    }
    return apiRequest(`/services/${id}`, {
      method: 'PUT',
      body: JSON.stringify(serviceData),
    });
  }
}

// Export singleton instance
export const api = new ApiService();

// Export types for use in components
export type { User, ServiceCategory, Service, Contract, Rating, Notification } from './mocks'; 