/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Hero from "./components/Hero";
// import Dores from "./components/Dores";
import Solucao from "./components/Solucao";
import Jornada from "./components/Jornada";
import Beneficios from "./components/Beneficios";
import ExperienciaVsInformacao from "./components/ExperienciaVsInformacao";
import Sobre from "./components/Sobre";
import Depoimentos from "./components/Depoimentos";
import Oferta from "./components/Oferta";
import FaqSection from "./components/FaqSection";
import Garantia from "./components/Garantia";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = React.useState<boolean>(false);

  // Locked to the requested headline 1 variation
  const headline = "Uma tarde inteira para existir, sem papéis, sem cobranças, sem pressa.";

  const handleCtaClick = () => {
    setIsBookingOpen(true);
  };

  const scrollToOferta = () => {
    const element = document.getElementById("oferta-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-brand-sand selection:bg-brand selection:text-white font-sans text-brand-charcoal overflow-x-hidden antialiased">
      {/* BLOCO 1 — HERO & BLOCO 2 — CTA PRIMÁRIO (Above the fold) */}
      <Hero
        headlineText={headline}
        onCtaClick={scrollToOferta}
      />

      {/* BLOCO 3 — IDENTIFICAÇÃO DA DOR */}
      {/* <Dores /> */}

      {/* BLOCO 4 — APRESENTAÇÃO DA SOLUÇÃO — O QUE É A ESSÊNCIA */}
      <Solucao onCtaClick={scrollToOferta} />

      {/* BLOCO 5 — A JORNADA — RECONHECER · SENTIR · MOVER · INTEGRAR */}
      <Jornada />

      {/* BLOCO 6 — BENEFÍCIOS — TRANSFORMAÇÃO */}
      <Beneficios />

      {/* BLOCO DE EXPERIÊNCIA VS INFORMAÇÃO E PORTAL DA ALMA */}
      <ExperienciaVsInformacao />

      {/* BLOCO 7 — SOBRE ADRIANA QUINTAL */}
      <Sobre />

      {/* BLOCO 8 — PROVA SOCIAL — DEPOIMENTOS */}
      <Depoimentos />

      {/* BLOCO 9 — DETALHES DA OFERTA */}
      <Oferta
        onCtaClick={handleCtaClick}
      />

      {/* BLOCO 10 — QUEBRA DE OBJEÇÕES & BLOCO 13 — FAQ */}
      <FaqSection />

      {/* BLOCO 11 — GARANTIA & BLOCO 12 — URGÊNCIA / ESCASSEZ (Live Countdown) */}
      <Garantia />

      {/* BLOCO 14 — CTA FINAL & BLOCO 15 — P.S. DE FECHAMENTO */}
      <Footer
        onCtaClick={scrollToOferta}
      />

      {/* Interactive Booking & Payment checkout wizard Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
