"use client";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { api } from "@/lib/api";

interface ServiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  initialData?: any; // If present, this is edit mode
  providerId: string;
}

export default function ServiceModal({ open, onOpenChange, onSuccess, initialData, providerId }: ServiceModalProps) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    categoryId: "",
    hourlyRate: "",
    location: "",
    isAvailable: true,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title || "",
        description: initialData.description || "",
        categoryId: initialData.categoryId || "",
        hourlyRate: initialData.hourlyRate?.toString() || "",
        location: initialData.location || "",
        isAvailable: initialData.isAvailable ?? true,
      });
    } else {
      setForm({
        title: "",
        description: "",
        categoryId: "",
        hourlyRate: "",
        location: "",
        isAvailable: true,
      });
    }
  }, [initialData, open]);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (initialData) {
        // Edit
        await api.updateService(initialData.id, {
          ...form,
          hourlyRate: parseFloat(form.hourlyRate),
        });
        toast.success("Service updated!");
      } else {
        // Add
        await api.createService({
          ...form,
          providerId,
          hourlyRate: parseFloat(form.hourlyRate),
        });
        toast.success("Service created!");
      }
      onOpenChange(false);
      onSuccess();
    } catch (err: any) {
      toast.error(err.message || "Failed to save service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{initialData ? "Edit Service" : "Add Service"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Service Title"
            required
          />
          <Textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <Input
            name="categoryId"
            value={form.categoryId}
            onChange={handleChange}
            placeholder="Category ID"
            required
          />
          <Input
            name="hourlyRate"
            value={form.hourlyRate}
            onChange={handleChange}
            placeholder="Hourly Rate"
            type="number"
            min="0"
            required
          />
          <Input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location"
            required
          />
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isAvailable"
              checked={form.isAvailable}
              onChange={handleChange}
            />
            Available
          </label>
          <Button type="submit" className="w-full" disabled={loading}>
            {initialData ? "Update Service" : "Add Service"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
} 