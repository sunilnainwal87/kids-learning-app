export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  bgGradient: string;
}

export interface Lesson {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  completed: boolean;
}

export interface UserProgress {
  subjectId: string;
  lessonsCompleted: number;
  totalLessons: number;
  points: number;
  badges: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
  explanation?: string;
}

export interface Quiz {
  subjectId: string;
  title: string;
  questions: QuizQuestion[];
}

export interface QuizResult {
  subjectId: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  incorrectQuestions: number[];
  date: string;
}

export interface LeaderboardEntry {
  playerName: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  subjectId: string;
  date: string;
  timeTaken?: number; // in seconds
}