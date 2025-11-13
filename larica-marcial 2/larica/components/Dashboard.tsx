import React, { useState, useEffect } from 'react';
import { User, LoggedMeal, WeightEntry, ProgressionLevel, AgeGroup, DetailedMealPlan } from '../types';
import { MOTIVATIONAL_MESSAGES, PROGRESSION_LEVEL_INFO, JOKES, DETAILED_MEAL_PLANS } from '../constants';

const getAgeGroup = (age: number): AgeGroup => {
  if (age <= 12) return AgeGroup.CRIANCA;
  if (age <= 19) return AgeGroup.JOVEM;
  return AgeGroup.ADULTO;
};

const getPlanForUser = (user: User): DetailedMealPlan | undefined => {
  const ageGroup = getAgeGroup(user.profile.age);
  return DETAILED_MEAL_PLANS.find(p => p.ageGroup === ageGroup && p.level === user.level);
};

// --- Sub-componente para exibir o Plano Alimentar ---
const MealPlanComponent: React.FC<{ user: User; onBack: () => void; }> = ({ user, onBack }) => {
  const plan = getPlanForUser(user);

  if (!plan) {
    return (
        <div className="holographic-panel p-8 text-center">
            <h2 className="text-2xl text-yellow-400 mb-4">Plano não encontrado</h2>
            <p className="text-cyan-200">Não foi possível encontrar um plano alimentar adequado para seu perfil. Por favor, entre em contato com o suporte.</p>
            <button onClick={onBack} className="mt-6 py-2 px-4 rounded-md text-sm font-medium neon-button">
              &larr; Voltar ao Painel
            </button>
        </div>
    )
  }

  const levelColorClasses: Record<ProgressionLevel, { 
    text: string; 
    border: string; 
    neon: string; 
    containerBorder: string;
  }> = {
    [ProgressionLevel.INICIANTE]: {
      text: 'text-white',
      border: 'border-white/30',
      neon: 'neon-white-text',
      containerBorder: 'border-white/20 hover:border-white/70'
    },
    [ProgressionLevel.INTERMEDIARIO]: {
      text: 'text-blue-400',
      border: 'border-blue-400/30',
      neon: 'neon-blue-text',
      containerBorder: 'border-blue-400/20 hover:border-blue-400/70'
    },
    [ProgressionLevel.AVANCADO]: {
      text: 'text-purple-400',
      border: 'border-purple-400/30',
      neon: 'neon-purple-text',
      containerBorder: 'border-purple-400/20 hover:border-purple-400/70'
    },
    [ProgressionLevel.ELITE]: {
      text: 'text-yellow-400',
      border: 'border-yellow-400/30',
      neon: 'neon-yellow-text',
      containerBorder: 'border-yellow-400/20 hover:border-yellow-400/70'
    }
  };

  const colors = levelColorClasses[user.level];

  return (
    <div className="holographic-panel p-6 md:p-8 rounded-lg w-full max-w-5xl mx-auto animate-fade-in">
      <header className="flex justify-between items-center mb-6 border-b border-cyan-400/20 pb-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 neon-yellow-text">{plan.title}</h1>
          <p className="text-cyan-200/80">Protocolo nutricional para {user.profile.fullName.split(' ')[0]}.</p>
        </div>
        <button onClick={onBack} className="py-2 px-4 rounded-md text-sm font-medium neon-button">
          &larr; Voltar ao Painel
        </button>
      </header>

      <main>
        <div className="bg-cyan-900/20 p-6 rounded-lg mb-6 border border-cyan-400/20">
          <h2 className="text-lg font-semibold text-white mb-3">Princípios Chave</h2>
          <ul className="list-disc list-inside space-y-2 text-cyan-100/90">
            {plan.principles.map((principle, index) => (
              <li key={index}>{principle}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
            <h2 className="text-xl font-semibold text-white">Sugestões de Refeições</h2>
            {plan.meals.map((meal, mealIndex) => (
                <div key={mealIndex}>
                    <h3 className={`font-bold ${colors.text} mb-4 text-lg border-b-2 ${colors.border} pb-2 ${colors.neon}`}>{meal.name}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {meal.options.map((option, optionIndex) => (
                             <div key={optionIndex} className={`bg-gray-900/40 rounded-lg overflow-hidden flex flex-col border ${colors.containerBorder} hover:bg-cyan-900/30 transition-all duration-300 transform hover:scale-105`}>
                                <div className="flex items-center gap-4 p-4">
                                  <img 
                                      src={option.imageUrl} 
                                      alt={option.description} 
                                      className="w-24 h-24 object-cover rounded-md flex-shrink-0 border-2 border-gray-600"
                                      style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }}
                                  />
                                  <p className="text-cyan-100/90 text-sm flex-grow">{option.description}</p>
                                </div>
                                {option.notes && (
                                  <div className="bg-yellow-900/30 text-yellow-200/80 text-xs p-2 mt-auto">
                                      <strong>Nota do Nutri:</strong> {option.notes}
                                  </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        
        <div className="text-center mt-8 text-xs text-cyan-300/50 p-4 border-t border-cyan-400/20">
            <p><strong>AVISO DE PROTOCOLO:</strong> Este é um plano alimentar sugestivo e educacional. Para um plano personalizado e seguro, consulte um nutricionista registrado. As necessidades individuais podem variar.</p>
        </div>
      </main>
    </div>
  );
};


// --- Sub-componente para o Gráfico de Progresso ---
const WeightProgressChart: React.FC<{ data: WeightEntry[] }> = ({ data }) => {
    if (data.length < 2) {
        return <div className="text-center text-cyan-300/70 text-sm">Dados insuficientes para exibir o gráfico. Registre pelo menos dois pesos.</div>;
    }

    const width = 300, height = 150, padding = 30;
    const weights = data.map(d => d.weight);
    const minWeight = Math.min(...weights) - 2;
    const maxWeight = Math.max(...weights) + 2;

    const getX = (index: number) => padding + (index / (data.length - 1)) * (width - padding * 2);
    const getY = (weight: number) => height - padding - ((weight - minWeight) / (maxWeight - minWeight)) * (height - padding * 2);
    
    const path = data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.weight)}`).join(' ');

    return (
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
            <defs>
                <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#facc15" />
                    <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            {/* Grid lines */}
            <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="rgba(0, 255, 255, 0.1)" />
            <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="rgba(0, 255, 255, 0.1)" />

            {/* Path */}
            <path d={path} fill="none" stroke="url(#lineGradient)" strokeWidth="2" filter="url(#glow)" />

            {/* Data points */}
            {data.map((d, i) => (
                <circle key={i} cx={getX(i)} cy={getY(d.weight)} r="3" fill="#facc15" stroke="#0a0a1a" strokeWidth="1" />
            ))}
            
            {/* Labels */}
            <text x={padding} y={height - padding + 15} fontSize="8" fill="rgba(0, 255, 255, 0.7)">{data[0].date}</text>
            <text x={width - padding} y={height - padding + 15} fontSize="8" fill="rgba(0, 255, 255, 0.7)" textAnchor="end">{data[data.length-1].date}</text>
            <text x={padding - 5} y={padding} fontSize="8" fill="rgba(250, 204, 21, 0.7)" textAnchor="end">{maxWeight.toFixed(1)}kg</text>
            <text x={padding - 5} y={height - padding} fontSize="8" fill="rgba(250, 204, 21, 0.7)" textAnchor="end">{minWeight.toFixed(1)}kg</text>
        </svg>
    );
};

// --- Sub-componente para a Lista de Refeições ---
const LoggedMealsList: React.FC<{ meals: LoggedMeal[] }> = ({ meals }) => {
    const todayMeals = meals.filter(m => new Date(m.timestamp).toDateString() === new Date().toDateString());

    if (todayMeals.length === 0) {
        return <div className="text-center text-cyan-300/70 text-sm">Nenhuma refeição registrada hoje.</div>;
    }

    return (
        <ul className="space-y-3 max-h-64 overflow-y-auto pr-2">
            {todayMeals.map(meal => (
                <li key={meal.id} className="text-sm p-3 rounded-md bg-cyan-900/20 border-l-2 border-cyan-400">
                    <div className="font-bold text-white">{meal.name} <span className="text-xs font-normal text-cyan-300/60 ml-2">{new Date(meal.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span></div>
                    <p className="text-cyan-100/80">{meal.description}</p>
                </li>
            ))}
        </ul>
    );
};

// --- Modais de Registro ---
const LogMealModal: React.FC<{ onSave: (meal: LoggedMeal) => void; onDismiss: () => void; }> = ({ onSave, onDismiss }) => {
    const [name, setName] = useState<'Café da Manhã' | 'Almoço' | 'Jantar' | 'Lanche'>('Almoço');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!description.trim()) return;
        onSave({ id: new Date().toISOString(), name, description, timestamp: new Date() });
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fade-in">
            <div className="holographic-panel p-8 rounded-lg w-full max-w-md mx-4">
                <h2 className="text-xl font-bold text-yellow-400 mb-4 neon-yellow-text">Registrar Refeição</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-cyan-200/80 tracking-wider">Tipo de Refeição</label>
                        <select value={name} onChange={(e) => setName(e.target.value as any)} className="form-input-ar mt-1 block w-full rounded-md py-2 px-3 text-white">
                            <option>Café da Manhã</option>
                            <option>Almoço</option>
                            <option>Jantar</option>
                            <option>Lanche</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-cyan-200/80 tracking-wider">Descrição</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="form-input-ar mt-1 block w-full rounded-md py-2 px-3 text-white" placeholder="Ex: 150g de frango, 100g de arroz integral..." required />
                    </div>
                    <div className="flex justify-end gap-4 pt-4">
                        <button type="button" onClick={onDismiss} className="py-2 px-4 rounded-md text-sm font-medium neon-button">Cancelar</button>
                        <button type="submit" className="py-2 px-4 rounded-md text-sm font-bold neon-button-yellow">Salvar Registro</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const LogWeightModal: React.FC<{ onSave: (entry: WeightEntry) => void; onDismiss: () => void; }> = ({ onSave, onDismiss }) => {
    const [weight, setWeight] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const weightValue = parseFloat(weight);
        if (isNaN(weightValue) || weightValue <= 0) return;
        onSave({ date: new Date().toISOString().split('T')[0], weight: weightValue });
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fade-in">
            <div className="holographic-panel p-8 rounded-lg w-full max-w-sm mx-4">
                <h2 className="text-xl font-bold text-yellow-400 mb-4 neon-yellow-text">Registrar Peso</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-cyan-200/80 tracking-wider">Peso Atual (kg)</label>
                        <input type="number" step="0.1" value={weight} onChange={e => setWeight(e.target.value)} className="form-input-ar mt-1 block w-full rounded-md py-2 px-3 text-white" placeholder="Ex: 75.5" required />
                    </div>
                    <div className="flex justify-end gap-4 pt-4">
                        <button type="button" onClick={onDismiss} className="py-2 px-4 rounded-md text-sm font-medium neon-button">Cancelar</button>
                        <button type="submit" className="py-2 px-4 rounded-md text-sm font-bold neon-button-yellow">Salvar Registro</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


interface DashboardProps {
  user: User;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [dailyQuote, setDailyQuote] = useState<string>('');
  const [animationClass, setAnimationClass] = useState('animate-glitch-in');
  const [showMealPlan, setShowMealPlan] = useState(false);
  const [showLogMealModal, setShowLogMealModal] = useState(false);
  const [showLogWeightModal, setShowLogWeightModal] = useState(false);
  
  const [loggedMeals, setLoggedMeals] = useState<LoggedMeal[]>(user.loggedMeals || []);
  const [weightHistory, setWeightHistory] = useState<WeightEntry[]>(user.weightHistory || []);
  
  useEffect(() => {
    const allQuotes = [...MOTIVATIONAL_MESSAGES[user.level], ...JOKES];
    const selectNewQuote = () => allQuotes[Math.floor(Math.random() * allQuotes.length)];
    setDailyQuote(selectNewQuote());

    const quoteInterval = setInterval(() => {
      setAnimationClass('animate-glitch-out');
      setTimeout(() => {
        setDailyQuote(selectNewQuote());
        setAnimationClass('animate-glitch-in');
      }, 500);
    }, 10500);

    return () => clearInterval(quoteInterval);
  }, [user.level]);

  const handleLogMeal = (meal: LoggedMeal) => {
    setLoggedMeals(prev => [...prev, meal].sort((a,b) => b.timestamp.getTime() - a.timestamp.getTime()));
    setShowLogMealModal(false);
  };

  const handleLogWeight = (entry: WeightEntry) => {
    setWeightHistory(prev => [...prev.filter(e => e.date !== entry.date), entry].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
    setShowLogWeightModal(false);
  };

  const levelInfo = PROGRESSION_LEVEL_INFO[user.level];

  if (showMealPlan) {
    return <MealPlanComponent user={user} onBack={() => setShowMealPlan(false)} />;
  }

  return (
    <>
      <div className="holographic-panel p-6 md:p-8 rounded-lg w-full max-w-5xl mx-auto animate-fade-in">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Olá, {user.profile.fullName.split(' ')[0]}!</h1>
            <p className="text-cyan-200/80">Painel de Controle Larica Marcial Ativo.</p>
          </div>
          <button onClick={onLogout} className="py-2 px-4 rounded-md text-sm font-medium neon-button">
            Desconectar
          </button>
        </header>
        
        {dailyQuote && (
          <div className="text-center p-4 rounded-lg mb-6 h-12 flex items-center justify-center">
              <style>{`
                  @keyframes glitchIn { 0% { opacity: 0; text-shadow: -2px 0 red, 2px 0 blue; transform: skewX(-20deg); } 80% { opacity: 1; text-shadow: none; transform: skewX(0deg); } 100% { opacity: 1; } }
                  @keyframes glitchOut { 0% { opacity: 1; } 20% { opacity: 1; text-shadow: -2px 0 red, 2px 0 blue; transform: skewX(10deg); } 100% { opacity: 0; transform: skewX(-20deg); } }
                  .animate-glitch-in { animation: glitchIn 0.5s ease-out forwards; }
                  .animate-glitch-out { animation: glitchOut 0.5s ease-in forwards; }
              `}</style>
              <p className={`text-lg italic text-cyan-100 ${animationClass} neon-cyan-text`}>"{dailyQuote}"</p>
          </div>
        )}

        <main>
          <div className="bg-cyan-900/20 p-6 rounded-lg mb-6 flex flex-col md:flex-row items-center gap-6 border border-cyan-400/20">
              <div className="relative w-28 h-28 flex-shrink-0">
                 <div className="absolute inset-0 bg-yellow-400" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: '0 0 15px rgba(250, 204, 21, 0.7)'}}></div>
                 <img src={levelInfo.personaImageUrl} alt={levelInfo.personaName} className="relative w-full h-full object-cover" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}} />
              </div>
              <div>
                  <h2 className="text-lg font-semibold text-yellow-400 mb-1 neon-yellow-text">{levelInfo.name}</h2>
                  <p className="text-sm text-cyan-200/80 mb-2"><em>Sensei: {levelInfo.personaName}</em></p>
                  <p className="text-cyan-100/90">{levelInfo.description}</p>
              </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3 space-y-6">
                  <div className="bg-gray-900/40 p-6 rounded-lg border border-cyan-400/20">
                    <h3 className="font-semibold text-white mb-4">Progresso de Peso</h3>
                    <WeightProgressChart data={weightHistory} />
                  </div>
                  <div className="bg-gray-900/40 p-6 rounded-lg border border-cyan-400/20">
                    <h3 className="font-semibold text-white mb-3">Resumo de Dados</h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-cyan-100/90">
                        <li><strong>Idade:</strong> {user.profile.age} anos</li>
                        <li><strong>Peso Alvo:</strong> {user.profile.targetWeight} kg</li>
                        <li><strong>Modalidade:</strong> {user.profile.martialArt}</li>
                        <li><strong>Nível:</strong> <span className="capitalize">{user.profile.trainingLevel}</span></li>
                    </ul>
                  </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                 <div className="bg-gray-900/40 p-6 rounded-lg border border-cyan-400/20">
                    <h3 className="font-semibold text-white mb-4">Ações Rápidas</h3>
                    <div className="flex flex-col space-y-3">
                        <button onClick={() => setShowLogMealModal(true)} className="w-full text-center py-2 px-4 rounded-md text-sm font-medium neon-button">Registrar Refeição</button>
                        <button onClick={() => setShowLogWeightModal(true)} className="w-full text-center py-2 px-4 rounded-md text-sm font-medium neon-button">Registrar Peso</button>
                    </div>
                 </div>
                 <div className="bg-gray-900/40 p-6 rounded-lg border border-cyan-400/20">
                    <h3 className="font-semibold text-white mb-4">Refeições de Hoje</h3>
                    <LoggedMealsList meals={loggedMeals} />
                 </div>
              </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-cyan-400/10">
              <button onClick={() => setShowMealPlan(true)} className="py-3 px-8 text-gray-900 font-bold rounded-lg shadow-lg bg-yellow-400 hover:bg-yellow-300 transition-all transform hover:scale-105" style={{boxShadow: '0 0 20px rgba(250, 204, 21, 0.6)'}}>
                  Ver Plano Alimentar Completo
              </button>
          </div>
        </main>
      </div>

      {showLogMealModal && <LogMealModal onSave={handleLogMeal} onDismiss={() => setShowLogMealModal(false)} />}
      {showLogWeightModal && <LogWeightModal onSave={handleLogWeight} onDismiss={() => setShowLogWeightModal(false)} />}
    </>
  );
};

export default Dashboard;