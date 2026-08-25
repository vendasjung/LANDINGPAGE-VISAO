import { Eye, Sparkles, Compass, ShieldCheck, CheckCircle2 } from "lucide-react";

const VisiofficeSection = () => {
  const whatsappUrl = "https://wa.me/5549988044635?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20medida%20personalizada%20com%20o%20Visioffice.";

  return (
    <section id="visioffice" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Luzes de fundo decorativas */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold text-primary border border-primary/30">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Tecnologia de Precisão Óptica</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Medidas Personalizadas com a Coluna <span className="text-primary">Visioffice®</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Na <strong>Ótica Visão</strong>, aliamos a tradição da saúde visual à inovação tecnológica. O sistema <strong>Visioffice®</strong> realiza um escaneamento dinâmico em 3D da sua postura, olhar e encaixe da armação, garantindo lentes 100% personalizadas para os seus olhos.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-slate-900 p-2.5 text-primary border border-slate-800 shrink-0">
                  <Compass className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Precisão Milimétrica 3D</h3>
                  <p className="text-slate-400 text-sm">
                    Mapeia o centro de rotação exato do olho (EYECODE™) para um ajuste perfeito em lentes multifocais e monofocais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-slate-900 p-2.5 text-primary border border-slate-800 shrink-0">
                  <Eye className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Adaptação Rápida e Confortável</h3>
                  <p className="text-slate-400 text-sm">
                    Elimina distorções nas bordas das lentes e proporciona um campo de visão amplo e natural desde o primeiro dia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-slate-900 p-2.5 text-primary border border-slate-800 shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Personalização Exclusiva</h3>
                  <p className="text-slate-400 text-sm">
                    Lentes sob medida considerando o ângulo pantoscópico, distância naso-pupilar e curvatura da sua armação favorita.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors"
              >
                Agendar Medição pelo WhatsApp
              </a>
            </div>
          </div>

          {}
          <div className="relative">
            <div className="relative mx-auto rounded-2xl bg-slate-900/90 p-6 sm:p-8 border border-slate-800 backdrop-blur shadow-2xl">
              <div className="aspect-video w-full rounded-xl bg-slate-950 overflow-hidden relative flex items-center justify-center border border-slate-800/80">
                <div className="text-center p-6 space-y-3">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2 border border-primary/40">
                    <Eye className="h-8 w-8 animate-pulse text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Escaneamento Digital Visioffice®</h4>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    Tomada de medidas sem contato físico, com câmeras de alta fidelidade e software óptico avançado.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-800">
                  <span className="text-2xl font-bold text-primary">100%</span>
                  <p className="text-xs text-slate-400 mt-1">Lentes Personalizadas</p>
                </div>
                <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-800">
                  <span className="text-2xl font-bold text-primary">0.1mm</span>
                  <p className="text-xs text-slate-400 mt-1">Precisão do Centro Focal</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 justify-center">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Exclusivo na nossa loja em Lages / SC</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisiofficeSection;
