import { Eye, Sparkles, Compass, ShieldCheck, CheckCircle2 } from "lucide-react";
import visiofficeImage from "@/assets/visioffice-2.webp";

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
              Medidas Personalizadas com o equipamento <span className="text-primary">Visioffice</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Na <strong>Ótica Visão</strong>, aliamos a tradição da saúde visual à inovação tecnológica. O sistema <strong>Visioffice®</strong> auxilia na tomada de medidas considerando seus olhos, a posição da armação e sua postura. Essas informações apoiam a personalização e a montagem das lentes, conforme o produto escolhido.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-slate-900 p-2.5 text-primary border border-slate-800 shrink-0">
                  <Compass className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Precisão Milimétrica 3D</h3>
                  <p className="text-slate-400 text-sm">
                    Registra parâmetros individuais que auxiliam no posicionamento das lentes na armação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-slate-900 p-2.5 text-primary border border-slate-800 shrink-0">
                  <Eye className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Orientação para sua adaptação</h3>
                  <p className="text-slate-400 text-sm">
                    A escolha das lentes e as medidas de montagem fazem parte do cuidado com seu conforto visual. A adaptação varia conforme cada pessoa e lente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-slate-900 p-2.5 text-primary border border-slate-800 shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Medidas para sua armação</h3>
                  <p className="text-slate-400 text-sm">
                    Parâmetros como distância naso-pupilar e posição da armação ajudam a orientar a montagem das lentes escolhidas.
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
              <figure>
                <div className="aspect-square w-full rounded-xl bg-slate-950 overflow-hidden border border-slate-800/80">
                  <img
                    src={visiofficeImage}
                    alt="Representação ilustrativa do equipamento Visioffice 2 para medidas ópticas personalizadas"
                    className="h-full w-full object-contain"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-3 text-center text-xs text-slate-400">
                  Visioffice 2 · Imagem ilustrativa
                </figcaption>
              </figure>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-800">
                  <span className="text-2xl font-bold text-primary">3D</span>
                  <p className="text-xs text-slate-400 mt-1">Medidas individuais</p>
                </div>
                <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-800">
                  <span className="text-2xl font-bold text-primary">Na loja</span>
                  <p className="text-xs text-slate-400 mt-1">Orientação presencial</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 justify-center">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Disponível na Ótica Visão em Lages / SC</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisiofficeSection;
