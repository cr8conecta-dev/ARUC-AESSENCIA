import React from "react";
import { Flower, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import ArucLogo from "./ArucLogo";

interface SolucaoProps {
  onCtaClick: () => void;
}

export default function Solucao({ onCtaClick }: SolucaoProps) {
  // Apply the original elegant terracotta/soft clay brand color permanently
  const accentColor = "#cca98f";
  const underlineColor = "decoration-[#cca98f]";

  return (
    <section
      id="solucao-section"
      className="py-16 lg:py-24 text-center relative overflow-hidden transition-all duration-700 bg-gradient-to-br from-[#faf5eb] via-[#f5ecd8] to-[#eddcb8]"
    >
      {/* Decorative organic blended/mesclada background overlays to give texture under the cards */}
      <div 
        className="absolute top-10 left-10 w-[450px] h-[450px] rounded-full blur-[110px] pointer-events-none select-none" 
        style={{ backgroundColor: "#fca34d15" }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[550px] h-[550px] rounded-full blur-[130px] pointer-events-none select-none" 
        style={{ backgroundColor: "#cca98f18" }}
      />
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-[#ffdcb8]/10 rounded-full blur-[95px] pointer-events-none select-none" />

      {/* Decorative vector shape background */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none flex items-center justify-center">
        <svg className="w-[800px] h-[800px] text-brand-light animate-spin-slow" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="5,5" />
          <path d="M50,10 A40,40 0 0,0 10,50" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M50,90 A40,40 0 0,0 90,50" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Large Rounded Card - merged beautifully using a solid warm straw-white (branco palha) backdrop to completely replace any standard white */}
        <div className="bg-[#fbf7f0] rounded-[3rem] sm:rounded-[4rem] p-6 sm:p-8 lg:py-10 lg:px-10 border-3 sm:border-4 border-[#cca98f]/40 shadow-none relative overflow-hidden transition-all duration-500">
          
          {/* Header - Title Inside the Rounded Board */}
          <div className="text-center mb-8 sm:mb-10">
            {/* ARUC Symbol visual alone */}
            <div className="flex justify-center mb-6">
              <ArucLogo symbolOnly className="h-[36px] w-[45px] text-brand-dark hover:scale-105 transition-transform duration-300" />
            </div>
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="space-y-3"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="h-[1px] w-12 bg-[#cca98f]/40 hidden sm:block" />
                <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-[#cca98f] font-black uppercase">
                  A IMERSÃO PRESENCIAL
                </span>
                <span className="h-[1px] w-12 bg-[#cca98f]/40 hidden sm:block" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-medium tracking-tight text-brand-charcoal leading-tight">
                A Essência <span className="block sm:inline sm:mx-2 text-[#cca98f]/60 font-light">—</span> <span className="italic font-normal text-brand-dark bg-gradient-to-r from-brand-dark to-[#cca98f] bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0">Uma Tarde Só Para Você</span>
              </h2>
            </motion.div>
          </div>

          {/* Grid Layout: Left text (balanced to lg:col-span-6) , Right space photo (increased to lg:col-span-6) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center text-left">
            
            {/* Left Column (text description) */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <p className="font-semibold text-brand-charcoal text-base sm:text-lg lg:text-[1.125rem] border-l-4 pl-4 transition-all duration-500 leading-relaxed" style={{ borderColor: accentColor }}>
                A Essência é uma imersão presencial de <span className={`underline ${underlineColor} decoration-2 underline-offset-4 transition-all duration-500`}>5 horas</span> criada especialmente para mulheres que desejam e precisam se reencontrar.
              </p>

              <p className="font-semibold text-brand-charcoal text-base sm:text-lg lg:text-[1.125rem] leading-relaxed">
                <strong>Não é uma palestra. Não é um curso tradicional.</strong> É uma experiência integrativa onde você vai sentir, mover, respirar e acolher aquilo que há muito tempo estava silenciosamente esperando para ser ouvido.
              </p>

              <p className="font-semibold text-brand-charcoal text-base sm:text-lg lg:text-[1.125rem] leading-relaxed">
                Em um ambiente íntimo, totalmente seguro, acolhedor e <span className={`underline ${underlineColor} decoration-2 underline-offset-4 transition-all duration-500`}>exclusivo para mulheres</span>, você vai viver uma jornada profunda de dentro para fora, guiada por <strong>Adriana Quintal</strong>, terapeuta com anos de compromisso no desenvolvimento humano e na reconexão feminina legítima.
              </p>
            </div>

            {/* Right Column (picture of space, elegantly sized bigger & wider for high visibility) */}
            <div className="lg:col-span-6 flex flex-col items-center w-full">
              <div className="relative group w-full max-w-full">
                {/* Outer decorative box shifted backwards */}
                <div className="absolute -inset-3 border-2 rounded-3xl translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300 animate-pulse" style={{ borderColor: `${accentColor}40` }} />
                
                {/* Main photo container (using taller aspect ratio on mobile to showcase the room landscape clearly without being too small) */}
                <div className="relative overflow-hidden rounded-3xl border-4 border-[#fffdf6] bg-brand-dark w-full aspect-[4/5] sm:aspect-square md:aspect-[4/3] shadow-none">
                  <img
                    src="/src/assets/images/espaçomulheres.jpg"
                    alt="Espaço da Imersão A Essência"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 opacity-100"
                  />
                </div>

                {/* Floating micro text badge - scaled and positioned elegantly for mobile and desktop */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 bg-brand-charcoal/95 backdrop-blur-md px-3.5 py-3 sm:px-5 sm:py-4 rounded-2xl flex items-center gap-3 sm:gap-3.5 border border-white/10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white transition-all duration-500 shrink-0" style={{ backgroundColor: accentColor }}>
                    <Flower className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
                  </div>
                  <div className="text-left font-serif min-w-0">
                    <span className="block text-[9px] sm:text-[11px] uppercase tracking-widest leading-none font-bold mb-1 transition-all duration-500" style={{ color: accentColor }}>O ESPAÇO</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate block">Refúgio e Aconchego</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Button 'Garantir minha vaga' with high-end premium styling */}
          <div className="mt-14 sm:mt-16 text-center select-none flex flex-col items-center justify-center">
            <div className="relative inline-block">
              {/* Outer pulsing ring that glows in the brand's elegant terracotta/gold color */}
              <div className="absolute -inset-1.5 bg-[#cca98f]/20 rounded-full blur-md group-hover:bg-[#cca98f]/30 transition-all duration-300 animate-pulse" />
              
              <button
                onClick={onCtaClick}
                className="group relative z-10 w-full sm:w-auto px-10 sm:px-14 py-5 bg-[#cca98f] hover:bg-[#b28e75] hover:scale-[1.03] transition-all duration-300 font-sans text-base font-black tracking-[0.2em] text-white rounded-full shadow-[0_12px_35px_rgba(204,169,143,0.35)] hover:shadow-[0_16px_40px_rgba(204,169,143,0.5)] active:scale-98 cursor-pointer uppercase overflow-hidden flex items-center justify-center gap-3.5"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:animate-shimmer" />
                <span>Garantir minha vaga</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5 text-white/90" />
              </button>
            </div>
            
            {/* Elegant tiny subtext */}
            <span className="block mt-4 text-xs font-mono tracking-widest text-stone-500 uppercase font-bold">
              *Últimas vagas presenciais disponíveis
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
