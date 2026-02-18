'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface UserNameInputProps {
  onSubmit: (name: string) => void;
}

export default function UserNameInput({ onSubmit }: UserNameInputProps) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Please enter your name!');
      return;
    }
    
    if (name.trim().length < 2) {
      setError('Name must be at least 2 characters!');
      return;
    }
    
    if (name.trim().length > 20) {
      setError('Name must be 20 characters or less!');
      return;
    }
    
    onSubmit(name.trim());
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', duration: 0.8 }}
        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full"
      >
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🎮</div>
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Welcome, Player!
          </h2>
          <p className="text-lg text-gray-600">
            Enter your name to start the challenge
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="playerName" className="block text-lg font-semibold text-gray-700 mb-2">
              Your Name:
            </label>
            <input
              id="playerName"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              placeholder="Enter your name..."
              className="w-full px-6 py-4 text-xl rounded-2xl border-4 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
              autoFocus
              maxLength={20}
            />
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 mt-2 text-sm font-semibold"
              >
                ⚠️ {error}
              </motion.p>
            )}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-2xl font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            🚀 Start Challenge
          </motion.button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>💡 Tip: Your score will appear on the leaderboard!</p>
        </div>
      </motion.div>
    </div>
  );
}
