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
  bio?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  skills?: string[];
  hourlyRate?: number;
  rating?: number;
  reviewCount?: number;
  totalEarnings?: number;
  totalServices?: number;
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

export interface ServiceRequest {
  id: string;
  serviceId: string;
  serviceTitle: string;
  requesterId: string;
  requesterName: string;
  requesterAvatar?: string;
  providerId: string;
  providerName: string;
  providerAvatar?: string;
  requestType: 'Hourly' | 'Weekly' | 'Monthly' | 'FixedPrice' | 'Estimation';
  startDate: string;
  endDate?: string;
  totalAmount: number;
  status: 'Pending' | 'Accepted' | 'Rejected' | 'InProgress' | 'Completed' | 'Cancelled';
  description: string;
  specialRequirements?: string;
  location: string;
  createdAt: string;
  updatedAt: string;
}

export interface Contract {
  id: string;
  serviceId: string;
  serviceTitle: string;
  providerId: string;
  providerName: string;
  requesterId: string;
  requesterName: string;
  contractType: 'Hourly' | 'Weekly' | 'Monthly' | 'FixedPrice' | 'Estimation';
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
  userId: string;
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

export interface DashboardStats {
  totalServices: number;
  totalContracts: number;
  totalEarnings: number;
  averageRating: number;
  activeContracts: number;
  pendingRequests: number;
  completedServices: number;
  upcomingServices: number;
  totalHours: number;
  monthlyEarnings: number;
}

// Mock Users with enhanced profile information
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
    bio: 'Professional housekeeper with 5+ years of experience. Specializing in deep cleaning and organization.',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'USA',
    skills: ['Deep Cleaning', 'Organization', 'Laundry', 'Pet Care'],
    hourlyRate: 25,
    rating: 4.8,
    reviewCount: 47,
    totalEarnings: 12500,
    totalServices: 89,
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
    address: '456 Oak Avenue',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90210',
    country: 'USA',
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
    bio: 'Experienced chef specializing in Italian and Mediterranean cuisine. Available for private events and meal prep.',
    address: '789 Pine Street',
    city: 'Chicago',
    state: 'IL',
    zipCode: '60601',
    country: 'USA',
    skills: ['Italian Cuisine', 'Mediterranean Cuisine', 'Meal Prep', 'Event Catering'],
    hourlyRate: 35,
    rating: 4.9,
    reviewCount: 23,
    totalEarnings: 8900,
    totalServices: 34,
    createdAt: '2024-01-04T00:00:00Z',
    lastLoginAt: '2024-01-14T16:20:00Z'
  },
  {
    id: '5',
    email: 'sarah.johnson@example.com',
    firstName: 'Sarah',
    lastName: 'Johnson',
    phoneNumber: '+1234567894',
    userType: 'Requester',
    isVerified: true,
    isActive: true,
    profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    address: '321 Elm Street',
    city: 'Miami',
    state: 'FL',
    zipCode: '33101',
    country: 'USA',
    createdAt: '2024-01-05T00:00:00Z',
    lastLoginAt: '2024-01-15T08:30:00Z'
  },
  {
    id: '6',
    email: 'david.brown@example.com',
    firstName: 'David',
    lastName: 'Brown',
    phoneNumber: '+1234567895',
    userType: 'Provider',
    isVerified: true,
    isActive: true,
    profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Professional driver with clean record. Specializing in airport transfers and business travel.',
    address: '654 Maple Drive',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98101',
    country: 'USA',
    skills: ['Airport Transfers', 'Business Travel', 'Luxury Vehicles', 'Long Distance'],
    hourlyRate: 30,
    rating: 4.7,
    reviewCount: 56,
    totalEarnings: 18200,
    totalServices: 124,
    createdAt: '2024-01-06T00:00:00Z',
    lastLoginAt: '2024-01-15T12:15:00Z'
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
    serviceCount: 16
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
  },
  {
    id: '6',
    title: 'Laundry and Dry Cleaning',
    description: 'Professional laundry and dry cleaning services for clothes, linens, and delicate fabrics. Pickup and delivery available. Pricing is estimated after inspection of items.',
    categoryId: '1',
    categoryName: 'Housekeeping',
    providerId: '4',
    providerName: 'Mike Wilson',
    providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    hourlyRate: 0,
    weeklyRate: 0,
    monthlyRate: 0,
    location: 'Chicago, IL',
    isAvailable: true,
    isVerified: true,
    rating: 4.6,
    reviewCount: 34,
    tags: ['laundry', 'dry-cleaning', 'pickup-delivery', 'housekeeping', 'inspection-based'],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop'
    ],
    contractTypes: ['Estimation'],
    createdAt: '2024-01-10T00:00:00Z'
  }
];

