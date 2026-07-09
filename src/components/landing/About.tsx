import aboutImg from "@/assets/emilly-seria-original.png";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "./WhatsAppFloat";

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(4,24,48,0.04),transparent_34%)]"
      />

      <div className="relative mx-auto grid max-w-330 grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[0.48fr_0.52fr] lg:gap-20 lg:px-10 xl:px-14">
        <div className="reveal relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-[4.15/5] w-full max-w-130">
            {/* arco principal azul */}
            <div className="absolute inset-x-[8%] bottom-0 top-[3%] rounded-t-[999px] rounded-b-[10px] bg-navy shadow-[0_28px_80px_rgba(4,24,48,0.16)]" />

            {/* linha dourada contornando o arco */}
            <div className="absolute inset-x-[5%] bottom-[-1%] top-[0%] rounded-t-[999px] rounded-b-[14px] border border-[#CFA66B]/45" />

            {/* círculo decorativo esquerdo */}
            <div className="absolute -left-1 top-[12%] h-24 w-24 rounded-full border border-[#CFA66B]/40 lg:-left-5 lg:h-28 lg:w-28" />

            {/* forma creme atrás da imagem */}
            <div className="absolute -right-7 bottom-[4%] h-36 w-28 rounded-t-full rounded-b-[28px] bg-[#EFE8D8]/80 lg:-right-10 lg:h-44 lg:w-36" />

            {/* folha decorativa */}
            <svg
              aria-hidden
              className="absolute left-[3%] top-[46%] z-10 hidden h-48 w-28 text-[#CFA66B]/55 sm:block"
              viewBox="0 0 120 220"
              fill="none"
            >
              <path
                d="M62 204C58 162 56 124 64 84C69 58 78 35 91 13"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M62 160C39 145 24 130 14 108C39 113 55 128 62 160Z"
                stroke="currentColor"
                strokeWidth="1.1"
              />
              <path
                d="M61 127C38 112 22 93 10 68C38 75 55 95 61 127Z"
                stroke="currentColor"
                strokeWidth="1.1"
              />
              <path
                d="M66 94C85 78 98 58 105 32C82 43 69 62 66 94Z"
                stroke="currentColor"
                strokeWidth="1.1"
              />
              <path
                d="M60 190C38 180 21 166 7 145C35 147 53 164 60 190Z"
                stroke="currentColor"
                strokeWidth="1.1"
              />
            </svg>

            <div className="absolute inset-x-[8%] bottom-0 top-[3%] z-20 overflow-hidden rounded-t-[999px] rounded-b-[10px]">
              <img
                src={aboutImg}
                alt="Emilly Fernandes em consulta"
                width={1400}
                height={1800}
                loading="lazy"
                className="h-full w-full object-cover object-[54%_18%] scale-[1.02]"
              />

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,24,48,0.06),rgba(4,24,48,0.02)_34%,rgba(4,24,48,0.14))]"
              />
            </div>
          </div>
        </div>

        <div className="reveal order-1 max-w-[660px] lg:order-2">
          <p className="eyebrow text-navy/48">Sobre</p>

          <h2 className="mt-6 font-serif leading-[1.02] tracking-[-0.03em] text-navy">
            <span className="block text-[3.35rem] italic text-[#E6C79C] sm:text-[4.7rem] lg:text-[5.4rem]">
              prazer,
            </span>
            <span className="mt-1 block text-[2.35rem] text-navy/72 sm:text-[3.15rem] lg:text-[3.9rem]">
              sou Emilly Fernandes
            </span>
          </h2>

          <div className="mt-7 flex items-center gap-2">
            <span className="h-px w-20 bg-[#CFA66B]/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#CFA66B]" />
          </div>

          <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.8] text-navy/72 sm:text-lg">
            <p>
              Sou nutricionista formada pela Faculdade Pernambucana de Saúde, com pós-graduação em
              Emagrecimento e Obesidade. Atualmente, direciono meus estudos e aperfeiçoamento para
              Saúde da Mulher.
            </p>

            <p>Meus atendimentos são baseados em evidências científicas e adaptados à vida real.</p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-navy px-8 text-sm font-semibold text-cream shadow-[0_18px_42px_rgba(4,24,48,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-navy/92"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar com a nutricionista
          </a>
        </div>
      </div>
    </section>
  );
}
