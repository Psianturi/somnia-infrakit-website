import { ArrowRight, Download, Terminal } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block px-4 py-2 glass rounded-full mb-8 animate-float">
          <span className="text-sm text-purple-400">🚀 Build Autonomous AI Agents</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient">Somnia Infra Kit</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Complete infrastructure toolkit for building, testing, and deploying autonomous AI agents on Somnia Blockchain
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="https://www.npmjs.com/package/somnia-ai-agent-cli" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:glow transition flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Install CLI
          </a>
          <a href="#how-it-works" className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="glass rounded-2xl p-6 max-w-2xl mx-auto text-left">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-gray-400">Quick Start</span>
          </div>
          <code className="text-sm text-green-400">
            <div>$ npm install -g somnia-ai-agent-cli</div>
            <div>$ somnia-cli init MyAgent && cd MyAgent</div>
            <div>$ bash setup.sh && forge test && somnia-cli deploy</div>
          </code>
        </div>
      </div>
    </section>
  )
}