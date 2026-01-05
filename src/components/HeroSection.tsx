import { MessageCircle, Star, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-glasses.jpg";

const HeroSection = () => {
  const whatsappNumber = "5500000000000"; // Substitua pelo número real
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de solicitar um orçamento de óculos.`;

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Óculos elegantes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6">
            <Star className="w-4 h-4 text-accent" fill="currentColor" />
            <span className="text-sm font-medium text-accent">
              Mais de 10 anos de tradição
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Enxergue o mundo com{" "}
            <span className="text-gradient">clareza e estilo</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            Na Ótica Santa Vista, cuidamos da sua visão com carinho e profissionalismo. 
            Peça seu orçamento agora mesmo pelo WhatsApp e descubra armações exclusivas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Pedir Orçamento no WhatsApp
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm">Garantia em todas as lentes</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-sm">Resposta rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
