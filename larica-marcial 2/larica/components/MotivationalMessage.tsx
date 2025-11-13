import React, { useEffect } from 'react';

interface MotivationalMessageProps {
  message: string;
  onDismiss: () => void;
}

const MotivationalMessage: React.FC<MotivationalMessageProps> = ({ message, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 50000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div 
      className="fixed bottom-5 right-5 holographic-panel border-l-4 border-yellow-400 text-white p-4 rounded-lg shadow-lg flex items-center space-x-4 max-w-sm"
      style={{ animation: 'slideInUp 0.5s ease-out forwards', boxShadow: '0 0 15px rgba(250, 204, 21, 0.3)' }}
    >
      <style>{`
        @keyframes slideInUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      <div className="flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div className="flex-grow">
        <p className="text-sm font-semibold neon-yellow-text">Mensagem do Sensei</p>
        <p className="text-xs text-cyan-200/80">{message}</p>
      </div>
       <button onClick={onDismiss} className="text-cyan-200/50 hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default MotivationalMessage;