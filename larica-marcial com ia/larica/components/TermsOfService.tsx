import React, { useState } from 'react';
import { TERMS_OF_SERVICE_TITLE, TERMS_OF_SERVICE_TEXT } from '../constants';

const TermsOfService: React.FC<{ onAccept: () => void }> = ({ onAccept }) => {
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <div className="holographic-panel p-8 rounded-lg w-full max-w-3xl mx-auto animate-fade-in">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4 neon-yellow-text tracking-wider">{TERMS_OF_SERVICE_TITLE}</h2>
      <div 
        className="prose prose-invert text-cyan-100/90 max-h-80 overflow-y-auto pr-4 text-sm space-y-4"
        dangerouslySetInnerHTML={{ __html: TERMS_OF_SERVICE_TEXT }}
      />
      <div className="mt-6 flex items-center p-3 rounded-md bg-cyan-900/20">
        <input 
          id="accept-terms" 
          type="checkbox" 
          checked={isAccepted} 
          onChange={(e) => setIsAccepted(e.target.checked)}
          className="h-5 w-5 appearance-none border-2 border-cyan-400 rounded-sm bg-transparent checked:bg-cyan-400 checked:border-transparent focus:outline-none transition-all duration-200"
        />
        <label htmlFor="accept-terms" className="ml-3 block text-sm text-cyan-100">
          Eu li, compreendi e aceito os termos de responsabilidade e a política de uso de dados.
        </label>
      </div>
      <div className="mt-8 text-center">
        <button 
          onClick={onAccept}
          disabled={!isAccepted}
          className="w-full sm:w-auto inline-flex justify-center py-3 px-8 rounded-md shadow-sm text-sm font-bold tracking-widest neon-button-yellow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Aceitar e Continuar
        </button>
      </div>
    </div>
  );
};

export default TermsOfService;