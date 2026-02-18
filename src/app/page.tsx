'use client';

import { useEffect, useState } from 'react';
import { subjects } from '@/lib/subjects';
import SubjectCard from '@/components/SubjectCard';
import { QuizResult } from '@/types';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [totalQuizzesTaken, setTotalQuizzesTaken] = useState(0);
  const [averageScore, setAverageScore] = useState(0);
  const [pageLoadTime, setPageLoadTime] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted and page load time on client side only
    setMounted(true);
    const loadTime = new Date().toLocaleTimeString();
    setPageLoadTime(loadTime);
    
    // Log page load in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`%c🏠 Home page loaded at ${loadTime}`, 'color: #10B981; font-weight: bold;');
    }
    
    // Load quiz results from localStorage
    try {
      const savedResults = localStorage.getItem('quizResults');
      if (savedResults) {
        const results: QuizResult[] = JSON.parse(savedResults);
        setQuizResults(results);
        setTotalQuizzesTaken(results.length);
        
        if (results.length > 0) {
          const avg = results.reduce((sum, r) => sum + r.percentage, 0) / results.length;
          setAverageScore(Math.round(avg));
        }
      }
    } catch (error) {
      console.error('Failed to load quiz results from localStorage:', error);
      // Clear corrupted data
      localStorage.removeItem('quizResults');
    }
  }, []);

  const getSubjectBestScore = (subjectId: string) => {
    const subjectResults = quizResults.filter(r => r.subjectId === subjectId);
    if (subjectResults.length === 0) return null;
    return Math.max(...subjectResults.map(r => r.percentage));
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            🎓 Kids Learning Adventure! 🎓
          </h1>
          <p className="text-2xl text-gray-700">
            Choose a subject to start learning and having fun!
          </p>
          {process.env.NODE_ENV === 'development' && mounted && pageLoadTime && (
            <p className="text-xs text-gray-400 mt-2">
              Page loaded: {pageLoadTime}
            </p>
          )}
        </header>

        {/* Quiz Challenge Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link href="/quiz-challenge">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 cursor-pointer text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                  <div className="text-5xl md:text-6xl mb-3">🎮 🏆</div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    NEW! Quiz Challenge Arena
                  </h2>
                  <p className="text-lg md:text-xl opacity-90 mb-2">
                    ✨ 20 Questions per Subject • Interactive Leaderboard • Compete with Friends
                  </p>
                  <p className="text-base md:text-lg opacity-80">
                    Enter your name, choose a subject, and aim for the top score!
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-xl md:text-2xl shadow-lg">
                    Play Now →
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Subject Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>

        {/* Progress Section */}
        <section className="mt-16 bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            🏆 Your Progress 🏆
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-yellow-100 rounded-xl p-6 text-center">
              <p className="text-4xl mb-2">⭐</p>
              <p className="text-2xl font-bold">{averageScore}%</p>
              <p className="text-gray-600">Average Score</p>
            </div>
            <div className="bg-blue-100 rounded-xl p-6 text-center">
              <p className="text-4xl mb-2">🎯</p>
              <p className="text-2xl font-bold">{totalQuizzesTaken}</p>
              <p className="text-gray-600">Quizzes Taken</p>
            </div>
            <div className="bg-green-100 rounded-xl p-6 text-center">
              <p className="text-4xl mb-2">🏅</p>
              <p className="text-2xl font-bold">{quizResults.filter(r => r.percentage >= 80).length}</p>
              <p className="text-gray-600">Top Scores</p>
            </div>
          </div>

          {/* Subject Scores */}
          {quizResults.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-4 text-center">📊 Best Scores by Subject</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {subjects.map((subject) => {
                  const bestScore = getSubjectBestScore(subject.id);
                  if (!bestScore) return null;
                  
                  return (
                    <div key={subject.id} className="bg-gray-50 rounded-xl p-4 text-center">
                      <p className="text-3xl mb-2">{subject.icon}</p>
                      <p className="font-bold text-lg">{subject.name}</p>
                      <p className="text-2xl font-bold text-green-600">{bestScore}%</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {quizResults.length === 0 && (
            <div className="text-center text-gray-500 mt-4">
              <p className="text-lg">Take your first quiz to see your progress here!</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}