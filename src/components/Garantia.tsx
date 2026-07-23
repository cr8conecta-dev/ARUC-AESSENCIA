import React from "react";
import { ShieldAlert, ShieldCheck, Hourglass, Calendar } from "lucide-react";

export default function Garantia() {
  // Real time countdown calculations from June 15, 2026 to October 31, 2026 14:00:00 SP.
  const targetDate = new Date("2026-10-31T14:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="urgencia-garantia-section" className="cv-auto bg-[#fcfaf4] py-12 lg:py-16 font-sans relative overflow-hidden text-brand-charcoal">
      {/* Soft overlay vectors to link theme colors beautifully */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 space-y-12 lg:space-y-16 relative z-10">
        
        {/* BLOCO 12 — URGÊNCIA / ESCASSEZ : Banner de atenção com #cca98f e texto branco com Countdown real */}
        <div className="bg-white border border-[#cca98f]/30 rounded-3xl p-5 sm:p-7 lg:p-10 text-brand-charcoal shadow-xl relative overflow-hidden">
          {/* Decorative radial circles */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-light/20 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Urgency Copy block */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 bg-[#cca98f]/10 border border-[#cca98f]/20 px-3.5 py-2 rounded-full text-[#cca98f]">
                <ShieldAlert className="w-4 h-4 text-[#cca98f] animate-pulse" />
                <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider font-mono">
                  ALERTA DE VAGAS LIMITADAS
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-brand-charcoal">
                Apenas 60 vagas disponíveis no espaço físico.
              </h3>
              <p className="text-[#3c3734] leading-relaxed text-xs sm:text-sm lg:text-base font-medium">
                Por ser uma imersão terapêutica presencial, o cuidado da Adriana com cada participante é primordial. Quando lotar, as inscrições serão imediatamente suspensas e não haverá como participar deste dia.
              </p>

            </div>

            {/* Live Interactive Countdown Timer */}
            <div className="lg:col-span-1"></div> {/* Gap spacer */}
            
            <div className="lg:col-span-5 bg-brand-cream border border-[#cca98f]/20 rounded-2xl p-5 lg:p-7 text-center space-y-4">
              <span className="text-[11px] sm:text-xs lg:text-sm uppercase font-mono tracking-widest text-brand-dark font-black flex items-center justify-center gap-1">
                <Hourglass className="w-4 h-4 text-brand-dark" />
                IMERSÃO EM CONTAGEM REGRESSIVA:
              </span>
              
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {/* Days */}
                <div className="bg-white p-2 sm:p-3 text-center rounded-xl border border-brand-light/50 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-brand-charcoal">{timeLeft.days}</span>
                  <span className="text-[9px] sm:text-[10px] uppercase text-stone-500 font-mono tracking-widest block mt-1 font-bold">DIAS</span>
                </div>
                {/* Hours */}
                <div className="bg-white p-2 sm:p-3 text-center rounded-xl border border-brand-light/50 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-brand-charcoal">{timeLeft.hours}</span>
                  <span className="text-[9px] sm:text-[10px] uppercase text-stone-500 font-mono tracking-widest block mt-1 font-bold">HORAS</span>
                </div>
                {/* Minutes */}
                <div className="bg-white p-2 sm:p-3 text-center rounded-xl border border-brand-light/50 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-brand-charcoal">{timeLeft.minutes}</span>
                  <span className="text-[9px] sm:text-[10px] uppercase text-stone-500 font-mono tracking-widest block mt-1 font-bold">MIN</span>
                </div>
                {/* Seconds */}
                <div className="bg-white p-2 sm:p-3 text-center rounded-xl border border-brand-light/50 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-brand-dark">{timeLeft.seconds}</span>
                  <span className="text-[9px] sm:text-[10px] uppercase text-stone-500 font-mono tracking-widest block mt-1 font-bold">SEG</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCO 11 — GARANTIA: Box com fundo caramelo suave ou nude com borda caramelo. Ícone de escudo. */}
        <div className="bg-white border-2 border-[#cca98f]/20 rounded-3xl p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8 shadow-md">
          {/* Accent Badge of Guarantee Shield check */}
          <div className="flex-shrink-0 w-14 h-14 lg:w-20 lg:h-20 bg-brand-light/30 border border-[#cca98f]/30 rounded-2xl lg:rounded-3xl flex items-center justify-center text-brand shadow-xs">
            <ShieldCheck className="w-8 h-8 lg:w-12 lg:h-12 text-brand stroke-[1.25]" />
          </div>

          <div className="text-center sm:text-left space-y-3">
            <span className="text-xs lg:text-sm font-black text-brand-dark tracking-[0.25em] font-mono leading-none block">
              POLÍTICA DE REEMBOLSO · SEGURANÇA
            </span>
            <h4 className="font-serif text-xl sm:text-2xl lg:text-3xl font-black text-brand-charcoal leading-tight">
              Compromisso e Respeito com sua Transição
            </h4>
            <p className="text-brand-charcoal font-sans text-xs sm:text-sm lg:text-base leading-relaxed lg:leading-relaxed font-semibold">
              Na ARUC, cada processo é tratado com profunda atenção e cuidado humano. Se por qualquer motivo de força maior você não puder comparecer presencialmente, entre em contato com nossa equipe em até 7 dias de antecedência do evento. Vamos encontrar a melhor solução para você.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
