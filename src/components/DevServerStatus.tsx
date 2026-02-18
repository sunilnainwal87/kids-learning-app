'use client';

import { useEffect, useState } from 'react';

/**
 * Component that shows when the dev server is active and helps users troubleshoot
 * caching issues. Only visible in development mode.
 */
export default function DevServerStatus() {
  const [isDevMode, setIsDevMode] = useState(false);

  useEffect(() => {
    // Only run in development
    const isDev = process.env.NODE_ENV === 'development';
    setIsDevMode(isDev);

    if (isDev) {
      // Log helpful information to console
      console.log('%c✓ Development server is running', 'color: #10B981; font-weight: bold;');
      console.log("%cIf you make changes and don't see them:", 'color: #F59E0B;');
      console.log('%c  1. Make sure you saved the file (Ctrl+S or Cmd+S)', 'color: #6B7280;');
      console.log('%c  2. Wait 1-2 seconds for auto-reload', 'color: #6B7280;');
      console.log('%c  3. Try hard refresh: Ctrl+Shift+R (Win/Linux) or Cmd+Shift+R (Mac)', 'color: #6B7280;');
      console.log('%c  4. Use the Force Refresh button in the dev banner', 'color: #6B7280;');
    }
  }, []);

  if (!isDevMode) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <div className="bg-white rounded-lg shadow-lg px-4 py-2 border-2 border-green-500">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">
            Dev Server: <span className="text-green-600">Online</span>
          </span>
        </div>
      </div>
    </div>
  );
}
