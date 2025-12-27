import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Brain, Zap, Handshake, Shield } from 'lucide-react';

const stats = [
  { value: 130, label: 'Projects Delivered', suffix: '+' },
  { value: 2, label: 'Years Experience', suffix: '+' },
  { value: 110, label: 'Client Satisfaction', suffix: '%' },
];

const beliefs = [
  {
    icon: Brain,
    title: 'Strategy & Growth Focus',
    points: ['Data-driven decisions, not guesswork', 'Growth strategies tailored to each business'],
  },
  {
    icon: Zap,
    title: 'Execution & Speed',
    points: ['Fast execution without compromising quality', 'Agile approach — adapt quickly as markets change'],
  },
  {
    icon: Handshake,
    title: 'Client Relationship',
    points: ['Clear ownership and accountability', 'Honest feedback, even when it\'s uncomfortable'],
  },
  {
    icon: Shield,
    title: 'Trust & Transparency',
    points: ['No hidden costs or long-term lock-ins', 'Complete visibility into progress & performance'],
  },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-display font-bold text-gradient">
      {count}{suffix}
    </span>
  );
};

export const AboutSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About UrbanMint
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              A Digital Agency Built for{' '}
              <span className="text-gradient">Modern Business Growth</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-4">
              UrbanMint was founded with one simple goal — to help businesses grow
              online without confusion, inflated costs, or outdated strategies.
              We combine design, technology, and marketing to deliver measurable
              results.
            </p>

            <p className="text-muted-foreground mb-8">
              From startups to growing brands, we work closely with our clients to
              understand their vision and turn it into a strong digital presence
              that converts visitors into customers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Beliefs Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="font-display text-2xl font-bold mb-6">What We Believe</h3>

            <div className="space-y-6">
              {beliefs.map((belief, index) => (
                <motion.div
                  key={belief.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <belief.icon className="text-primary" size={20} />
                    </div>
                    <h4 className="font-display font-semibold text-lg">{belief.title}</h4>
                  </div>
                  <div className="ml-13 space-y-1">
                    {belief.points.map((point) => (
                      <p key={point} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {point}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
