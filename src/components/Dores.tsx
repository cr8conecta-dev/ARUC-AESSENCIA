import React from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import ArucLogo from "./ArucLogo";
import tiredWomanImg from "../assets/images/tired_woman_bg_1781556077938.jpg";

export default function Dores() {
  const painBullets = [
    "Você sente que vive no modo automático: acorda, cumpre, dorme, repete",
    "Seu corpo está tenso, suas emoções represadas mas não tem tempo para parar",
    "Você tem saudade de uma versão sua que parece distante",
    "Em algum momento você esqueceu como é simplesmente... existir",
    "Você sabe que precisa de algo diferente mas não sabe por onde começar"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, filter: "blur(6px)", y: 15 },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section
      id="dores-section"
      className="bg-brand-sand py-20 lg:py-28 text-center border-b border-brand-light/45 relative overflow-hidden"
    >
      {/* Background image of tired woman with higher opacity as requested */}
      <img
        src={tiredWomanImg}
        alt="Sentimento de exaustão e cansaço"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.16] pointer-events-none select-none mix-blend-multiply"
        referrerPolicy="no-referrer"
      />

      {/* Large faint background logo watermark to bring branding coherence */}
      <div className="absolute -bottom-16 -right-16 opacity-[0.04] pointer-events-none select-none text-brand-dark">
        <ArucLogo symbolOnly className="w-80 h-80" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-3 pointer-events-none font-serif text-[180px] select-none text-brand-dark">
        ✿
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Centered ARUC logo in medium size with soft blue-grey and sand colors */}
        <div className="flex justify-center mb-8 drop-shadow-xs">
          <ArucLogo className="w-24 h-24 sm:w-28 sm:h-28" circleColor="#8ba3b5" dotColor="#cca98f" />
        </div>

        {/* Badge header with #cca98f background, white text and no ? icon */}
        <div className="inline-flex items-center px-6 py-2 rounded-full mb-8 bg-[#cca98f] border border-[#cca98f]/20 shadow-2xs">
          <span className="font-sans text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-white">
            Reconhecer é o primeiro passo
          </span>
        </div>

        {/* Serif-styled quote box with blur-in entry animation */}
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-medium text-brand-charcoal tracking-tight leading-[1.2] max-w-4xl mx-auto mb-10"
        >
          O peso silencioso de <span className="italic font-normal text-brand-dark">carregar tudo</span> nas costas
        </motion.h2>

        {/* Bullets represented as elegantly aligned horizontal cards stacked in a beautiful column with bullet points on each side */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-3 max-w-2xl mx-auto mb-12 text-left"
        >
          {painBullets.map((bullet, idx) => {
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white hover:scale-[1.01] hover:shadow-md transition-all duration-300 cursor-default px-5 py-4 sm:px-6 rounded-2xl flex items-center justify-between gap-4 border border-[#cca98f]/40 shadow-xs"
              >
                {/* Start Bullet point */}
                <span className="text-brand text-lg sm:text-xl font-bold flex-shrink-0 select-none">•</span>
                
                {/* Card text centered horizontally within the row */}
                <p className="font-semibold text-brand-charcoal text-sm sm:text-base lg:text-[1.05rem] leading-relaxed text-center flex-grow">
                   {bullet}
                </p>

                {/* End Bullet point */}
                <span className="text-brand text-lg sm:text-xl font-bold flex-shrink-0 select-none">•</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Block closer with shiny glow overlay and custom contoured border */}
        <div className="bg-brand-cream border-2 border-[#cca98f] rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto shadow-[0_0_15px_rgba(204,169,143,0.15)] relative overflow-hidden group">
          {/* Subtle shine light effect sweeps on hover / load */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent -translate-x-full animate-shine pointer-events-none" />
          
          <p className="font-sans text-lg sm:text-xl lg:text-2xl text-brand-charcoal leading-relaxed font-semibold relative z-10">
            Se você se reconheceu em alguma dessas frases, este encontro foi carinhosamente feito para você.
          </p>
          
          <div className="mt-6 relative z-10 flex flex-col items-center">
            {/* Pulsing and glowing button exactly in orange/terracotta theme of the site */}
            <div 
              className="inline-flex items-center gap-2 border-2 border-white/20 px-6 py-3 bg-[#cca98f] hover:bg-[#b28e75] font-semibold text-sm sm:text-base md:text-lg tracking-wider uppercase transition-all duration-300 shadow-[0_0_10px_rgba(204,169,143,0.4)] hover:shadow-[0_0_20px_rgba(204,169,143,0.65)] hover:scale-103 active:scale-98 cursor-pointer rounded-full text-white" 
              onClick={() => {
                document.getElementById('solucao-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              encontre o Caminho de Volta
            </div>
            <ArrowDown className="w-6 h-6 text-[#cca98f] mt-3 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
