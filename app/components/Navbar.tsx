'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <a href="/" className="p-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg block">
              <Image src="/sik-logo.png" alt="Somnia Infra Kit Logo" width={36} height={36} className="w-9 h-9 object-contain" />
            </a>
            <span className="text-xl font-bold text-white">Somnia Infra Kit</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition">Features</a>
            <a href="/documentation" className="text-gray-300 hover:text-cyan-400 transition">Documentation</a>
            <a href="https://github.com/Psianturi/somnia-infra-kit" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition">GitHub</a>
            <a href="https://www.npmjs.com/package/somnia-ai-agent-cli" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white hover:from-cyan-600 hover:to-blue-600 transition font-medium">
              Get Started
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block text-gray-300 hover:text-cyan-400">Features</a>
            <a href="/documentation" className="block text-gray-300 hover:text-cyan-400">Documentation</a>
            <a href="https://github.com/Psianturi/somnia-infra-kit" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-cyan-400">GitHub</a>
            <a href="https://www.npmjs.com/package/somnia-ai-agent-cli" target="_blank" rel="noopener noreferrer" className="block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-center font-medium">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
