import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, Smartphone, Mail, User, ShieldCheck, Ticket } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    terms: true,
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [ticketCode, setTicketCode] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    setLoading(true);

    const code = "ESSENCIA-ARUC-2026-" + Math.floor(10000 + Math.random() * 90000);
    setTicketCode(code);

    // 1. Guardar localmente no LocalStorage como contingência de segurança
    try {
      const existing = JSON.parse(localStorage.getItem("aruc_leads") || "[]");
      existing.push({
        ...formData,
        date: new Date().toISOString(),
        code
      });
      localStorage.setItem("aruc_leads", JSON.stringify(existing));
    } catch (err) {
      console.warn("Erro ao salvar no localStorage:", err);
    }

    // 2. Enviar para Webhook se estiver configurado no .env (Google Sheets, Zapier, Make, etc)
    const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "cors",
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            terms: formData.terms,
            ticketCode: code,
            timestamp: new Date().toISOString(),
            source: "Website Imersão A Essência"
          })
        });
      } catch (err) {
        console.error("Erro ao registrar lead no webhook:", err);
      }
    }

    // 3. Finalizar simulação de carregamento e abrir sucesso
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const getWhatsAppLink = () => {
    const number = import.meta.env.VITE_WHATSAPP_NUMBER || "5511999999999";
    const message = `Olá! Acabei de fazer minha pré-reserva no site para a imersão "A Essência".

Meus dados de cadastro:
👤 *Nome:* ${formData.name}
✉️ *E-mail:* ${formData.email}
📱 *WhatsApp:* ${formData.phone}
🎟️ *Código do Ticket:* ${ticketCode}

Gostaria de receber o link de pagamento do Mercado Pago para garantir minha vaga exclusiva!`;
    
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", terms: true });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="booking-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-900/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="bg-brand-cream border border-brand/20 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative z-10"
          >
            {/* Header */}
            <div className="bg-brand/10 border-b border-brand/10 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Ticket className="w-5 h-5 text-brand-dark" />
                <span className="font-serif text-lg text-brand-charcoal font-semibold">
                  Sua Vaga em "A Essência"
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-stone-500 hover:text-black hover:bg-black/5 p-1.5 rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <p className="font-serif text-base text-brand-dark italic mb-1">
                      Você está a um passo de uma tarde inteira para si mesma.
                    </p>
                    <p className="text-sm text-stone-600 leading-relaxed mb-4">
                      Preencha com seus dados corretos. Conforme as regras da Adriana Quintal, suas informações de ingresso e credenciamento exclusivo serão enviadas por WhatsApp e E-mail.
                    </p>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="block text-sm font-semibold text-brand-charcoal">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-stone-400">
                        <User className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Maria Oliveira"
                        className="w-full bg-white border border-brand-light pl-9 pr-4 py-2.5 rounded-xl text-sm sm:text-base focus:outline-hidden focus:border-brand-dark transition-all focus:ring-1 focus:ring-brand-dark"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label className="block text-sm font-semibold text-brand-charcoal">
                      E-mail Principal
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-stone-400">
                        <Mail className="w-4 h-4" />
                      </span>
                      <input
                        type="email"
                        required
                        placeholder="seuemail@exemplo.com"
                        className="w-full bg-white border border-brand-light pl-9 pr-4 py-2.5 rounded-xl text-sm sm:text-base focus:outline-hidden focus:border-brand-dark transition-all focus:ring-1 focus:ring-brand-dark"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1">
                    <label className="block text-sm font-semibold text-brand-charcoal">
                      WhatsApp / Celular
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-stone-400">
                        <Smartphone className="w-4 h-4" />
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: (11) 99999-9999"
                        className="w-full bg-white border border-brand-light pl-9 pr-4 py-2.5 rounded-xl text-sm sm:text-base focus:outline-hidden focus:border-brand-dark transition-all focus:ring-1 focus:ring-brand-dark"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-2.5 pt-2">
                    <input
                      id="terms-checkbox"
                      type="checkbox"
                      checked={formData.terms}
                      onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                      className="mt-1 rounded-sm border-brand text-brand-dark focus:ring-brand cursor-pointer w-4 h-4"
                    />
                    <label htmlFor="terms-checkbox" className="text-xs sm:text-sm text-stone-600 leading-normal cursor-pointer select-none">
                      Concordo em receber as comunicações de preparação da imersão no meu WhatsApp e e-mail. Meus dados estão 100% protegidos pelas diretrizes da ARUC de privacidade (LGPD).
                    </label>
                  </div>

                  {/* Pricing brief */}
                  <div className="bg-brand/5 border border-brand/10 rounded-xl p-3.5 mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <div>
                      <p className="text-sm sm:text-base font-serif text-brand-charcoal font-bold leading-snug">
                        Valor Exclusivo 12x de 142,16 R$
                      </p>
                    </div>
                    <div className="text-left sm:text-right text-xs text-stone-600 shrink-0 font-sans">
                      <p className="font-semibold text-brand-dark">no cartão</p>
                      <p className="font-medium text-brand-green mt-0.5">✓ Ambiente Exclusivo Seguro</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="submit"
                    disabled={loading || !formData.terms}
                    className="w-full bg-brand hover:bg-brand-dark text-white font-bold tracking-wider text-sm sm:text-base py-3.5 sm:py-4 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer mt-2 flex items-center justify-center gap-2 font-sans disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processando inscrição segura...
                      </span>
                    ) : (
                      "FINALIZAR INSCRIÇÃO EXCLUSIVA"
                    )}
                  </button>

                  <div className="flex justify-center items-center gap-1 text-[11px] sm:text-xs text-stone-500 font-mono mt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                    CRIPTOGRAFIA SSL 256 BITS · MERCADO PAGO INTEGRADO
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-5">
                  <div className="inline-flex items-center justify-center bg-brand-green-light border border-brand-green/20 w-16 h-16 rounded-full text-brand-green">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-brand-charcoal font-bold">
                      Inscrição Pré-Reservada!
                    </h3>
                    <p className="text-stone-600 text-sm max-w-sm mx-auto leading-relaxed">
                      Parabéns, <strong>{formData.name}</strong>! Garantiu de forma segura as informações iniciais de sua vaga na imersão <strong>A Essência</strong>.
                    </p>
                  </div>

                  <div className="bg-white border border-brand-light rounded-2xl p-4 max-w-sm mx-auto shadow-xs text-left">
                    <span className="text-[10px] text-brand-dark uppercase tracking-widest font-bold">Seu E-Ticket Provisório</span>
                    <div className="border-t border-dashed border-brand/20 my-2"></div>
                    <div className="flex justify-between text-xs text-stone-500 mb-1">
                      <span>Evento:</span>
                      <span className="font-medium text-brand-charcoal">A Essência imersão s/ pressa</span>
                    </div>
                    <div className="flex justify-between text-xs text-stone-500 mb-1">
                      <span>Data:</span>
                      <span className="font-medium text-brand-charcoal">31 de Outubro de 2026</span>
                    </div>
                    <div className="flex justify-between text-xs text-stone-500 mb-1">
                      <span>Horário:</span>
                      <span className="font-medium text-brand-charcoal">14h às 19h (5 Horas)</span>
                    </div>
                    <div className="flex justify-between text-xs text-stone-500">
                      <span>Localização:</span>
                      <span className="font-medium text-brand-charcoal text-right">Espaço ARUC, São Paulo/SP</span>
                    </div>
                    <div className="border-t border-dashed border-brand/20 my-2"></div>
                    <p className="text-[10px] text-center text-stone-400 font-mono mt-2">
                      Código provisório: {ticketCode}
                    </p>
                  </div>

                  <div className="pt-2 max-w-sm mx-auto">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-4 px-6 rounded-xl transition-all shadow-md items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-98 uppercase tracking-wider font-sans cursor-pointer"
                    >
                      <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.019-5.101-2.875-6.958C16.604 1.927 14.133.91 11.5.91c-5.44 0-9.863 4.42-9.866 9.864-.001 2.012.52 3.975 1.514 5.711l-.995 3.637 3.734-.979zm11.196-7.53c-.302-.152-1.791-.883-2.073-.984-.282-.102-.489-.153-.694.153-.205.305-.793.984-.973 1.187-.18.203-.359.228-.661.076-.302-.152-1.274-.469-2.426-1.496-.897-.799-1.502-1.787-1.678-2.091-.176-.304-.019-.468.132-.619.136-.135.302-.353.454-.529.152-.176.203-.304.305-.507.102-.203.05-.381-.025-.533-.076-.152-.694-1.671-.951-2.285-.25-.601-.505-.519-.694-.529-.18-.01-.385-.011-.59-.011-.205 0-.538.076-.82.381-.282.305-1.077 1.053-1.077 2.569 0 1.516 1.102 2.981 1.256 3.184.153.203 2.169 3.313 5.254 4.643.734.316 1.307.505 1.753.647.738.234 1.41.201 1.942.121.593-.089 1.791-.733 2.048-1.439.256-.706.256-1.313.18-1.439-.077-.126-.282-.203-.585-.355z" />
                      </svg>
                      Enviar Inscrição por WhatsApp
                    </a>
                  </div>

                  <p className="text-[11px] text-stone-500 max-w-xs mx-auto leading-normal">
                    Nossa equipe (vias CR8 Conecta) enviará o link definitivo do Mercado Pago/WhatsApp para finalizar sua liberação de entrada imediata. Toque no botão acima para acelerar seu atendimento!
                  </p>

                  <button
                    onClick={handleReset}
                    className="mt-2 text-stone-500 hover:text-black hover:underline cursor-pointer text-xs"
                  >
                    Voltar ao Website
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
