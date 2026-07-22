import React, { useState } from "react";
import { Compass, Waves, Activity, Sparkles, Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ArucLogo from "./ArucLogo";

interface CardData {
  step: string;
  title: string;
  icon: any;
  subtitle: string;
  image: string;
  desc: string;
}

function JornadaCard({ card, idx }: { card: any; idx: number; key?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = card.icon;

  return (
    <div
      className="bg-white/95 backdrop-blur-sm group hover:bg-white transition-all duration-500 p-8 sm:p-10 rounded-3xl border border-brand-light/50 hover:border-brand/35 text-brand-charcoal shadow-md hover:shadow-xl flex flex-col justify-between aspect-auto md:aspect-square relative overflow-hidden"
    >
      {/* Decorative absolute element (Step number) - boosted visibility for mobile */}
      <span className="absolute right-6 top-6 font-mono text-8xl font-black text-brand-light/20 group-hover:text-brand/8 select-none transition-colors duration-300">
        {card.step}
      </span>

      <div className="space-y-4 flex flex-col h-full justify-between">
        <div className="space-y-4">
          {/* Luxury Rounded Icon container inside the card */}
          <div className="w-12 h-12 bg-brand-light/50 rounded-xl flex items-center justify-center text-brand-dark border border-brand/15 group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-300 flex-shrink-0">
            <IconComponent className="w-6 h-6" />
          </div>

          {/* Sliding left-to-right animation for Etapa, Title, and Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: idx * 0.15, ease: "easeOut" }}
            className="space-y-1.5"
          >
            <span className="text-xs uppercase font-mono tracking-widest text-brand-dark/70 font-semibold block">
              Etapa {card.step}
            </span>
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-[0.12em] text-brand-charcoal uppercase leading-tight group-hover:text-brand-dark transition-colors duration-300">
              {card.title}
            </h3>
            <p className="font-serif italic text-sm sm:text-base text-brand-dark font-medium tracking-wide">
              {card.subtitle}
            </p>

            {/* Elegant, medium-sized cropped image to keep cards beautiful and standard */}
            <div className="mt-4 overflow-hidden rounded-xl border border-brand/10 shadow-sm relative w-full h-[140px] sm:h-[160px] md:h-[120px] lg:h-[150px] xl:h-[170px] bg-brand-light/30">
              <img 
                src={card.image}
                alt={card.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Action Button to Open Description */}
        <div className="pt-2 z-10 flex justify-between items-center mt-3">
          <button 
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-brand hover:text-brand-dark transition-all duration-300 font-sans uppercase group/btn cursor-pointer"
          >
            <span>Ver detalhes</span>
            <Plus className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-90 text-brand" />
          </button>
        </div>
      </div>

      {/* Slide-up detail panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="absolute inset-0 bg-white/98 z-20 p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              {/* Header inside overlay */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-light/50 rounded-lg flex items-center justify-center text-brand-dark">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase font-mono tracking-widest text-brand-dark/70 font-semibold">
                    Etapa {card.step}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-brand-light/40 flex items-center justify-center text-brand-charcoal hover:bg-brand-light hover:text-brand transition-colors duration-300 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Subtitle inside overlay */}
              <h4 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.12em] text-brand-charcoal uppercase mb-1">
                {card.title}
              </h4>
              <p className="font-serif italic text-base sm:text-lg text-brand-dark font-medium tracking-wide mb-6">
                {card.subtitle}
              </p>

              {/* Main Description */}
              <p className="font-sans text-brand-charcoal/90 text-sm sm:text-base leading-relaxed tracking-normal font-medium">
                {card.desc}
              </p>
            </div>

            {/* Back button at the bottom of the card content */}
            <div className="pt-4 border-t border-brand/10">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 px-4 bg-brand-charcoal text-white rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-brand transition-all duration-300 cursor-pointer animate-pulse"
              >
                Voltar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Jornada() {
  const cards = [
    {
      step: "01",
      title: "RECONHECER",
      icon: Compass,
      subtitle: "ONDE ESTÃO OS BLOQUEIOS",
      image: "/src/assets/images/reconhecer.jpg",
      desc: "Reconhecer é olhar, através do corpo, para as raízes que travam o seu crescimento, crenças e traumas guardados sem nome. Você vai se perguntar: quem sou eu além dos papéis?",
    },
    {
      step: "02",
      title: "SENTIR",
      icon: Waves,
      subtitle: "Clareza sobre onde chegar",
      image: "/src/assets/images/sentir.jpg",
      desc: "Um momento de pausa para enxergar, com nitidez, a intenção que já existe em você, e para onde ela quer te levar.",
    },
    {
      step: "03",
      title: "MOVER",
      icon: Activity,
      subtitle: "Expressão corporal livre",
      image: "/src/assets/images/mover.jpg",
      desc: "Movimento, desbloqueio e expressão. Corpo em movimento, vida em movimento. Você vai soltar o que estava rígido e descobrir a leveza que existe quando você se expressa.",
    },
    {
      step: "04",
      title: "INTEGRAR",
      icon: Sparkles,
      subtitle: "Acolhimento coletivo",
      image: "/src/assets/images/integrar.jpg",
      desc: "Confiança, conexão coletiva de cura e celebração. O encerramento emocionante que recolhe tudo e te envia de volta para a sua vida mais inteira, mais presente e mais você.",
    },
  ];

  return (
    <section id="jornada-section" className="bg-gradient-to-b from-[#fdf2e9] via-[#fffcf9] to-[#faf0e6] py-16 lg:py-24 text-center relative overflow-hidden">
      {/* Background double-exposure artistic image blended with the brand and warm sunset tones */}
      <img
        src="/src/assets/images/double_exposure_woman_1781556370324.jpg"
        alt="Estética de reconexão feminina"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.22] pointer-events-none select-none mix-blend-multiply"
        referrerPolicy="no-referrer"
      />

      {/* Warm sunset/orange glowing energy light orbs */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-orange-400/15 rounded-full blur-[110px] pointer-events-none select-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[550px] h-[550px] bg-amber-400/18 rounded-full blur-[130px] pointer-events-none select-none animate-[pulse_6s_infinite]" />
      
      {/* Large faint background logo watermark to bring branding coherence */}
      <div className="absolute -top-12 -left-12 opacity-[0.03] pointer-events-none select-none text-brand-dark">
        <ArucLogo symbolOnly className="w-96 h-96" />
      </div>
      {/* Decorative subtle background waves */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <svg className="w-full h-full text-white/40" viewBox="0 0 1440 320" fill="currentColor">
          <path d="M0,160 L120,176 C240,192,480,224,720,224 C960,224,1200,192,1320,176 L1440,160 L1440,320 L1320,320 C1200,320,960,320,720,320 C480,320,240,320,120,320 L0,320 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Overhead element */}
        <span className="text-sm sm:text-base font-mono uppercase tracking-[0.25em] text-brand-charcoal font-bold mb-3 block">
          A JORNADA DE RECONEXÃO
        </span>
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-charcoal tracking-tight mb-5"
        >
          O que você vai viver
        </motion.h2>
        <p className="font-sans text-brand-charcoal font-semibold max-w-2xl mx-auto mb-16 text-sm sm:text-base lg:text-[1.15rem] leading-relaxed">
          Uma jornada vivencial dividida em <strong>4 pilares fundamentais</strong>, estruturados para libertar suas tensions e resgatar sua força original.
        </p>

        {/* 4 Cards Grid - 2x2 on Desktop with beautiful square proportions */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 lg:gap-10 text-left">
          {cards.map((card, idx) => (
            <JornadaCard key={idx} card={card} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
