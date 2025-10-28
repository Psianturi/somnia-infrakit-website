'use client'

import { useState } from 'react'
import { Menu, X, Terminal } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Terminal className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold text-gradient">Somnia Infra Kit</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-purple-400 transition">Features</a>
            <a href="#how-it-works" className="hover:text-purple-400 transition">How It Works</a>
            <a href="#templates" className="hover:text-purple-400 transition">Templates</a>
            <a href="https://github.com/Psianturi/somnia-infra-kit" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">GitHub</a>
            <a href="https://www.npmjs.com/package/somnia-ai-agent-cli" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:glow transition">
              Install CLI
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block hover:text-purple-400">Features</a>
            <a href="#how-it-works" className="block hover:text-purple-400">How It Works</a>
            <a href="#templates" className="block hover:text-purple-400">Templates</a>
            <a href="https://github.com/Psianturi/somnia-infra-kit" target="_blank" rel="noopener noreferrer" className="block hover:text-purple-400">GitHub</a>
            <a href="https://www.npmjs.com/package/somnia-ai-agent-cli" target="_blank" rel="noopener noreferrer" className="block px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-center">
              Install CLI
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}