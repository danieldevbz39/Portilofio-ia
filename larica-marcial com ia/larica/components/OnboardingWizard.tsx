import React, { useState } from 'react';
import { NutritionalProfile } from '../types';

interface OnboardingWizardProps {
  onComplete: (profileData: Omit<NutritionalProfile, 'email' | 'fullName'>) => void;
}

const TOTAL_STEPS = 4;

type FormData = Omit<NutritionalProfile, 'email' | 'fullName'>;

const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    age: 0,
    bodyType: 'mesomorfo',
    height: 0,
    currentWeight: 0,
    targetWeight: 0,
    healthHistory: '',
    allergies: '',
    dietaryHabits: '',
    foodPreferences: '',
    supplements: '',
    martialArt: '',
    trainingLevel: 'iniciante',
    trainingSchedule: '',
    goals: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'height' || name === 'currentWeight' || name === 'targetWeight' || name === 'age' ? parseFloat(value) : value }));
  };
  
  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, TOTAL_STEPS));
  const handlePrev = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  const progress = (currentStep / TOTAL_STEPS) * 100;

  return (
    <div className="holographic-panel p-8 rounded-lg w-full max-w-3xl mx-auto animate-fade-in">
        <h2 className="text-2xl font-bold text-yellow-400 mb-2 neon-yellow-text tracking-wider">Triagem Nutricional</h2>
        <p className="text-cyan-200/80 mb-6">Analisando parâmetros para otimização de performance.</p>

        <div className="w-full bg-cyan-900/30 rounded-full h-2.5 mb-8">
            <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out', boxShadow: '0 0 8px rgba(0, 255, 255, 0.7)' }}></div>
        </div>
        
        <form onSubmit={handleSubmit}>
            <div className="min-h-[280px]">
              {currentStep === 1 && <Step1 data={formData} onChange={handleChange} />}
              {currentStep === 2 && <Step2 data={formData} onChange={handleChange} />}
              {currentStep === 3 && <Step3 data={formData} onChange={handleChange} />}
              {currentStep === 4 && <Step4 data={formData} onChange={handleChange} />}
            </div>

            <div className="mt-8 flex justify-between items-center">
                {currentStep > 1 ? (
                    <button type="button" onClick={handlePrev} className="py-2 px-6 rounded-md shadow-sm text-sm font-medium tracking-wider neon-button">
                        &lt;&lt; Voltar
                    </button>
                ) : <div />}
                {currentStep < TOTAL_STEPS ? (
                    <button type="button" onClick={handleNext} className="py-2 px-6 rounded-md shadow-sm text-sm font-bold tracking-wider neon-button-yellow">
                        Próximo &gt;&gt;
                    </button>
                ) : (
                    <button type="submit" className="py-2 px-6 rounded-md shadow-sm text-sm font-bold tracking-wider neon-button-yellow">
                        Finalizar Análise
                    </button>
                )}
            </div>
        </form>
    </div>
  );
};

const FormField: React.FC<{label: string; children: React.ReactNode}> = ({label, children}) => (
    <div>
        <label className="block text-sm font-medium text-cyan-200/80 mb-1 tracking-wider">{label}</label>
        {children}
    </div>
);

const commonInputClasses = "form-input-ar mt-1 block w-full rounded-md py-2 px-3 text-white";


