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
import { useReveal } from "@/lib/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emilly Fernandes · Nutricionista | Acompanhamento nutricional personalizado" },
      { name: "description", content: "Nutrição personalizada, humanizada e estratégica com Emilly Fernandes. Agende sua consulta pelo WhatsApp e transforme sua relação com a alimentação." },
      { property: "og:title", content: "Emilly Fernandes · Nutricionista" },
      { property: "og:description", content: "Acompanhamento nutricional humanizado, estratégico e pensado para a sua rotina." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="bg-cream">
      <Nav />
      <Hero />
      <About />
      <Specialties />
      {/* <Services /> */}
      <HowItWorks />
      {/* <Testimonials /> */}
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
