"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Briefcase, 
  Search, 
  Eye, 
  Star,
  MapPin,
  DollarSign
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  basePrice: number;
  currency: string;
  location: string;
  isActive: boolean;
  isVerified: boolean;
  averageRating: number;
  totalReviews: number;
  createdAt: string;
  provider: {
    id: string;
    firstName: string;
    lastName: string;
    profilePictureUrl: string;
  };
  category: {
    id: string;
    name: string;
  };
}

interface Category {
  id: string;
  name: string;
}

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const fetchServices = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const params = new URLSearchParams({
        page: "1",
        pageSize: "50",
      });

      if (searchTerm) params.append("search", searchTerm);
      if (selectedCategory) params.append("categoryId", selectedCategory);
      if (selectedStatus) params.append("status", selectedStatus);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/services?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (result.success) {
        setServices(result.data);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm, selectedCategory, selectedStatus]);

  useEffect(() => {
    fetchCategories();
    fetchServices();
  }, [fetchServices]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
      const result = await response.json();
      if (result.success) {
        setCategories(result.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleSearch = () => {
    fetchServices();
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedStatus("");
    fetchServices();
  };

  const updateServiceStatus = async (serviceId: string, isActive: boolean) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/services/${serviceId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ isActive }),
      });
      
      if (response.ok) {
        fetchServices(); // Refresh the list
      }
    } catch (error) {
      console.error("Error updating service status:", error);
    }
  };

  const updateServiceVerification = async (serviceId: string, isVerified: boolean) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/services/${serviceId}/verification`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ isVerified }),
      });
      
      if (response.ok) {
        fetchServices(); // Refresh the list
      }
    } catch (error) {
      console.error("Error updating service verification:", error);
    }
  };

  const getStatusBadge = (isActive: boolean) => {
    return isActive ? (
      <Badge className="bg-green-100 text-green-800">Active</Badge>
    ) : (
      <Badge variant="secondary">Inactive</Badge>
    );
  };

  const getVerificationBadge = (isVerified: boolean) => {
    return isVerified ? (
      <Badge className="bg-blue-100 text-blue-800">Verified</Badge>
    ) : (
      <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Service Management</h1>
          <p className="text-gray-600">Manage platform services and verifications</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Search & Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex gap-2">
                <Button onClick={handleSearch} className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Search
                </Button>
                <Button variant="outline" onClick={clearFilters}>
                  Clear
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Table */}
        <Card>
          <CardHeader>
            <CardTitle>Services ({services.length})</CardTitle>
            <CardDescription>Manage service listings and verifications</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading services...</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Verification</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((service) => (
                    <TableRow key={service.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{service.title}</p>
                          <p className="text-sm text-gray-500 line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={service.provider.profilePictureUrl} />
                            <AvatarFallback>
                              {service.provider.firstName[0]}{service.provider.lastName[0]}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm">
                            {service.provider.firstName} {service.provider.lastName}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{service.category.name}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          <span className="font-medium">{service.basePrice}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <MapPin className="h-3 w-3" />
                          {service.location}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {renderStars(service.averageRating)}
                          <span className="text-xs text-gray-500">
                            ({service.totalReviews})
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(service.isActive)}
                      </TableCell>
                      <TableCell>
                        {getVerificationBadge(service.isVerified)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setSelectedService(service)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Service Details</DialogTitle>
                                <DialogDescription>
                                  View detailed information about {service.title}
                                </DialogDescription>
                              </DialogHeader>
                              {selectedService && (
                                <div className="space-y-4">
                                  <div>
                                    <h3 className="font-semibold text-lg">{selectedService.title}</h3>
                                    <p className="text-gray-600">{selectedService.description}</p>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <p className="font-medium">Provider</p>
                                      <p className="text-gray-600">
                                        {selectedService.provider.firstName} {selectedService.provider.lastName}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="font-medium">Category</p>
                                      <p className="text-gray-600">{selectedService.category.name}</p>
                                    </div>
                                    <div>
                                      <p className="font-medium">Price</p>
                                      <p className="text-gray-600">
                                        ${selectedService.basePrice} {selectedService.currency}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="font-medium">Location</p>
                                      <p className="text-gray-600">{selectedService.location}</p>
                                    </div>
                                    <div>
                                      <p className="font-medium">Rating</p>
                                      <div className="flex items-center gap-1">
                                        {renderStars(selectedService.averageRating)}
                                        <span className="text-gray-600">
                                          ({selectedService.totalReviews} reviews)
                                        </span>
                                      </div>
                                    </div>
                                    <div>
                                      <p className="font-medium">Created</p>
                                      <p className="text-gray-600">
                                        {new Date(selectedService.createdAt).toLocaleDateString()}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>

                          <Select onValueChange={(value) => updateServiceStatus(service.id, value === "true")}>
                            <SelectTrigger className="w-24">
                              <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="true">Activate</SelectItem>
                              <SelectItem value="false">Deactivate</SelectItem>
                            </SelectContent>
                          </Select>

                          <Select onValueChange={(value) => updateServiceVerification(service.id, value === "true")}>
                            <SelectTrigger className="w-24">
                              <SelectValue placeholder="Verify" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="true">Verify</SelectItem>
                              <SelectItem value="false">Unverify</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}

            {!loading && services.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No services found matching your criteria.</p>
                <Button variant="outline" onClick={clearFilters} className="mt-4">
                  Clear Filters
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 