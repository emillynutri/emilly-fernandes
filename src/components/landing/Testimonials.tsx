import { Quote } from "lucide-react";

const items = [
  { quote: "Me senti acolhida e finalmente consegui seguir um plano que fazia sentido para minha rotina.", name: "Paciente" },
  { quote: "O acompanhamento me ajudou a entender melhor minha alimentação sem culpa e sem restrições exageradas.", name: "Paciente" },
  { quote: "Foi um processo leve, com orientações práticas e resultados reais.", name: "Paciente" },
];

export function Testimonials() {
  return (
    <section className="relative bg-cream-soft py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-navy/50">Depoimentos</p>
          <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
            Histórias que inspiram <em className="not-italic text-navy/70">novos hábitos</em>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <figure key={i} className="reveal relative rounded-2xl border border-navy/10 bg-cream p-8 lg:p-10">
              <Quote className="h-6 w-6 text-navy/25" strokeWidth={1.5} />
              <blockquote className="mt-5 font-serif text-xl leading-snug text-navy/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-navy/10 pt-4 text-sm text-navy/60">
                <span className="h-8 w-8 rounded-full bg-navy/10" />
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-navy/40">
          Depoimentos ilustrativos — podem ser editados posteriormente.
        </p>
      </div>
    </section>
  );
}
