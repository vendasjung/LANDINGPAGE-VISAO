import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VisiofficeSection from "@/components/VisiofficeSection";
import BenefitsSection from "@/components/BenefitsSection";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import BudgetSteps from "@/components/BudgetSteps";
import StoreGallery from "@/components/StoreGallery";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <HeroSection />
        <BudgetSteps />
        <ServicesSection />
        <VisiofficeSection />
        <BenefitsSection />
        <StoreGallery />
        <FAQSection />
        <MapSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
