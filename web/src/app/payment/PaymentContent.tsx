"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Lock, 
  Shield, 
  CheckCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  User,
  ArrowLeft
} from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Link from "next/link";

interface PaymentForm {
  cardNumber: string;
  cardHolderName: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  billingAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  saveCard: boolean;
  termsAccepted: boolean;
}

interface ContractData {
  serviceId: string;
  contractType: string;
  totalAmount: number;
  startDate: string;
  startTime: string;
  duration: string;
  specialRequirements: string;
}

export default function PaymentContent() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [contractData, setContractData] = useState<ContractData | null>(null);
  const [paymentForm, setPaymentForm] = useState<PaymentForm>({
    cardNumber: '',
    cardHolderName: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    billingAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    saveCard: false,
    termsAccepted: false
  });

  useEffect(() => {
    // Extract contract data from URL parameters
    const serviceId = searchParams.get('serviceId');
    const contractType = searchParams.get('contractType');
    const totalAmount = searchParams.get('totalAmount');
    const startDate = searchParams.get('startDate');
    const startTime = searchParams.get('startTime');
    const duration = searchParams.get('duration');
    const specialRequirements = searchParams.get('specialRequirements');

    if (serviceId && contractType && totalAmount) {
      setContractData({
        serviceId,
        contractType,
        totalAmount: parseFloat(totalAmount),
        startDate: startDate || '',
        startTime: startTime || '',
        duration: duration || '',
        specialRequirements: specialRequirements || ''
      });
    } else {
      toast.error("Invalid payment data");
    }
  }, [searchParams]);

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contractData) {
      toast.error("No contract data available");
      return;
    }

    if (!paymentForm.termsAccepted) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    setLoading(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock payment success
      setPaymentSuccess(true);
      toast.success("Payment successful! Your booking has been confirmed.");
      
      // In a real app, you would:
      // 1. Send payment data to payment gateway
      // 2. Create contract in database
      // 3. Send confirmation emails
      // 4. Update service availability
      
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const getContractTypeLabel = (type: string) => {
    switch (type) {
      case 'Hourly': return 'Hourly Service';
      case 'Weekly': return 'Weekly Service';
      case 'Monthly': return 'Monthly Service';
      case 'FixedPrice': return 'Fixed Price Service';
      default: return type;
    }
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
              <p className="text-gray-600">Your booking has been confirmed and payment processed.</p>
            </div>
            
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service Type:</span>
                    <span className="font-medium">{getContractTypeLabel(contractData?.contractType || '')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Start Date:</span>
                    <span className="font-medium">{contractData?.startDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Start Time:</span>
                    <span className="font-medium">{contractData?.startTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Amount:</span>
                    <span className="font-bold text-green-600">${contractData?.totalAmount}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <Link href="/dashboard">
                <Button className="w-full">Go to Dashboard</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="w-full">Browse More Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!contractData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Invalid Payment Data</h1>
              <p className="text-gray-600">Please return to the service page and try again.</p>
            </div>
            <Link href="/services">
              <Button className="w-full">Back to Services</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Payment</h1>
            <p className="text-gray-600">Secure payment for your service booking</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Information
                  </CardTitle>
                  <CardDescription>
                    Enter your payment details to complete the booking
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePaymentSubmit} className="space-y-6">
                    {/* Card Information */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          value={paymentForm.cardNumber}
                          onChange={(e) => setPaymentForm({
                            ...paymentForm,
                            cardNumber: formatCardNumber(e.target.value)
                          })}
                          maxLength={19}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cardHolderName">Cardholder Name</Label>
                          <Input
                            id="cardHolderName"
                            type="text"
                            placeholder="John Doe"
                            value={paymentForm.cardHolderName}
                            onChange={(e) => setPaymentForm({
                              ...paymentForm,
                              cardHolderName: e.target.value
                            })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            type="text"
                            placeholder="123"
                            value={paymentForm.cvv}
                            onChange={(e) => setPaymentForm({
                              ...paymentForm,
                              cvv: e.target.value.replace(/\D/g, '').slice(0, 4)
                            })}
                            maxLength={4}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryMonth">Expiry Month</Label>
                          <Select
                            value={paymentForm.expiryMonth}
                            onValueChange={(value) => setPaymentForm({
                              ...paymentForm,
                              expiryMonth: value
                            })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Month" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 12 }, (_, i) => (
                                <SelectItem key={i + 1} value={(i + 1).toString().padStart(2, '0')}>
                                  {(i + 1).toString().padStart(2, '0')}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="expiryYear">Expiry Year</Label>
                          <Select
                            value={paymentForm.expiryYear}
                            onValueChange={(value) => setPaymentForm({
                              ...paymentForm,
                              expiryYear: value
                            })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 10 }, (_, i) => {
                                const year = new Date().getFullYear() + i;
                                return (
                                  <SelectItem key={year} value={year.toString()}>
                                    {year}
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Billing Address */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Billing Address</h3>
                      
                      <div>
                        <Label htmlFor="billingAddress">Address</Label>
                        <Input
                          id="billingAddress"
                          type="text"
                          placeholder="123 Main St"
                          value={paymentForm.billingAddress}
                          onChange={(e) => setPaymentForm({
                            ...paymentForm,
                            billingAddress: e.target.value
                          })}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            type="text"
                            placeholder="New York"
                            value={paymentForm.city}
                            onChange={(e) => setPaymentForm({
                              ...paymentForm,
                              city: e.target.value
                            })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            type="text"
                            placeholder="NY"
                            value={paymentForm.state}
                            onChange={(e) => setPaymentForm({
                              ...paymentForm,
                              state: e.target.value
                            })}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input
                            id="zipCode"
                            type="text"
                            placeholder="10001"
                            value={paymentForm.zipCode}
                            onChange={(e) => setPaymentForm({
                              ...paymentForm,
                              zipCode: e.target.value
                            })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="country">Country</Label>
                          <Select
                            value={paymentForm.country}
                            onValueChange={(value) => setPaymentForm({
                              ...paymentForm,
                              country: value
                            })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="US">United States</SelectItem>
                              <SelectItem value="CA">Canada</SelectItem>
                              <SelectItem value="UK">United Kingdom</SelectItem>
                              <SelectItem value="AU">Australia</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Options */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="saveCard"
                          checked={paymentForm.saveCard}
                          onCheckedChange={(checked) => setPaymentForm({
                            ...paymentForm,
                            saveCard: checked as boolean
                          })}
                        />
                        <Label htmlFor="saveCard">Save this card for future payments</Label>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="termsAccepted"
                          checked={paymentForm.termsAccepted}
                          onCheckedChange={(checked) => setPaymentForm({
                            ...paymentForm,
                            termsAccepted: checked as boolean
                          })}
                        />
                        <Label htmlFor="termsAccepted" className="text-sm">
                          I agree to the terms and conditions and privacy policy
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Processing Payment...
                        </>
                      ) : (
                        <>
                          <Lock className="h-4 w-4 mr-2" />
                          Pay ${contractData.totalAmount}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <User className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Service Booking</p>
                      <p className="text-sm text-gray-600">{getContractTypeLabel(contractData.contractType)}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Service Type:</span>
                      <span>{getContractTypeLabel(contractData.contractType)}</span>
                    </div>
                    
                    {contractData.startDate && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Start Date:</span>
                        <span>{contractData.startDate}</span>
                      </div>
                    )}
                    
                    {contractData.startTime && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Start Time:</span>
                        <span>{contractData.startTime}</span>
                      </div>
                    )}
                    
                    {contractData.duration && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Duration:</span>
                        <span>{contractData.duration}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total Amount</span>
                      <span className="text-2xl font-bold text-green-600">${contractData.totalAmount}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="h-4 w-4" />
                    <span>Secure payment powered by Stripe</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 