// Mock Service Requests
export const mockServiceRequests: ServiceRequest[] = [
  {
    id: '1',
    serviceId: '1',
    serviceTitle: 'Professional House Cleaning',
    requesterId: '3',
    requesterName: 'Jane Smith',
    requesterAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    providerId: '2',
    providerName: 'John Doe',
    providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    requestType: 'Hourly',
    startDate: '2024-01-20T09:00:00Z',
    endDate: '2024-01-20T13:00:00Z',
    totalAmount: 100,
    status: 'Pending',
    description: 'Need weekly house cleaning service for my 2-bedroom apartment. Prefer morning hours.',
    specialRequirements: 'Please bring eco-friendly cleaning products',
    location: 'Los Angeles, CA',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    serviceId: '2',
    serviceTitle: 'Private Chef Services',
    requesterId: '5',
    requesterName: 'Sarah Johnson',
    requesterAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    providerId: '4',
    providerName: 'Mike Wilson',
    providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    requestType: 'FixedPrice',
    startDate: '2024-01-25T18:00:00Z',
    endDate: '2024-01-25T22:00:00Z',
    totalAmount: 200,
    status: 'Accepted',
    description: 'Dinner party for 8 people. Italian cuisine preferred.',
    specialRequirements: 'Vegetarian options needed for 2 guests',
    location: 'Miami, FL',
    createdAt: '2024-01-14T14:20:00Z',
    updatedAt: '2024-01-15T09:15:00Z'
  },
  {
    id: '3',
    serviceId: '3',
    serviceTitle: 'Professional Driving Service',
    requesterId: '3',
    requesterName: 'Jane Smith',
    requesterAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    providerId: '6',
    providerName: 'David Brown',
    providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    requestType: 'Hourly',
    startDate: '2024-01-22T07:00:00Z',
    endDate: '2024-01-22T09:00:00Z',
    totalAmount: 70,
    status: 'InProgress',
    description: 'Airport pickup from LAX to downtown LA.',
    specialRequirements: 'Flight arrives at 6:30 AM, please arrive 15 minutes early',
    location: 'Los Angeles, CA',
    createdAt: '2024-01-13T16:45:00Z',
    updatedAt: '2024-01-15T11:30:00Z'
  },
  {
    id: '4',
    serviceId: '4',
    serviceTitle: 'Garden Maintenance',
    requesterId: '5',
    requesterName: 'Sarah Johnson',
    requesterAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    providerId: '2',
    providerName: 'John Doe',
    providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    requestType: 'Weekly',
    startDate: '2024-01-23T08:00:00Z',
    endDate: '2024-01-23T12:00:00Z',
    totalAmount: 500,
    status: 'Completed',
    description: 'Weekly garden maintenance including mowing, trimming, and watering.',
    specialRequirements: 'Please focus on the rose garden area',
    location: 'Miami, FL',
    createdAt: '2024-01-10T12:00:00Z',
    updatedAt: '2024-01-15T14:20:00Z'
  },
  {
    id: '5',
    serviceId: '5',
    serviceTitle: 'One-Time Deep Cleaning',
    requesterId: '3',
    requesterName: 'Jane Smith',
    requesterAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    providerId: '2',
    providerName: 'John Doe',
    providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    requestType: 'FixedPrice',
    startDate: '2024-01-28T10:00:00Z',
    endDate: '2024-01-28T16:00:00Z',
    totalAmount: 150,
    status: 'Pending',
    description: 'Deep cleaning needed for move-out. 3-bedroom house.',
    specialRequirements: 'Include carpet cleaning and window washing',
    location: 'Los Angeles, CA',
    createdAt: '2024-01-15T13:45:00Z',
    updatedAt: '2024-01-15T13:45:00Z'
  },
  {
    id: '6',
    serviceId: '6',
    serviceTitle: 'Laundry and Dry Cleaning',
    requesterId: '5',
    requesterName: 'Sarah Johnson',
    requesterAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    providerId: '4',
    providerName: 'Mike Wilson',
    providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    requestType: 'Estimation',
    startDate: '2024-01-30T09:00:00Z',
    endDate: '2024-01-30T17:00:00Z',
    totalAmount: 85,
    status: 'InProgress',
    description: 'Need laundry and dry cleaning service for various items including suits, dresses, and delicate fabrics. Require pickup and delivery.',
    specialRequirements: 'Please inspect items first and provide cost estimate. Use hypoallergenic detergent and handle delicate items carefully. Some items have stains that need special treatment.',
    location: 'Chicago, IL',
    createdAt: '2024-01-16T11:20:00Z',
    updatedAt: '2024-01-16T14:30:00Z'
  }
];

