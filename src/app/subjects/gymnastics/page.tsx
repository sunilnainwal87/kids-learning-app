'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GymnasticsPage() {
  const lessons = [
    { id: 1, title: 'Warm-Up Exercises', difficulty: 'easy', icon: '🏃' },
    { id: 2, title: 'Stretching Fun', difficulty: 'easy', icon: '🧘' },
    { id: 3, title: 'Balance & Coordination', difficulty: 'medium', icon: '⚖️' },
    { id: 4, title: 'Healthy Habits', difficulty: 'easy', icon: '💪' },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link href="/" className="inline-block mb-6">
          <button className="bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
            ← Back to Home
          </button>
        </Link>

        {/* Header */}
        <header className="text-center mb-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl p-12 shadow-2xl">
          <div className="text-8xl mb-4">🤸</div>
          <h1 className="text-5xl font-bold text-white mb-4">Gymnastics Fun!</h1>
          <p className="text-2xl text-white opacity-90">
            Get moving and stay healthy!
          </p>
        </header>

        {/* Quiz Button */}
        <Link href="/subjects/gymnastics/quiz">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-r from-green-400 to-green-600 rounded-2xl shadow-xl p-8 cursor-pointer hover:shadow-2xl transition-all mb-6"
          >
            <div className="flex items-center gap-4 text-white">
              <div className="text-5xl">🎯</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Take Health Quiz</h3>
                <p className="text-lg opacity-90">Test your knowledge with 10 questions!</p>
              </div>
              <div className="text-3xl">▶️</div>
            </div>
          </motion.div>
        </Link>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl">{lesson.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{lesson.title}</h3>
                  <span className={`inline-block px-4 py-1 rounded-full text-sm ${
                    lesson.difficulty === 'easy' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {lesson.difficulty.toUpperCase()}
                  </span>
                </div>
                <div className="text-3xl">▶️</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
