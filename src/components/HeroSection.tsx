import { MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-glasses.jpg";
import { whatsappLink } from "@/lib/contact";

const HeroSection = () => (
  <section id="inicio" className="relative flex items-center py-16 sm:py-24 lg:py-28">
    <div className="absolute inset-0 z-0">
      <img src={heroImage} alt="" {...{ fetchpriority: "high" }} loading="eager" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/50" />
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-2xl">
        <a href="#localizacao" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6 text-sm font-medium text-accent">
          <MapPin className="w-4 h-4" /> Shopping Gemini · Centro de Lages
        </a>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
          Óculos de grau e sol <span className="text-gradient">em Lages</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
          Na Ótica Visão, você recebe orientação para escolher sua armação e suas lentes, com medidas personalizadas com o Visioffice. Comece pelo WhatsApp e encontre opções para sua necessidade.
        </p>
        <a href={whatsappLink("Olá! Vim pelo site da Ótica Visão e quero enviar minha receita para pedir um orçamento.")} data-contact="hero" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base sm:text-lg text-center">
          <MessageCircle className="w-5 h-5 shrink-0" /> Enviar receita e pedir orçamento
        </a>
        <p className="mt-3 mb-8 text-sm text-primary-foreground/80">Orçamento sem compromisso · Atendimento no horário da loja</p>
        <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-primary-foreground/90">
          {["Armações e lentes", "Óculos de sol", "Atendimento personalizado"].map(text => <span key={text} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" />{text}</span>)}
        </div>
      </div>
    </div>
  </section>
);
export default HeroSection;
