import { MessageCircle, FileText, Glasses, MapPin } from "lucide-react";
import { whatsappLink } from "@/lib/contact";
const steps = [
  { icon: FileText, title: "Envie sua receita", text: "Mande uma foto pelo WhatsApp e conte o que procura. Se ainda não tem receita, fale com a equipe para receber orientação." },
  { icon: Glasses, title: "Conheça suas opções", text: "Receba orientação sobre lentes e armações. Consulte valores, formas de pagamento e condições disponíveis." },
  { icon: MapPin, title: "Escolha na loja", text: "Visite a Ótica Visão no Shopping Gemini para experimentar as armações e fazer as medidas necessárias." },
];
const BudgetSteps = () => <section id="orcamento" className="section-padding bg-background"><div className="container mx-auto px-4">
  <div className="max-w-2xl mx-auto text-center mb-10"><span className="text-sm font-semibold text-primary uppercase tracking-wider">Simples, com orientação em cada etapa</span><h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-4">Seu orçamento em três passos</h2><p className="text-muted-foreground">Comece online e conte com atendimento presencial no Centro de Lages.</p></div>
  <div className="grid md:grid-cols-3 gap-6">{steps.map(({ icon: Icon, title, text }, index) => <div key={title} className="card-service"><span className="text-sm font-semibold text-primary">0{index+1}</span><Icon className="w-7 h-7 text-primary my-4"/><h3 className="text-xl font-semibold mb-3">{title}</h3><p className="text-muted-foreground leading-relaxed">{text}</p></div>)}</div>
  <div className="text-center mt-8"><a href={whatsappLink("Olá! Quero orientação para fazer meu orçamento de óculos na Ótica Visão.")} data-contact="steps" target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><MessageCircle className="w-5 h-5"/>Começar meu orçamento</a></div>
</div></section>;
export default BudgetSteps;
