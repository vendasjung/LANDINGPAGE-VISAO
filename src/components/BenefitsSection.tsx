import { Check, MessageCircle } from "lucide-react";

const benefits = [
  "Atendimento personalizado e acolhedor",
  "Orçamento sem compromisso pelo WhatsApp",
  "Parcelas que cabem no seu bolso",
  "Garantia em todos os produtos",
  "Profissionais experientes e qualificados",
  "Ampla variedade de marcas e modelos",
];

const BenefitsSection = () => {
  const whatsappNumber = "5500000000000"; // Substitua pelo número real
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de saber mais sobre os serviços da Ótica Santa Vista.`;

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Por que nos escolher?
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sua satisfação é nossa <span className="text-gradient">prioridade</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Na Ótica Santa Vista, combinamos tradição e modernidade para oferecer 
              a melhor experiência em cuidados com a visão.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com um Especialista
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="card-service text-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                10+
              </div>
              <p className="text-muted-foreground">Anos de experiência</p>
            </div>
            <div className="card-service text-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                5000+
              </div>
              <p className="text-muted-foreground">Clientes satisfeitos</p>
            </div>
            <div className="card-service text-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                100%
              </div>
              <p className="text-muted-foreground">Garantia de qualidade</p>
            </div>
            <div className="card-service text-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                24h
              </div>
              <p className="text-muted-foreground">Resposta garantida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
