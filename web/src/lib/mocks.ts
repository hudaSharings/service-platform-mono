// Mock data for standalone UI development

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  userType: 'Provider' | 'Requester' | 'Admin';
  isVerified: boolean;
  isActive: boolean;
  profilePicture?: string;
  createdAt: string;
  lastLoginAt: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  isActive: boolean;
  serviceCount: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  categoryName: string;
  providerId: string;
  providerName: string;
  providerAvatar?: string;
  hourlyRate: number;
  weeklyRate: number;
  monthlyRate: number;
  fixedPrice?: number;
  location: string;
  isAvailable: boolean;
  isVerified: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];
  images: string[];
  createdAt: string;
}

export interface Contract {
  id: string;
  serviceId: string;
  serviceTitle: string;
  providerId: string;
  providerName: string;
  requesterId: string;
  requesterName: string;
  contractType: 'Hourly' | 'Weekly' | 'Monthly' | 'FixedPrice';
  startDate: string;
  endDate?: string;
  totalAmount: number;
  status: 'Pending' | 'Active' | 'Completed' | 'Cancelled';
  paymentStatus: 'Pending' | 'Paid' | 'Refunded';
  createdAt: string;
  updatedAt: string;
}

export interface Availability {
  id: string;
  serviceId: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface Rating {
  id: string;
  serviceId: string;
  contractId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'Info' | 'Success' | 'Warning' | 'Error';
  isRead: boolean;
  createdAt: string;
}

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@serviceplatform.com',
    firstName: 'Admin',
    lastName: 'User',
    phoneNumber: '+1234567890',
    userType: 'Admin',
    isVerified: true,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    lastLoginAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '+1234567891',
    userType: 'Provider',
    isVerified: true,
    isActive: true,
    profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    createdAt: '2024-01-02T00:00:00Z',
    lastLoginAt: '2024-01-15T09:15:00Z'
  },
  {
    id: '3',
    email: 'jane.smith@example.com',
    firstName: 'Jane',
    lastName: 'Smith',
    phoneNumber: '+1234567892',
    userType: 'Requester',
    isVerified: true,
    isActive: true,
    profilePicture: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    createdAt: '2024-01-03T00:00:00Z',
    lastLoginAt: '2024-01-15T11:45:00Z'
  },
  {
    id: '4',
    email: 'mike.wilson@example.com',
    firstName: 'Mike',
    lastName: 'Wilson',
    phoneNumber: '+1234567893',
    userType: 'Provider',
    isVerified: false,
    isActive: true,
    createdAt: '2024-01-04T00:00:00Z',
    lastLoginAt: '2024-01-14T16:20:00Z'
  }
];

// Mock Service Categories
export const mockCategories: ServiceCategory[] = [
  {
    id: '1',
    name: 'Housekeeping',
    description: 'Professional cleaning and housekeeping services',
    icon: '🏠',
    isActive: true,
    serviceCount: 15
  },
  {
    id: '2',
    name: 'Cooking',
    description: 'Chef and cooking services for events and daily meals',
    icon: '👨‍🍳',
    isActive: true,
    serviceCount: 8
  },
  {
    id: '3',
    name: 'Driving',
    description: 'Professional driving and transportation services',
    icon: '🚗',
    isActive: true,
    serviceCount: 12
  },
  {
    id: '4',
    name: 'Gardening',
    description: 'Landscaping and garden maintenance services',
    icon: '🌱',
    isActive: true,
    serviceCount: 6
  },
  {
    id: '5',
    name: 'Pet Care',
    description: 'Pet sitting, walking, and grooming services',
    icon: '🐕',
    isActive: true,
    serviceCount: 10
  },
  {
    id: '6',
    name: 'Tutoring',
    description: 'Educational tutoring and academic support',
    icon: '📚',
    isActive: true,
    serviceCount: 7
  }
];

