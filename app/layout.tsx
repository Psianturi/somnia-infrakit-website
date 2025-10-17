import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Somnia Infra Kit - Build Autonomous AI Agents',
  description: 'Complete infrastructure toolkit for building, testing, and deploying autonomous AI agents on Somnia Blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-white text-black dark:bg-black dark:text-white`}>
        <div className="fixed inset-0 -z-10 bg-white dark:bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900"></div>
        </div>
        <ThemeToggle />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
