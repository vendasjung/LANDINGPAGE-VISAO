import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VisiofficeSection from "@/components/VisiofficeSection";
import BenefitsSection from "@/components/BenefitsSection";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <VisiofficeSection />
        <BenefitsSection />
        <MapSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
