import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Share2, 
  Search, 
  TrendingUp, 
  Palette, 
  PenTool, 
  Code, 
  BarChart3 
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const services = [
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Engage your audience and build brand presence across all platforms.',
    color: 'from-pink-500/20 to-rose-500/10',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Rank higher on search engines and drive organic traffic.',
    color: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Data-driven campaigns that maximize your ROI.',
    color: 'from-green-500/20 to-emerald-500/10',
  },
  {
    icon: Palette,
    title: 'Brand Strategy',
    description: 'Create a memorable brand identity that stands out.',
    color: 'from-purple-500/20 to-violet-500/10',
  },
  {
    icon: PenTool,
    title: 'Content & Creatives',
    description: 'Compelling content that tells your brand story.',
    color: 'from-orange-500/20 to-amber-500/10',
  },
  {
    icon: Code,
    title: 'Website Development',
    description: 'Modern, fast, and responsive websites that convert.',
    color: 'from-primary/20 to-accent/10',
  },
  {
    icon: BarChart3,
    title: 'Analytics & CRO',
    description: 'Turn data into insights and visitors into customers.',
    color: 'from-teal-500/20 to-cyan-500/10',
  },
];

export const ServicesSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Core Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to build, grow, and scale your digital presence under one roof.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover:bg-muted/30 transition-all duration-500 cursor-pointer overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <service.icon className="text-primary" size={28} />
                  </div>
                  
                  <h3 className="font-display font-bold text-lg mb-2 group-hover:text-gradient transition-all">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
