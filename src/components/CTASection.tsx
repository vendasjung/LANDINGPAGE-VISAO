import { MessageCircle, Phone, Clock } from "lucide-react";

const CTASection = () => {
  const whatsappNumber = "5500000000000"; // Substitua pelo número real
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de solicitar um orçamento de óculos.`;

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-teal-dark to-primary" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Pronto para cuidar da sua visão?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Envie sua receita ou tire suas dúvidas pelo WhatsApp. 
            Nossa equipe está pronta para te atender!
          </p>

          {/* CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg inline-flex mb-10"
          >
            <MessageCircle className="w-6 h-6" />
            Solicitar Orçamento Agora
          </a>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>(00) 00000-0000</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-primary-foreground/30" />
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Seg - Sáb: 8h às 18h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
