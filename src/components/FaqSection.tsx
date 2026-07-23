import React from "react";
import { ChevronDown, HelpCircle, ShieldAlert, Heart, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ArucLogo from "./ArucLogo";

export default function FaqSection() {
  // We divide the items into Objections and general administrative FAQs
  const objections = [
    {
      id: "obj-1",
      question: "“É caro demais para uma tarde de evento.”",
      answer: "Uma sessão de terapia tradicional dura em média 50 minutos. A Essência oferece 5 horas inteiras de uma experiência imersiva guiada de forma próxima, cuidada e criada especialmente para o amadurecimento e descanso de mulheres. É o investimento mais honesto, seguro e reparador que você pode fazer por si mesma este ano.",
    },
    {
      id: "obj-2",
      question: "“Eu não tenho tempo.”",
      answer: "A imersão ocupa apenas uma tarde de sábado. Apenas uma tarde entre as dezenas de sábados e meses do ano. Você frequentemente separa horas de seu dia para reuniões, tarefas domésticas, demandas alheias e afazeres dos outros. Essa tarde foi desenhada para ser o seu único momento de respiro legítimo.",
    },
    {
      id: "obj-3",
      question: "“Não sei se essas dinâmicas funcionam para mim.”",
      answer: "Não existe nenhum tipo de performance ou jeito certo de viver esse encontro. Não há acertos ou erros; há apenas o que é seu. Você viverá a experiência inteiramente no seu próprio ritmo, sem exposição desconfortável. O espaço foi projetado para acolher exatamente quem e como você é.",
    },
    {
      id: "obj-4",
      question: "“Tenho receio de me sentir exposta ou desconfortável.”",
      answer: "Este é um espaço seguro e exclusivo para mulheres parceiras que também buscam o autoconhecimento. Cada detalhe da recepção ao encerramento é guiado por regras rígidas de acolhimento e absoluto sigilo. Você poderá expressar o que sente livremente, livre de performances ou julgamentos alheios.",
    },
  ];

  const faqs = [
    {
      id: "faq-1",
      question: "Para quem é recomendado esse evento?",
      answer: "Para mulheres de qualquer idade que sentem que estão vivendo no piloto automático total, sobrecarregadas com múltiplas responsabilidades da casa e da carreira, e que querem se reconectar com seu próprio corpo, gerenciar suas emoções e resgatar quem realmente são além dos papéis quotidianos.",
    },
    {
      id: "faq-2",
      question: "Preciso ter experiência prévia com terapia ou práticas corporais?",
      answer: "Absolutamente não! A Essência foi estruturada para te acolher onde você estiver. Não é necessária nenhuma experiência anterior com meditação, yoga ou terapia tradicional. Venha apenas com a sua intenção de estar presente por si.",
    },
    {
      id: "faq-3",
      question: "Como funciona cronologicamente o evento? O que vou fazer lá?",
      answer: "É uma tarde de imersão de 5 horas dividida em 4 momentos complementares: Reconhecer (aterramento e clareza de desejos), Sentir (respiração consciente direcionada à escuta corporal), Mover (desbloqueios livres corporais de tensões rígidas) e Integrar (celebração, reconexão coletiva e coffee-break).",
    },
    {
      id: "faq-4",
      question: "Qual é o endereço exato do evento?",
      answer: "📌 NOTA DE PRODUÇÃO: O endereço completo do elegante espaço em São Paulo/SP será enviado às inscritas confirmadas por e-mail e WhatsApp. Trata-se de um ambiente sofisticado, seguro, climatizado, amplo e localizado em região nobre de fácil acesso e estacionamento privativo.",
    },
    {
      id: "faq-5",
      question: "Como e quando vou receber meu e-ingresso?",
      answer: "Imediatamente após a aprovação de sua inscrição e pagamento pelo Mercado Pago, você receberá a confirmação no WhatsApp cadastrado e-mail com todas as orientações sobre indumentárias e preparação.",
    },
    {
      id: "faq-6",
      question: "É possível realizar o parcelamento da inscrição?",
      answer: "Sim! Visando apoiar a acessibilidade das participantes, é possível parcelar no cartão de crédito em até 6 vezes sem juros ou em até 12 vezes com acréscimo regular da plataforma de pagamento.",
    },
    {
      id: "faq-7",
      question: "Se eu tiver um imprevisto e não puder ir, qual a política?",
      answer: "Entendemos que imprevistos acontecem. Fale com a gente pelo WhatsApp e vamos juntos buscar a melhor solução para o seu caso.",
    },
  ];

  // Tab State
  const [activeTab, setActiveTab] = React.useState<"obg" | "faq">("obg");
  // Expanded IDs state
  const [expandedId, setExpandedId] = React.useState<string | null>("obj-1");

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const currentItems = activeTab === "obg" ? objections : faqs;

  // Track state transitions when changing tabs
  const handleTabChange = (tab: "obg" | "faq") => {
    setActiveTab(tab);
    setExpandedId(tab === "obg" ? "obj-1" : "faq-1");
  };

  return (
    <section id="faq-section" className="cv-auto bg-brand-sand py-12 lg:py-16 font-sans border-b border-brand-light/35">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex justify-center mb-4">
            <ArucLogo symbolOnly className="h-[44px] w-[56px] text-[#cca98f]" />
          </div>
          <span className="text-sm sm:text-base font-mono uppercase tracking-[0.25em] text-brand-dark font-black block">
            DÚVIDAS E SEGURANÇA
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="font-serif text-2xl sm:text-3xl lg:text-[2.6rem] font-black text-brand-charcoal tracking-tight leading-tight"
          >
            Esclareça suas <span className="italic font-normal text-brand">últimas objeções</span>
          </motion.h2>
          <p className="font-sans text-stone-500 font-light max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            O autocuidado é uma decisão consciente. Entenda como funciona a tranquilidade operacional do nosso evento presencial.
          </p>
        </div>

        {/* Elegant Minimal Toggle Tabs */}
        <div className="flex items-center justify-center p-1.5 bg-brand-cream border border-brand/10 rounded-2xl max-w-xl mx-auto mb-10 shadow-3xs">
          <button
            onClick={() => handleTabChange("obg")}
            className={`w-1/2 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "obg"
                ? "bg-brand text-white shadow-xs"
                : "text-stone-500 hover:text-stone-800"
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            Vencer Objeções
          </button>
          <button
            onClick={() => handleTabChange("faq")}
            className={`w-1/2 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "faq"
                ? "bg-brand text-white shadow-xs"
                : "text-stone-500 hover:text-stone-800"
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            Dúvidas Práticas (FAQ)
          </button>
        </div>

        {/* Accordions List container */}
        <div className="bg-white border border-brand/10 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xs max-w-4xl mx-auto space-y-3">
          {currentItems.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "border-brand bg-brand-cream/40"
                    : "border-stone-100 hover:border-brand/35 hover:bg-brand-cream/10"
                }`}
              >
                {/* Accordion Header bar */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-5 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <span className={`font-serif text-base sm:text-lg md:text-[1.15rem] font-black text-brand-charcoal leading-snug transition-colors duration-200 ${
                    isExpanded ? "text-brand-dark" : "text-brand-charcoal"
                  }`}>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isExpanded ? "bg-brand text-white rotate-180" : "bg-stone-50 text-stone-400"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated content body heights */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed border-t border-brand/5">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
