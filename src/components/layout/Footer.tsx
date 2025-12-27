import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Globe, Instagram, Linkedin, Facebook } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const footerLinks = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  resources: [
    { name: 'Case Studies', href: '#' },
    { name: 'Blogs', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ],
};

const socialLinks = [
  { icon: Globe, href: '#', label: 'Website' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export const Footer = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden" ref={containerRef}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Brand Column */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <div className="w-3 h-3 border-l-2 border-t-2 border-primary-foreground rotate-45 -mb-1" />
                <div className="absolute bottom-2.5 w-1.5 h-1.5 bg-primary-foreground rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight">UrbanMint</span>
                <span className="text-xs text-primary font-medium">Digital</span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              UrbanMint is a digital growth agency helping startups and brands scale
              through SEO, performance marketing, analytics, and modern web experiences.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span>hello@urbanmint.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span>+91 828-777-8313</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span>India</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} UrbanMint Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
