'use client';

import { useState, useEffect } from 'react';

export default function DevelopmentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Only show in development mode
    if (process.env.NODE_ENV === 'development') {
      // Check if user has dismissed it before
      const dismissed = localStorage.getItem('dev-banner-dismissed');
      if (!dismissed) {
        setIsVisible(true);
      }
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('dev-banner-dismissed', 'true');
  };

  const handleClearDismissal = () => {
    localStorage.removeItem('dev-banner-dismissed');
    setIsVisible(true);
    setIsDismissed(false);
  };

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  if (!isVisible && !isDismissed) {
    return null;
  }

  if (!isVisible && isDismissed) {
    return (
      <button
        onClick={handleClearDismissal}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm z-50"
      >
        💡 Show Dev Tips
      </button>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🛠️</span>
            <h3 className="font-bold text-lg">Development Mode Active</h3>
          </div>
          <div className="text-sm space-y-1">
            <p className="flex items-center gap-2">
              <span className="text-green-300">✓</span>
              <span>Hot reload is enabled - changes appear automatically!</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-yellow-300">⚡</span>
              <span><strong>Not seeing changes?</strong> Try: <code className="bg-white/20 px-2 py-0.5 rounded">Ctrl+Shift+R</code> (hard refresh)</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-orange-300">📖</span>
              <span>Need help? Check <code className="bg-white/20 px-2 py-0.5 rounded">DEVELOPMENT_GUIDE.md</code></span>
            </p>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="bg-white/20 hover:bg-white/30 rounded-full w-8 h-8 flex items-center justify-center transition-colors flex-shrink-0"
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
