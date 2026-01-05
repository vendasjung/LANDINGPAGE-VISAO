import { Glasses, Sun, Eye, Sparkles } from "lucide-react";

const services = [
  {
    icon: Glasses,
    title: "Óculos de Grau",
    description:
      "Armações modernas e clássicas das melhores marcas, com lentes de alta precisão para sua receita.",
  },
  {
    icon: Sun,
    title: "Óculos de Sol",
    description:
      "Proteção UV garantida com estilo. Modelos exclusivos para todos os gostos e ocasiões.",
  },
  {
    icon: Eye,
    title: "Lentes de Contato",
    description:
      "Opções de lentes de contato para grau e estética, com orientação profissional completa.",
  },
  {
    icon: Sparkles,
    title: "Lentes Especiais",
    description:
      "Lentes antirreflexo, fotossensíveis, multifocais e muito mais para seu conforto visual.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tudo para sua <span className="text-gradient">visão perfeita</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos soluções completas em óptica com produtos de qualidade e 
            atendimento personalizado para você e sua família.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-service group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
