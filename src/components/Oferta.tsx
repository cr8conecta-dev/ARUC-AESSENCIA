import React from "react";
import { Check, ShieldCheck, CreditCard, Sparkles, HelpCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface OfertaProps {
  onCtaClick: () => void;
}

export default function Oferta({ onCtaClick }: OfertaProps) {
  const inclusions = [
    "5 horas de imersão presencial profunda e guiada",
    "Jornada completa vivencial: Reconhecer · Sentir · Mover · Integrar",
    "Acesso à comunidade ARUC — espaço exclusivo de conexão pós-imersão",
    "Material de apoio exclusivo para integração das vivências",
    "Ambiente 100% exclusivo, acolhedor e seguro para mulheres",
    "Vagas estritamente limitadas — experiência íntima, cuidada e sem aglomerações"
  ];

  return (
    <section
      id="oferta-section"
      className="bg-gradient-to-br from-[#fdfbf7] via-[#f5ecd8] to-[#eddcb8] py-16 lg:py-20 text-brand-charcoal text-center relative overflow-hidden border-t border-[#cca98f]/20"
    >
      {/* Soft overlay patterns for an elegant depth */}
      <div className="absolute inset-0 bg-black/5 mix-blend-overlay z-0" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header section info */}
        <span className="text-sm sm:text-base font-mono uppercase tracking-[0.25em] text-[#8c6751] font-bold mb-3 block">
          INSCRIÇÃO
        </span>
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#5c3e35] mb-5"
        >
          O seu passaporte para o reencontro
        </motion.h2>
        
        {/* Straw-white translucent header banner */}
        <div className="inline-block bg-[#faf5eb]/90 backdrop-blur-sm text-[#5c3e35] border border-[#cca98f]/20 font-sans font-semibold px-6 sm:px-8 py-4 sm:py-5 rounded-3xl mb-8 text-base sm:text-lg max-w-xl mx-auto shadow-sm leading-relaxed">
          Garanta sua vaga na aula presencial mais aguardada de São Paulo. Experiência íntima e cuidada.
        </div>

        {/* Beautiful large Verified Seal of Authenticity & Safety */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32">
            {/* Elegant outer glowing/radiating rings */}
            <div className="absolute inset-0 rounded-full border border-[#cca98f]/30 scale-125 animate-pulse" />
            <div className="absolute inset-0 rounded-full border border-[#cca98f]/10 scale-150" />
            
            {/* Stamp-like scalloped or clean circular seal body */}
            <div className="w-full h-full rounded-full bg-[#faf5eb] border-2 border-[#cca98f]/70 shadow-[0_12px_30px_rgba(140,110,86,0.15)] flex items-center justify-center text-[#5c3e35] relative z-10">
              <ShieldCheck className="w-16 h-16 sm:w-20 sm:h-20 text-[#5c3e35] stroke-[1.1]" />
            </div>
          </div>
          <div className="text-center mt-5 max-w-lg">
            <span className="block font-serif text-lg sm:text-xl md:text-2xl text-[#5c3e35] font-black tracking-wider leading-normal">
              Ambiente Seguro ARUC
            </span>
          </div>
        </div>

        {/* Side-by-Side Dual Cards Grid Layout based on mockup image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch text-left">
          
          {/* Left Card: "Tudo o que está incluso" (Slightly larger / wider) */}
          <div className="lg:col-span-7 bg-white/95 rounded-[2.5rem] p-6 sm:p-8 lg:p-9 border border-[#cca98f]/20 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Soft decorative background glow */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#fca34d]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#cca98f]/10 flex items-center justify-center text-[#cca98f]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-[#5c3e35] leading-tight">
                  Tudo o que está incluso:
                </h3>
              </div>
              
              <div className="space-y-3.5">
                {inclusions.map((inc, i) => {
                  return (
                    <div 
                      key={i} 
                      className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#faf6f0]/40 border border-[#cca98f]/10 transition-all duration-300 hover:bg-[#faf6f0]/90 hover:border-[#cca98f]/30 hover:shadow-[0_4px_15px_rgba(140,110,86,0.04)]"
                    >
                      <div className="mt-1 w-6 h-6 bg-[#cca98f]/15 border border-[#cca98f]/45 rounded-full flex items-center justify-center text-[#cca98f] flex-shrink-0 shadow-inner">
                        <Check className="w-3 h-3 stroke-[3.5]" />
                      </div>
                      <div>
                        <p className="font-sans text-[#5c3e35] text-xs sm:text-sm lg:text-base font-semibold leading-relaxed">
                          {inc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Extra trust note inside the inclusion card */}
            <div className="mt-6 pt-5 border-t border-[#cca98f]/10 text-stone-600 text-xs sm:text-sm font-bold tracking-wider leading-relaxed">
              * IMERSÃO PRESENCIAL REALIZADA EM SÃO PAULO - ESPAÇO EXCLUSIVO
            </div>
          </div>

          {/* Right Card: "Investimento" (Styled exactly like the provided mockup image) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#fdfaf4] to-[#faf5eb] border border-[#cca98f]/40 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl flex flex-col justify-between text-center relative overflow-hidden">
            {/* Elegant orange-terracotta top bar just like the image reference */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-[#cca98f] rounded-b-md z-10" />

            <div className="space-y-5 pt-1">
              {/* Elegant mockup header */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2.5 mt-2 mb-1.5">
                  <Sparkles className="w-4 h-4 text-[#cca98f]" />
                  <span className="font-serif uppercase tracking-[0.25em] text-[#8c6751] font-black text-base sm:text-lg lg:text-xl">
                    A ESSÊNCIA
                  </span>
                  <Sparkles className="w-4 h-4 text-[#cca98f]" />
                </div>
                <p className="font-serif italic text-[#cca98f] text-xs sm:text-sm md:text-base tracking-wider font-medium">
                  imersão presencial para mulheres
                </p>
              </div>

              {/* Subtitle "Investimento" */}
              <div className="text-[#5c3e35] font-serif text-lg sm:text-xl lg:text-2xl tracking-wider font-bold">
                Investimento:
              </div>

              {/* Decorative divider line from mockup */}
              <div className="w-full h-[1px] bg-[#cca98f]/30" />

              {/* Huge Price Display matching exactly the image layout */}
              <div className="py-1">
                <div className="flex items-center justify-center gap-1.5 select-none">
                  <span className="font-sans text-base font-extrabold text-[#8c6751] self-center">R$</span>
                  <span className="font-serif text-4xl sm:text-5xl font-black text-[#5c3e35] tracking-tight">
                    1.397,00
                  </span>
                  <span className="font-sans text-[10px] sm:text-xs font-extrabold text-[#8c6751] self-center whitespace-nowrap uppercase tracking-widest ml-1">
                    À VISTA
                  </span>
                </div>

                {/* Optional description below price */}
                <p className="text-[#8c6751] font-sans text-[11px] sm:text-xs font-black uppercase tracking-widest mt-3">
                  OU EM ATÉ 12X NO CARTÃO <span className="text-stone-500 font-sans text-[10px] lowercase italic font-bold">*c/ juros</span>
                </p>
              </div>

              {/* Decorative divider line from mockup */}
              <div className="w-full h-[1px] bg-[#cca98f]/30" />

              {/* Interactive call to action button */}
              <div className="relative w-full">
                {/* Soft pulsing aura ring */}
                <div className="absolute -inset-1.5 bg-[#cca98f]/20 rounded-2xl blur-md group-hover:bg-[#cca98f]/30 transition-all duration-300 animate-pulse" />
                
                <button
                  onClick={onCtaClick}
                  className="group relative z-10 w-full bg-[#cca98f] hover:bg-[#b28f76] hover:scale-[1.02] transition-all duration-300 py-4 rounded-2xl font-sans text-xs sm:text-sm font-black tracking-[0.2em] text-white uppercase shadow-[0_12px_35px_rgba(204,169,143,0.35)] hover:shadow-[0_16px_40px_rgba(204,169,143,0.5)] active:scale-98 flex items-center justify-center gap-3 cursor-pointer overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:animate-shimmer" />
                  <span>QUERO PARTICIPAR</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-white/95" />
                </button>
              </div>
            </div>

            {/* Three horizontal trust badges from the mockup bottom */}
            <div className="grid grid-cols-3 gap-1 pt-6 border-t border-[#cca98f]/20 mt-6 text-[10px] sm:text-xs text-stone-600 font-semibold select-none">
              <div className="flex flex-col items-center text-center gap-1.5">
                <ShieldCheck className="w-4.5 h-4.5 text-brand-green flex-shrink-0" />
                <span>Compra Segura</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5">
                <Sparkles className="w-4.5 h-4.5 text-[#cca98f] flex-shrink-0" />
                <span>Satisfação Garantida</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5">
                <svg className="w-4.5 h-4.5 text-stone-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Privacidade Protegida</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
