import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
  handler: (response: any) => void;
}

export const useRazorpay = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if script already exists
    if (window.Razorpay) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setIsLoaded(true);
    script.onerror = () => {
      toast({
        title: "Failed to load payment gateway",
        description: "Please refresh the page and try again.",
        variant: "destructive",
      });
    };
    document.body.appendChild(script);

    return () => {
      // Don't remove script on cleanup as it might be needed elsewhere
    };
  }, [toast]);

  const openPayment = (planName: string, amount: number) => {
    if (!isLoaded || !window.Razorpay) {
      toast({
        title: "Payment gateway loading...",
        description: "Please wait a moment and try again.",
      });
      return;
    }

    const options: RazorpayOptions = {
      key: 'rzp_test_YourTestKeyHere', // Replace with actual key
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      name: 'UrbanMint Digital',
      description: `${planName} Plan`,
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      theme: {
        color: '#10b981',
      },
      handler: function (response: any) {
        toast({
          title: "Payment Successful!",
          description: `Payment ID: ${response.razorpay_payment_id}`,
        });
        
        // Send confirmation to WhatsApp
        const whatsappMessage = `
*Payment Successful* ✅
━━━━━━━━━━━━━━━
📦 Plan: ${planName}
💰 Amount: ₹${amount.toLocaleString()}
🔑 Payment ID: ${response.razorpay_payment_id}
━━━━━━━━━━━━━━━
Thank you for choosing UrbanMint!
        `.trim();

        const whatsappUrl = `https://wa.me/918287778313?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return { isLoaded, openPayment };
};
