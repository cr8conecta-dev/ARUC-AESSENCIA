import React from "react";
import { motion } from "motion/react";
import { 
  BookOpen, 
  Video, 
  Laptop, 
  HeartHandshake, 
  Compass, 
  Sparkles, 
  ArrowRight,
  PlusCircle,
  HelpCircle,
  Flower,
  ShieldCheck,
  Play
} from "lucide-react";
import ArucLogo from "./ArucLogo";
import exerciciosImg from "../assets/images/exercicios.jpg";

export default function ExperienciaVsInformacao() {
  const tentativas = [
    {
      icon: BookOpen,
      title: "Livros",
      reason: "Apenas conhecimento mental"
    },
    {
      icon: Video,
      title: "Vídeos",
      reason: "Motivação rápida e passageira"
    },
    {
      icon: Laptop,
      title: "Cursos online",
      reason: "Estudo isolado e sem presença"
    },
    {
      icon: HeartHandshake,
      title: "Terapias isoladas",
      reason: "Excesso de racionalização"
    },
    {
      icon: Compass,
      title: "Técnicas mentais",
      reason: "Mais regras e auto-cobrança"
    }
  ];

  return (
    <section id="experiencia-vs-informacao" className="bg-[#fcfaf6] py-16 lg:py-24 font-sans relative overflow-hidden border-b border-brand-light/35">
      {/* Decorative ambient background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-light/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#e6ebdd]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Question */}
        <div className="text-center space-y-4 mb-16 lg:mb-24">
          <div className="flex justify-center mb-6">
            <ArucLogo symbolOnly className="h-[48px] w-[60px] text-[#cca98f]" />
          </div>
          <span className="font-mono text-sm sm:text-base md:text-lg tracking-[0.3em] text-brand-dark font-black uppercase block">
            UMA REFLEXÃO NECESSÁRIA
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-brand-charcoal tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Você já tentou <span className="italic font-normal text-brand-dark">mudar antes?</span>
          </motion.h2>
        </div>

        {/* Visual grid of attempts with larger, premium cards showing they did not work */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4.5 lg:gap-6 mb-16 lg:mb-20">
          {tentativas.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-stone-200/60 p-6 sm:p-8 rounded-3xl shadow-3xs flex flex-col items-center justify-center text-center relative overflow-hidden group select-none min-h-[220px] sm:min-h-[280px]"
              >
                {/* Diagonal strike-through line to represent "did not work" visually in high-end design */}
                <div className="absolute inset-0 bg-stone-50/45 pointer-events-none group-hover:bg-transparent transition-colors duration-300" />
                
                {/* Top status indicator: Little subtle red cross to indicate "not fully working" */}
                <div className="absolute top-5 right-5 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-[#fcf5f2] border border-[#d48b78]/20 flex items-center justify-center">
                    <span className="text-[#cca98f] text-xs font-black font-mono">✕</span>
                  </div>
                </div>

                <div className="space-y-4 w-full flex flex-col items-center relative z-10">
                  {/* Grayed-out/muted icon circle with subtle slash overlay */}
                  <div className="relative w-16 h-16 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover:text-[#cca98f] transition-colors duration-300">
                    <Icon className="w-7 h-7 stroke-[1.25]" />
                    {/* Artistic red-brown diagonal slash line across the icon */}
                    <div className="absolute w-10 h-[2px] bg-[#cca98f]/65 rotate-45 transform pointer-events-none" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-stone-600 group-hover:text-stone-800 transition-colors duration-200 line-through decoration-[#cca98f] decoration-[3px]">
                      {item.title}
                    </h3>
                    <span className="text-xs sm:text-sm text-stone-400 block font-mono tracking-wider">
                      {item.reason}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Emotional questioning transition bar */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-light/35 px-4.5 py-2 rounded-full text-brand-dark"
          >
            <HelpCircle className="w-4 h-4" />
            <span className="font-mono text-xs font-bold tracking-wider">A VERDADE DE SEU CORPO</span>
          </motion.div>
          <p className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] text-brand-charcoal italic font-light leading-relaxed">
            ... e mesmo assim sente que algo <span className="text-brand-dark font-normal underline decoration-[#cca98f]/40 underline-offset-6">continua faltando?</span>
          </p>
        </div>

        {/* The Shift Comparison (Experience vs Information) */}
        <div className="max-w-3xl mx-auto mb-16 lg:mb-20">
          {/* Experience Block (Highlight with brand contrast) */}
          <div className="bg-[#faf5ee] border-2 border-[#cca98f]/40 rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#cca98f]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-6 text-center sm:text-left">
              <span className="font-mono text-xs sm:text-sm md:text-base tracking-[0.25em] text-[#cca98f] font-black uppercase block mb-2">
                O CAMINHO DA ARUC
              </span>
              <p className="text-brand-charcoal text-lg sm:text-xl lg:text-[1.5rem] leading-relaxed font-semibold">
                Porque transformação não acontece apenas pela informação. Ela acontece através da experiência.
              </p>
              <div className="h-[1px] w-full bg-[#cca98f]/20" />
              <p className="text-[#4e3f35] text-lg sm:text-xl lg:text-[1.4rem] leading-relaxed font-normal">
                Neste evento você não ficará apenas ouvindo conteúdos. Você irá <strong className="text-brand-dark font-black">sentir, vivenciar, perceber e experimentar</strong> aquilo que precisa ser transformado dentro de você.
              </p>
            </div>
          </div>
        </div>

        {/* Bonus portal highlight - "Portal da Alma" */}
        <div className="bg-white border border-[#cca98f]/30 rounded-3xl p-8 sm:p-10 lg:p-16 relative overflow-hidden shadow-md">
          {/* Subtle light glow elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#cca98f]/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-brand-light/35 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Column 1 - Title and content copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-[#cca98f]/10 border border-[#cca98f]/20 px-4 sm:px-5 py-2 rounded-full text-brand-dark">
                <Sparkles className="w-4.5 h-4.5 text-[#cca98f] animate-pulse" />
                <span className="text-xs sm:text-sm uppercase font-extrabold tracking-wider font-mono">
                  BÔNUS EXCLUSIVO DE INTEGRAÇÃO
                </span>
              </div>
              
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-brand-charcoal leading-tight">
                Portal da Alma
              </h3>
              
              <p className="text-[#3c3734] text-base sm:text-lg lg:text-xl leading-relaxed font-normal">
                Por isso o evento presencial é apenas o início da jornada. Para que essa transformação continue acontecendo no seu cotidiano, você receberá acesso gratuito ao <strong className="text-brand-dark font-black">Portal da Alma</strong>.
              </p>
              
              <p className="text-[#5c5450] text-sm sm:text-base lg:text-lg leading-relaxed font-light">
                Uma área exclusiva de membros com conteúdos gravados, práticas corporais diárias, meditações guiadas, desafios propostos e recursos terapêuticos digitais que darão todo o suporte necessário aos seus próximos passos após a nossa imersão presencial.
              </p>

              {/* Minimal benefits list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="flex items-center gap-3.5 text-brand-charcoal text-sm sm:text-base lg:text-lg font-semibold">
                  <div className="w-6 h-6 rounded-full bg-[#cca98f]/20 flex items-center justify-center text-brand">
                    <Flower className="w-4 h-4" />
                  </div>
                  <span>Práticas corporais diárias</span>
                </div>
                <div className="flex items-center gap-3.5 text-brand-charcoal text-sm sm:text-base lg:text-lg font-semibold">
                  <div className="w-6 h-6 rounded-full bg-[#cca98f]/20 flex items-center justify-center text-brand">
                    <Flower className="w-4 h-4" />
                  </div>
                  <span>Meditações guiadas de reforço</span>
                </div>
                <div className="flex items-center gap-3.5 text-brand-charcoal text-sm sm:text-base lg:text-lg font-semibold">
                  <div className="w-6 h-6 rounded-full bg-[#cca98f]/20 flex items-center justify-center text-brand">
                    <Flower className="w-4 h-4" />
                  </div>
                  <span>Desafios semanais práticos</span>
                </div>
                <div className="flex items-center gap-3.5 text-brand-charcoal text-sm sm:text-base lg:text-lg font-semibold">
                  <div className="w-6 h-6 rounded-full bg-[#cca98f]/20 flex items-center justify-center text-brand">
                    <Flower className="w-4 h-4" />
                  </div>
                  <span>Recursos e áudios de suporte</span>
                </div>
              </div>
            </div>

            {/* Column 2 - High-end premium mockup design */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] bg-brand-cream border border-[#cca98f]/30 rounded-3xl p-6 shadow-xl relative overflow-hidden">
                {/* Visual mockup representation of "Portal da Alma" */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#cca98f]" />
                
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between border-b border-stone-200/60 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#cca98f] flex items-center justify-center text-white">
                        <Flower className="w-4 h-4" />
                      </div>
                      <span className="font-serif text-[13px] font-bold text-brand-charcoal">Portal da Alma</span>
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 bg-brand-light/40 text-brand-dark rounded-full">ÁREA VIP</span>
                  </div>

                  {/* Mock Class Card */}
                  <div className="bg-white border border-stone-100 rounded-xl p-3 space-y-2.5 shadow-3xs">
                    <div className="aspect-video bg-[#faf5ee] rounded-lg relative overflow-hidden flex items-center justify-center group border border-brand/10">
                      <img 
                        src={exerciciosImg}
                        alt="Módulo 01 · Movimentar" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer" loading="lazy" decoding="async"
                      />
                      {/* Elegant dark overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                      
                      {/* Play button icon wrapper */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-10 h-10 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 flex items-center justify-center shadow-md transition-all duration-300">
                          <Play className="w-4 h-4 text-[#cca98f] fill-[#cca98f] translate-x-0.5" />
                        </div>
                      </div>
                      
                      <div className="absolute bottom-2 left-2 z-10 px-2 py-0.5 bg-brand-charcoal/80 text-white rounded text-[10px] font-mono tracking-wider">
                        08:15 MIN
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-brand-dark block">MÓDULO 01 · MOVIMENTAR</span>
                      <h4 className="text-[13px] font-bold text-brand-charcoal mt-0.5 leading-snug">Sequência de Exercícios</h4>
                    </div>
                  </div>

                  {/* Progressive indicator */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-[10px] text-stone-500 font-mono font-bold">
                      <span>SEU PROGRESSO GERAL</span>
                      <span>15%</span>
                    </div>
                    <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                      <div className="w-[15%] h-full bg-[#cca98f]" />
                    </div>
                  </div>

                  {/* Secured access badge */}
                  <div className="flex items-center gap-2 bg-[#e6ebdd]/40 border border-[#e6ebdd] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm lg:text-base text-[#424d35] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0 sm:w-5 sm:h-5" />
                    <span>Incluso 100% grátis com sua vaga presencial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
