'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LeaderboardEntry } from '@/types';
import { challengeQuizzes } from '@/lib/challengeQuizzes';
import UserNameInput from '@/components/UserNameInput';
import ChallengeQuizComponent from '@/components/ChallengeQuizComponent';
import Leaderboard from '@/components/Leaderboard';

export default function QuizChallengePage() {
  const [playerName, setPlayerName] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [result, setResult] = useState<LeaderboardEntry | null>(null);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const subjects = [
    { id: 'math', name: 'Math', icon: '🔢', color: 'from-blue-400 to-blue-600' },
    { id: 'science', name: 'Science', icon: '🔬', color: 'from-green-400 to-green-600' },
    { id: 'geography', name: 'Geography', icon: '🌍', color: 'from-teal-400 to-teal-600' },
    { id: 'english', name: 'English', icon: '📚', color: 'from-red-400 to-red-600' },
  ];

  const handleNameSubmit = (name: string) => {
    setPlayerName(name);
  };

  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setQuizStarted(true);
  };

  const handleQuizComplete = (quizResult: LeaderboardEntry) => {
    setResult(quizResult);
  };

  const handlePlayAgain = () => {
    setResult(null);
    setQuizStarted(false);
    setSelectedSubject(null);
  };

  const handleNewPlayer = () => {
    setPlayerName(null);
    setResult(null);
    setQuizStarted(false);
    setSelectedSubject(null);
    setShowLeaderboard(false);
  };

  // Show name input if no player name
  if (!playerName) {
    return <UserNameInput onSubmit={handleNameSubmit} />;
  }

  // Show results and leaderboard
  if (result) {
    const subject = subjects.find(s => s.id === result.subjectId);
    
    return (
      <div className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-4">
              <button className="bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
                ← Back to Home
              </button>
            </Link>
          </div>

          {/* Results */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8 text-center"
          >
            <div className="text-7xl md:text-8xl mb-6">{subject?.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Great Job, {playerName}!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">{subject?.name} Challenge Complete</p>

            {/* Score Circle */}
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-br ${subject?.color} flex flex-col items-center justify-center shadow-2xl mb-8`}
            >
              <div className="text-white">
                <p className="text-5xl md:text-7xl font-bold mb-2">{result.percentage}%</p>
                <p className="text-xl md:text-2xl">
                  {result.score}/{result.totalQuestions}
                </p>
              </div>
            </motion.div>

            {/* Time */}
            {result.timeTaken && (
              <p className="text-lg text-gray-600 mb-4">
                ⏱️ Time: {Math.floor(result.timeTaken / 60)}:{(result.timeTaken % 60).toString().padStart(2, '0')}
              </p>
            )}

            {/* Performance Message */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <p className="text-2xl md:text-3xl font-bold mb-2">
                {result.percentage >= 90 ? '🌟 Outstanding!' : 
                 result.percentage >= 80 ? '🎉 Excellent!' :
                 result.percentage >= 70 ? '👏 Great Job!' :
                 result.percentage >= 60 ? '💪 Good Effort!' : 
                 '📚 Keep Practicing!'}
              </p>
              <p className="text-lg text-gray-700">
                {result.percentage >= 90 ? "You're a superstar!" : 
                 result.percentage >= 80 ? 'Fantastic work!' :
                 result.percentage >= 70 ? 'Well done!' :
                 result.percentage >= 60 ? 'Nice try!' : 
                 "Don't give up!"}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <button
                onClick={handlePlayAgain}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg md:text-xl font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                🔄 Play Again
              </button>
              <button
                onClick={() => setShowLeaderboard(!showLeaderboard)}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-lg md:text-xl font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                {showLeaderboard ? '📊 Hide Leaderboard' : '🏆 Show Leaderboard'}
              </button>
              <button
                onClick={handleNewPlayer}
                className="flex-1 bg-gray-200 text-gray-800 text-lg md:text-xl font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                👤 New Player
              </button>
            </div>
          </motion.div>

          {/* Leaderboard */}
          {showLeaderboard && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Leaderboard currentEntry={result} />
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  // Show quiz
  if (quizStarted && selectedSubject) {
    const quiz = challengeQuizzes.find(q => q.subjectId === selectedSubject);
    const subject = subjects.find(s => s.id === selectedSubject);
    
    if (!quiz) return null;

    return (
      <div className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => {
              setQuizStarted(false);
              setSelectedSubject(null);
            }}
            className="mb-6 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            ← Back
          </button>

          <div className={`bg-gradient-to-br ${subject?.color} rounded-3xl p-6 md:p-8 shadow-2xl text-white text-center mb-8`}>
            <div className="text-6xl md:text-8xl mb-4">{subject?.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold">{subject?.name} Challenge</h1>
            <p className="text-lg md:text-xl mt-2">{quiz.questions.length} Questions</p>
          </div>

          <ChallengeQuizComponent
            questions={quiz.questions}
            subjectId={selectedSubject}
            playerName={playerName}
            onComplete={handleQuizComplete}
          />
        </div>
      </div>
    );
  }

  // Show subject selection
  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-6">
            <button className="bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
              ← Back to Home
            </button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-6xl md:text-7xl mb-4">🎮</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Quiz Challenge Arena
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-2">
              Welcome, <span className="font-bold text-purple-600">{playerName}</span>!
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Choose your subject and compete for the top spot! 🏆
            </p>
          </motion.div>
        </div>

        {/* Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {subjects.map((subject, index) => (
            <motion.button
              key={subject.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleSubjectSelect(subject.id)}
              className={`bg-gradient-to-br ${subject.color} rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 text-white text-left`}
            >
              <div className="text-6xl md:text-7xl mb-4">{subject.icon}</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{subject.name}</h2>
              <p className="text-lg md:text-xl opacity-90">
                20 Questions • Challenge Mode
              </p>
              <div className="mt-6 text-xl font-semibold">
                🚀 Start Challenge →
              </div>
            </motion.button>
          ))}
        </div>

        {/* Leaderboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Leaderboard />
        </motion.div>

        {/* Change Player */}
        <div className="text-center mt-8">
          <button
            onClick={handleNewPlayer}
            className="bg-white text-gray-700 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            👤 Change Player
          </button>
        </div>
      </div>
    </div>
  );
}
