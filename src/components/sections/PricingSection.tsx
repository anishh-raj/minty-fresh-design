import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Starter',
    price: '₹29,999',
    priceNote: 'One-time payment',
    features: [
      '1–3 Page Website',
      'Mobile Responsive',
      'Basic SEO Setup',
      'Contact Form',
      '7 Days Delivery',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    price: '₹49,999',
    priceNote: 'One-time payment',
    features: [
      'Up to 6 Pages',
      'Advanced UI/UX',
      'SEO Optimization',
      'Social Media Setup',
      'Priority Support',
    ],
    featured: true,
  },
  {
    name: 'Custom',
    price: 'Custom',
    priceNote: 'Tailored pricing',
    features: [
      'Fully Custom Website',
      'SEO + Content Strategy',
      'Social Media Growth',
      'Analytics & CRO',
      'Dedicated Support',
    ],
    featured: false,
  },
];

export const PricingSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Simple & Transparent Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Plans That <span className="text-gradient">Grow With Your Business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose a plan that fits your current stage — upgrade anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`relative ${plan.featured ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-primary to-accent px-4 py-1.5 rounded-full flex items-center gap-1.5">
                    <Sparkles size={14} className="text-primary-foreground" />
                    <span className="text-xs font-semibold text-primary-foreground">Most Popular</span>
                  </div>
                </div>
              )}

              <div
                className={`h-full rounded-3xl p-8 transition-all duration-300 ${
                  plan.featured
                    ? 'bg-gradient-to-b from-primary/20 to-primary/5 border border-primary/30 shadow-lg shadow-primary/10'
                    : 'glass-card hover:bg-muted/30'
                }`}
              >
                <h3 className="font-display text-xl font-bold mb-2">{plan.name}</h3>
                
                <div className="mb-6">
                  <span className="font-display text-4xl font-bold text-gradient">
                    {plan.price}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">{plan.priceNote}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.featured ? 'glow' : 'outline'}
                  className="w-full"
                >
                  {plan.price === 'Custom' ? "Let's Connect" : 'Get Started'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
