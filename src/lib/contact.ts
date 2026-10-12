export const whatsappLink = (message: string) => `https://wa.me/5549988044635?text=${encodeURIComponent(message)}`;

// Clicks represent contact intent, not completed conversations or sales.
// A connected analytics installation may consume these events; no ID is assumed.
export function installContactTracking() {
  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest<HTMLAnchorElement>("a[href]");
    if (!link) return;
    const url = new URL(link.href);
    const channel = url.hostname === "wa.me" ? "whatsapp" : url.protocol === "tel:" ? "phone" : url.hostname === "www.google.com" && url.pathname.startsWith("/maps") ? "maps" : null;
    if (!channel) return;
    const detail = { contact_channel: channel, contact_position: link.dataset.contact || link.closest("section")?.id || (link.closest("header") ? "header" : "footer") };
    const analytics = window as Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
    if (typeof analytics.gtag === "function") analytics.gtag("event", "contact_click", detail);
    else if (analytics.dataLayer) analytics.dataLayer.push({ event: "contact_click", ...detail });
    window.dispatchEvent(new CustomEvent("otica:contact", { detail }));
  });
}
