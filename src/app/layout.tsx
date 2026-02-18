import type { Metadata } from 'next'
import './globals.css'
import DevelopmentBanner from '@/components/DevelopmentBanner'
import DevServerStatus from '@/components/DevServerStatus'

export const metadata: Metadata = {
  title: 'Kids Learning App - Fun Education for Class 2 & 3',
  description: 'Interactive learning platform for kids to learn Math, Science, Geography, Gymnastics, French, and English',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Development-only: Prevent aggressive caching */}
        {process.env.NODE_ENV === 'development' && (
          <>
            <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
            <meta httpEquiv="Pragma" content="no-cache" />
            <meta httpEquiv="Expires" content="0" />
          </>
        )}
      </head>
      <body className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <DevelopmentBanner />
        <DevServerStatus />
        {children}
      </body>
    </html>
  )
}