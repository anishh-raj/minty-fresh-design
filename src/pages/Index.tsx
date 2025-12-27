import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyUsSection />
        <ServicesSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
