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