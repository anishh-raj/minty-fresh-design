import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: 'UrbanMint delivered real business growth, not just design. Our conversion rates tripled in the first quarter.',
    author: 'Ananya Sharma',
    role: 'Founder, StyleNest',
    avatar: 'https://i.pravatar.cc/100?img=3',
    rating: 5,
  },
  {
    quote: 'Our paid campaigns became profitable within the first 30 days. The team really understands performance marketing.',
    author: 'Rohit Mehta',
    role: 'CEO, ScaleX',
    avatar: 'https://i.pravatar.cc/100?img=7',
    rating: 5,
  },
  {
    quote: 'Their SEO and growth strategies helped us increase organic traffic within weeks, not months. Incredible results!',
    author: 'Karan Verma',
    role: 'Director, EcomBoost',
    avatar: 'https://i.pravatar.cc/100?img=5',
    rating: 5,
  },
];

const clients = ['StyleNest', 'FinGrow', 'MarketPro', 'ScaleX', 'EcomBoost'];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextTestimonial, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  // Pause on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            ← What Clients Say →
          </span>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 text-primary/20" size={48} />

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  prevTestimonial();
                  setIsAutoPlaying(false);
                }}
                className="rounded-full bg-background/80 backdrop-blur-sm"
              >
                <ChevronLeft size={20} />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  nextTestimonial();
                  setIsAutoPlaying(false);
                }}
                className="rounded-full bg-background/80 backdrop-blur-sm"
              >
                <ChevronRight size={20} />
              </Button>
            </div>

            {/* Content */}
            <div className="text-center relative z-10">
              {/* Avatar */}
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].author}
                className="w-20 h-20 rounded-full mx-auto mb-6 ring-4 ring-primary/20"
              />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <motion.p
                key={`quote-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed"
              >
                "{testimonials[currentIndex].quote}"
              </motion.p>

              {/* Author */}
              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <p className="font-display font-bold text-lg">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </motion.div>
            </div>

            {/* Dots with progress indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`h-2.5 rounded-full transition-all relative overflow-hidden ${
                    index === currentIndex
                      ? 'bg-primary/30 w-8'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2.5'
                  }`}
                >
                  {index === currentIndex && isAutoPlaying && (
                    <motion.div
                      className="absolute inset-0 bg-primary rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 4, ease: "linear" }}
                      style={{ transformOrigin: 'left' }}
                    />
                  )}
                  {index === currentIndex && !isAutoPlaying && (
                    <div className="absolute inset-0 bg-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Client Marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex shrink-0">
                {clients.map((client) => (
                  <span
                    key={`${setIndex}-${client}`}
                    className="px-12 text-2xl md:text-3xl font-display font-bold text-muted-foreground/30 hover:text-primary/50 transition-colors cursor-default"
                  >
                    {client}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
