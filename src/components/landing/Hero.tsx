import heroImg from "@/assets/emilly-hero.png";
import logoLetras from "@/assets/logo-letras.png";
import { CalendarDays, Leaf, UserRound } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "./WhatsAppFloat";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-cream">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[560px] w-[560px] rounded-full bg-cream/[0.035] blur-3xl" />
        <div className="absolute right-[-8%] top-[14%] h-[620px] w-[620px] rounded-full bg-cream/[0.055] blur-3xl" />

        <svg
          className="absolute right-[4%] top-[13%] hidden opacity-55 xl:block"
          width="132"
          height="132"
          viewBox="0 0 132 132"
          fill="none"
        >
          <circle cx="66" cy="66" r="65" stroke="#CFA66B" strokeWidth="0.8" />
        </svg>

        <svg
          className="absolute left-[-4%] bottom-[-8%] hidden opacity-60 lg:block"
          width="520"
          height="230"
          viewBox="0 0 520 230"
          fill="none"
        >
          <path
            d="M2 102C82 22 184 52 256 122C330 194 425 210 518 135"
            stroke="#CFA66B"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>

        <svg
          className="absolute right-[-4%] top-[34%] hidden opacity-55 lg:block"
          width="640"
          height="520"
          viewBox="0 0 640 520"
          fill="none"
        >
          <path
            d="M42 212C126 50 312 22 462 118C594 202 628 376 508 462C378 556 162 490 78 348C52 304 25 258 42 212Z"
            stroke="#CFA66B"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>

        <img
          src={logoLetras}
          alt=""
          aria-hidden
          className="absolute bottom-[2%] left-[3%] hidden w-70 opacity-[0.12] lg:block xl:w-[320px]"
        />
      </div>

      <div className="relative mx-auto grid min-h-[92svh] max-w-340 grid-cols-1 items-center gap-10 px-6 pb-10 pt-24 sm:pb-12 sm:pt-28 lg:min-h-[100svh] lg:grid-cols-[0.47fr_0.53fr] lg:gap-8 lg:px-10 lg:pb-0 lg:pt-28 xl:px-16">
        <div className="reveal relative z-20 max-w-170">
          <div className="flex items-center gap-5">
            <p className="eyebrow text-[#CFA66B]">Nutricionista · CRN 50991</p>
            <span className="hidden h-px w-28 bg-linear-to-r from-[#CFA66B]/70 to-transparent sm:block" />
          </div>

          <h1 className="mt-5 max-w-180 font-serif text-[3rem] leading-[0.94] tracking-[-0.04em] text-cream sm:text-[4.1rem] lg:text-[4.8rem] xl:text-[5.35rem]">
            Nutrição leve e personalizada para{" "}
            <span className="italic text-[#E6C79C]">transformar sua</span> relação com a alimentação
          </h1>

          <div className="mt-4 h-2.5 w-36">
            <svg width="154" height="14" viewBox="0 0 154 14" fill="none">
              <path
                d="M2 10C37 3 77 2 152 5"
                stroke="#CFA66B"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="mt-6 max-w-145 text-base leading-relaxed text-cream/76 sm:text-lg">
            Acompanhamento nutricional estratégico e adaptado à sua rotina, para cuidar da sua saúde
            sem dietas impossíveis.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-cream px-7 text-sm font-semibold text-navy shadow-[0_20px_45px_rgba(255,252,240,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-cream/92 sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Agendar consulta pelo WhatsApp
              <span aria-hidden className="text-lg leading-none">
                →
              </span>
            </a>
          </div>

          <div className="mt-10 border-t border-cream/12 pt-6">
            <div className="grid gap-5 text-cream/88 sm:grid-cols-3 sm:gap-0">
              <div className="flex items-center gap-4 sm:pr-6">
                <span className="text-[#CFA66B]">
                  <UserRound aria-hidden className="h-7 w-7" strokeWidth={1.4} />
                </span>
                <span className="text-base leading-tight">
                  100% <br />
                  individualizado
                </span>
              </div>

              <div className="flex items-center gap-4 border-cream/14 sm:border-l sm:px-6">
                <span className="text-[#CFA66B]">
                  <CalendarDays aria-hidden className="h-7 w-7" strokeWidth={1.4} />
                </span>
                <span className="text-base leading-tight">
                  Online + <br />
                  presencial
                </span>
              </div>

              <div className="flex items-center gap-4 border-cream/14 sm:border-l sm:pl-6">
                <span className="text-[#CFA66B]">
                  <Leaf aria-hidden className="h-7 w-7" strokeWidth={1.4} />
                </span>
                <span className="text-base leading-tight">
                  Plano adaptado <br />à sua rotina
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal relative z-10 flex min-h-[500px] items-end justify-center lg:min-h-[680px] lg:justify-end">
          <div className="relative w-full max-w-[760px]">
            <div className="absolute bottom-0 left-[8%] right-[2%] top-[5%] rounded-[42%_58%_12%_26%/22%_28%_12%_18%] bg-gradient-to-br from-cream via-cream to-[#EFE8D8] shadow-[0_34px_100px_rgba(0,0,0,0.32)] lg:left-[2%] lg:right-[0%]" />

            <div className="absolute bottom-[4%] left-[4%] right-[8%] top-[9%] rounded-[44%_56%_14%_30%/24%_30%_14%_20%] bg-[radial-gradient(circle_at_52%_16%,rgba(255,255,255,0.9),rgba(255,255,255,0)_58%)]" />

            <svg
              aria-hidden
              className="absolute left-[-11%] top-[17%] hidden opacity-75 lg:block"
              width="300"
              height="250"
              viewBox="0 0 300 250"
              fill="none"
            >
              <path
                d="M292 37C214-5 104 24 52 102C9 167 42 226 122 231"
                stroke="#CFA66B"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>

            <svg
              aria-hidden
              className="absolute bottom-[8%] right-[-8%] hidden opacity-65 lg:block"
              width="520"
              height="210"
              viewBox="0 0 520 210"
              fill="none"
            >
              <path
                d="M4 196C98 88 220 44 336 78C409 100 465 54 516 4"
                stroke="#CFA66B"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute right-[8%] top-[6%] z-20 h-24 w-24 rounded-full bg-cream/10 blur-2xl" />

            <img
              src={heroImg}
              alt="Emilly Fernandes, nutricionista"
              width={912}
              height={1200}
              className="relative z-10 mx-auto h-auto max-h-[68svh] w-full max-w-[720px] translate-y-[1%] object-contain object-bottom drop-shadow-[0_38px_72px_rgba(0,0,0,0.34)] sm:max-h-[70svh] lg:max-h-[84vh] lg:translate-y-[2%] lg:scale-[1.06]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
