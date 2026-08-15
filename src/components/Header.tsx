import { Phone, MapPin } from "lucide-react";
import logoVisao from "@/assets/logotipo-otica-visao-alta";

const Header = () => {
  const whatsappNumber = "5549988044635";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Vim pelo site e gostaria de solicitar um orçamento.`;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logoVisao.url}
              alt="Ótica Visão - óculos de grau e sol"
              className="h-7 md:h-9 w-auto"
            />
            <p className="hidden sm:block text-xs text-muted-foreground border-l border-border pl-3">
              Sua visão, nossa missão
            </p>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Shoppin Gemini - Lages/SC</span>
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
