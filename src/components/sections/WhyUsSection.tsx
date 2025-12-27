import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, DollarSign, BrainCircuit, Users } from 'lucide-react';

const reasons = [
  {
    icon: Rocket,
    title: 'Built for Growth',
    description: 'Every website, campaign, and strategy is designed to scale.',
  },
  {
    icon: DollarSign,
    title: 'No Bloated Pricing',
    description: 'Agency-quality work without overpriced retainers.',
  },
  {
    icon: BrainCircuit,
    title: 'Modern 2025 Strategies',
    description: 'We use what works now — not outdated methods.',
  },
  {
    icon: Users,
    title: 'Partner, Not Vendor',
    description: 'Your success is directly tied to our performance.',
  },
];

const points = [
  '⚡ Fast execution, no delays',
  '📊 Strategy backed by real data',
  '🎯 Focus on ROI, not vanity metrics',
];

export const WhyUsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Marquee Ticker */}
      <div className="mb-16 bg-primary/10 py-4 overflow-hidden">
        <div className="flex animate-marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0">
              {[
                '🚀 Helping brands grow with data-driven strategies',
                '📈 Performance-focused marketing, not vanity metrics',
                '🎯 Built for startups, scaling brands & modern businesses',
                '⚡ Fast execution without compromising quality',
                '💡 Strategy, design & marketing under one roof',
              ].map((text, index) => (
                <span
                  key={index}
                  className="px-8 text-foreground font-medium whitespace-nowrap"
                >
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Why UrbanMint?
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Not Just Another Agency.
              <br />
              <span className="text-gradient">We're Your Growth Partner.</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              We don't sell generic services. UrbanMint focuses on real business growth
              using smart design, performance marketing, and data-backed strategies
              that actually move numbers.
            </p>

            <ul className="space-y-3">
              {points.map((point) => (
                <li key={point} className="text-foreground font-medium text-lg">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Content - Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:bg-muted/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <reason.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
