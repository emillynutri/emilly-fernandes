import aboutImg from "@/assets/emilly-about.png";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "./WhatsAppFloat";

export function About() {
  return (
    <section id="sobre" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="reveal relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px]">
            <div className="absolute inset-x-4 bottom-0 top-8 rounded-t-[220px] rounded-b-[32px] bg-navy" />
            <div className="absolute -left-3 top-14 h-24 w-24 rounded-full border border-navy/20" />
            <div className="absolute -right-2 bottom-24 h-16 w-16 rounded-full bg-navy/5" />
            <img
              src={aboutImg}
              alt="Emilly Fernandes em consulta"
              width={912}
              height={1104}
              loading="lazy"
              className="relative z-10 h-full w-full object-contain object-bottom"
            />
          </div>
        </div>

        <div className="reveal order-1 lg:order-2">
          <p className="eyebrow text-navy/50">Sobre</p>
          <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
            Conheça <em className="not-italic text-navy/70">Emilly Fernandes</em>
          </h2>
          <div className="mt-6 h-px w-16 bg-navy/30" />
          <p className="mt-6 text-base leading-relaxed text-navy/75 sm:text-lg">
            Sou nutricionista formada pela Faculdade Pernambucana de Saúde, com pós-graduação em
            Emagrecimento e Obesidade. Atualmente, direciono meus estudos e aperfeiçoamento para a
            saúde da mulher.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/75 sm:text-lg">
            Meus atendimentos são baseados em evidências científicas e adaptados à vida real.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-dark mt-10"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar com a nutricionista
          </a>
        </div>
      </div>
    </section>
  );
}
