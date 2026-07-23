import React from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, Clock, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import ArucLogo, { ArucTypography } from "./ArucLogo";
import welnessImg from "../assets/images/welnessaruc.jpg";

interface HeroProps {
  headlineText: string;
  onCtaClick: () => void;
}

export default function Hero({ headlineText, onCtaClick }: HeroProps) {
  return (
    <section id="hero-section" className="relative text-white min-h-[72vh] lg:min-h-[75vh] flex flex-col justify-between overflow-hidden py-4 sm:py-6">
      {/* Background Image with warm overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={welnessImg}
          alt="Espaço da Imersão A Essência"
          referrerPolicy="no-referrer" decoding="async"
          className="w-full h-full object-cover brightness-[0.65] contrast-[1.05] scale-102 transition-all duration-[8s]"
        />
        {/* Soft terracotta and amber overlay elements gradient with reduced opacities */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-brand-charcoal/55 to-brand/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-charcoal/30 to-brand-charcoal/75" />
        

        {/* Ambient golden light glow effect matched from the last section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none select-none z-1" />
        <div className="absolute w-[300px] h-[300px] bg-yellow-600/12 rounded-full blur-[100px] pointer-events-none select-none z-1 top-1/3 left-1/3" />
      </div>

      {/* Top Bar with Logo ARUC */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-4 lg:py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Typographic Logo ARUC with branding */}
        <div className="flex flex-col items-center sm:items-start select-none">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <ArucLogo symbolOnly className="h-[28px] w-[35px] text-brand-light flex-shrink-0" />
              <ArucTypography className="font-serif text-4xl text-white font-medium" />
            </div>
            <span className="h-8 w-[1px] bg-white/20 hidden sm:block"></span>
            <span className="font-sans text-xs tracking-[0.3em] text-brand-light uppercase font-light pt-1.5 hidden sm:block">
              DESENVOLVIMENTO FEMININO
            </span>
          </div>
          <span className="font-sans text-xs tracking-[0.2em] text-brand-light uppercase font-light pt-1 sm:hidden">
            DESENVOLVIMENTO FEMININO
          </span>
        </div>

        {/* Floating live tag */}
        <div className="flex items-center gap-2 bg-white/15 border border-white/20 px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
          <span className="font-sans text-xs sm:text-xs tracking-wider uppercase text-brand-light font-medium">
            Imersão Exclusiva · Presencial
          </span>
        </div>
      </header>

      {/* Hero Content (Centralizado) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-3 lg:py-6 text-center my-auto flex flex-col items-center justify-center">

        {/* Main interactive Headline */}
        <div className="flex items-center justify-center w-full mb-5">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-medium tracking-tight leading-[1.12] text-white max-w-4xl transition-all duration-300 drop-shadow-[0_2px_15px_rgba(40,15,5,0.35)]"
          >
            {headlineText}
          </motion.h1>
        </div>

        {/* Subheadline Layout */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-sans text-sm sm:text-base lg:text-lg text-white font-semibold max-w-2xl leading-relaxed mb-5"
        >
          Uma imersão presencial para mulheres que querem se reencontrar com o corpo, com as emoções e com a própria essência.
        </motion.p>

        {/* Event Meta Details block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-brand-charcoal/75 border border-white/10 rounded-2xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-center gap-4.5 sm:gap-6 max-w-2xl w-full mb-6 shadow-lg"
        >
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-brand" />
            <div className="text-left">
              <span className="block text-[11px] sm:text-[12px] uppercase font-semibold text-brand tracking-widest leading-none mb-1">Data</span>
              <span className="font-sans text-sm sm:text-base font-medium text-white">31 de Outubro de 2026</span>
            </div>
          </div>

          <div className="w-[1px] h-8 bg-white/15 hidden sm:block"></div>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-brand" />
            <div className="text-left">
              <span className="block text-[11px] sm:text-[12px] uppercase font-semibold text-brand tracking-widest leading-none mb-1">Horário</span>
              <span className="font-sans text-sm sm:text-base font-medium text-white block">14h às 19h</span>
              <span className="font-sans text-stone-200 text-xs sm:text-sm font-semibold block leading-none mt-1">(5 Horas)</span>
            </div>
          </div>

          <div className="w-[1px] h-8 bg-white/15 hidden sm:block"></div>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-brand" />
            <div className="text-left">
              <span className="block text-[11px] sm:text-[12px] uppercase font-semibold text-brand tracking-widest leading-none mb-1">Cidade</span>
              <span className="font-sans text-sm sm:text-base font-medium text-white">São Paulo / SP</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Block ABOVE THE FOLD (Bloquinho 2) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full flex flex-col items-center gap-4"
        >
          {/* Animated terracotta pulse button with high-end style */}
          <div className="relative inline-block w-full sm:w-auto">
            {/* Soft pulsing aura ring */}
            <div className="absolute -inset-1.5 bg-brand/35 rounded-full blur-md group-hover:bg-brand/45 transition-all duration-300" />
            
            <button
              onClick={onCtaClick}
              className="group relative z-10 w-full sm:w-auto px-8 sm:px-10 py-4 bg-brand hover:bg-brand-dark hover:scale-[1.02] transition-all duration-300 font-sans text-sm sm:text-base font-black tracking-[0.2em] text-white rounded-full shadow-[0_12px_35px_rgba(204,169,143,0.4)] hover:shadow-[0_16px_40px_rgba(204,169,143,0.6)] active:scale-98 cursor-pointer overflow-hidden uppercase flex items-center justify-center gap-3"
            >
              {/* Soft inner glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:animate-shimmer" />
              <span>QUERO GARANTIR MINHA VAGA</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5 text-white/95" />
            </button>
          </div>

          {/* Micro points */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-100 font-semibold mt-1">
            <span className="text-brand font-bold animate-pulse">•</span>
            <span>Vagas limitadas</span>
            <span className="text-stone-300">·</span>
            <ShieldCheck className="w-4 h-4 text-brand" />
            <span>Pagamento seguro via Mercado Pago</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative arrow element and gradient to blend into Bloc 3 */}
      <div className="relative z-10 text-center pb-2">
        <div className="animate-bounce inline-block opacity-40 hover:opacity-100 cursor-pointer" onClick={() => {
          document.getElementById('dores-section')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      {/* Soft shadow edge mapping */}
      <div className="h-6 bg-gradient-to-t from-brand-sand to-transparent absolute bottom-0 left-0 right-0 z-10" />
    </section>
  );
}
