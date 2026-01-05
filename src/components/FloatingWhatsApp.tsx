import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappNumber = "5500000000000"; // Substitua pelo número real
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de solicitar um orçamento de óculos.`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default FloatingWhatsApp;
