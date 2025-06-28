// Mock API service for standalone UI development
import { mockUsers, mockCategories, mockServices, mockContracts, mockRatings, mockNotifications, mockDashboardStats, mockSearchFilters } from './mocks';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API responses
export const mockApi = {
  // Authentication
  async login(email: string, password: string) {
    await delay(1000);
    
    const user = mockUsers.find(u => u.email === email);
    if (!user || password !== 'password') {
      throw new Error('Invalid email or password');
    }
    
    return {
      user,
      token: 'mock-jwt-token-' + Date.now(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    };
  },

  async register(userData: any) {
    await delay(1500);
    
    const newUser = {
      id: (mockUsers.length + 1).toString(),
      ...userData,
      isVerified: false,
      isActive: true,
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString()
    };
    
    return {
      user: newUser,
      token: 'mock-jwt-token-' + Date.now(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    };
  },

  async forgotPassword(email: string) {
    await delay(800);
    return { message: 'Password reset email sent successfully' };
  },

  // Users
  async getUsers(page = 1, limit = 10, search = '') {
    await delay(500);
    
    let filteredUsers = mockUsers;
    if (search) {
      filteredUsers = mockUsers.filter(user => 
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedUsers = filteredUsers.slice(start, end);
    
    return {
      users: paginatedUsers,
      total: filteredUsers.length,
      page,
      limit,
      totalPages: Math.ceil(filteredUsers.length / limit)
    };
  },

  async updateUserStatus(userId: string, isActive: boolean) {
    await delay(300);
    const user = mockUsers.find(u => u.id === userId);
    if (user) {
      user.isActive = isActive;
    }
    return { message: 'User status updated successfully' };
  },

  async verifyUser(userId: string) {
    await delay(300);
    const user = mockUsers.find(u => u.id === userId);
    if (user) {
      user.isVerified = true;
    }
    return { message: 'User verified successfully' };
  },

  // Categories
  async getCategories() {
    await delay(300);
    return mockCategories;
  },

  async createCategory(categoryData: any) {
    await delay(500);
    const newCategory = {
      id: (mockCategories.length + 1).toString(),
      ...categoryData,
      isActive: true,
      serviceCount: 0
    };
    return newCategory;
  },

  async updateCategory(id: string, categoryData: any) {
    await delay(300);
    const category = mockCategories.find(c => c.id === id);
    if (category) {
      Object.assign(category, categoryData);
    }
    return category;
  },

  async deleteCategory(id: string) {
    await delay(300);
    const index = mockCategories.findIndex(c => c.id === id);
    if (index > -1) {
      mockCategories.splice(index, 1);
    }
    return { message: 'Category deleted successfully' };
  },

  // Services
  async getServices(page = 1, limit = 10, filters: any = {}) {
    await delay(600);
    
    let filteredServices = mockServices;
    
    if (filters.categoryId) {
      filteredServices = filteredServices.filter(s => s.categoryId === filters.categoryId);
    }
    
    if (filters.search) {
      filteredServices = filteredServices.filter(s => 
        s.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        s.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    if (filters.location) {
      filteredServices = filteredServices.filter(s => 
        s.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    if (filters.minRating) {
      filteredServices = filteredServices.filter(s => s.rating >= filters.minRating);
    }
    
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedServices = filteredServices.slice(start, end);
    
    return {
      services: paginatedServices,
      total: filteredServices.length,
      page,
      limit,
      totalPages: Math.ceil(filteredServices.length / limit)
    };
  },

  async getServiceById(id: string) {
    await delay(300);
    const service = mockServices.find(s => s.id === id);
    if (!service) {
      throw new Error('Service not found');
    }
    return service;
  },

  async updateServiceStatus(id: string, isVerified: boolean) {
    await delay(300);
    const service = mockServices.find(s => s.id === id);
    if (service) {
      service.isVerified = isVerified;
    }
    return { message: 'Service status updated successfully' };
  },

  // Contracts
  async getContracts(page = 1, limit = 10, filters: any = {}) {
    await delay(500);
    
    let filteredContracts = mockContracts;
    
    if (filters.status) {
      filteredContracts = filteredContracts.filter(c => c.status === filters.status);
    }
    
    if (filters.userId) {
      filteredContracts = filteredContracts.filter(c => 
        c.providerId === filters.userId || c.requesterId === filters.userId
      );
    }
    
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedContracts = filteredContracts.slice(start, end);
    
    return {
      contracts: paginatedContracts,
      total: filteredContracts.length,
      page,
      limit,
      totalPages: Math.ceil(filteredContracts.length / limit)
    };
  },

  async createContract(contractData: any) {
    await delay(800);
    const newContract = {
      id: (mockContracts.length + 1).toString(),
      ...contractData,
      status: 'Pending',
      paymentStatus: 'Pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    return newContract;
  },

  async updateContractStatus(id: string, status: 'Pending' | 'Active' | 'Completed' | 'Cancelled') {
    await delay(300);
    const contract = mockContracts.find(c => c.id === id);
    if (contract) {
      contract.status = status;
      contract.updatedAt = new Date().toISOString();
    }
    return { message: 'Contract status updated successfully' };
  },

  // Ratings
  async getServiceRatings(serviceId: string) {
    await delay(300);
    return mockRatings.filter(r => r.serviceId === serviceId);
  },

  async createRating(ratingData: any) {
    await delay(500);
    const newRating = {
      id: (mockRatings.length + 1).toString(),
      ...ratingData,
      createdAt: new Date().toISOString()
    };
    return newRating;
  },

  // Notifications
  async getNotifications(userId: string) {
    await delay(300);
    return mockNotifications.filter(n => n.userId === userId);
  },

  async markNotificationAsRead(id: string) {
    await delay(200);
    const notification = mockNotifications.find(n => n.id === id);
    if (notification) {
      notification.isRead = true;
    }
    return { message: 'Notification marked as read' };
  },

  // Dashboard
  async getDashboardStats() {
    await delay(400);
    return mockDashboardStats;
  },

  // Search and Filters
  async getSearchFilters() {
    await delay(200);
    return mockSearchFilters;
  }
};

// Mock API error handler
export const handleApiError = (error: any) => {
  console.error('API Error:', error);
  
  if (error.message) {
    return { error: error.message };
  }
  
  return { error: 'An unexpected error occurred' };
};

// Mock API success handler
export const handleApiSuccess = (data: any) => {
  return { data, success: true };
}; 