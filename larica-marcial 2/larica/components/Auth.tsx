import React, { useState, useEffect } from 'react';

interface AuthProps {
  onRegister: (email: string, fullName: string) => void;
  onLogin: () => void; // Simplified for this example
}

const marketingPoints = [
  "Lutando para bater o peso antes da luta?",
  "Deseja energia explosiva do início ao fim do treino?",
  "Sua recuperação muscular está lenta e prejudicando sua evolução?",
  "Quer uma dieta fácil de seguir e focada nos seus objetivos?",
  "Cansado de treinar duro sem ver os resultados que merece?",
  "Alcance o máximo de força, resistência e técnica.",
];

const Auth: React.FC<AuthProps> = ({ onRegister, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [currentPointIndex, setCurrentPointIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPointIndex(prevIndex => (prevIndex + 1) % marketingPoints.length);
    }, 5000); // Change message every 5 seconds
    return () => clearInterval(interval);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      onLogin();
    } else {
      if(fullName && email) onRegister(email, fullName);
    }
  };

  return (
    <div className="holographic-panel p-8 rounded-lg w-full max-w-md mx-auto animate-fade-in">
      <h1 className="text-2xl font-bold text-center text-yellow-400 mb-2 neon-yellow-text tracking-wider">Larica Marcial</h1>
      <p className="text-center text-cyan-200/80 mb-6 text-sm">Transforme sua dieta em sua arma secreta.</p>
      
      {/* --- Video Presentation Section --- */}
      <div className="mb-6 rounded-lg overflow-hidden border border-cyan-400/20 shadow-lg" style={{boxShadow: '0 0 15px rgba(0, 255, 255, 0.1)'}}>
        <div className="relative h-0" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
          <video className="absolute top-0 left-0 w-full h-full object-cover" controls playsInline>
            <source src="/larica/video" type="video/mp4" />
            <source src="larica/video" type="video/mp4" />
            Seu navegador não suporta vídeo HTML5.
          </video>
        </div>
      </div>
      {/* --- End Video Section --- */}
      
      <div className="flex border-b border-cyan-400/20 mb-6">
        <button onClick={() => setIsLogin(true)} className={`w-1/2 py-3 text-sm font-medium transition-colors duration-300 relative ${isLogin ? 'text-yellow-400' : 'text-cyan-200/70 hover:text-white'}`}>
          ENTRAR
          {isLogin && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400" style={{boxShadow: '0 0 8px #facc15'}}></div>}
        </button>
        <button onClick={() => setIsLogin(false)} className={`w-1/2 py-3 text-sm font-medium transition-colors duration-300 relative ${!isLogin ? 'text-yellow-400' : 'text-cyan-200/70 hover:text-white'}`}>
          CADASTRAR
          {!isLogin && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400" style={{boxShadow: '0 0 8px #facc15'}}></div>}
        </button>
      </div>

      <div className="text-center my-6 h-10 flex items-center justify-center">
        <p key={currentPointIndex} className="text-cyan-100 italic animate-text-fade-in">{marketingPoints[currentPointIndex]}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {!isLogin && (
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-cyan-200/80 tracking-wider">NOME DE COMBATE</label>
            <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} className="form-input-ar mt-1 block w-full rounded-md py-2 px-3 text-white" required={!isLogin} />
          </div>
        )}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-cyan-200/80 tracking-wider">IDENTIFICAÇÃO (EMAIL)</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input-ar mt-1 block w-full rounded-md py-2 px-3 text-white" required />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-cyan-200/80 tracking-wider">SENHA DE ACESSO</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input-ar mt-1 block w-full rounded-md py-2 px-3 text-white" required />
        </div>
        <button type="submit" className="w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-bold tracking-widest neon-button-yellow mt-4">
          {isLogin ? 'CONECTAR' : 'REGISTRAR'}
        </button>
      </form>
    </div>
  );
};

export default Auth;