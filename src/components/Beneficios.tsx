import React from "react";
import { Wind, Sun, Feather, Sparkles, Users, Heart } from "lucide-react";
import { motion } from "motion/react";

export default function Beneficios() {
  const benefits = [
    {
      title: "Respiração Profunda",
      text: "A sensação indescritível de ter respirado fundo pela primeira vez em muito tempo.",
      icon: Wind,
      gradient: "from-[#faf4ee] to-[#f4eae1]",
      blobBg: "bg-[#e6d0bf]/40",
      blobShape: "rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]",
    },
    {
      title: "Clareza Real",
      text: "Clareza real sobre o que você de fato deseja, e não o que as expectativas externas impõem a você.",
      icon: Sun,
      gradient: "from-[#fffdfa] to-[#fdf1e2]",
      blobBg: "bg-[#fadbbf]/40",
      blobShape: "rounded-[40%_60%_50%_50%_/_50%_60%_40%_50%]",
    },
    {
      title: "Leveza Corporal",
      text: "Um corpo visivelmente mais leve, porque você vai conseguir expressar e soltar o que estava rígido.",
      icon: Feather,
      gradient: "from-[#f8f9fa] to-[#f0eae1]",
      blobBg: "bg-[#ebdcd1]/45",
      blobShape: "rounded-[50%_50%_60%_40%_/_40%_60%_50%_50%]",
    },
    {
      title: "Resgate e Cura",
      text: "A recordação afetiva e curadora de que você é infinitamente maior do que os múltiplos papéis sociais que desempenha.",
      icon: Sparkles,
      gradient: "from-[#fcf7f2] to-[#ede2d7]",
      blobBg: "bg-[#e3cbbe]/40",
      blobShape: "rounded-[70%_30%_50%_50%_/_50%_30%_70%_50%]",
    },
    {
      title: "Conexão Autêntica",
      text: "Uma conexão empática, profunda e autêntica com outras mulheres que compartilham da mesma busca e cansaço.",
      icon: Users,
      gradient: "from-[#faf6f0] to-[#ecd9ca]",
      blobBg: "bg-[#dfbeab]/40",
      blobShape: "rounded-[30%_70%_40%_60%_/_50%_40%_60%_50%]",
    },
    {
      title: "Nutrição Emocional",
      text: "Uma tarde especial de nutrição emocional cuja força interna vai durar muito mais do que as 5 horas do encontro.",
      icon: Heart,
      gradient: "from-[#fffcfa] to-[#f9ede3]",
      blobBg: "bg-[#f7d8c6]/40",
      blobShape: "rounded-[50%_40%_70%_40%_/_60%_50%_50%_40%]",
    },
  ];

  return (
    <section
      id="beneficios-section"
      className="bg-gradient-to-br from-[#fdfbf7] via-[#f4eae1] to-[#f2dfd0] border-t border-b border-brand-light/20 py-12 lg:py-16 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <span className="text-sm sm:text-base font-mono uppercase tracking-[0.2em] text-brand-dark font-bold block">
            TRANSFORMAÇÃO REAL
          </span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-brand tracking-tight leading-tight"
          >
            O que você vai <span className="italic font-normal">levar:</span>
          </motion.h2>

          {/* Elegant visual quote styled beautifully and centered */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-xl mx-auto pt-2"
          >
            <div className="bg-white/60 border-l-4 border-r-4 border-brand p-5 sm:p-6 rounded-2xl">
              <p className="font-serif text-lg sm:text-xl md:text-2xl italic text-brand-dark font-medium leading-relaxed text-center">
                "Saia do piloto automático e entre em um espaço seguro onde o único compromisso é ser e sentir."
              </p>
            </div>
          </motion.div>
        </div>

        {/* 6 Benefits List divided in 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${benefit.gradient} border border-brand/5 hover:border-brand/15 transition-all duration-300 p-6 sm:p-8 rounded-[2rem] flex flex-col justify-start items-start gap-4 relative overflow-hidden group cursor-default shadow-xs`}
              >
                {/* Handcrafted background shape decoration at bottom right with very low opacity */}
                <svg
                  className="absolute bottom-[-10px] right-[-10px] w-32 h-32 text-brand-dark/5 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                >
                  {idx === 0 && <path d="M10,90 C40,70 60,80 80,40 C90,20 85,15 70,30 C50,50 30,75 10,90 Z M80,40 C60,50 45,65 35,80" />}
                  {idx === 1 && <path d="M10,90 Q50,30 90,10 M50,30 Q30,60 10,90 M90,10 Q60,40 30,70" />}
                  {idx === 2 && <path d="M20,80 C40,40 80,40 80,80 C40,80 20,80 20,80 Z M50,40 C50,20 60,30 50,40 Z" />}
                  {idx === 3 && <path d="M30,90 C40,60 70,50 90,30 C80,50 60,70 30,90 Z" />}
                  {idx === 4 && <path d="M10,50 C40,10 60,90 90,50 C60,90 40,10 10,50 Z" />}
                  {idx === 5 && <path d="M20,90 Q80,90 50,20 Q20,90 20,90 Z" />}
                </svg>

                {/* Header of card: Icon + Title with beautiful alignment */}
                <div className="flex items-center gap-4 relative z-10 w-full mb-1">
                  {/* Organic pebble background behind icon */}
                  <div className={`flex-shrink-0 w-12 h-12 ${benefit.blobBg} ${benefit.blobShape} flex items-center justify-center text-[#4a3525] transition-all duration-300 group-hover:scale-105`}>
                    <IconComponent className="w-5 h-5 text-[#4a3525]" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#4a3525] tracking-tight">
                    {benefit.title}
                  </h3>
                </div>

                {/* Supporting description text */}
                <p className="font-sans text-stone-800 text-sm sm:text-base lg:text-[1.05rem] font-normal leading-relaxed relative z-10 pr-4">
                  {benefit.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
