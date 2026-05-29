import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Métier — Career Simulator',
  description: 'Experience your career before you begin it. AI-powered simulations designed for precision performance.',
  keywords: ['career simulator', 'job simulation', 'AI career', 'career readiness', 'work experience'],
  openGraph: {
    title: 'Métier — Career Simulator',
    description: 'Experience your career before you begin it.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
