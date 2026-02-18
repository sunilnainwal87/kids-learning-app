'use client';

import { useState, useEffect } from 'react';

export default function DevelopmentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Only show in development mode
    if (process.env.NODE_ENV === 'development') {
      // Log to console to help with debugging
      console.log('%c🛠️ Development Mode Active', 'color: #4F46E5; font-size: 16px; font-weight: bold;');
      console.log('%c✓ Hot reload enabled - changes will appear automatically', 'color: #10B981;');
      console.log('%c⚡ Not seeing changes? Try hard refresh: Ctrl+Shift+R (Win/Linux) or Cmd+Shift+R (Mac)', 'color: #F59E0B;');
      console.log('%c🔄 Force cache clear: Clear browser data OR click Force Refresh button', 'color: #EF4444;');
      console.log('%c📖 Having issues? Check DEVELOPMENT_GUIDE.md', 'color: #F97316;');
      
      // Show timestamp of page load
      const now = new Date().toLocaleTimeString();
      setLastRefresh(now);
      console.log(`%c🕐 Page loaded at: ${now}`, 'color: #6366F1;');
      console.log(`%c📅 Build timestamp: ${new Date().toISOString()}`, 'color: #8B5CF6;');
      
      // Check if user has dismissed it before (only on client side)
      if (typeof window !== 'undefined') {
        const dismissed = localStorage.getItem('dev-banner-dismissed');
        if (!dismissed) {
          setIsVisible(true);
        }
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

  const handleForceRefresh = () => {
    // Hard reload the page to clear all caches
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  if (!isVisible && !isDismissed) {
    return null;
  }

  if (!isVisible && isDismissed) {
    return (
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <button
          onClick={handleForceRefresh}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium"
          title="Force refresh to see latest changes"
        >
          🔄 Force Refresh
        </button>
        <button
          onClick={handleClearDismissal}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm"
        >
          💡 Show Dev Tips
        </button>
        {mounted && lastRefresh && (
          <div className="bg-gray-800 text-white px-3 py-1 rounded text-xs text-center">
            Loaded: {lastRefresh}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🛠️</span>
            <h3 className="font-bold text-lg">Development Mode Active</h3>
            {mounted && lastRefresh && (
              <span className="text-xs bg-white/20 px-2 py-1 rounded">Loaded: {lastRefresh}</span>
            )}
          </div>
          <div className="text-sm space-y-1">
            <p className="flex items-center gap-2">
              <span className="text-green-300">✓</span>
              <span>Hot reload is enabled - changes appear automatically!</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-yellow-300">⚡</span>
              <span><strong>Not seeing changes?</strong> Click the &quot;Force Refresh&quot; button or hard refresh: <code className="bg-white/20 px-2 py-0.5 rounded">Ctrl+Shift+R</code> (Win/Linux) or <code className="bg-white/20 px-2 py-0.5 rounded">Cmd+Shift+R</code> (Mac)</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-orange-300">📖</span>
              <span>Need help? Check <code className="bg-white/20 px-2 py-0.5 rounded">DEVELOPMENT_GUIDE.md</code> or <code className="bg-white/20 px-2 py-0.5 rounded">TROUBLESHOOTING.md</code></span>
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <button
            onClick={handleForceRefresh}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium transition-colors"
            title="Force refresh to see latest changes"
          >
            🔄 Force Refresh
          </button>
          <button
            onClick={handleDismiss}
            className="bg-white/20 hover:bg-white/30 rounded-full w-8 h-8 flex items-center justify-center transition-colors flex-shrink-0"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
