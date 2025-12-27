import { motion } from 'framer-motion';
import { Star, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const offers = [
  '⚡ Priority Support for Early Signups',
  '🚀 Free Website Audit for New Clients',
  '📈 SEO Boost Plan – Rank Faster',
  '💡 Custom Growth Strategy (Free)',
  '🎯 Social Media Setup @ No Cost',
];

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Digital agency team"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Trusted by <span className="text-foreground font-semibold">130+</span> businesses
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-gradient">AI-Powered</span> Digital
              <br />
              Experiences That
              <br />
              <span className="text-foreground">Grow Your Business</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              UrbanMint helps startups and brands scale faster with AI-driven
              websites, SEO, and social media systems built to convert — not just
              look good.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="glow" size="lg" className="group">
                Get Free Audit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Offers Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="glass-card rounded-3xl p-6 gradient-border">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-primary" size={20} />
                <h3 className="font-display font-bold text-lg">Limited Offers</h3>
              </div>

              <div className="space-y-3 overflow-hidden h-48">
                <div className="animate-marquee flex flex-col gap-3">
                  {[...offers, ...offers].map((offer, index) => (
                    <div
                      key={index}
                      className="bg-muted/50 px-4 py-3 rounded-xl text-sm text-foreground whitespace-nowrap"
                    >
                      {offer}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
