import React, { useState, useCallback } from 'react';
import { AppState, NutritionalProfile, User, ProgressionLevel } from './types';
import Auth from './components/Auth';
import TermsOfService from './components/TermsOfService';
import OnboardingWizard from './components/OnboardingWizard';
import Payment from './components/Payment';
import Dashboard from './components/Dashboard';

export default function App() {
  const [appState, setAppState] = useState<AppState>(AppState.AUTH);
  const [user, setUser] = useState<User | null>(null);

  const handleRegister = useCallback((email: string, fullName: string) => {
    // In a real app, this would be a user object from the backend
    const partialProfile: Partial<NutritionalProfile> = { email, fullName };
    setUser({
      id: 'temp-id',
      profile: partialProfile as NutritionalProfile, // Will be completed in onboarding
      level: ProgressionLevel.INICIANTE,
      paymentPlan: null,
    });
    setAppState(AppState.TERMS);
  }, []);

  const handleLogin = useCallback(() => {
    // Mock login - fetch user data and go to dashboard
    setUser({
      id: 'mock-user-123',
      profile: {
        fullName: 'Atleta Exemplo',
        email: 'atleta@exemplo.com',
        age: 32,
        bodyType: 'mesomorfo',
        height: 180,
        currentWeight: 80,
        targetWeight: 78,
        healthHistory: 'Nenhuma condição pré-existente.',
        allergies: 'Nenhuma',
        dietaryHabits: '5 refeições por dia.',
        foodPreferences: 'Prefere fontes de proteína magra.',
        supplements: 'Whey Protein e Creatina.',
        martialArt: 'Jiu-Jitsu',
        trainingLevel: 'avancado',
        trainingSchedule: '5 vezes por semana, à noite.',
        goals: 'Melhorar recuperação e performance em campeonatos.',
      },
      level: ProgressionLevel.AVANCADO,
      paymentPlan: 'mensal',
      loggedMeals: [
          { id: '1', name: 'Café da Manhã', description: 'Ovos mexidos com queijo e uma fatia de pão integral.', timestamp: new Date(new Date().setHours(8, 0, 0)) }
      ],
      weightHistory: [
          { date: '2024-07-01', weight: 80.5 },
          { date: '2024-07-08', weight: 80.2 },
          { date: '2024-07-15', weight: 79.8 },
          { date: '2024-07-22', weight: 79.9 },
      ]
    });
    setAppState(AppState.DASHBOARD);
  }, []);

  const handleAcceptTerms = useCallback(() => {
    setAppState(AppState.ONBOARDING);
  }, []);

  const handleOnboardingComplete = useCallback((profileData: Omit<NutritionalProfile, 'email' | 'fullName'>) => {
    if (user) {
      setUser(prevUser => ({
        ...prevUser!,
        profile: {
            ...prevUser!.profile,
            ...profileData
        }
      }));
      setAppState(AppState.PAYMENT);
    }
  }, [user]);
  
  const handlePaymentComplete = useCallback((plan: 'mensal' | 'anual') => {
    if(user){
      setUser(prevUser => ({
        ...prevUser!,
        paymentPlan: plan
      }));
      setAppState(AppState.DASHBOARD);
    }
  }, [user]);

  const handleLogout = useCallback(() => {
    setUser(null);
    setAppState(AppState.AUTH);
  }, []);

  const renderContent = () => {
    switch (appState) {
      case AppState.AUTH:
        return <Auth onRegister={handleRegister} onLogin={handleLogin} />;
      case AppState.TERMS:
        return <TermsOfService onAccept={handleAcceptTerms} />;
      case AppState.ONBOARDING:
        return <OnboardingWizard onComplete={handleOnboardingComplete} />;
      case AppState.PAYMENT:
        return <Payment onComplete={handlePaymentComplete} />;
      case AppState.DASHBOARD:
        return user ? <Dashboard user={user} onLogout={handleLogout} /> : <Auth onRegister={handleRegister} onLogin={handleLogin} />;
      default:
        return <Auth onRegister={handleRegister} onLogin={handleLogin} />;
    }
  };

  return (
    <div className="text-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-5xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
}
