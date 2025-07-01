// Mock API service for standalone UI development
import { mockUsers, mockCategories, mockServices, mockContracts, mockRatings, mockNotifications, mockDashboardStats, mockSearchFilters, mockServiceRequests, mockAvailability } from './mocks';

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
    
    // Transform to expected structure
    const transformedServices = paginatedServices.map(service => {
      // Find provider user
      const providerUser = mockUsers.find(u => u.id === service.providerId);
      return {
        ...service,
        provider: {
          id: service.providerId,
          firstName: providerUser?.firstName || service.providerName.split(' ')[0] || '',
          lastName: providerUser?.lastName || service.providerName.split(' ')[1] || '',
          profilePictureUrl: providerUser?.profilePicture || service.providerAvatar || '',
        },
        category: {
          id: service.categoryId,
          name: service.categoryName,
        }
      };
    });
    
    return {
      services: transformedServices,
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

    if (filters.contractType) {
      filteredContracts = filteredContracts.filter(c => c.contractType === filters.contractType);
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredContracts = filteredContracts.filter(c => 
        c.serviceTitle.toLowerCase().includes(searchTerm) ||
        c.providerName.toLowerCase().includes(searchTerm) ||
        c.requesterName.toLowerCase().includes(searchTerm)
      );
    }
    
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedContracts = filteredContracts.slice(start, end);

    // Transform contracts to match the expected interface
    const transformedContracts = paginatedContracts.map(contract => {
      // Find the corresponding service for base price
      const service = mockServices.find(s => s.id === contract.serviceId);
      
      return {
        id: contract.id,
        contractNumber: `CON-${contract.id.padStart(4, '0')}`,
        service: {
          id: contract.serviceId,
          title: contract.serviceTitle,
          basePrice: service?.hourlyRate || 0,
          currency: 'USD'
        },
        provider: {
          id: contract.providerId,
          firstName: contract.providerName.split(' ')[0] || '',
          lastName: contract.providerName.split(' ')[1] || '',
          profilePictureUrl: ''
        },
        requester: {
          id: contract.requesterId,
          firstName: contract.requesterName.split(' ')[0] || '',
          lastName: contract.requesterName.split(' ')[1] || '',
          profilePictureUrl: ''
        },
        contractType: contract.contractType,
        status: contract.status,
        totalAmount: contract.totalAmount,
        startDate: contract.startDate,
        endDate: contract.endDate,
        createdAt: contract.createdAt,
        paymentStatus: contract.paymentStatus
      };
    });
    
    return {
      contracts: transformedContracts,
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
    return {
      totalUsers: mockUsers.length,
      totalServices: mockServices.length,
      totalContracts: mockContracts.length,
      totalRevenue: mockContracts.reduce((sum, contract) => sum + contract.totalAmount, 0),
      activeUsers: mockUsers.filter(user => user.isActive).length,
      pendingVerifications: mockUsers.filter(user => !user.isVerified).length,
      recentActivity: [
        {
          type: 'user_registration',
          message: 'New user registered: Sarah Johnson',
          time: '2 hours ago'
        },
        {
          type: 'service_created',
          message: 'New service created: Professional House Cleaning',
          time: '4 hours ago'
        },
        {
          type: 'contract_completed',
          message: 'Contract completed: Private Chef Services',
          time: '6 hours ago'
        },
        {
          type: 'payment_received',
          message: 'Payment received: $200 for Garden Maintenance',
          time: '8 hours ago'
        },
        {
          type: 'user_verification',
          message: 'User verified: Mike Wilson',
          time: '1 day ago'
        }
      ]
    };
  },

  // Search and Filters
  async getSearchFilters() {
    await delay(200);
    return mockSearchFilters;
  },

  // Enhanced Dashboard
  async getDashboard(userId: string) {
    await delay(800);
    
    const user = mockUsers.find(u => u.id === userId);
    if (!user) {
      throw new Error('User not found');
    }

    const userStats = mockDashboardStats.find(s => {
      if (user.userType === 'Provider') {
        return user.id === '2' || user.id === '4' || user.id === '6';
      } else {
        return user.id === '3' || user.id === '5';
      }
    }) || mockDashboardStats[0];

    // Get user-specific data
    let userContracts = mockContracts.filter(c => 
      c.providerId === userId || c.requesterId === userId
    );

    let userServices = mockServices.filter(s => 
      s.providerId === userId
    );

    let userServiceRequests = mockServiceRequests.filter(sr => 
      sr.providerId === userId || sr.requesterId === userId
    );

    let userAvailability = mockAvailability.filter(a => 
      a.userId === userId
    );

    return {
      user,
      stats: userStats,
      recentContracts: userContracts.slice(0, 5),
      recentServices: userServices.slice(0, 5),
      serviceRequests: userServiceRequests,
      availability: userAvailability
    };
  },

  // Service Requests
  async getServiceRequests(userId: string, filters: any = {}) {
    await delay(500);
    
    let filteredRequests = mockServiceRequests.filter(sr => 
      sr.providerId === userId || sr.requesterId === userId
    );
    
    if (filters.status) {
      filteredRequests = filteredRequests.filter(sr => sr.status === filters.status);
    }
    
    if (filters.type) {
      filteredRequests = filteredRequests.filter(sr => sr.requestType === filters.type);
    }
    
    return {
      requests: filteredRequests,
      total: filteredRequests.length
    };
  },

  async getServiceRequestById(id: string) {
    await delay(300);
    const request = mockServiceRequests.find(sr => sr.id === id);
    if (!request) {
      throw new Error('Service request not found');
    }
    return request;
  },

  async updateServiceRequestStatus(id: string, status: string) {
    await delay(300);
    const request = mockServiceRequests.find(sr => sr.id === id);
    if (request) {
      request.status = status as any;
      request.updatedAt = new Date().toISOString();
    }
    return { message: 'Service request status updated successfully' };
  },

  async createServiceRequest(requestData: any) {
    await delay(500);
    const newRequest = {
      id: (mockServiceRequests.length + 1).toString(),
      ...requestData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    mockServiceRequests.push(newRequest);
    return newRequest;
  },

  async createEstimationRequest(requestData: any) {
    await delay(500);
    const requestNumber = mockServiceRequests.length + 1;
    const newRequest = {
      id: requestNumber.toString(),
      ...requestData,
      status: 'Pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    mockServiceRequests.push(newRequest);
    return { success: true, message: 'Estimation request created successfully', data: newRequest };
  },

  // Availability Management
  async getAvailability(userId: string) {
    await delay(300);
    return mockAvailability.filter(a => a.userId === userId);
  },

  async updateAvailability(userId: string, availabilityData: any[]) {
    await delay(500);
    // Remove existing availability for user
    const existingIndexes = mockAvailability
      .map((a, index) => a.userId === userId ? index : -1)
      .filter(index => index !== -1);
    
    existingIndexes.reverse().forEach(index => {
      mockAvailability.splice(index, 1);
    });
    
    // Add new availability
    availabilityData.forEach(data => {
      mockAvailability.push({
        id: (mockAvailability.length + 1).toString(),
        userId,
        ...data
      });
    });
    
    return { message: 'Availability updated successfully' };
  },

  // Enhanced User Profile
  async getUserProfile(userId: string) {
    await delay(300);
    const user = mockUsers.find(u => u.id === userId);
    if (!user) {
      throw new Error('User not found');
    }
    
    // Get user's services, contracts, and ratings
    const userServices = mockServices.filter(s => s.providerId === userId);
    const userContracts = mockContracts.filter(c => 
      c.providerId === userId || c.requesterId === userId
    );
    const userRatings = mockRatings.filter(r => {
      const service = mockServices.find(s => s.id === r.serviceId);
      return service?.providerId === userId;
    });
    
    return {
      user,
      services: userServices,
      contracts: userContracts,
      ratings: userRatings
    };
  },

  async updateUserProfile(userId: string, profileData: any) {
    await delay(500);
    const user = mockUsers.find(u => u.id === userId);
    if (user) {
      Object.assign(user, profileData);
    }
    return { message: 'Profile updated successfully' };
  },

  // Provider-specific endpoints
  async getProviderDashboard(userId: string) {
    await delay(800);
    
    const user = mockUsers.find(u => u.id === userId && u.userType === 'Provider');
    if (!user) {
      throw new Error('Provider not found');
    }

    const userStats = mockDashboardStats.find(s => {
      return user.id === '2' || user.id === '4' || user.id === '6';
    }) || mockDashboardStats[0];

    const pendingRequests = mockServiceRequests.filter(sr => 
      sr.providerId === userId && sr.status === 'Pending'
    );

    const upcomingServices = mockServiceRequests.filter(sr => 
      sr.providerId === userId && (sr.status === 'Accepted' || sr.status === 'InProgress')
    );

    const completedServices = mockServiceRequests.filter(sr => 
      sr.providerId === userId && sr.status === 'Completed'
    );

    const userAvailability = mockAvailability.filter(a => a.userId === userId);

    return {
      user,
      stats: userStats,
      pendingRequests,
      upcomingServices,
      completedServices,
      availability: userAvailability
    };
  },

  // Requester-specific endpoints
  async getRequesterDashboard(userId: string) {
    await delay(800);
    
    const user = mockUsers.find(u => u.id === userId && u.userType === 'Requester');
    if (!user) {
      throw new Error('Requester not found');
    }

    const userStats = mockDashboardStats.find(s => {
      return user.id === '3' || user.id === '5';
    }) || mockDashboardStats[1];

    const activeServices = mockServiceRequests.filter(sr => 
      sr.requesterId === userId && (sr.status === 'Accepted' || sr.status === 'InProgress')
    );

    const pastServices = mockServiceRequests.filter(sr => 
      sr.requesterId === userId && sr.status === 'Completed'
    );

    const pendingServices = mockServiceRequests.filter(sr => 
      sr.requesterId === userId && sr.status === 'Pending'
    );

    return {
      user,
      stats: userStats,
      activeServices,
      pastServices,
      pendingServices
    };
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