import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const inputVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success('Request submitted! Our team will contact you within 24 hours.');
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Start Your Free Trial
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Let's Build Your Digital
              <br />
              Growth — <span className="text-gradient">Risk Free</span>
            </h2>

            <p className="text-muted-foreground text-lg">
              Share your idea with us. Our experts will review it and get back
              with a personalized growth strategy — absolutely free.
            </p>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-3xl p-8">
              {!isSubmitted ? (
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                  variants={formVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <motion.div variants={inputVariants}>
                    <Input
                      placeholder="Your Name"
                      required
                      className="bg-muted/50 border-border/50 h-12"
                    />
                  </motion.div>
                  <motion.div variants={inputVariants}>
                    <Input
                      type="email"
                      placeholder="Your Email Address"
                      required
                      className="bg-muted/50 border-border/50 h-12"
                    />
                  </motion.div>
                  <motion.div variants={inputVariants}>
                    <Textarea
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="bg-muted/50 border-border/50 resize-none"
                    />
                  </motion.div>
                  <motion.div variants={inputVariants}>
                    <Button variant="glow" size="lg" className="w-full group">
                      Get My Free Trial
                      <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                    </Button>
                  </motion.div>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-primary" size={32} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">Request Submitted!</h3>
                  <p className="text-muted-foreground">
                    Our team will contact you within 24 hours.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
