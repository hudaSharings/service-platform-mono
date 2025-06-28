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
  FileText, 
  Search, 
  Eye, 
  DollarSign
} from "lucide-react";

interface Contract {
  id: string;
  contractNumber: string;
  service: {
    id: string;
    title: string;
    basePrice: number;
    currency: string;
  };
  provider: {
    id: string;
    firstName: string;
    lastName: string;
    profilePictureUrl: string;
  };
  requester: {
    id: string;
    firstName: string;
    lastName: string;
    profilePictureUrl: string;
  };
  contractType: string;
  status: string;
  totalAmount: number;
  startDate: string;
  endDate: string;
  createdAt: string;
  paymentStatus: string;
}

export default function AdminContractsPage() {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedContractType, setSelectedContractType] = useState("");
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null);

  const fetchContracts = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const params = new URLSearchParams({
        page: "1",
        pageSize: "50",
      });

      if (searchTerm) params.append("search", searchTerm);
      if (selectedStatus) params.append("status", selectedStatus);
      if (selectedContractType) params.append("contractType", selectedContractType);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/contracts?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (result.success) {
        setContracts(result.data);
      }
    } catch (error) {
      console.error("Error fetching contracts:", error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm, selectedStatus, selectedContractType]);

  useEffect(() => {
    fetchContracts();
  }, [fetchContracts]);

  const handleSearch = () => {
    fetchContracts();
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedStatus("");
    setSelectedContractType("");
    fetchContracts();
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "Completed":
        return <Badge className="bg-blue-100 text-blue-800">Completed</Badge>;
      case "Cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      case "Pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "Disputed":
        return <Badge className="bg-red-100 text-red-800">Disputed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case "Paid":
        return <Badge className="bg-green-100 text-green-800">Paid</Badge>;
      case "Pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "Failed":
        return <Badge variant="destructive">Failed</Badge>;
      case "Refunded":
        return <Badge className="bg-gray-100 text-gray-800">Refunded</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getContractTypeBadge = (type: string) => {
    switch (type) {
      case "Hourly":
        return <Badge className="bg-purple-100 text-purple-800">Hourly</Badge>;
      case "Weekly":
        return <Badge className="bg-blue-100 text-blue-800">Weekly</Badge>;
      case "Monthly":
        return <Badge className="bg-green-100 text-green-800">Monthly</Badge>;
      case "Fixed":
        return <Badge className="bg-orange-100 text-orange-800">Fixed</Badge>;
      default:
        return <Badge variant="outline">{type}</Badge>;
    }
  };

  const getStatusStats = () => {
    const stats = {
      active: contracts.filter(c => c.status === "Active").length,
      completed: contracts.filter(c => c.status === "Completed").length,
      pending: contracts.filter(c => c.status === "Pending").length,
      cancelled: contracts.filter(c => c.status === "Cancelled").length,
      disputed: contracts.filter(c => c.status === "Disputed").length,
    };
    return stats;
  };

  const statusStats = getStatusStats();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contract Management</h1>
          <p className="text-gray-600">Monitor and manage service contracts</p>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Active</span>
              </div>
              <p className="text-2xl font-bold text-green-600">{statusStats.active}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium">Completed</span>
              </div>
              <p className="text-2xl font-bold text-blue-600">{statusStats.completed}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium">Pending</span>
              </div>
              <p className="text-2xl font-bold text-yellow-600">{statusStats.pending}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm font-medium">Cancelled</span>
              </div>
              <p className="text-2xl font-bold text-red-600">{statusStats.cancelled}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-medium">Disputed</span>
              </div>
              <p className="text-2xl font-bold text-orange-600">{statusStats.disputed}</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Search & Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search contracts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Cancelled">Cancelled</SelectItem>
                  <SelectItem value="Disputed">Disputed</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedContractType} onValueChange={setSelectedContractType}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Hourly">Hourly</SelectItem>
                  <SelectItem value="Weekly">Weekly</SelectItem>
                  <SelectItem value="Monthly">Monthly</SelectItem>
                  <SelectItem value="Fixed">Fixed</SelectItem>
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

        {/* Contracts Table */}
        <Card>
          <CardHeader>
            <CardTitle>Contracts ({contracts.length})</CardTitle>
            <CardDescription>Monitor contract status and payments</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading contracts...</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contract</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Requester</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contracts.map((contract) => (
                    <TableRow key={contract.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{contract.contractNumber}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(contract.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{contract.service.title}</p>
                          <p className="text-sm text-gray-500">
                            ${contract.service.basePrice} {contract.service.currency}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={contract.provider.profilePictureUrl} />
                            <AvatarFallback>
                              {contract.provider.firstName[0]}{contract.provider.lastName[0]}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm">
                            {contract.provider.firstName} {contract.provider.lastName}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={contract.requester.profilePictureUrl} />
                            <AvatarFallback>
                              {contract.requester.firstName[0]}{contract.requester.lastName[0]}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm">
                            {contract.requester.firstName} {contract.requester.lastName}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getContractTypeBadge(contract.contractType)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          <span className="font-medium">{contract.totalAmount}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(contract.status)}
                      </TableCell>
                      <TableCell>
                        {getPaymentStatusBadge(contract.paymentStatus)}
                      </TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedContract(contract)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Contract Details</DialogTitle>
                              <DialogDescription>
                                View detailed information about contract {contract.contractNumber}
                              </DialogDescription>
                            </DialogHeader>
                            {selectedContract && (
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <p className="font-medium">Contract Number</p>
                                    <p className="text-gray-600">{selectedContract.contractNumber}</p>
                                  </div>
                                  <div>
                                    <p className="font-medium">Service</p>
                                    <p className="text-gray-600">{selectedContract.service.title}</p>
                                  </div>
                                  <div>
                                    <p className="font-medium">Provider</p>
                                    <p className="text-gray-600">
                                      {selectedContract.provider.firstName} {selectedContract.provider.lastName}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="font-medium">Requester</p>
                                    <p className="text-gray-600">
                                      {selectedContract.requester.firstName} {selectedContract.requester.lastName}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="font-medium">Contract Type</p>
                                    <p className="text-gray-600">{selectedContract.contractType}</p>
                                  </div>
                                  <div>
                                    <p className="font-medium">Total Amount</p>
                                    <p className="text-gray-600">
                                      ${selectedContract.totalAmount} {selectedContract.service.currency}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="font-medium">Start Date</p>
                                    <p className="text-gray-600">
                                      {new Date(selectedContract.startDate).toLocaleDateString()}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="font-medium">End Date</p>
                                    <p className="text-gray-600">
                                      {new Date(selectedContract.endDate).toLocaleDateString()}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="font-medium">Status</p>
                                    <p className="text-gray-600">{selectedContract.status}</p>
                                  </div>
                                  <div>
                                    <p className="font-medium">Payment Status</p>
                                    <p className="text-gray-600">{selectedContract.paymentStatus}</p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}

            {!loading && contracts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No contracts found matching your criteria.</p>
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