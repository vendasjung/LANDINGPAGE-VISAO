import { Phone, MapPin } from "lucide-react";

const Header = () => {
  const whatsappNumber = "5500000000000"; // Substitua pelo número real
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de solicitar um orçamento de óculos.`;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">SV</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif font-semibold text-foreground text-lg leading-tight">
                Ótica Visão
              </h1>
              <p className="text-xs text-muted-foreground">Sua visão, nossa missão</p>
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Sua cidade, Estado</span>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-whatsapp text-primary-foreground font-medium text-sm transition-all hover:bg-whatsapp-hover"
            >
              <Phone className="w-4 h-4" />
              Fale Conosco
            </a>
          </div>

          {/* Mobile CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-whatsapp text-primary-foreground font-medium text-sm"
          >
            <Phone className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
