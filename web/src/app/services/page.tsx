"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Filter, Star, MapPin, Clock, DollarSign, Calendar, Clock as ClockIcon } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Service {
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

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  isActive: boolean;
  serviceCount: number;
}

interface BookingForm {
  contractType: 'Hourly' | 'Weekly' | 'Monthly' | 'FixedPrice';
  startDate: string;
  startTime: string;
  duration?: number;
  endDate?: string;
  specialRequirements: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    contractType: 'Hourly',
    startDate: '',
    startTime: '',
    duration: 1,
    specialRequirements: ''
  });
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchServices();
  }, []);

  const fetchCategories = async () => {
    try {
      const result = await api.getCategories();
      setCategories(result);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Failed to load categories");
    }
  };

  const fetchServices = async () => {
    setLoading(true);
    try {
      const filters: any = {};
      
      if (searchTerm) filters.search = searchTerm;
      if (selectedCategory && selectedCategory !== 'all') filters.categoryId = selectedCategory;
      if (selectedLocation) filters.location = selectedLocation;
      if (minPrice) filters.minPrice = minPrice;
      if (maxPrice) filters.maxPrice = maxPrice;

      const result = await api.getServices(1, 20, filters);
      setServices(result.services);
    } catch (error) {
      console.error("Error fetching services:", error);
      toast.error("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchServices();
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedLocation("");
    setMinPrice("");
    setMaxPrice("");
    fetchServices();
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const getDisplayPrice = (service: Service) => {
    if (service.fixedPrice) {
      return `$${service.fixedPrice}`;
    }
    return `$${service.hourlyRate}/hr`;
  };

  const handleBookService = (service: Service) => {
    setSelectedService(service);
    setBookingForm({
      contractType: service.fixedPrice ? 'FixedPrice' : 'Hourly',
      startDate: '',
      startTime: '',
      duration: 1,
      specialRequirements: ''
    });
    setIsBookingDialogOpen(true);
  };

  const handleBookingSubmit = async () => {
    if (!selectedService) return;

    try {
      // Check if user is logged in
      const isLoggedIn = localStorage.getItem('authToken');
      if (!isLoggedIn) {
        toast.error("Please log in to book a service");
        return;
      }

      // Calculate total amount
      let totalAmount = 0;
      if (bookingForm.contractType === 'FixedPrice' && selectedService.fixedPrice) {
        totalAmount = selectedService.fixedPrice;
      } else if (bookingForm.contractType === 'Hourly' && bookingForm.duration) {
        totalAmount = selectedService.hourlyRate * bookingForm.duration;
      } else if (bookingForm.contractType === 'Weekly') {
        totalAmount = selectedService.weeklyRate;
      } else if (bookingForm.contractType === 'Monthly') {
        totalAmount = selectedService.monthlyRate;
      }

      // Create contract data
      const contractData = {
        serviceId: selectedService.id,
        providerId: selectedService.providerId,
        contractType: bookingForm.contractType,
        startDate: bookingForm.startDate,
        startTime: bookingForm.startTime,
        duration: bookingForm.duration,
        endDate: bookingForm.endDate,
        specialRequirements: bookingForm.specialRequirements,
        totalAmount: totalAmount
      };

      // Navigate to payment page with contract data
      const queryParams = new URLSearchParams({
        serviceId: selectedService.id,
        contractType: bookingForm.contractType,
        totalAmount: totalAmount.toString(),
        startDate: bookingForm.startDate,
        startTime: bookingForm.startTime,
        duration: bookingForm.duration?.toString() || '1',
        specialRequirements: bookingForm.specialRequirements
      });

      window.location.href = `/payment?${queryParams.toString()}`;
    } catch (error) {
      console.error("Error creating booking:", error);
      toast.error("Failed to create booking");
    }
  };

  const getContractTypeOptions = (service: Service) => {
    const options = [];
    
    if (service.hourlyRate > 0) {
      options.push({ value: 'Hourly', label: `Hourly - $${service.hourlyRate}/hr` });
    }
    if (service.weeklyRate > 0) {
      options.push({ value: 'Weekly', label: `Weekly - $${service.weeklyRate}/week` });
    }
    if (service.monthlyRate > 0) {
      options.push({ value: 'Monthly', label: `Monthly - $${service.monthlyRate}/month` });
    }
    if (service.fixedPrice) {
      options.push({ value: 'FixedPrice', label: `Fixed Price - $${service.fixedPrice}` });
    }
    
    return options;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Services</h1>
          <p className="text-gray-600">Discover and book professional services</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search & Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
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

              <Input
                placeholder="Location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              />

              <div className="flex gap-2">
                <Input
                  placeholder="Min Price"
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <Input
                  placeholder="Max Price"
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleSearch} className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Search
              </Button>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Services Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading services...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden">
                    {service.images && service.images.length > 0 ? (
                      <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{service.title}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {/* Provider Info */}
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={service.providerAvatar} />
                        <AvatarFallback>
                          {service.providerName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          {service.providerName}
                        </p>
                        <div className="flex items-center gap-1">
                          {renderStars(service.rating)}
                          <span className="text-xs text-gray-500">
                            ({service.reviewCount})
                          </span>
                        </div>
                      </div>
                      {service.isVerified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>

                    {/* Location and Price */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        {service.location}
                      </div>
                      <div className="flex items-center gap-1 font-semibold text-green-600">
                        <DollarSign className="h-4 w-4" />
                        {getDisplayPrice(service)}
                      </div>
                    </div>

                    {/* Category and Book Button */}
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{service.categoryName}</Badge>
                      <Button 
                        size="sm" 
                        onClick={() => handleBookService(service)}
                        className="text-xs"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!loading && services.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No services found matching your criteria.</p>
            <Button variant="outline" onClick={clearFilters} className="mt-4">
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Booking Dialog */}
      <Dialog open={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Book Service</DialogTitle>
            <DialogDescription>
              {selectedService?.title}
            </DialogDescription>
          </DialogHeader>
          
          {selectedService && (
            <div className="space-y-4">
              {/* Contract Type Selection */}
              <div className="space-y-2">
                <Label>Contract Type</Label>
                <Select 
                  value={bookingForm.contractType} 
                  onValueChange={(value: any) => setBookingForm(prev => ({ ...prev, contractType: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {getContractTypeOptions(selectedService).map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    value={bookingForm.startDate}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, startDate: e.target.value }))}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Start Time</Label>
                  <Input
                    type="time"
                    value={bookingForm.startTime}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, startTime: e.target.value }))}
                  />
                </div>
              </div>

              {/* Duration (for hourly contracts) */}
              {bookingForm.contractType === 'Hourly' && (
                <div className="space-y-2">
                  <Label>Duration (hours)</Label>
                  <Input
                    type="number"
                    min="1"
                    value={bookingForm.duration}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, duration: parseInt(e.target.value) || 1 }))}
                  />
                </div>
              )}

              {/* End Date (for weekly/monthly contracts) */}
              {(bookingForm.contractType === 'Weekly' || bookingForm.contractType === 'Monthly') && (
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input
                    type="date"
                    value={bookingForm.endDate}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, endDate: e.target.value }))}
                    min={bookingForm.startDate}
                  />
                </div>
              )}

              {/* Special Requirements */}
              <div className="space-y-2">
                <Label>Special Requirements (Optional)</Label>
                <Textarea
                  placeholder="Any special requirements or notes..."
                  value={bookingForm.specialRequirements}
                  onChange={(e) => setBookingForm(prev => ({ ...prev, specialRequirements: e.target.value }))}
                  rows={3}
                />
              </div>

              {/* Total Amount Display */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Amount:</span>
                  <span className="text-lg font-bold text-green-600">
                    ${(() => {
                      if (bookingForm.contractType === 'FixedPrice' && selectedService.fixedPrice) {
                        return selectedService.fixedPrice;
                      } else if (bookingForm.contractType === 'Hourly' && bookingForm.duration) {
                        return selectedService.hourlyRate * bookingForm.duration;
                      } else if (bookingForm.contractType === 'Weekly') {
                        return selectedService.weeklyRate;
                      } else if (bookingForm.contractType === 'Monthly') {
                        return selectedService.monthlyRate;
                      }
                      return 0;
                    })()}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setIsBookingDialogOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleBookingSubmit}
                  className="flex-1"
                  disabled={!bookingForm.startDate || !bookingForm.startTime}
                >
                  Proceed to Payment
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
} 