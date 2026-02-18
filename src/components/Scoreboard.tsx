'use client';

import { QuizResult } from '@/types';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ScoreboardProps {
  result: QuizResult;
  subjectName: string;
  subjectIcon: string;
  onRetry: () => void;
}

export default function Scoreboard({ result, subjectName, subjectIcon, onRetry }: ScoreboardProps) {
  const { score, totalQuestions, percentage } = result;
  
  const getGrade = (percentage: number) => {
    if (percentage >= 90) return { grade: 'A+', message: 'Outstanding! 🌟', color: 'from-yellow-400 to-yellow-600' };
    if (percentage >= 80) return { grade: 'A', message: 'Excellent Work! 🎉', color: 'from-green-400 to-green-600' };
    if (percentage >= 70) return { grade: 'B', message: 'Great Job! 👏', color: 'from-blue-400 to-blue-600' };
    if (percentage >= 60) return { grade: 'C', message: 'Good Effort! 💪', color: 'from-purple-400 to-purple-600' };
    return { grade: 'D', message: 'Keep Practicing! 📚', color: 'from-orange-400 to-orange-600' };
  };

  const gradeInfo = getGrade(percentage);

  const getEncouragement = (percentage: number) => {
    if (percentage >= 90) return "You're a superstar! Keep up the amazing work!";
    if (percentage >= 80) return "Fantastic job! You really know your stuff!";
    if (percentage >= 70) return "Well done! With a bit more practice, you'll be perfect!";
    if (percentage >= 60) return "Nice try! Review the questions you missed and try again!";
    return "Don't give up! Practice makes perfect. You can do it!";
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Score Card */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="bg-white rounded-3xl shadow-2xl p-12 mb-8 text-center"
      >
        <div className="text-8xl mb-6">{subjectIcon}</div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Quiz Complete!
        </h1>
        <p className="text-2xl text-gray-600 mb-8">{subjectName}</p>

        {/* Grade Circle */}
        <motion.div
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className={`w-64 h-64 mx-auto rounded-full bg-gradient-to-br ${gradeInfo.color} flex flex-col items-center justify-center shadow-2xl mb-8`}
        >
          <div className="text-white">
            <p className="text-7xl font-bold mb-2">{percentage}%</p>
            <p className="text-3xl font-bold">{gradeInfo.grade}</p>
          </div>
        </motion.div>

        {/* Score Details */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-3xl font-bold mb-4">{gradeInfo.message}</p>
          <p className="text-xl text-gray-700 mb-4">
            You got <span className="font-bold text-green-600">{score}</span> out of{' '}
            <span className="font-bold">{totalQuestions}</span> questions correct!
          </p>
          <p className="text-lg text-gray-600 italic">{getEncouragement(percentage)}</p>
        </motion.div>
      </motion.div>

      {/* Performance Breakdown */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        <div className="bg-green-100 rounded-2xl p-6 text-center">
          <div className="text-5xl mb-3">✓</div>
          <p className="text-3xl font-bold text-green-700">{score}</p>
          <p className="text-gray-700">Correct</p>
        </div>
        <div className="bg-red-100 rounded-2xl p-6 text-center">
          <div className="text-5xl mb-3">✗</div>
          <p className="text-3xl font-bold text-red-700">{totalQuestions - score}</p>
          <p className="text-gray-700">Incorrect</p>
        </div>
        <div className="bg-blue-100 rounded-2xl p-6 text-center">
          <div className="text-5xl mb-3">🎯</div>
          <p className="text-3xl font-bold text-blue-700">{percentage}%</p>
          <p className="text-gray-700">Accuracy</p>
        </div>
      </motion.div>

      {/* Areas to Improve */}
      {result.incorrectQuestions.length > 0 && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-orange-50 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold mb-4 text-orange-800">
            📝 Areas to Improve
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            You missed {result.incorrectQuestions.length} question{result.incorrectQuestions.length !== 1 ? 's' : ''}. 
            Review these topics:
          </p>
          <div className="bg-white rounded-xl p-4">
            <p className="text-gray-700">
              Questions: {result.incorrectQuestions.map(i => `#${i + 1}`).join(', ')}
            </p>
            <p className="text-sm text-gray-600 mt-2 italic">
              💡 Tip: Try the quiz again to improve your score!
            </p>
          </div>
        </motion.div>
      )}

      {/* Action Buttons */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="flex gap-4"
      >
        <button
          onClick={onRetry}
          className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
        >
          🔄 Try Again
        </button>
        <Link href="/" className="flex-1">
          <button className="w-full bg-gray-200 text-gray-800 text-xl font-bold py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
            🏠 Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
