export enum AppState {
  AUTH,
  TERMS,
  ONBOARDING,
  PAYMENT,
  DASHBOARD,
}

export enum ProgressionLevel {
  INICIANTE = 1,
  INTERMEDIARIO = 2,
  AVANCADO = 3,
  ELITE = 4,
}

export enum AgeGroup {
  CRIANCA = 'Criança',
  JOVEM = 'Jovem',
  ADULTO = 'Adulto',
}

export interface ProgressionLevelDetails {
  name: string;
  description: string;
  personaName: string;
  personaImageUrl: string;
}

export interface NutritionalProfile {
  fullName: string;
  email: string;
  age: number;
  bodyType: 'ectomorfo' | 'mesomorfo' | 'endomorfo' | 'outro';
  height: number;
  currentWeight: number;
  targetWeight: number;
  healthHistory: string;
  allergies: string;
  dietaryHabits: string;
  foodPreferences: string;
  supplements: string;
  martialArt: string;
  trainingLevel: 'iniciante' | 'intermediario' | 'avancado' | 'competidor';
  trainingSchedule: string;
  goals: string;
}

export interface LoggedMeal {
  id: string;
  name: 'Café da Manhã' | 'Almoço' | 'Jantar' | 'Lanche';
  description: string;
  timestamp: Date;
}

export interface WeightEntry {
  date: string; // YYYY-MM-DD
  weight: number;
}

export interface User {
  id: string;
  profile: NutritionalProfile;
  level: ProgressionLevel;
  paymentPlan: 'mensal' | 'anual' | null;
  loggedMeals?: LoggedMeal[];
  weightHistory?: WeightEntry[];
}

export interface MealOption {
  description: string;
  imageUrl: string;
  notes?: string;
}

export interface Meal {
  name: string;
  options: MealOption[];
}

export interface DetailedMealPlan {
  ageGroup: AgeGroup;
  level: ProgressionLevel;
  title: string;
  principles: string[];
  meals: Meal[];
}
