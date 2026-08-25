import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappUrl = "https://wa.me/5549988044635?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento.";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logotipo da Ótica Visão */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/assets/logotipo-otica-visao-alta.png"
            alt="Ótica Visão"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </a>

        {}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#servicos" className="transition-colors hover:text-primary">
            Serviços & Produtos
          </a>
          <a href="#visioffice" className="transition-colors hover:text-primary flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Tecnologia Visioffice
          </a>
          <a href="#beneficios" className="transition-colors hover:text-primary">
            Diferenciais
          </a>
          <a href="#localizacao" className="transition-colors hover:text-primary">
            Nossa Loja
          </a>
        </nav>

        {/* Botão de Ação / Orçamento */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#localizacao"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
          >
            <MapPin className="h-4 w-4 text-primary" />
            Lages - SC
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Fazer Orçamento
          </a>
        </div>

        {}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-accent"
          aria-label="Alternar menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden border-b bg-background px-4 pb-6 pt-2">
          <nav className="flex flex-col space-y-4">
            <a
              href="#servicos"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium hover:text-primary transition-colors py-2"
            >
              Serviços & Produtos
            </a>
            <a
              href="#visioffice"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors py-2"
            >
              Tecnologia Visioffice
            </a>
            <a
              href="#beneficios"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium hover:text-primary transition-colors py-2"
            >
              Diferenciais
            </a>
            <a
              href="#localizacao"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium hover:text-primary transition-colors py-2"
            >
              Nossa Loja
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground shadow"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
