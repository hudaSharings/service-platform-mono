import { useState } from "react";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface RateProviderProps {
  contractId: string;
  onSuccess?: () => void;
}

export default function RateProvider({ contractId, onSuccess }: RateProviderProps) {
  const [open, setOpen] = useState(false);
  const [ratingValue, setRatingValue] = useState(5);
  const [comment, setComment] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await api.createRating({ contractId, ratingValue, comment, isAnonymous });
      toast.success("Thank you for your feedback!");
      setOpen(false);
      setRatingValue(5);
      setComment("");
      setIsAnonymous(false);
      if (onSuccess) onSuccess();
    } catch (err: any) {
      toast.error(err.message || "Failed to submit rating");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} disabled={loading} variant="outline">
        Rate Provider
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rate Your Provider</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium">Rating (1-5):</span>
              <Input
                type="number"
                min={1}
                max={5}
                value={ratingValue}
                onChange={e => setRatingValue(Number(e.target.value))}
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Comment:</span>
              <Textarea
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder="Write your feedback..."
                className="mt-1"
              />
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={e => setIsAnonymous(e.target.checked)}
              />
              <span className="text-sm">Submit anonymously</span>
            </label>
            <Button onClick={handleSubmit} disabled={loading || ratingValue < 1 || ratingValue > 5} className="w-full">
              Submit Rating
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 