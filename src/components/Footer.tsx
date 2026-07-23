import React from "react";
import { ShieldCheck, Calendar, Lock, Globe, ArrowRight } from "lucide-react";

interface FooterProps {
  onCtaClick: () => void;
}

export default function Footer({ onCtaClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="cv-auto relative text-brand-charcoal overflow-hidden border-t border-[#cca98f]/20">
      
      {/* BLOCO 14 — CTA FINAL: Seção com fundo claro e elegante */}
      <div className="relative py-12 sm:py-16 flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#fdfbf7]">
        
        {/* Soft elegant background glows */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-light/20 rounded-full blur-[140px] pointer-events-none select-none z-1" />
        </div>

        {/* Closing Emotional copy */}
        <div className="relative z-10 w-full max-w-4xl mx-auto space-y-6 flex flex-col items-center">
          
          <div className="space-y-3 max-w-3xl">
            <span className="text-sm font-mono uppercase tracking-[0.25em] text-[#cca98f] font-bold block">
              SUA DECISÃO DE PRESENÇA
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] font-medium tracking-tight text-brand-charcoal leading-tight">
              Você já cuidou de tudo e de todos. <br />
              <span className="italic font-bold text-[#cca98f]">Agora é a sua vez.</span>
            </h2>
            
            <p className="font-sans text-stone-700 font-semibold text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed pt-1">
              A Essência acontece uma única vez. Em uma única tarde. Em São Paulo. Você vai retornar diferente para casa, não porque alguém simplesmente te disse o que fazer, mas porque finalmente sentiu quem você é de verdade.
            </p>
          </div>

          {/* Terracota brand button exactly matching the hero/dores style with high-end premium styling */}
          <div className="w-full flex flex-col items-center gap-4.5 pt-3">
            <div className="relative inline-block w-full sm:w-auto">
              {/* Outer pulsing ring that glows in the brand's elegant terracotta/gold color */}
              <div className="absolute -inset-1.5 bg-[#cca98f]/20 rounded-full blur-md group-hover:bg-[#cca98f]/30 transition-all duration-300" />
              
              <button
                onClick={onCtaClick}
                className="group relative z-10 w-full sm:w-auto px-8 sm:px-11 py-4 bg-[#cca98f] hover:bg-[#b28e75] hover:scale-[1.03] transition-all duration-300 font-sans text-xs sm:text-sm font-black tracking-[0.2em] text-white rounded-full shadow-[0_12px_35px_rgba(204,169,143,0.35)] hover:shadow-[0_16px_40px_rgba(204,169,143,0.5)] active:scale-98 cursor-pointer uppercase overflow-hidden flex items-center justify-center gap-3 border border-white/20"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:animate-shimmer" />
                <span>QUERO GARANTIR MINHA VAGA</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-white/95" />
              </button>
            </div>

            {/* Event indicators below button with dark text */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-stone-600 font-sans font-semibold pt-1">
              <span className="flex items-center gap-1.5 leading-none">
                <Calendar className="w-4 h-4 text-[#cca98f]" />
                31 de Outubro de 2026  ·  14h às 19h  ·  São Paulo/SP
              </span>
              <span className="hidden sm:inline text-stone-300">·</span>
              <span className="flex items-center gap-1.5 leading-none">
                <ShieldCheck className="w-4.5 h-4.5 text-brand" />
                Vagas restritas  ·  Ambiente seguro
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* BLOCO 15 — PS — BLOCO DE FECHAMENTO: Último elemento da página */}
      <div className="bg-[#f5f1e9] border-t border-[#cca98f]/20 py-10 px-6 font-sans text-stone-600 text-sm sm:text-base text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Subtle Emotional P.S. text in dark text */}
          <div className="max-w-3xl mx-auto">
            <p className="text-brand-charcoal font-serif italic text-base sm:text-lg leading-relaxed text-center font-semibold">
              P.S. — Se você chegou até aqui, é porque algo especial nesse convite secreto tocou no seu coração. Não ignore esse sinal de seu corpo. As vagas são de fato limitadas e o evento não se repetirá nessa data. Cuide de você com carinho — você merece esse respiro.
            </p>
          </div>

          <div className="border-t border-stone-300/40 my-8 max-w-xl mx-auto"></div>

          {/* Administrative legal links and copyright */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-stone-500 border-t border-stone-300/40 gap-3 font-semibold">
            <p className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-stone-500" />
              © {currentYear} ARUC Desenvolvimento Feminino. Todos os direitos de privacidade reservados.
            </p>
            <div className="flex items-center gap-4">
              <a href="#dores-section" className="hover:underline hover:text-[#cca98f]">Identificação</a>
              <span>·</span>
              <a href="#jornada-section" className="hover:underline hover:text-[#cca98f]">A Jornada</a>
              <span>·</span>
              <a href="#sobre-section" className="hover:underline hover:text-[#cca98f]">Sobre Adriana</a>
              <span>·</span>
              <a href="#faq-section" className="hover:underline hover:text-[#cca98f]">Dúvidas</a>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
