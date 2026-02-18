'use client';

import { useState, useEffect } from 'react';
import { QuizQuestion, LeaderboardEntry } from '@/types';
import { motion } from 'framer-motion';

interface ChallengeQuizComponentProps {
  questions: QuizQuestion[];
  subjectId: string;
  playerName: string;
  onComplete: (result: LeaderboardEntry) => void;
}

export default function ChallengeQuizComponent({ 
  questions, 
  subjectId, 
  playerName,
  onComplete 
}: ChallengeQuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [startTime] = useState(Date.now());
  const [timeElapsed, setTimeElapsed] = useState(0);

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  const getSubjectName = (id: string) => {
    const names: { [key: string]: string } = {
      math: 'Math',
      science: 'Science',
      geography: 'Geography',
      english: 'English'
    };
    return names[id] || id;
  };

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...userAnswers, selectedAnswer];
      setUserAnswers(newAnswers);

      if (isLastQuestion) {
        // Calculate results
        const correctCount = newAnswers.reduce((count, answer, idx) => {
          return answer === questions[idx].correctAnswer ? count + 1 : count;
        }, 0);

        const result: LeaderboardEntry = {
          playerName,
          subjectId,
          score: correctCount,
          totalQuestions: questions.length,
          percentage: Math.round((correctCount / questions.length) * 100),
          date: new Date().toISOString(),
          timeTaken: timeElapsed,
        };

        // Save to leaderboard
        try {
          const savedLeaderboard = localStorage.getItem('quizLeaderboard');
          const leaderboard = savedLeaderboard ? JSON.parse(savedLeaderboard) : [];
          leaderboard.push(result);
          localStorage.setItem('quizLeaderboard', JSON.stringify(leaderboard));
        } catch (error) {
          console.error('Failed to save to leaderboard:', error);
        }

        onComplete(result);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Player Info & Timer */}
      <div className="mb-6 flex justify-between items-center bg-white rounded-2xl p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {playerName.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-bold text-lg text-gray-800">{playerName}</p>
            <p className="text-sm text-gray-600">Playing {getSubjectName(subjectId)}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Time</p>
          <p className="text-2xl font-bold text-purple-600">{formatTime(timeElapsed)}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <motion.div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question Card */}
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="bg-white rounded-3xl shadow-2xl p-8 mb-6"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-4">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correctAnswer;
            const showResult = showExplanation;

            let className = "w-full p-6 rounded-2xl text-left text-xl font-semibold transition-all transform hover:scale-105 ";
            
            if (!showResult) {
              className += isSelected 
                ? "bg-blue-500 text-white shadow-lg" 
                : "bg-gray-100 hover:bg-gray-200 text-gray-800";
            } else {
              if (isCorrect) {
                className += "bg-green-500 text-white shadow-lg";
              } else if (isSelected && !isCorrect) {
                className += "bg-red-500 text-white shadow-lg";
              } else {
                className += "bg-gray-100 text-gray-800";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                className={className}
              >
                <div className="flex items-center">
                  <span className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4 text-lg">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                  {showResult && isCorrect && <span className="ml-auto">✓</span>}
                  {showResult && isSelected && !isCorrect && <span className="ml-auto">✗</span>}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && question.explanation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-6 bg-blue-50 rounded-2xl"
          >
            <p className="text-lg text-gray-700">
              <span className="font-bold">💡 Explanation: </span>
              {question.explanation}
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Next Button */}
      {selectedAnswer !== null && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-2xl font-bold py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
        >
          {isLastQuestion ? '🎉 See Results & Leaderboard' : 'Next Question →'}
        </motion.button>
      )}
    </div>
  );
}
