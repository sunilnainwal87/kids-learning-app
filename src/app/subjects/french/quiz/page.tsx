'use client';

import { useState } from 'react';
import Link from 'next/link';
import QuizComponent from '@/components/QuizComponent';
import Scoreboard from '@/components/Scoreboard';
import { QuizResult } from '@/types';
import { quizzes } from '@/lib/quizzes';
import { motion } from 'framer-motion';

export default function FrenchQuizPage() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  const quiz = quizzes.find(q => q.subjectId === 'french')!;

  const handleQuizComplete = (quizResult: QuizResult) => {
    setResult(quizResult);
  };

  const handleRetry = () => {
    setResult(null);
    setQuizStarted(false);
  };

  if (result) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-5xl mx-auto">
          <Scoreboard
            result={result}
            subjectName="French"
            subjectIcon="🇫🇷"
            onRetry={handleRetry}
          />
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/subjects/french" className="inline-block mb-6">
            <button className="bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
              ← Back to French
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl p-12 shadow-2xl text-white text-center mb-8"
          >
            <div className="text-8xl mb-6">🇫🇷</div>
            <h1 className="text-5xl font-bold mb-4">French Quiz</h1>
            <p className="text-2xl mb-2">Ready to test your French knowledge?</p>
            <p className="text-xl opacity-90">You&apos;ll have {quiz.questions.length} questions to answer!</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl mb-6"
          >
            <h2 className="text-2xl font-bold mb-4">📋 Quiz Instructions:</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span>Read each question carefully</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span>Choose the best answer from the options</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span>You&apos;ll see the correct answer after each question</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span>Try to get as many correct as possible!</span>
              </li>
            </ul>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => setQuizStarted(true)}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-3xl font-bold py-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            🚀 Start Quiz
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <Link href="/subjects/french" className="inline-block mb-6">
          <button className="bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
            ← Back to French
          </button>
        </Link>

        <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl p-8 shadow-2xl text-white text-center mb-8">
          <h1 className="text-4xl font-bold">🇫🇷 French Quiz</h1>
        </div>

        <QuizComponent
          questions={quiz.questions}
          subjectId="french"
          onComplete={handleQuizComplete}
        />
      </div>
    </div>
  );
}