// Mock Services
export const mockServices: Service[] = [
  {
    id: '1',
    title: 'Professional House Cleaning',
    description: 'Comprehensive house cleaning service including dusting, vacuuming, mopping, and bathroom cleaning. Perfect for busy professionals.',
    categoryId: '1',
    categoryName: 'Housekeeping',
    providerId: '2',
    providerName: 'John Doe',
    providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    hourlyRate: 25,
    weeklyRate: 400,
    monthlyRate: 1500,
    location: 'New York, NY',
    isAvailable: true,
    isVerified: true,
    rating: 4.8,
    reviewCount: 45,
    tags: ['cleaning', 'housekeeping', 'professional'],
    images: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    ],
    createdAt: '2024-01-05T00:00:00Z'
  },
  {
    id: '2',
    title: 'Private Chef Services',
    description: 'Experienced chef available for private events, dinner parties, and special occasions. Custom menu planning included.',
    categoryId: '2',
    categoryName: 'Cooking',
    providerId: '2',
    providerName: 'John Doe',
    providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    hourlyRate: 50,
    weeklyRate: 800,
    monthlyRate: 3000,
    location: 'Los Angeles, CA',
    isAvailable: true,
    isVerified: true,
    rating: 4.9,
    reviewCount: 32,
    tags: ['chef', 'cooking', 'events'],
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
    ],
    createdAt: '2024-01-06T00:00:00Z'
  },
  {
    id: '3',
    title: 'Professional Driving Service',
    description: 'Safe and reliable driving service for business meetings, airport transfers, and special events.',
    categoryId: '3',
    categoryName: 'Driving',
    providerId: '4',
    providerName: 'Mike Wilson',
    providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    hourlyRate: 35,
    weeklyRate: 600,
    monthlyRate: 2200,
    location: 'Chicago, IL',
    isAvailable: true,
    isVerified: false,
    rating: 4.5,
    reviewCount: 18,
    tags: ['driving', 'transportation', 'professional'],
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop'
    ],
    createdAt: '2024-01-07T00:00:00Z'
  },
  {
    id: '4',
    title: 'Garden Maintenance',
    description: 'Complete garden maintenance including mowing, trimming, planting, and seasonal care.',
    categoryId: '4',
    categoryName: 'Gardening',
    providerId: '2',
    providerName: 'John Doe',
    providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    hourlyRate: 30,
    weeklyRate: 500,
    monthlyRate: 1800,
    location: 'Miami, FL',
    isAvailable: true,
    isVerified: true,
    rating: 4.7,
    reviewCount: 28,
    tags: ['gardening', 'landscaping', 'maintenance'],
    images: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop'
    ],
    createdAt: '2024-01-08T00:00:00Z'
  },
  {
    id: '5',
    title: 'One-Time Deep Cleaning',
    description: 'Comprehensive one-time deep cleaning service for homes and offices. Includes all areas and surfaces.',
    categoryId: '1',
    categoryName: 'Housekeeping',
    providerId: '2',
    providerName: 'John Doe',
    providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    hourlyRate: 0,
    weeklyRate: 0,
    monthlyRate: 0,
    fixedPrice: 150,
    location: 'New York, NY',
    isAvailable: true,
    isVerified: true,
    rating: 4.9,
    reviewCount: 67,
    tags: ['cleaning', 'deep-cleaning', 'one-time'],
    images: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    ],
    createdAt: '2024-01-09T00:00:00Z'
  }
];

// Mock Contracts
export const mockContracts: Contract[] = [
  {
    id: '1',
    serviceId: '1',
    serviceTitle: 'Professional House Cleaning',
    providerId: '2',
    providerName: 'John Doe',
    requesterId: '3',
    requesterName: 'Jane Smith',
    contractType: 'Weekly',
    startDate: '2024-01-15T00:00:00Z',
    endDate: '2024-02-15T00:00:00Z',
    totalAmount: 400,
    status: 'Active',
    paymentStatus: 'Paid',
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: '2',
    serviceId: '2',
    serviceTitle: 'Private Chef Services',
    providerId: '2',
    providerName: 'John Doe',
    requesterId: '3',
    requesterName: 'Jane Smith',
    contractType: 'FixedPrice',
    startDate: '2024-01-20T00:00:00Z',
    totalAmount: 200,
    status: 'Pending',
    paymentStatus: 'Pending',
    createdAt: '2024-01-18T00:00:00Z',
    updatedAt: '2024-01-18T00:00:00Z'
  },
  {
    id: '3',
    serviceId: '3',
    serviceTitle: 'Professional Driving Service',
    providerId: '4',
    providerName: 'Mike Wilson',
    requesterId: '3',
    requesterName: 'Jane Smith',
    contractType: 'Hourly',
    startDate: '2024-01-12T00:00:00Z',
    endDate: '2024-01-12T04:00:00Z',
    totalAmount: 140,
    status: 'Completed',
    paymentStatus: 'Paid',
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-12T04:00:00Z'
  }
];

// Mock Ratings
export const mockRatings: Rating[] = [
  {
    id: '1',
    serviceId: '1',
    contractId: '1',
    userId: '3',
    userName: 'Jane Smith',
    rating: 5,
    comment: 'Excellent service! Very professional and thorough cleaning.',
    createdAt: '2024-01-16T00:00:00Z'
  },
  {
    id: '2',
    serviceId: '1',
    contractId: '1',
    userId: '3',
    userName: 'Jane Smith',
    rating: 4,
    comment: 'Good service, arrived on time and did a great job.',
    createdAt: '2024-01-17T00:00:00Z'
  }
];

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: '1',
    userId: '3',
    title: 'New Contract Request',
    message: 'You have a new contract request for "Professional House Cleaning"',
    type: 'Info',
    isRead: false,
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    userId: '3',
    title: 'Payment Received',
    message: 'Payment of $400 has been received for your weekly cleaning service',
    type: 'Success',
    isRead: true,
    createdAt: '2024-01-15T09:15:00Z'
  },
  {
    id: '3',
    userId: '2',
    title: 'Service Verification',
    message: 'Your "Professional House Cleaning" service has been verified',
    type: 'Success',
    isRead: false,
    createdAt: '2024-01-14T16:20:00Z'
  }
];

// Dashboard Statistics
export const mockDashboardStats = {
  totalUsers: 1250,
  totalServices: 89,
  totalContracts: 234,
  totalRevenue: 45600,
  activeUsers: 890,
  pendingVerifications: 12,
  recentActivity: [
    { type: 'new_user', message: 'New user registered', time: '2 hours ago' },
    { type: 'new_service', message: 'New service added', time: '4 hours ago' },
    { type: 'contract_completed', message: 'Contract completed', time: '6 hours ago' }
  ]
};

// Search and Filter Options
export const mockSearchFilters = {
  categories: mockCategories,
  priceRanges: [
    { label: 'Under $20', value: '0-20' },
    { label: '$20 - $50', value: '20-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: 'Over $100', value: '100+' }
  ],
  locations: [
    'New York, NY',
    'Los Angeles, CA',
    'Chicago, IL',
    'Miami, FL',
    'Houston, TX'
  ],
  ratings: [5, 4, 3, 2, 1]
}; 