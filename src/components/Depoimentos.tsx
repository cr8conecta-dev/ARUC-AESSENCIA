import React from "react";
import { Quote, Star, AlertCircle } from "lucide-react";
import casaLoaneImg from "../assets/images/casaloane.jpg";

export default function Depoimentos() {
  const testimonials = [
    {
      id: "t1",
      name: "Mariana Silva",
      city: "São Paulo/SP",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Eu entrei na vivência carregando o peso do mundo nas minhas costas, exausta e vivendo no piloto automático total. Saí de lá respirando de verdade, sentindo meu corpo totalmente leve e lembrando daquela força sutil que eu tinha. Uma verdadeira virada de chave para minha rotina corrida.",
      tag: "Destaque: Leveza Corporal",
    },
    {
      id: "t2",
      name: "Beatriz Mota",
      city: "São Bernardo/SP",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "O ambiente que a Adriana cria na ARUC é indescritível. É um espaço de segurança absoluta, acolhimento e escuta sensível de verdade, sem cobranças ou julgamento. Compartilhar a tarde com outras mulheres que atravessam cansaços parecidos me fez lembrar que não andamos sós.",
      tag: "Destaque: Espaço e Acolhimento",
    },
    {
      id: "t3",
      name: "Camila Rios",
      city: "São Paulo/SP",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Eu tinha simplesmente esquecido como é estar presente sem ter que resolver dez problemas ao mesmo tempo. A imersão me trouxe uma clareza e uma paz que há anos eu não sentia. Recomendo essa imersão para toda mulher que quer se reconectar consigo.",
      tag: "Destaque: Clareza Mental",
    },
  ];

  return (
    <section id="depoimentos-section" className="bg-brand-blue-light py-16 lg:py-20 relative overflow-hidden">
      {/* Background Image with 40% opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src={casaLoaneImg}
          alt="Fundo Refúgio e Bem-Estar"
          referrerPolicy="no-referrer" decoding="async"
          loading="lazy"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Structural layout decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-sm sm:text-base font-mono uppercase tracking-[0.25em] text-brand-dark font-bold block">
            TRANSFORMAÇÕES REAIS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-medium text-black tracking-tight leading-tight">
            Vozes de quem <span className="italic font-bold text-black">já viveu essa pausa</span>
          </h2>
          <p className="font-sans text-brand-charcoal font-semibold max-w-xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            Veja o depoimento de mulheres que decidiram soltar os papéis e se permitiram receber cuidado guiado pela Adriana.
          </p>
        </div>

        {/* Testimonials 3 columns grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-brand-cream border border-brand/10 hover:border-brand/20 transition-all duration-300 p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:shadow-lg relative group"
            >
              {/* Decorative quotation mark */}
              <span className="absolute right-5 top-5 text-brand/10 group-hover:text-brand/15 transition-colors duration-300">
                <Quote className="w-12 h-12 stroke-[4]" />
              </span>

              <div className="space-y-4">
                {/* 5 stars indicating top quality */}
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 stroke-none" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="font-sans text-brand-charcoal text-xs sm:text-sm md:text-base leading-relaxed italic relative z-10 font-medium">
                  "{test.quote}"
                </p>
              </div>

              {/* Bottom Client profile card alignment */}
              <div className="flex items-center gap-3 border-t border-brand/10 pt-4 mt-5 border-stone-200">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-brand-light flex-shrink-0">
                   <img
                     src={test.avatar}
                     alt={test.name}
                     referrerPolicy="no-referrer" decoding="async"
                     loading="lazy"
                     className="w-full h-full object-cover"
                   />
                </div>
                
                <div className="text-left">
                  <span className="block font-serif text-sm sm:text-base font-semibold text-brand-charcoal leading-tight">
                    {test.name}
                  </span>
                  <span className="block text-[11px] sm:text-xs font-sans text-stone-600 font-semibold">
                    {test.city}
                  </span>
                </div>
                
                <div className="ml-auto">
                  <span className="hidden sm:inline-block bg-brand-light/20 border border-brand/10 text-[9px] sm:text-[10px] uppercase font-mono px-2 py-0.5 rounded-md text-brand-dark font-semibold">
                    {test.tag.replace("Destaque: ", "")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
