import { MapPin, Clock, Phone, Navigation, MessageCircle, Mail } from "lucide-react";

const MapSection = () => {
  const addressText = "Rua João de Castro, 68 - Centro (Shopping Gemini, Sala 14) - Lages / SC";
  const mapSearchUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Jo%C3%A3o+de+Castro+68+Centro+Lages+SC";
  const whatsappUrl = "https://wa.me/5549988044635?text=Ol%C3%A1!%20Gostaria%20de%20saber%20como%20chegar%20%C3%A0%20%C3%93tica%20Vis%C3%A3o.";

  return (
    <section id="localizacao" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <MapPin className="h-3.5 w-3.5" />
            <span>Nossa Loja Física</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Venha nos visitar na Ótica Visão em Lages
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Atendimento humanizado, equipamentos modernos para medidas e um café quentinho esperando por você.
          </p>
        </div>

        {}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-1 space-y-6 bg-background p-6 sm:p-8 rounded-2xl border shadow-sm">
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1">Endereço</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rua João de Castro, 68 - Centro<br />
                  Shopping Gemini, Sala 14<br />
                  Lages - SC | CEP 88501-160
                </p>
              </div>
            </div>

            <hr className="border-border" />

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1">Horário de Funcionamento</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Segunda a Sexta:</strong><br />
                  09:00 às 12:00 e 13:30 às 18:30<br />
                  <strong>Sábados:</strong><br />
                  09:00 às 13:00
                </p>
              </div>
            </div>

            <hr className="border-border" />

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1">Telefones & WhatsApp</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>WhatsApp:</strong> (49) 98804-4635<br />
                  <strong>Fixo:</strong> (49) 3225-1340
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1">E-mail</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  oticavisaolages@gmail.com
                </p>
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors"
              >
                <Navigation className="h-4 w-4" />
                Abrir no Google Maps
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-3 text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                Chamar no WhatsApp
              </a>
            </div>

          </div>

          {}
          <div className="lg:col-span-2 h-[480px] sm:h-[550px] w-full rounded-2xl overflow-hidden border shadow-sm relative bg-muted">
            <iframe
              title="Mapa de Localização - Ótica Visão Lages"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.2731818167665!2d-50.32832812373024!3d-27.816738976118437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e01c481ff6961d%3A0x2ac30c401378a559!2sRua%20Jo%C3%A3o%20de%20Castro%2C%2068%20-%20Centro%2C%20Lages%20-%20SC%2C%2088501-160!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapSection;
