import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const steps = [
  { n: "01", title: "Agendamento pelo WhatsApp", desc: "Você entra em contato e escolhe o melhor horário para sua consulta." },
  { n: "02", title: "Avaliação individual", desc: "Entendimento da sua rotina, histórico, preferências, objetivos e principais desafios." },
  { n: "03", title: "Plano personalizado", desc: "Construção de estratégias alimentares realistas, adaptadas à sua vida." },
  { n: "04", title: "Acompanhamento e evolução", desc: "Ajustes e orientações para garantir constância, resultados e autonomia." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-navy/50">Como funciona</p>
          <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
            Um processo <em className="not-italic text-navy/70">leve e estruturado</em>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="reveal group relative rounded-2xl border border-navy/10 bg-cream-soft/60 p-8 transition-all hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_20px_50px_-20px_rgba(4,24,48,0.25)]">
              <span className="font-serif text-5xl text-navy/25">{s.n}</span>
              <h3 className="mt-4 text-xl leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/65">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 flex justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-dark">
            <WhatsAppIcon className="h-4 w-4" />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
