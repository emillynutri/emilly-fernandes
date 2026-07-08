import { Instagram } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "./WhatsAppFloat";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-navy text-cream/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <div className="font-serif text-3xl text-cream">Emilly Fernandes</div>
          <p className="mt-2 text-sm uppercase tracking-[0.28em] text-cream/50">Nutricionista</p>
          <p className="mt-6 max-w-md text-sm leading-relaxed">
            Atendimento nutricional individualizado para uma rotina mais saudável, leve e equilibrada.
          </p>
        </div>
        <div>
          <p className="eyebrow text-cream/50">Contato</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-cream transition hover:text-cream/70">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
          <br />
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-cream transition hover:text-cream/70">
            <Instagram className="h-4 w-4" strokeWidth={1.5} /> Instagram
          </a>
        </div>
        <div>
          <p className="eyebrow text-cream/50">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#sobre" className="transition hover:text-cream">Sobre</a></li>
            <li><a href="#especialidades" className="transition hover:text-cream">Jornada</a></li>
            <li><a href="#servicos" className="transition hover:text-cream">Acompanhamento</a></li>
            <li><a href="#faq" className="transition hover:text-cream">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} Emilly Fernandes · Nutricionista
      </div>
    </footer>
  );
}
