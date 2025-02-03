import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/use-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { total, clearCart } = useCart();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Order Placed Successfully!",
      description: "Thank you for your purchase.",
    });
    
    clearCart();
    navigate("/");
    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Shipping Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="First Name" required />
              <Input placeholder="Last Name" required />
            </div>
            <Input placeholder="Email" type="email" required />
            <Input placeholder="Address" required />
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="City" required />
              <Input placeholder="Postal Code" required />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Payment Information</h2>
            <Input placeholder="Card Number" required />
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="MM/YY" required />
              <Input placeholder="CVC" required />
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Place Order"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;