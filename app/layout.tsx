import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MD Nirob Khan - Software Engineer',
  description: 'Portfolio of MD Nirob Khan, a Software Engineering student specializing in Machine Learning, WordPress Development, and Software Testing.',
  keywords: ['Software Engineer', 'Machine Learning', 'WordPress Development', 'Software Testing', 'UMPSA'],
  authors: [{ name: 'MD Nirob Khan' }],
  creator: 'MD Nirob Khan',
  openGraph: {
    title: 'MD Nirob Khan - Software Engineer',
    description: 'Portfolio showcasing skills in Machine Learning, Web Development, and Software Engineering',
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
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          {children}
        </div>
      </body>
    </html>
  )
} 