const Step1 = ({ data, onChange }: { data: FormData; onChange: any }) => (
    <div className="space-y-4 animate-fade-in">
        <h3 className="text-lg font-semibold text-white/90">Parâmetros Físicos</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="BIOTIPO">
                <select name="bodyType" value={data.bodyType} onChange={onChange} className={commonInputClasses}>
                    <option value="ectomorfo">Ectomorfo</option>
                    <option value="mesomorfo">Mesomorfo</option>
                    <option value="endomorfo">Endomorfo</option>
                    <option value="outro">Não sei / Outro</option>
                </select>
            </FormField>
            <FormField label="IDADE">
                <input type="number" name="age" value={data.age || ''} onChange={onChange} className={commonInputClasses} placeholder="25" required />
            </FormField>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField label="ALTURA (cm)">
                <input type="number" name="height" value={data.height || ''} onChange={onChange} className={commonInputClasses} placeholder="175" required />
            </FormField>
            <FormField label="PESO ATUAL (kg)">
                <input type="number" name="currentWeight" step="0.1" value={data.currentWeight || ''} onChange={onChange} className={commonInputClasses} placeholder="75.5" required />
            </FormField>
            <FormField label="PESO ALVO (kg)">
                <input type="number" name="targetWeight" step="0.1" value={data.targetWeight || ''} onChange={onChange} className={commonInputClasses} placeholder="72.0" required />
            </FormField>
        </div>
    </div>
);

const Step2 = ({ data, onChange }: { data: FormData; onChange: any }) => (
    <div className="space-y-4 animate-fade-in">
        <h3 className="text-lg font-semibold text-white/90">Histórico de Saúde</h3>
        <FormField label="CONDIÇÕES PRÉ-EXISTENTES">
            <textarea name="healthHistory" value={data.healthHistory} onChange={onChange} rows={4} className={commonInputClasses} placeholder="Ex: Asma, lesão no joelho..."></textarea>
        </FormField>
        <FormField label="ALERGIAS / INTOLERÂNCIAS">
            <textarea name="allergies" value={data.allergies} onChange={onChange} rows={4} className={commonInputClasses} placeholder="Ex: Intolerância à lactose..."></textarea>
        </FormField>
    </div>
);

const Step3 = ({ data, onChange }: { data: FormData; onChange: any }) => (
    <div className="space-y-4 animate-fade-in">
        <h3 className="text-lg font-semibold text-white/90">Hábitos e Preferências</h3>
        <FormField label="HÁBITOS ALIMENTARES">
            <textarea name="dietaryHabits" value={data.dietaryHabits} onChange={onChange} rows={2} className={commonInputClasses} placeholder="Ex: Como 4x ao dia..."></textarea>
        </FormField>
        <FormField label="PREFERÊNCIAS / RESTRIÇÕES">
            <textarea name="foodPreferences" value={data.foodPreferences} onChange={onChange} rows={2} className={commonInputClasses} placeholder="Ex: Não como carne vermelha..."></textarea>
        </FormField>
        <FormField label="SUPLEMENTOS / MEDICAMENTOS">
            <textarea name="supplements" value={data.supplements} onChange={onChange} rows={2} className={commonInputClasses} placeholder="Ex: Whey protein pós-treino..."></textarea>
        </FormField>
    </div>
);

const Step4 = ({ data, onChange }: { data: FormData; onChange: any }) => (
    <div className="space-y-4 animate-fade-in">
        <h3 className="text-lg font-semibold text-white/90">Treino e Objetivos</h3>
        <FormField label="MODALIDADE">
            <input type="text" name="martialArt" value={data.martialArt} onChange={onChange} className={commonInputClasses} placeholder="Ex: Jiu-Jitsu, Muay Thai" required />
        </FormField>
        <FormField label="NÍVEL DE EXPERIÊNCIA">
            <select name="trainingLevel" value={data.trainingLevel} onChange={onChange} className={commonInputClasses}>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
                <option value="competidor">Competidor</option>
            </select>
        </FormField>
        <FormField label="AGENDA DE TREINOS">
            <input type="text" name="trainingSchedule" value={data.trainingSchedule} onChange={onChange} className={commonInputClasses} placeholder="Ex: Seg a Sex, 19h-21h" required />
        </FormField>
        <FormField label="OBJETIVOS PRINCIPAIS">
            <textarea name="goals" value={data.goals} onChange={onChange} rows={3} className={commonInputClasses} placeholder="Ex: Perder peso, ganhar força..." required></textarea>
        </FormField>
    </div>
);

export default OnboardingWizard;
