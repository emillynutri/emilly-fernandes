import logoLateral from "@/assets/logo-lateral-clean.png";
import { WHATSAPP_URL } from "./WhatsAppFloat";

export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-navy">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="shrink-0 text-cream">
          <img
            src={logoLateral}
            alt="Emilly Fernandes Nutricionista"
            className="h-10 w-auto object-contain lg:h-12"
          />
        </a>
        <div className="hidden items-center gap-8 text-sm text-cream/80 md:flex">
          <a href="#sobre" className="transition hover:text-cream">
            Sobre
          </a>
          <a href="#como-funciona" className="transition hover:text-cream">
            Como funciona
          </a>
          <a href="#faq" className="transition hover:text-cream">
            FAQ
          </a>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm"
        >
          Agendar consulta
        </a>
      </div>
    </nav>
  );
}
