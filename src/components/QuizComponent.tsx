'use client';

import { useState } from 'react';
import { QuizQuestion, QuizResult } from '@/types';
import { motion } from 'framer-motion';

interface QuizComponentProps {
  questions: QuizQuestion[];
  subjectId: string;
  onComplete: (result: QuizResult) => void;
}

export default function QuizComponent({ questions, subjectId, onComplete }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

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

        const incorrectQuestions = newAnswers
          .map((answer, idx) => (answer !== questions[idx].correctAnswer ? idx : -1))
          .filter(idx => idx !== -1);

        const result: QuizResult = {
          subjectId,
          score: correctCount,
          totalQuestions: questions.length,
          percentage: Math.round((correctCount / questions.length) * 100),
          incorrectQuestions,
          date: new Date().toISOString(),
        };

        // Save to localStorage
        const savedResults = localStorage.getItem('quizResults');
        const results = savedResults ? JSON.parse(savedResults) : [];
        results.push(result);
        localStorage.setItem('quizResults', JSON.stringify(results));

        onComplete(result);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(((currentQuestion) / questions.length) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <motion.div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
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
          {isLastQuestion ? '🎉 See Results' : 'Next Question →'}
        </motion.button>
      )}
    </div>
  );
}
