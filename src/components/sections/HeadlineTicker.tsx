import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const headlines = [
  '🚀 Helping brands grow with data-driven strategies',
  '📈 Performance-focused marketing, not vanity metrics',
  '🎯 Built for startups, scaling brands & modern businesses',
  '⚡ Fast execution without compromising quality',
  '💡 Strategy, design & marketing under one roof',
];

export const HeadlineTicker = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="py-8 bg-primary/5 border-y border-border overflow-hidden"
    >
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee-horizontal gap-8">
          {[...headlines, ...headlines].map((headline, index) => (
            <span
              key={index}
              className="text-lg md:text-xl font-medium text-foreground whitespace-nowrap px-4"
            >
              {headline}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee-horizontal gap-8" aria-hidden="true">
          {[...headlines, ...headlines].map((headline, index) => (
            <span
              key={`clone-${index}`}
              className="text-lg md:text-xl font-medium text-foreground whitespace-nowrap px-4"
            >
              {headline}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
