import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const steps = [
  {
    n: "01",
    title: "Agendamento pelo WhatsApp",
    desc: "Você entra em contato e escolhe o melhor horário para sua consulta.",
  },
  {
    n: "02",
    title: "Avaliação individual",
    desc: "Entendo sua rotina, histórico, preferências, objetivos, principais desafios e, na consulta presencial temos uma avaliação da composição corporal por meio de dobras cutâneas",
  },
  {
    n: "03",
    title: "Plano personalizado",
    desc: "Construção de estratégias nutricionais, adaptadas à sua realidade e objetivos.",
  },
  {
    n: "04",
    title: "Acompanhamento e evolução",
    desc: "Ajustes e orientações para garantir constância, resultados e autonomia.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden bg-cream pb-18 pt-16 text-navy lg:pb-24 lg:pt-20"
    >
      {/* Elementos decorativos suaves */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[22%] h-72 w-72 rounded-full bg-white/45 blur-3xl" />
        <div className="absolute right-[8%] top-[16%] h-80 w-80 rounded-full bg-white/45 blur-3xl" />

        <svg
          className="absolute right-[-6%] top-16 hidden opacity-35 lg:block"
          width="310"
          height="310"
          viewBox="0 0 310 310"
          fill="none"
        >
          <circle cx="155" cy="155" r="154" stroke="#CFA66B" strokeWidth="1" />
        </svg>

        <svg
          className="absolute bottom-[-5%] left-[-5%] hidden opacity-45 lg:block"
          width="430"
          height="300"
          viewBox="0 0 430 300"
          fill="none"
        >
          <path
            d="M2 196C75 107 176 112 218 178C256 238 170 281 112 234C64 195 120 126 214 154C304 181 352 135 428 54"
            stroke="#CFA66B"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow text-[#CFA66B]">Como funciona</p>

          <h2 className="mt-5 font-serif text-[2.65rem] leading-tight tracking-[-0.035em] text-navy sm:text-[3.5rem] lg:text-[4.15rem]">
            Um processo <span className="text-[#CFA66B]">leve</span>{" "}
            <span className="text-navy/70">e estruturado</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((s) => (
            <article
              key={s.n}
              className="reveal group relative min-h-67.5 rounded-[1.5rem] border border-navy/10 bg-[#FFFCF0]/72 p-8 shadow-[0_24px_70px_rgba(4,24,48,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#CFA66B]/45 hover:shadow-[0_28px_80px_rgba(4,24,48,0.12)]"
            >
              <span className="font-serif text-[3.35rem] leading-none tracking-[-0.04em] text-navy/22 transition-colors duration-300 group-hover:text-[#CFA66B]/65">
                {s.n}
              </span>

              <h3 className="mt-7 max-w-52 font-serif text-[1.35rem] leading-snug tracking-[-0.02em] text-navy">
                {s.title}
              </h3>

              <p className="mt-5 text-[0.98rem] leading-relaxed text-navy/62">{s.desc}</p>

              <span className="absolute bottom-8 left-8 h-px w-10 bg-[#CFA66B] transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>

        <div className="reveal mt-10 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-navy px-8 text-sm font-semibold text-cream shadow-[0_18px_40px_rgba(4,24,48,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-navy/92"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
