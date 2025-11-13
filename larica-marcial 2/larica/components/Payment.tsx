import React, { useState } from 'react';

interface PaymentProps {
  onComplete: (plan: 'mensal' | 'anual') => void;
}

const Payment: React.FC<PaymentProps> = ({ onComplete }) => {
  const [selectedPlan, setSelectedPlan] = useState<'mensal' | 'anual'>('mensal');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(selectedPlan);
  };

  return (
    <div className="holographic-panel p-8 rounded-lg w-full max-w-lg mx-auto animate-fade-in">
      <h2 className="text-2xl font-bold text-yellow-400 mb-2 neon-yellow-text tracking-wider">Protocolo de Pagamento</h2>
      <p className="text-cyan-200/80 mb-6">Selecione seu plano de acesso ao sistema.</p>
      
      <div className="space-y-4 mb-8">
        <div onClick={() => setSelectedPlan('mensal')} className={`p-6 rounded-lg border cursor-pointer transition-all duration-300 ${selectedPlan === 'mensal' ? 'border-yellow-400 bg-yellow-500/10' : 'border-cyan-400/20 hover:bg-cyan-500/10'}`}>
          <h3 className="font-bold text-lg text-white">PLANO MENSAL</h3>
          <p className="text-cyan-100/90">R$ 49,90 / mês</p>
          <p className="text-sm text-cyan-200/70 mt-1">Flexibilidade máxima para sua jornada.</p>
        </div>
        <div onClick={() => setSelectedPlan('anual')} className={`relative p-6 rounded-lg border cursor-pointer transition-all duration-300 ${selectedPlan === 'anual' ? 'border-yellow-400 bg-yellow-500/10' : 'border-cyan-400/20 hover:bg-cyan-500/10'}`}>
           <span className="absolute top-2 right-2 bg-green-500/80 text-white text-xs font-bold px-3 py-1 rounded-full">ECONOMIA DE 20%</span>
          <h3 className="font-bold text-lg text-white">PLANO ANUAL</h3>
          <p className="text-cyan-100/90">R$ 479,00 / ano</p>
          <p className="text-sm text-cyan-200/70 mt-1">Compromisso total com a performance.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-cyan-200/80 tracking-wider">NÚMERO DO CARTÃO</label>
          <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" className="form-input-ar mt-1 block w-full rounded-md py-2 px-3 text-white" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-cyan-200/80 tracking-wider">VALIDADE</label>
            <input type="text" id="expiryDate" placeholder="MM/AA" className="form-input-ar mt-1 block w-full rounded-md py-2 px-3 text-white" />
          </div>
          <div>
            <label htmlFor="cvc" className="block text-sm font-medium text-cyan-200/80 tracking-wider">CVC</label>
            <input type="text" id="cvc" placeholder="123" className="form-input-ar mt-1 block w-full rounded-md py-2 px-3 text-white" />
          </div>
        </div>
        <div className="text-center text-xs text-cyan-300/50 pt-4">
          Transação segura. Protocolos de PIX e Boleto disponíveis (simulado).
        </div>
        <button type="submit" className="w-full mt-6 flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-bold tracking-widest neon-button-yellow">
          Autorizar Pagamento
        </button>
      </form>
    </div>
  );
};

export default Payment;