// Mock Availability
export const mockAvailability: Availability[] = [
  // John Doe's availability
  { id: '1', userId: '2', dayOfWeek: 1, startTime: '08:00', endTime: '17:00', isAvailable: true },
  { id: '2', userId: '2', dayOfWeek: 2, startTime: '08:00', endTime: '17:00', isAvailable: true },
  { id: '3', userId: '2', dayOfWeek: 3, startTime: '08:00', endTime: '17:00', isAvailable: true },
  { id: '4', userId: '2', dayOfWeek: 4, startTime: '08:00', endTime: '17:00', isAvailable: true },
  { id: '5', userId: '2', dayOfWeek: 5, startTime: '08:00', endTime: '17:00', isAvailable: true },
  { id: '6', userId: '2', dayOfWeek: 6, startTime: '09:00', endTime: '15:00', isAvailable: true },
  { id: '7', userId: '2', dayOfWeek: 0, startTime: '10:00', endTime: '14:00', isAvailable: false },
  
  // Mike Wilson's availability
  { id: '8', userId: '4', dayOfWeek: 1, startTime: '10:00', endTime: '20:00', isAvailable: true },
  { id: '9', userId: '4', dayOfWeek: 2, startTime: '10:00', endTime: '20:00', isAvailable: true },
  { id: '10', userId: '4', dayOfWeek: 3, startTime: '10:00', endTime: '20:00', isAvailable: true },
  { id: '11', userId: '4', dayOfWeek: 4, startTime: '10:00', endTime: '20:00', isAvailable: true },
  { id: '12', userId: '4', dayOfWeek: 5, startTime: '10:00', endTime: '20:00', isAvailable: true },
  { id: '13', userId: '4', dayOfWeek: 6, startTime: '12:00', endTime: '22:00', isAvailable: true },
  { id: '14', userId: '4', dayOfWeek: 0, startTime: '12:00', endTime: '18:00', isAvailable: true },
  
  // David Brown's availability
  { id: '15', userId: '6', dayOfWeek: 1, startTime: '06:00', endTime: '22:00', isAvailable: true },
  { id: '16', userId: '6', dayOfWeek: 2, startTime: '06:00', endTime: '22:00', isAvailable: true },
  { id: '17', userId: '6', dayOfWeek: 3, startTime: '06:00', endTime: '22:00', isAvailable: true },
  { id: '18', userId: '6', dayOfWeek: 4, startTime: '06:00', endTime: '22:00', isAvailable: true },
  { id: '19', userId: '6', dayOfWeek: 5, startTime: '06:00', endTime: '22:00', isAvailable: true },
  { id: '20', userId: '6', dayOfWeek: 6, startTime: '08:00', endTime: '20:00', isAvailable: true },
  { id: '21', userId: '6', dayOfWeek: 0, startTime: '08:00', endTime: '18:00', isAvailable: true }
];

