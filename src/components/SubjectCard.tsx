'use client';

import Link from 'next/link';
import { Subject } from '@/types';
import { motion } from 'framer-motion';

interface SubjectCardProps {
  subject: Subject;
}

export default function SubjectCard({ subject }: SubjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Link href={`/subjects/${subject.id}`}>      
        <div className={`bg-gradient-to-br ${subject.bgGradient} rounded-3xl shadow-2xl p-8 cursor-pointer hover:shadow-3xl transition-all duration-300`}>      
          <div className="text-center">
            <div className="text-7xl mb-4">{subject.icon}</div>
            <h2 className="text-3xl font-bold text-white mb-3">
              {subject.name}
            </h2>
            <p className="text-white text-lg opacity-90">
              {subject.description}
            </p>
          </div>
          <div className="mt-6 bg-white bg-opacity-20 rounded-xl p-4">
            <div className="flex justify-between items-center text-white">
              <span className="text-sm">Progress</span>
              <span className="text-sm font-bold">0%</span>
            </div>
            <div className="w-full bg-white bg-opacity-30 rounded-full h-3 mt-2">
              <div className="bg-white h-3 rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}