import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "./WhatsAppFloat";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-cream lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-cream/[0.04] blur-3xl" />
      </div>
      <div className="reveal relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <p className="eyebrow text-cream/60">Vamos começar</p>
        <h2 className="mt-5 text-4xl leading-tight sm:text-6xl">
          Sua nova relação com a comida <em className="not-italic text-cream/70">começa aqui</em>
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WhatsAppIcon className="h-4 w-4" />
            Tirar dúvidas pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