// Enhanced Mock Contracts
export const mockContracts: Contract[] = [
  {
    id: '1',
    serviceId: '1',
    serviceTitle: 'Professional House Cleaning',
    providerId: '2',
    providerName: 'John Doe',
    requesterId: '3',
    requesterName: 'Jane Smith',
    contractType: 'Hourly',
    startDate: '2024-01-20T09:00:00Z',
    endDate: '2024-01-20T13:00:00Z',
    totalAmount: 100,
    status: 'Active',
    paymentStatus: 'Paid',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    serviceId: '2',
    serviceTitle: 'Private Chef Services',
    providerId: '4',
    providerName: 'Mike Wilson',
    requesterId: '5',
    requesterName: 'Sarah Johnson',
    contractType: 'FixedPrice',
    startDate: '2024-01-25T18:00:00Z',
    endDate: '2024-01-25T22:00:00Z',
    totalAmount: 200,
    status: 'Pending',
    paymentStatus: 'Pending',
    createdAt: '2024-01-14T14:20:00Z',
    updatedAt: '2024-01-15T09:15:00Z'
  },
  {
    id: '3',
    serviceId: '3',
    serviceTitle: 'Professional Driving Service',
    providerId: '6',
    providerName: 'David Brown',
    requesterId: '3',
    requesterName: 'Jane Smith',
    contractType: 'Hourly',
    startDate: '2024-01-22T07:00:00Z',
    endDate: '2024-01-22T09:00:00Z',
    totalAmount: 70,
    status: 'Active',
    paymentStatus: 'Paid',
    createdAt: '2024-01-13T16:45:00Z',
    updatedAt: '2024-01-15T11:30:00Z'
  },
  {
    id: '4',
    serviceId: '4',
    serviceTitle: 'Garden Maintenance',
    providerId: '2',
    providerName: 'John Doe',
    requesterId: '5',
    requesterName: 'Sarah Johnson',
    contractType: 'Weekly',
    startDate: '2024-01-23T08:00:00Z',
    endDate: '2024-01-23T12:00:00Z',
    totalAmount: 500,
    status: 'Completed',
    paymentStatus: 'Paid',
    createdAt: '2024-01-10T12:00:00Z',
    updatedAt: '2024-01-15T14:20:00Z'
  },
  {
    id: '5',
    serviceId: '1',
    serviceTitle: 'Professional House Cleaning',
    providerId: '2',
    providerName: 'John Doe',
    requesterId: '5',
    requesterName: 'Sarah Johnson',
    contractType: 'Weekly',
    startDate: '2024-01-16T09:00:00Z',
    endDate: '2024-01-16T13:00:00Z',
    totalAmount: 100,
    status: 'Completed',
    paymentStatus: 'Paid',
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-01-16T13:00:00Z'
  },
  {
    id: '6',
    serviceId: '3',
    serviceTitle: 'Professional Driving Service',
    providerId: '6',
    providerName: 'David Brown',
    requesterId: '5',
    requesterName: 'Sarah Johnson',
    contractType: 'Hourly',
    startDate: '2024-01-18T14:00:00Z',
    endDate: '2024-01-18T16:00:00Z',
    totalAmount: 60,
    status: 'Completed',
    paymentStatus: 'Paid',
    createdAt: '2024-01-12T10:00:00Z',
    updatedAt: '2024-01-18T16:00:00Z'
  },
  {
    id: '7',
    serviceId: '6',
    serviceTitle: 'Laundry and Dry Cleaning',
    providerId: '4',
    providerName: 'Mike Wilson',
    requesterId: '5',
    requesterName: 'Sarah Johnson',
    contractType: 'Estimation',
    startDate: '2024-01-30T09:00:00Z',
    endDate: '2024-01-30T17:00:00Z',
    totalAmount: 85,
    status: 'Active',
    paymentStatus: 'Paid',
    createdAt: '2024-01-16T11:20:00Z',
    updatedAt: '2024-01-16T14:30:00Z'
  },
  {
    id: '8',
    serviceId: '5',
    serviceTitle: 'Window Cleaning',
    providerId: '2',
    providerName: 'John Doe',
    requesterId: '3',
    requesterName: 'Jane Smith',
    contractType: 'Monthly',
    startDate: '2024-02-01T10:00:00Z',
    endDate: '2024-02-01T12:00:00Z',
    totalAmount: 150,
    status: 'Pending',
    paymentStatus: 'Pending',
    createdAt: '2024-01-20T09:00:00Z',
    updatedAt: '2024-01-20T09:00:00Z'
  },
  {
    id: '9',
    serviceId: '6',
    serviceTitle: 'Laundry and Dry Cleaning',
    providerId: '4',
    providerName: 'Mike Wilson',
    requesterId: '2',
    requesterName: 'John Doe',
    contractType: 'Estimation',
    startDate: '2024-02-05T09:00:00Z',
    endDate: '2024-02-05T17:00:00Z',
    totalAmount: 90,
    status: 'Active',
    paymentStatus: 'Paid',
    createdAt: '2024-01-25T11:00:00Z',
    updatedAt: '2024-01-25T11:00:00Z'
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
    comment: 'Excellent service! John was very professional and thorough. The house looks spotless.',
    createdAt: '2024-01-16T14:30:00Z'
  },
  {
    id: '2',
    serviceId: '1',
    contractId: '5',
    userId: '5',
    userName: 'Sarah Johnson',
    rating: 4,
    comment: 'Good cleaning service. Very reliable and punctual.',
    createdAt: '2024-01-17T10:15:00Z'
  },
  {
    id: '3',
    serviceId: '2',
    contractId: '2',
    userId: '5',
    userName: 'Sarah Johnson',
    rating: 5,
    comment: 'Amazing chef! The dinner party was a huge success. Everyone loved the food.',
    createdAt: '2024-01-26T20:30:00Z'
  },
  {
    id: '4',
    serviceId: '3',
    contractId: '3',
    userId: '3',
    userName: 'Jane Smith',
    rating: 4,
    comment: 'Professional driver, arrived on time and got me to the airport safely.',
    createdAt: '2024-01-22T09:30:00Z'
  },
  {
    id: '5',
    serviceId: '4',
    contractId: '4',
    userId: '5',
    userName: 'Sarah Johnson',
    rating: 5,
    comment: 'Beautiful garden work! The roses look amazing and everything is well maintained.',
    createdAt: '2024-01-23T13:45:00Z'
  },
  {
    id: '6',
    serviceId: '6',
    contractId: '7',
    userId: '5',
    userName: 'Sarah Johnson',
    rating: 4,
    comment: 'Great laundry service! Provider inspected items first and gave accurate cost estimate. Very reliable pickup and delivery. Clothes come back clean and fresh.',
    createdAt: '2024-01-31T10:20:00Z'
  }
];

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: '1',
    userId: '2',
    title: 'New Service Request',
    message: 'Jane Smith has requested your Professional House Cleaning service.',
    type: 'Info',
    isRead: false,
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    userId: '3',
    title: 'Service Accepted',
    message: 'John Doe has accepted your service request for Professional House Cleaning.',
    type: 'Success',
    isRead: true,
    createdAt: '2024-01-15T11:00:00Z'
  },
  {
    id: '3',
    userId: '4',
    title: 'Payment Received',
    message: 'Payment of $200 has been received for your Private Chef Services.',
    type: 'Success',
    isRead: false,
    createdAt: '2024-01-15T09:15:00Z'
  },
  {
    id: '4',
    userId: '5',
    title: 'Service Reminder',
    message: 'Your scheduled Garden Maintenance service is tomorrow at 8:00 AM.',
    type: 'Warning',
    isRead: false,
    createdAt: '2024-01-15T08:00:00Z'
  },
  {
    id: '5',
    userId: '6',
    title: 'New Review',
    message: 'Jane Smith left a 4-star review for your Professional Driving Service.',
    type: 'Info',
    isRead: true,
    createdAt: '2024-01-22T09:30:00Z'
  }
];

