import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import logoVisaoBranco from "@/assets/logotipo-otica-visao-branco";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logoVisaoBranco}
                alt="Ótica Visão"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-primary-foreground/60 leading-relaxed">
              Há mais de 10 anos cuidando da sua visão com carinho, 
              qualidade e os melhores produtos do mercado.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm">Shopping Gemini - Rua João de Castro, 68 - Centro - Lages/SC</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm">(49) 98804-4635</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm">oticavisaolages@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/oticavisaolages"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram da Ótica Visão"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/VisaoLages"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook da Ótica Visão"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Ótica Visão. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
