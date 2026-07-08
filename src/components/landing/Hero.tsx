import heroImg from "@/assets/emilly-hero.png";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "./WhatsAppFloat";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-cream">
      {/* organic decorative shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-cream/[0.04] blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[600px] w-[600px] rounded-full bg-cream/[0.03] blur-3xl" />
        <svg
          className="absolute right-10 top-40 hidden opacity-20 lg:block"
          width="180"
          height="180"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="49" stroke="#FFFCF0" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="36" stroke="#FFFCF0" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="22" stroke="#FFFCF0" strokeWidth="0.4" />
        </svg>
      </div>

      <div className="relative mx-auto grid min-h-[92vh] max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:pt-40">
        <div className="reveal">
          <p className="eyebrow text-cream/60">Nutricionista · CRN</p>
          <h1 className="mt-6 text-[2.5rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            Nutrição personalizada para transformar sua{" "}
            <em className="not-italic text-cream/70">relação com a alimentação</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
            Acompanhamento nutricional humanizado, estratégico e pensado para a sua rotina, seus
            objetivos e seu bem-estar.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar consulta pelo WhatsApp
            </a>
            <a href="#servicos" className="btn-ghost">
              Conhecer acompanhamento
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-cream/10 pt-8 text-sm text-cream/60">
            <div>
              <div className="font-serif text-3xl text-cream">Atendimentos</div>
              <div className="font-serif text-3xl text-cream">100%</div>
              <div className="mt-1 text-xs uppercase tracking-widest">Individualizado</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-cream">
                Online<span className="text-cream/40"> + Presencial</span>
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest">Modalidades</div>
            </div>
          </div>
        </div>

        <div className="reveal relative">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[480px]">
            {/* organic backdrop */}
            <div className="absolute inset-x-6 bottom-0 top-10 rounded-t-[240px] rounded-b-[40px] bg-gradient-to-b from-cream/95 to-cream-soft" />
            <div className="absolute -right-4 top-4 h-20 w-20 rounded-full border border-cream/30" />
            <div className="absolute -left-2 bottom-16 h-32 w-32 rounded-full border border-cream/20" />
            <img
              src={heroImg}
              alt="Emilly Fernandes, nutricionista"
              width={912}
              height={1200}
              className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
