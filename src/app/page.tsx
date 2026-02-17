import Link from 'next/link';
import { subjects } from '@/lib/subjects';
import SubjectCard from '@/components/SubjectCard';

export default function Home() {
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
        </header>

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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-yellow-100 rounded-xl p-6 text-center">
              <p className="text-4xl mb-2">⭐</p>
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">Stars Earned</p>
            </div>
            <div className="bg-blue-100 rounded-xl p-6 text-center">
              <p className="text-4xl mb-2">🎯</p>
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">Lessons Done</p>
            </div>
            <div className="bg-green-100 rounded-xl p-6 text-center">
              <p className="text-4xl mb-2">🏅</p>
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">Badges</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}