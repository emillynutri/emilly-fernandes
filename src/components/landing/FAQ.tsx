import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Como funciona a primeira consulta?",
    a: "É um momento dedicado a te conhecer: avaliamos sua rotina, histórico, preferências, objetivos e desafios. A partir daí, traçamos juntas as próximas etapas do acompanhamento.",
  },
  {
    q: "Existe retorno da consulta?",
    a: "O retorno na consulta avulsa não é incluído, pois acredito que a nutrição exige um acompanhamento contínuo e personalizado. No acompanhamento, cada retorno é tratado como uma nova consulta. Nele, reavaliamos sua evolução, elaboramos um novo plano alimentar, atualizamos as orientações e, quando necessário, ajustamos a suplementação. Tudo é personalizado de acordo com a sua evolução e necessidades, para que você continue progredindo em direção aos seus objetivos.",
  },
  {
    q: "O plano alimentar é personalizado?",
    a: "Sim. Cada plano é construído de forma única, considerando seu dia a dia, seus gostos e seus objetivos — nada de dietas prontas ou genéricas.",
  },
  {
    q: "Preciso cortar tudo que gosto de comer?",
    a: "Não. O objetivo é reeducar sua relação com a comida, mantendo prazer e equilíbrio. Nada de listas de proibições — trabalhamos com escolhas conscientes.",
  },
  {
    q: "O acompanhamento é indicado para emagrecimento?",
    a: "Sim, é uma das principais demandas. O foco é sempre em resultados sustentáveis e saudáveis, respeitando seu corpo e sua história.",
  },
  {
    q: "Com que frequência acontecem os retornos?",
    a: "Depende da sua fase e dos seus objetivos. Em geral, retornos quinzenais ou mensais funcionam muito bem — ajustamos conforme sua evolução.",
  },
  {
    q: "Como faço para agendar?",
    a: "É simples: basta enviar uma mensagem pelo WhatsApp. Respondo pessoalmente para entender sua necessidade e reservar o melhor horário para você.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="reveal text-center">
          <p className="eyebrow text-navy/50">FAQ</p>
          <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
            Perguntas <em className="not-italic text-navy/70">frequentes</em>
          </h2>
        </div>

        <div className="reveal mt-14 divide-y divide-navy/10 border-y border-navy/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-navy/70"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl leading-snug sm:text-2xl">{f.q}</span>
                  <Plus
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0">
                    <p className="max-w-2xl text-base leading-relaxed text-navy/70">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
