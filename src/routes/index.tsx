import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Specialties } from "@/components/landing/Specialties";
import { Services } from "@/components/landing/Services";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";
import heroImg from "@/assets/emilly-hero.png";
import { useReveal } from "@/lib/useReveal";

const SITE_URL = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ?? "";
const PAGE_TITLE = "Emilly Fernandes | Nutricionista em Recife e Online";
const PAGE_DESCRIPTION =
  "Nutricionista Emilly Fernandes com atendimento online e presencial em Recife. Acompanhamento nutricional personalizado para emagrecimento, obesidade, saúde da mulher e reeducação alimentar.";
const PAGE_KEYWORDS =
  "Emilly Fernandes, nutricionista Emilly Fernandes, nutricionista em Recife, nutricionista online, emagrecimento, obesidade, saúde da mulher, reeducação alimentar, consulta nutricional";
const SOCIAL_IMAGE = SITE_URL ? `${SITE_URL}${heroImg}` : "";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      {
        name: "description",
        content: PAGE_DESCRIPTION,
      },
      { name: "keywords", content: PAGE_KEYWORDS },
      { property: "og:title", content: PAGE_TITLE },
      {
        property: "og:description",
        content: PAGE_DESCRIPTION,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      { name: "twitter:card", content: "summary_large_image" },
      ...(SITE_URL
        ? [
            { property: "og:url", content: SITE_URL },
            { name: "twitter:url", content: SITE_URL },
          ]
        : []),
      ...(SOCIAL_IMAGE
        ? [
            { property: "og:image", content: SOCIAL_IMAGE },
            { name: "twitter:image", content: SOCIAL_IMAGE },
          ]
        : []),
    ],
    links: [...(SITE_URL ? [{ rel: "canonical", href: SITE_URL }] : [])],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="bg-cream">
      <Nav />
      <Hero />
      <HowItWorks />
      <About />
      <Specialties />
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
