import { WhatsAppIcon } from "./WhatsAppIcon";

export const WHATSAPP_URL =
  "https://wa.me/5581983798945?text=Ol%C3%A1%20Emilly!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20acompanhamento%20nutricional.";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale pelo WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-navy px-4 py-3 text-cream shadow-[0_12px_40px_-8px_rgba(4,24,48,0.5)] transition-all hover:bg-navy-soft"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-cream text-navy">
        <WhatsAppIcon className="h-4 w-4" />
      </span>
      <span className="hidden pr-2 text-sm font-medium sm:inline">Fale pelo WhatsApp</span>
    </a>
  );
}
