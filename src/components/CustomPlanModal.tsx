import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface CustomPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomPlanModal = ({ isOpen, onClose }: CustomPlanModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    details: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    // Send to WhatsApp
    const whatsappMessage = `
*Custom Plan Request*
━━━━━━━━━━━━━━━
👤 Name: ${formData.name.trim()}
📧 Email: ${formData.email.trim()}
💰 Budget: ${formData.budget.trim() || 'Not specified'}
━━━━━━━━━━━━━━━
📋 Project Details:
${formData.details.trim() || 'Not provided'}
    `.trim();

    const whatsappUrl = `https://wa.me/918287778313?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', budget: '', details: '' });
      onClose();
    }, 3000);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md glass-card rounded-3xl p-8 z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X size={20} className="text-muted-foreground" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl font-bold">Request a Custom Plan</h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    Tell us your requirements and goals.
                  </p>
                </div>

                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className="bg-muted/50 border-border"
                  required
                  maxLength={100}
                />

                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  className="bg-muted/50 border-border"
                  required
                  maxLength={255}
                />

                <Input
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Your Budget (e.g., ₹50,000 - ₹1,00,000)"
                  className="bg-muted/50 border-border"
                  maxLength={50}
                />

                <Textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Project Details..."
                  rows={4}
                  className="bg-muted/50 border-border resize-none"
                  maxLength={1000}
                />

                <Button type="submit" variant="glow" className="w-full group">
                  Submit Request
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <CheckCircle className="text-primary" size={32} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Request Submitted!</h3>
                <p className="text-muted-foreground text-sm">
                  Our team will connect with you within <strong>24 hours</strong>.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
