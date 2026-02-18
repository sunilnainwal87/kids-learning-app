'use client';

import { LeaderboardEntry } from '@/types';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LeaderboardProps {
  currentEntry?: LeaderboardEntry;
}

export default function Leaderboard({ currentEntry }: LeaderboardProps) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    // Load leaderboard from localStorage
    try {
      const savedLeaderboard = localStorage.getItem('quizLeaderboard');
      if (savedLeaderboard) {
        const allEntries: LeaderboardEntry[] = JSON.parse(savedLeaderboard);
        setEntries(allEntries);
      }
    } catch (error) {
      console.error('Failed to load leaderboard:', error);
    }
  }, [currentEntry]);

  const getFilteredEntries = () => {
    let filtered = entries;
    
    if (filter !== 'all') {
      filtered = entries.filter(e => e.subjectId === filter);
    }
    
    // Sort by percentage (desc), then by score (desc)
    return filtered
      .sort((a, b) => {
        if (b.percentage !== a.percentage) {
          return b.percentage - a.percentage;
        }
        return b.score - a.score;
      })
      .slice(0, 10); // Top 10
  };

  const filteredEntries = getFilteredEntries();

  const getMedalEmoji = (index: number) => {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return `${index + 1}`;
  };

  const getSubjectIcon = (subjectId: string) => {
    const icons: { [key: string]: string } = {
      math: '🔢',
      science: '🔬',
      geography: '🌍',
      english: '📚'
    };
    return icons[subjectId] || '📖';
  };

  const getSubjectName = (subjectId: string) => {
    const names: { [key: string]: string } = {
      math: 'Math',
      science: 'Science',
      geography: 'Geography',
      english: 'English'
    };
    return names[subjectId] || subjectId;
  };

  const isCurrentPlayer = (entry: LeaderboardEntry) => {
    if (!currentEntry) return false;
    return entry.playerName === currentEntry.playerName && 
           entry.date === currentEntry.date;
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
          🏆 Leaderboard 🏆
        </h2>
        <p className="text-gray-600 text-lg">Top Players Hall of Fame</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full font-semibold transition-all ${
            filter === 'all' 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All Subjects
        </button>
        <button
          onClick={() => setFilter('math')}
          className={`px-4 py-2 rounded-full font-semibold transition-all ${
            filter === 'math' 
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          🔢 Math
        </button>
        <button
          onClick={() => setFilter('science')}
          className={`px-4 py-2 rounded-full font-semibold transition-all ${
            filter === 'science' 
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          🔬 Science
        </button>
        <button
          onClick={() => setFilter('geography')}
          className={`px-4 py-2 rounded-full font-semibold transition-all ${
            filter === 'geography' 
              ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          🌍 Geography
        </button>
        <button
          onClick={() => setFilter('english')}
          className={`px-4 py-2 rounded-full font-semibold transition-all ${
            filter === 'english' 
              ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          📚 English
        </button>
      </div>

      {/* Leaderboard Entries */}
      {filteredEntries.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <div className="text-6xl mb-4">🎯</div>
          <p className="text-xl">No entries yet. Be the first!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredEntries.map((entry, index) => (
            <motion.div
              key={`${entry.playerName}-${entry.date}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                isCurrentPlayer(entry)
                  ? 'bg-gradient-to-r from-yellow-100 to-orange-100 border-4 border-yellow-400 shadow-lg'
                  : index < 3
                  ? 'bg-gradient-to-r from-purple-50 to-pink-50 shadow-md'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              {/* Rank */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                index < 3 ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg' : 'bg-white text-gray-700'
              }`}>
                {getMedalEmoji(index)}
              </div>

              {/* Player Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className={`font-bold text-lg truncate ${
                    isCurrentPlayer(entry) ? 'text-orange-700' : 'text-gray-800'
                  }`}>
                    {entry.playerName}
                    {isCurrentPlayer(entry) && <span className="ml-2">👈 You!</span>}
                  </p>
                </div>
                <p className="text-sm text-gray-600">
                  {getSubjectIcon(entry.subjectId)} {getSubjectName(entry.subjectId)}
                </p>
              </div>

              {/* Score */}
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">{entry.percentage}%</p>
                <p className="text-sm text-gray-600">
                  {entry.score}/{entry.totalQuestions}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Stats */}
      {entries.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 grid grid-cols-3 gap-4"
        >
          <div className="bg-blue-100 rounded-xl p-4 text-center">
            <p className="text-3xl mb-1">👥</p>
            <p className="text-2xl font-bold text-blue-700">{new Set(entries.map(e => e.playerName)).size}</p>
            <p className="text-sm text-gray-700">Players</p>
          </div>
          <div className="bg-green-100 rounded-xl p-4 text-center">
            <p className="text-3xl mb-1">🎯</p>
            <p className="text-2xl font-bold text-green-700">{entries.length}</p>
            <p className="text-sm text-gray-700">Games</p>
          </div>
          <div className="bg-yellow-100 rounded-xl p-4 text-center">
            <p className="text-3xl mb-1">⭐</p>
            <p className="text-2xl font-bold text-yellow-700">
              {entries.length > 0 ? Math.round(entries.reduce((sum, e) => sum + e.percentage, 0) / entries.length) : 0}%
            </p>
            <p className="text-sm text-gray-700">Avg Score</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
