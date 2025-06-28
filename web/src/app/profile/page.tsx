"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Star, 
  Edit, 
  Save, 
  X,
  Briefcase,
  DollarSign,
  Calendar,
  Award,
  Settings,
  Camera
} from "lucide-react";
import { api } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Skeleton, SkeletonCard, SkeletonText, SkeletonAvatar } from "@/components/ui/skeleton";
import { PageTransition } from "@/components/ui/page-transition";

interface UserProfile {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    userType: string;
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
  };
  services: Array<{
    id: string;
    title: string;
    description: string;
    categoryName: string;
    hourlyRate: number;
    location: string;
    isAvailable: boolean;
    isVerified: boolean;
    rating: number;
    reviewCount: number;
    createdAt: string;
  }>;
  contracts: Array<{
    id: string;
    serviceTitle: string;
    contractType: string;
    totalAmount: number;
    status: string;
    startDate: string;
    endDate?: string;
    createdAt: string;
  }>;
  ratings: Array<{
    id: string;
    rating: number;
    comment: string;
    createdAt: string;
    userName: string;
  }>;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editForm, setEditForm] = useState<any>({});
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading) {
      if (!isAuthenticated) {
        router.push('/auth/login');
        return;
      }
      fetchProfile();
    }
  }, [isAuthenticated, authLoading, user]);

  const fetchProfile = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const result = await api.getUserProfile(user.id);
      setProfile(result);
      setEditForm({
        firstName: result.user.firstName,
        lastName: result.user.lastName,
        phoneNumber: result.user.phoneNumber,
        bio: result.user.bio || "",
        address: result.user.address || "",
        city: result.user.city || "",
        state: result.user.state || "",
        zipCode: result.user.zipCode || "",
        country: result.user.country || "",
        skills: result.user.skills || [],
        hourlyRate: result.user.hourlyRate || 0
      });
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    
    try {
      await api.updateUserProfile(user.id, editForm);
      setEditing(false);
      fetchProfile(); // Refresh data
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleCancel = () => {
    setEditing(false);
    // Reset form to original values
    if (profile) {
      setEditForm({
        firstName: profile.user.firstName,
        lastName: profile.user.lastName,
        phoneNumber: profile.user.phoneNumber,
        bio: profile.user.bio || "",
        address: profile.user.address || "",
        city: profile.user.city || "",
        state: profile.user.state || "",
        zipCode: profile.user.zipCode || "",
        country: profile.user.country || "",
        skills: profile.user.skills || [],
        hourlyRate: profile.user.hourlyRate || 0
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "Completed":
        return <Badge className="bg-blue-100 text-blue-800">Completed</Badge>;
      case "Pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "Cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Show loading while auth is being checked
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading..." />
      </div>
    );
  }

  // Show loading while fetching profile data
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          {/* Skeleton Header */}
          <div className="mb-8">
            <div className="flex items-center gap-6">
              <SkeletonAvatar className="h-24 w-24" />
              <div className="flex-1">
                <Skeleton className="h-8 w-64 mb-2" />
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-4 w-48" />
              </div>
              <Skeleton className="h-10 w-24" />
            </div>
          </div>

          {/* Skeleton Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <PageTransition>
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile Not Found</h1>
              <p className="text-gray-600 mb-8">Unable to load profile information.</p>
            </div>
          </div>
        </PageTransition>
      </div>
    );
  }

  const isProvider = profile.user.userType === "Provider";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <PageTransition>
        <div className="container mx-auto px-4 py-8">
          {/* Profile Header */}
          <div className="mb-8">
            <div className="flex items-center gap-6">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profile.user.profilePicture} />
                  <AvatarFallback className="text-2xl">
                    {profile.user.firstName[0]}{profile.user.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {profile.user.firstName} {profile.user.lastName}
                  </h1>
                  {profile.user.isVerified && (
                    <Badge className="bg-green-100 text-green-800">
                      <Award className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                  <Badge variant={profile.user.isActive ? "default" : "secondary"}>
                    {profile.user.isActive ? "Active" : "Inactive"}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-2">{profile.user.userType}</p>
                {profile.user.bio && (
                  <p className="text-gray-700 max-w-2xl">{profile.user.bio}</p>
                )}
                {isProvider && profile.user.rating && (
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(profile.user.rating!)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {profile.user.rating.toFixed(1)} ({profile.user.reviewCount} reviews)
                    </span>
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                {editing ? (
                  <>
                    <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" onClick={handleCancel}>
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button onClick={() => setEditing(true)}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <Tabs defaultValue="personal" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              {isProvider && <TabsTrigger value="services">Services</TabsTrigger>}
              <TabsTrigger value="contracts">Contracts</TabsTrigger>
              {isProvider && <TabsTrigger value="reviews">Reviews</TabsTrigger>}
            </TabsList>

            {/* Personal Information Tab */}
            <TabsContent value="personal" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Basic Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Your personal details and contact information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        {editing ? (
                          <Input
                            id="firstName"
                            value={editForm.firstName}
                            onChange={(e) => setEditForm({...editForm, firstName: e.target.value})}
                          />
                        ) : (
                          <p className="text-sm text-gray-900 mt-1">{profile.user.firstName}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        {editing ? (
                          <Input
                            id="lastName"
                            value={editForm.lastName}
                            onChange={(e) => setEditForm({...editForm, lastName: e.target.value})}
                          />
                        ) : (
                          <p className="text-sm text-gray-900 mt-1">{profile.user.lastName}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <div className="flex items-center gap-2 mt-1">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <p className="text-sm text-gray-900">{profile.user.email}</p>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      {editing ? (
                        <Input
                          id="phone"
                          value={editForm.phoneNumber}
                          onChange={(e) => setEditForm({...editForm, phoneNumber: e.target.value})}
                        />
                      ) : (
                        <div className="flex items-center gap-2 mt-1">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <p className="text-sm text-gray-900">{profile.user.phoneNumber}</p>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      {editing ? (
                        <Textarea
                          id="bio"
                          value={editForm.bio}
                          onChange={(e) => setEditForm({...editForm, bio: e.target.value})}
                          placeholder="Tell us about yourself..."
                          rows={3}
                        />
                      ) : (
                        <p className="text-sm text-gray-900 mt-1">
                          {profile.user.bio || "No bio provided"}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Address Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Address Information</CardTitle>
                    <CardDescription>Your location and address details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="address">Address</Label>
                      {editing ? (
                        <Input
                          id="address"
                          value={editForm.address}
                          onChange={(e) => setEditForm({...editForm, address: e.target.value})}
                        />
                      ) : (
                        <p className="text-sm text-gray-900 mt-1">
                          {profile.user.address || "No address provided"}
                        </p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        {editing ? (
                          <Input
                            id="city"
                            value={editForm.city}
                            onChange={(e) => setEditForm({...editForm, city: e.target.value})}
                          />
                        ) : (
                          <p className="text-sm text-gray-900 mt-1">
                            {profile.user.city || "Not specified"}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        {editing ? (
                          <Input
                            id="state"
                            value={editForm.state}
                            onChange={(e) => setEditForm({...editForm, state: e.target.value})}
                          />
                        ) : (
                          <p className="text-sm text-gray-900 mt-1">
                            {profile.user.state || "Not specified"}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        {editing ? (
                          <Input
                            id="zipCode"
                            value={editForm.zipCode}
                            onChange={(e) => setEditForm({...editForm, zipCode: e.target.value})}
                          />
                        ) : (
                          <p className="text-sm text-gray-900 mt-1">
                            {profile.user.zipCode || "Not specified"}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="country">Country</Label>
                        {editing ? (
                          <Input
                            id="country"
                            value={editForm.country}
                            onChange={(e) => setEditForm({...editForm, country: e.target.value})}
                          />
                        ) : (
                          <p className="text-sm text-gray-900 mt-1">
                            {profile.user.country || "Not specified"}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Account Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>Your account details and statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Member Since</span>
                      <span className="font-medium">{formatDate(profile.user.createdAt)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Last Login</span>
                      <span className="font-medium">{formatDate(profile.user.lastLoginAt)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Account Status</span>
                      <Badge variant={profile.user.isActive ? "default" : "secondary"}>
                        {profile.user.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                    {isProvider && (
                      <>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Total Earnings</span>
                          <span className="font-medium">${profile.user.totalEarnings}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Services Provided</span>
                          <span className="font-medium">{profile.user.totalServices}</span>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Skills (for providers) */}
              {isProvider && (
                <Card>
                  <CardHeader>
                    <CardTitle>Skills & Rates</CardTitle>
                    <CardDescription>Your professional skills and pricing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                      {editing ? (
                        <Input
                          id="hourlyRate"
                          type="number"
                          value={editForm.hourlyRate}
                          onChange={(e) => setEditForm({...editForm, hourlyRate: parseFloat(e.target.value)})}
                        />
                      ) : (
                        <p className="text-sm text-gray-900 mt-1">
                          ${profile.user.hourlyRate || 0}/hour
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <Label>Skills</Label>
                      {editing ? (
                        <Input
                          value={editForm.skills?.join(', ') || ''}
                          onChange={(e) => setEditForm({
                            ...editForm, 
                            skills: e.target.value.split(',').map(s => s.trim()).filter(s => s)
                          })}
                          placeholder="Enter skills separated by commas"
                        />
                      ) : (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {profile.user.skills && profile.user.skills.length > 0 ? (
                            profile.user.skills.map((skill, index) => (
                              <Badge key={index} variant="outline">
                                {skill}
                              </Badge>
                            ))
                          ) : (
                            <p className="text-sm text-gray-500">No skills listed</p>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Services Tab (for providers) */}
            {isProvider && (
              <TabsContent value="services" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>My Services</CardTitle>
                    <CardDescription>Services you offer to clients</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {profile.services && profile.services.length > 0 ? (
                      <div className="space-y-4">
                        {profile.services.map((service) => (
                          <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex-1">
                              <h3 className="font-medium">{service.title}</h3>
                              <p className="text-sm text-gray-600">{service.description}</p>
                              <div className="flex items-center gap-4 mt-2">
                                <span className="text-sm text-gray-500">{service.categoryName}</span>
                                <span className="text-sm text-gray-500">{service.location}</span>
                                <span className="text-sm font-medium">${service.hourlyRate}/hour</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {service.isAvailable ? (
                                <Badge className="bg-green-100 text-green-800">Available</Badge>
                              ) : (
                                <Badge variant="secondary">Unavailable</Badge>
                              )}
                              {service.isVerified && (
                                <Badge className="bg-blue-100 text-blue-800">Verified</Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-600">No services created yet.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            )}

            {/* Contracts Tab */}
            <TabsContent value="contracts" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Contract History</CardTitle>
                  <CardDescription>Your service contracts and agreements</CardDescription>
                </CardHeader>
                <CardContent>
                  {profile.contracts && profile.contracts.length > 0 ? (
                    <div className="space-y-4">
                      {profile.contracts.map((contract) => (
                        <div key={contract.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <h3 className="font-medium">{contract.serviceTitle}</h3>
                            <p className="text-sm text-gray-600">{contract.contractType}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="text-sm text-gray-500">
                                {formatDate(contract.startDate)}
                              </span>
                              {contract.endDate && (
                                <span className="text-sm text-gray-500">
                                  to {formatDate(contract.endDate)}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-medium">${contract.totalAmount}</span>
                            {getStatusBadge(contract.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-600">No contracts found.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reviews Tab (for providers) */}
            {isProvider && (
              <TabsContent value="reviews" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Client Reviews</CardTitle>
                    <CardDescription>Feedback from your clients</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {profile.ratings && profile.ratings.length > 0 ? (
                      <div className="space-y-4">
                        {profile.ratings.map((review) => (
                          <div key={review.id} className="p-4 border rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating
                                          ? "text-yellow-400 fill-current"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="font-medium">{review.userName}</span>
                              </div>
                              <span className="text-sm text-gray-500">
                                {formatDate(review.createdAt)}
                              </span>
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-600">No reviews yet.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </PageTransition>
    </div>
  );
} 