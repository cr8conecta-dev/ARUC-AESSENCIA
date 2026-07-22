import React from "react";
import { Smile, Quote, Heart, Sparkles, Award, Flower } from "lucide-react";
import { motion } from "motion/react";

export default function Sobre() {
  return (
    <section
      id="sobre-section"
      className="bg-gradient-to-br from-[#faf6f0] via-[#f5eade] to-[#ebdcd0] py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Visual background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] bg-brand-light/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-48 h-48 bg-brand-blue-light/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[92rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Large Luxury Card with a sophisticated light-cream paper layout */}
        <div className="bg-[#fcfaf6]/95 backdrop-blur-md rounded-[3rem] sm:rounded-[4rem] p-6 sm:p-10 lg:p-14 border border-brand/20 shadow-[0_20px_50px_rgba(140,110,86,0.08)] relative overflow-hidden">
          
          {/* Subtle elegant inner border lines decoration */}
          <div className="absolute inset-4 rounded-[2rem] sm:rounded-[3rem] border border-[#cca98f]/10 pointer-events-none" />
          
          {/* Header inside the card */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 relative z-10">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[1px] bg-brand-dark/50" />
              <span className="text-sm sm:text-base font-mono uppercase tracking-[0.25em] text-brand-dark font-black">
                SUAS GUIAS NESTA JORNADA
              </span>
              <Sparkles className="w-4.5 h-4.5 text-brand" />
            </div>
            
            <motion.h2
              initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] tracking-tight text-brand-charcoal leading-[1.15] lg:leading-[1.1] font-black"
            >
              Quem vai te guiar nessa <span className="font-serif italic text-brand-dark font-normal">jornada de volta</span>
            </motion.h2>
            <div className="w-24 h-[3px] bg-gradient-to-r from-brand to-brand-light rounded-full mx-auto" />
          </div>

          {/* First Guide: Adriana Quintal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 mb-16">
            
            {/* Left: Beautiful portrait of Adriana, elegantly framed */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-sm sm:max-w-md">
                
                {/* Decorative background framing shapes to give deep visual hierarchy */}
                <div className="absolute -inset-4 border border-brand/20 rounded-[2rem] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 pointer-events-none" />
                <div className="absolute -inset-4 bg-brand-light/30 rounded-[2rem] translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500 pointer-events-none -z-10" />
                
                {/* Decorative flower halo behind photo */}
                <div className="absolute -top-10 -right-10 w-24 h-24 text-brand/10 pointer-events-none animate-spin-slow">
                  <Flower className="w-full h-full stroke-[0.5]" />
                </div>

                {/* Main photo container */}
                <div className="relative overflow-hidden rounded-[1.8rem] border-[6px] border-white bg-brand-dark aspect-[4/5] shadow-[0_15px_30px_rgba(44,39,36,0.06)]">
                  <img
                    src="/src/assets/images/adriana_quintal_1781532995773.jpg"
                    alt="Adriana Quintal — Terapeuta e Criadora da ARUC"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  />
                  
                  {/* Subtle vignette gradient over the image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 to-transparent pointer-events-none" />
                </div>

                {/* Floating micro text badge - extremely refined stamp design */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-charcoal/95 backdrop-blur-md px-4 py-3 rounded-2xl flex items-center gap-3 border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
                  <div className="w-9 h-9 bg-brand rounded-full flex items-center justify-center text-white shrink-0 shadow-inner">
                    <Smile className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="block text-[9px] uppercase text-brand tracking-[0.2em] leading-none font-bold mb-1">CRIADORA DA ARUC</span>
                    <span className="font-serif text-sm font-semibold text-white truncate block">Adriana Quintal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Detailed bio text with premium editorial layout */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-brand-dark font-bold">CRIADORA DA ARUC</span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-brand-charcoal">Adriana Quintal</h3>
              </div>

              {/* Decorative line separator */}
              <div className="w-20 h-[3px] bg-gradient-to-r from-brand to-brand-light rounded-full" />

              {/* Increased overall body font size to meet the user's requirement */}
              <div className="space-y-6 text-brand-charcoal/90 text-sm sm:text-base lg:text-[1.05rem] leading-relaxed font-normal">
                <p>
                  Desde 2010 realizo atendimentos terapêuticos, acompanhando principalmente mulheres em seus processos de autoconhecimento, cura emocional, fortalecimento da autoestima e reconexão com sua essência.
                </p>
                
                <p>
                  Minha jornada começou pelo movimento. Bailarina desde jovem, formada em Educação Física, atuei como professora de dança, alongamento e personal trainer, acompanhando de perto como o corpo revela histórias, emoções e padrões que muitas vezes a mente ainda não consegue compreender.
                </p>
                
                <p>
                  Foi justamente essa observação que me levou a aprofundar meus estudos além da anatomia e do condicionamento físico. Busquei formações que integrassem corpo, mente, emoções e energia, construindo uma visão mais ampla do processo de cura e desenvolvimento humano.
                </p>
                
                {/* Beautiful custom-designed Blockquote container for the final powerful statement */}
                <div className="relative py-5 px-5 sm:px-6 bg-brand-light/25 rounded-2xl border-l-4 border-brand-dark overflow-hidden my-6 shadow-3xs">
                  <Quote className="absolute right-4 top-4 w-12 h-12 text-brand-dark/10 pointer-events-none" />
                  <p className="font-sans font-bold text-[#3d2a1b] text-base sm:text-lg md:text-xl leading-relaxed relative z-10">
                    “O que você vivenciará neste evento é a condensação de anos de experiência prática em consultório. Os conhecimentos, ferramentas e percepções que ajudaram centenas de mulheres a compreenderem melhor a si mesmas, reunidos em uma tarde.”
                  </p>
                </div>
              </div>
            </div>

            {/* Gorgeous Credentials Row - designed like high-end editorial highlights - specifically for Adriana */}
            <div className="mt-12 pt-8 border-t border-brand/20 lg:col-span-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Card 1 */}
                <div className="bg-[#fcfaf6] border border-brand/15 hover:border-brand-dark/30 hover:bg-white transition-all duration-300 p-6 sm:p-7 rounded-2xl flex flex-col items-center text-center group">
                  <div className="w-12 h-12 bg-brand-light/40 rounded-full flex items-center justify-center text-brand-dark mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Smile className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl font-black text-brand-charcoal mb-1.5">Terapeuta Integrativa</h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">Abordagem integrativa para cura de feridas emocionais e estresse feminino.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#fcfaf6] border border-brand/15 hover:border-brand-dark/30 hover:bg-white transition-all duration-300 p-6 sm:p-7 rounded-2xl flex flex-col items-center text-center group">
                  <div className="w-12 h-12 bg-brand-light/40 rounded-full flex items-center justify-center text-brand-dark mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl font-black text-brand-charcoal mb-1.5">Criadora do Método ARUC</h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">Um ecossistema seguro voltado ao acolhimento e amadurecimento consciente.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#fcfaf6] border border-brand/15 hover:border-brand-dark/30 hover:bg-white transition-all duration-300 p-6 sm:p-7 rounded-2xl flex flex-col items-center text-center group">
                  <div className="w-12 h-12 bg-brand-light/40 rounded-full flex items-center justify-center text-brand-dark mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl font-black text-brand-charcoal mb-1.5">Especialista em Cuidado</h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">Centenas de mulheres guiadas rumo à presença plena e soberania pessoal.</p>
                </div>

              </div>
            </div>

          </div>

          {/* Divider Line between guides */}
          <div className="my-16 border-t border-[#cca98f]/20 relative z-10" />

          {/* Second Guide: Fernanda Moreira */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Left: Beautiful portrait of Fernanda, elegantly framed */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-sm sm:max-w-md">
                
                {/* Decorative background framing shapes to give deep visual hierarchy */}
                <div className="absolute -inset-4 border border-brand/20 rounded-[2rem] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 pointer-events-none" />
                <div className="absolute -inset-4 bg-brand-light/30 rounded-[2rem] translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500 pointer-events-none -z-10" />
                
                {/* Decorative flower halo behind photo */}
                <div className="absolute -top-10 -right-10 w-24 h-24 text-brand/10 pointer-events-none animate-spin-slow">
                  <Flower className="w-full h-full stroke-[0.5]" />
                </div>

                {/* Main photo container */}
                <div className="relative overflow-hidden rounded-[1.8rem] border-[6px] border-white bg-brand-dark aspect-[4/5] shadow-[0_15px_30px_rgba(44,39,36,0.06)]">
                  <img
                    src="/src/assets/images/fernanda.jpg"
                    alt="Fernanda Moreira — Facilitadora"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-[30%_center] group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  />
                  
                  {/* Subtle vignette gradient over the image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 to-transparent pointer-events-none" />
                </div>

                {/* Floating micro text badge - extremely refined stamp design */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-charcoal/95 backdrop-blur-md px-4 py-3 rounded-2xl flex items-center gap-3 border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
                  <div className="w-9 h-9 bg-brand rounded-full flex items-center justify-center text-white shrink-0 shadow-inner">
                    <Smile className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="block text-[9px] uppercase text-brand tracking-[0.2em] leading-none font-bold mb-1">FACILITADORA</span>
                    <span className="font-serif text-sm font-semibold text-white truncate block">Fernanda Moreira</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Detailed bio text with premium editorial layout */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-brand-dark font-bold">FACILITADORA</span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-brand-charcoal">Fernanda Moreira</h3>
              </div>

              {/* Decorative line separator */}
              <div className="w-20 h-[3px] bg-gradient-to-r from-brand to-brand-light rounded-full" />

              {/* bio text */}
              <div className="space-y-6 text-brand-charcoal/90 text-sm sm:text-base lg:text-[1.05rem] leading-relaxed font-normal">
                <p>
                  Sou facilitadora de processos de desenvolvimento humano e autoconhecimento, dedicada a apoiar mulheres na reconstrução da relação consigo mesmas.
                </p>
                <p>
                  Minha atuação integra práticas corporais, meditação, yoga, eutonia e outras abordagens complementares, conduzindo cada pessoa a desenvolver maior consciência sobre seu corpo, emoções, pensamentos e escolhas.
                </p>
                <p>
                  Acredito que uma transformação consistente acontece quando olhamos para o ser humano de forma integrada, considerando corpo, mente, emoções e espiritualidade, sempre respeitando a história, os limites e o tempo de cada mulher.
                </p>
                <p>
                  Meu propósito é criar espaços seguros de escuta, presença e reflexão, onde seja possível fortalecer a autoestima, ampliar a consciência, desenvolver recursos internos e construir uma vida com mais equilíbrio, autenticidade e sentido.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