// Mock Dashboard Stats
export const mockDashboardStats: DashboardStats[] = [
  // John Doe (Provider)
  {
    totalServices: 89,
    totalContracts: 67,
    totalEarnings: 12500,
    averageRating: 4.8,
    activeContracts: 2,
    pendingRequests: 1,
    completedServices: 65,
    upcomingServices: 3,
    totalHours: 320,
    monthlyEarnings: 2800
  },
  // Jane Smith (Requester)
  {
    totalServices: 0,
    totalContracts: 4,
    totalEarnings: 0,
    averageRating: 0,
    activeContracts: 2,
    pendingRequests: 0,
    completedServices: 2,
    upcomingServices: 0,
    totalHours: 0,
    monthlyEarnings: 0
  },
  // Mike Wilson (Provider)
  {
    totalServices: 34,
    totalContracts: 28,
    totalEarnings: 8900,
    averageRating: 4.9,
    activeContracts: 1,
    pendingRequests: 0,
    completedServices: 27,
    upcomingServices: 1,
    totalHours: 180,
    monthlyEarnings: 1200
  },
  // Sarah Johnson (Requester)
  {
    totalServices: 0,
    totalContracts: 3,
    totalEarnings: 0,
    averageRating: 0,
    activeContracts: 1,
    pendingRequests: 0,
    completedServices: 2,
    upcomingServices: 0,
    totalHours: 0,
    monthlyEarnings: 0
  },
  // David Brown (Provider)
  {
    totalServices: 124,
    totalContracts: 98,
    totalEarnings: 18200,
    averageRating: 4.7,
    activeContracts: 1,
    pendingRequests: 0,
    completedServices: 97,
    upcomingServices: 2,
    totalHours: 450,
    monthlyEarnings: 3200
  }
];

// Mock Search Filters
export const mockSearchFilters = {
  categories: mockCategories,
  locations: [
    'New York, NY',
    'Los Angeles, CA',
    'Chicago, IL',
    'Miami, FL',
    'Seattle, WA',
    'Boston, MA',
    'San Francisco, CA',
    'Denver, CO'
  ],
  priceRanges: [
    { label: 'Under $25', min: 0, max: 25 },
    { label: '$25 - $50', min: 25, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: 'Over $100', min: 100, max: null }
  ],
  ratings: [1, 2, 3, 4, 5],
  availability: [
    'Available Now',
    'Available Today',
    'Available This Week',
    'Available Next Week'
  ]
}; 