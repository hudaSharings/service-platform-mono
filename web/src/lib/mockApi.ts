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
      return { data: null, success: false, message: 'Invalid email or password' };
    }
    
    return {
      data: {
        user,
        token: 'mock-jwt-token-' + Date.now(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      },
      success: true,
      message: 'Login successful'
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
      data: {
        user: newUser,
        token: 'mock-jwt-token-' + Date.now(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      },
      success: true,
      message: 'Registration successful'
    };
  },

  async forgotPassword(email: string) {
    await delay(800);
    return { data: null, success: true, message: 'Password reset email sent successfully' };
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
      data: {
        users: paginatedUsers,
        total: filteredUsers.length,
        page,
        limit,
        totalPages: Math.ceil(filteredUsers.length / limit)
      },
      success: true,
      message: 'Users fetched successfully'
    };
  },

  async updateUserStatus(userId: string, isActive: boolean) {
    await delay(300);
    const user = mockUsers.find(u => u.id === userId);
    if (user) {
      user.isActive = isActive;
      return { data: user, success: true, message: 'User status updated successfully' };
    }
    return { data: null, success: false, message: 'User not found' };
  },

  async verifyUser(userId: string) {
    await delay(300);
    const user = mockUsers.find(u => u.id === userId);
    if (user) {
      user.isVerified = true;
      return { data: user, success: true, message: 'User verified successfully' };
    }
    return { data: null, success: false, message: 'User not found' };
  },

  // Categories
  async getCategories() {
    await delay(300);
    return { data: mockCategories, success: true, message: 'Categories fetched successfully' };
  },

  async createCategory(categoryData: any) {
    await delay(500);
    const newCategory = {
      id: (mockCategories.length + 1).toString(),
      ...categoryData,
      isActive: true,
      serviceCount: 0
    };
    return { data: newCategory, success: true, message: 'Category created successfully' };
  },

  async updateCategory(id: string, categoryData: any) {
    await delay(300);
    const category = mockCategories.find(c => c.id === id);
    if (category) {
      Object.assign(category, categoryData);
      return { data: category, success: true, message: 'Category updated successfully' };
    }
    return { data: null, success: false, message: 'Category not found' };
  },

  async deleteCategory(id: string) {
    await delay(300);
    const index = mockCategories.findIndex(c => c.id === id);
    if (index > -1) {
      mockCategories.splice(index, 1);
      return { data: null, success: true, message: 'Category deleted successfully' };
    }
    return { data: null, success: false, message: 'Category not found' };
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
      data: {
        services: transformedServices,
        total: filteredServices.length,
        page,
        limit,
        totalPages: Math.ceil(filteredServices.length / limit)
      },
      success: true,
      message: 'Services fetched successfully'
    };
  },

  async getServiceById(id: string) {
    await delay(300);
    const service = mockServices.find(s => s.id === id);
    if (!service) {
      return { data: null, success: false, message: 'Service not found' };
    }
    return { data: service, success: true, message: 'Service fetched successfully' };
  },

  async updateServiceStatus(id: string, isVerified: boolean) {
    await delay(300);
    const service = mockServices.find(s => s.id === id);
    if (service) {
      service.isVerified = isVerified;
      return { data: service, success: true, message: 'Service status updated successfully' };
    }
    return { data: null, success: false, message: 'Service not found' };
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
    const transformedContracts = paginatedContracts.map(contract => {
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
      data: {
        contracts: transformedContracts,
        total: filteredContracts.length,
        page,
        limit,
        totalPages: Math.ceil(filteredContracts.length / limit)
      },
      success: true,
      message: 'Contracts fetched successfully'
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
    return { data: newContract, success: true, message: 'Contract created successfully' };
  },

  async updateContractStatus(id: string, status: 'Pending' | 'Active' | 'Completed' | 'Cancelled') {
    await delay(300);
    const contract = mockContracts.find(c => c.id === id);
    if (contract) {
      contract.status = status;
      contract.updatedAt = new Date().toISOString();
      return { data: contract, success: true, message: 'Contract status updated successfully' };
    }
    return { data: null, success: false, message: 'Contract not found' };
  },

  // Ratings
  async getServiceRatings(serviceId: string) {
    await delay(300);
    const ratings = mockRatings.filter(r => r.serviceId === serviceId);
    return { data: ratings, success: true, message: 'Service ratings fetched successfully' };
  },

  async createRating(ratingData: any) {
    await delay(500);
    const newRating = {
      id: (mockRatings.length + 1).toString(),
      ...ratingData,
      createdAt: new Date().toISOString()
    };
    return { data: newRating, success: true, message: 'Rating created successfully' };
  },

  // Notifications
  async getNotifications(userId: string) {
    await delay(300);
    const notifications = mockNotifications.filter(n => n.userId === userId);
    return { data: notifications, success: true, message: 'Notifications fetched successfully' };
  },

  async markNotificationAsRead(id: string) {
    await delay(200);
    const notification = mockNotifications.find(n => n.id === id);
    if (notification) {
      notification.isRead = true;
      return { data: notification, success: true, message: 'Notification marked as read' };
    }
    return { data: null, success: false, message: 'Notification not found' };
  },

  // Dashboard
  async getDashboardStats() {
    await delay(400);
    return {
      data: {
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
      },
      success: true,
      message: 'Dashboard stats fetched successfully'
    };
  },

  // Search and Filters
  async getSearchFilters() {
    await delay(200);
    return { data: mockSearchFilters, success: true, message: 'Search filters fetched successfully' };
  },

  // Enhanced Dashboard
  async getDashboard(userId: string) {
    await delay(800);
    const user = mockUsers.find(u => u.id === userId);
    if (!user) {
      return { data: null, success: false, message: 'User not found' };
    }
    const userStats = mockDashboardStats.find(s => {
      if (user.userType === 'Provider') {
        return user.id === '2' || user.id === '4' || user.id === '6';
      } else {
        return user.id === '3' || user.id === '5';
      }
    }) || mockDashboardStats[0];
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
      data: {
        user,
        stats: userStats,
        recentContracts: userContracts.slice(0, 5),
        recentServices: userServices.slice(0, 5),
        serviceRequests: userServiceRequests,
        availability: userAvailability
      },
      success: true,
      message: 'Dashboard data fetched successfully'
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
      data: {
        requests: filteredRequests,
        total: filteredRequests.length
      },
      success: true,
      message: 'Service requests fetched successfully'
    };
  },

  async getServiceRequestById(id: string) {
    await delay(300);
    const request = mockServiceRequests.find(sr => sr.id === id);
    if (!request) {
      return { data: null, success: false, message: 'Service request not found' };
    }
    return { data: request, success: true, message: 'Service request fetched successfully' };
  },

  async updateServiceRequestStatus(id: string, status: string) {
    await delay(300);
    const request = mockServiceRequests.find(sr => sr.id === id);
    if (request) {
      request.status = status as any;
      request.updatedAt = new Date().toISOString();
      return { data: request, success: true, message: 'Service request status updated successfully' };
    }
    return { data: null, success: false, message: 'Service request not found' };
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
    return { data: newRequest, success: true, message: 'Service request created successfully' };
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
    return { data: newRequest, success: true, message: 'Estimation request created successfully' };
  },

  // Availability Management
  async getAvailability(userId: string) {
    await delay(300);
    const availability = mockAvailability.filter(a => a.userId === userId);
    return { data: availability, success: true, message: 'Availability fetched successfully' };
  },

  async updateAvailability(userId: string, availabilityData: any[]) {
    await delay(500);
    const existingIndexes = mockAvailability
      .map((a, index) => a.userId === userId ? index : -1)
      .filter(index => index !== -1);
    existingIndexes.reverse().forEach(index => {
      mockAvailability.splice(index, 1);
    });
    availabilityData.forEach(data => {
      mockAvailability.push({
        id: (mockAvailability.length + 1).toString(),
        userId,
        ...data
      });
    });
    return { data: null, success: true, message: 'Availability updated successfully' };
  },

  // Enhanced User Profile
  async getUserProfile(userId: string) {
    await delay(300);
    const user = mockUsers.find(u => u.id === userId);
    if (!user) {
      return { data: null, success: false, message: 'User not found' };
    }
    const userServices = mockServices.filter(s => s.providerId === userId);
    const userContracts = mockContracts.filter(c => 
      c.providerId === userId || c.requesterId === userId
    );
    const userRatings = mockRatings.filter(r => {
      const service = mockServices.find(s => s.id === r.serviceId);
      return service?.providerId === userId;
    });
    return {
      data: {
        user,
        services: userServices,
        contracts: userContracts,
        ratings: userRatings
      },
      success: true,
      message: 'User profile fetched successfully'
    };
  },

  async updateUserProfile(userId: string, profileData: any) {
    await delay(500);
    const user = mockUsers.find(u => u.id === userId);
    if (user) {
      Object.assign(user, profileData);
      return { data: user, success: true, message: 'Profile updated successfully' };
    }
    return { data: null, success: false, message: 'User not found' };
  },

  // Provider-specific endpoints
  async getProviderDashboard(userId: string) {
    await delay(800);
    const user = mockUsers.find(u => u.id === userId && u.userType === 'Provider');
    if (!user) {
      return { data: null, success: false, message: 'Provider not found' };
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
      data: {
        user,
        stats: userStats,
        pendingRequests,
        upcomingServices,
        completedServices,
        availability: userAvailability
      },
      success: true,
      message: 'Provider dashboard data fetched successfully'
    };
  },

  // Requester-specific endpoints
  async getRequesterDashboard(userId: string) {
    await delay(800);
    const user = mockUsers.find(u => u.id === userId && u.userType === 'Requester');
    if (!user) {
      return { data: null, success: false, message: 'Requester not found' };
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
      data: {
        user,
        stats: userStats,
        activeServices,
        pastServices,
        pendingServices
      },
      success: true,
      message: 'Requester dashboard data fetched successfully'
    };
  },

  async createService(serviceData) {
    await delay(300);
    return { data: serviceData, success: true, message: 'Mock service created' };
  },
  async updateService(id, serviceData) {
    await delay(300);
    return { data: serviceData, success: true, message: 'Mock service updated' };
  },
  async deleteService(id) {
    await delay(300);
    return { data: id, success: true, message: 'Mock service deleted' };
  }
};

// Mock API error handler
export const handleApiError = (error: any) => {
  console.error('API Error:', error);
  return {
    data: null,
    success: false,
    message: error.message || 'An unexpected error occurred'
  };
};

// Mock API success handler
export const handleApiSuccess = (data: any, message: string = 'Operation successful') => {
  return { data, success: true, message };
}; 