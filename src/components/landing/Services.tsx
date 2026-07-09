import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const services = [
  {
    title: "Consulta nutricional individual",
    desc: "Uma avaliação completa para entender você por inteiro.",
  },
  {
    title: "Acompanhamento contínuo",
    desc: "Retornos regulares para garantir constância e evolução.",
  },
  {
    title: "Plano alimentar personalizado",
    desc: "Construído a partir da sua rotina, gostos e objetivos.",
  },
  {
    title: "Retornos e ajustes",
    desc: "Adaptamos o plano conforme sua evolução e suas descobertas.",
  },
  { title: "Orientações práticas", desc: "Rotina, compras e organização alimentar de forma leve." },
];

export function Services() {
  return (
    <section id="servicos" className="relative bg-navy py-16 text-cream lg:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-cream/3 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-cream/50">Acompanhamento</p>
          <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
            Formas de <em className="not-italic text-cream/70">atendimento</em>
          </h2>
          <p className="mt-5 text-cream/70">
            Um cuidado profissional pensado em cada detalhe — do primeiro contato à sua autonomia
            alimentar.
          </p>
        </div>

        <ul className="mt-16 divide-y divide-cream/10 border-y border-cream/10">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="reveal grid grid-cols-[auto_1fr] items-baseline gap-6 py-6 sm:grid-cols-[80px_1fr_auto] sm:gap-10"
            >
              <span className="font-serif text-2xl text-cream/40">0{i + 1}</span>
              <div>
                <h3 className="text-2xl leading-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-cream/60 sm:hidden">{s.desc}</p>
              </div>
              <p className="hidden max-w-md text-sm text-cream/60 sm:block">{s.desc}</p>
            </li>
          ))}
        </ul>

        <div className="reveal mt-14 flex justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WhatsAppIcon className="h-4 w-4" />
            Quero iniciar meu acompanhamento
          </a>
        </div>
      </div>
    </section>
  );
}
