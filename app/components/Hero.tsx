import { ArrowRight, Download, Terminal } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full mb-8">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
          <span className="text-sm text-cyan-400 font-medium">Now Available v1.0.10</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
          Infrastructure Toolkit for{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Autonomous AI Agents
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Complete infrastructure solution for building, testing, and deploying autonomous AI agents on Somnia Blockchain.
          From CLI tools to dashboard management—everything you need in one comprehensive kit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="https://www.npmjs.com/package/somnia-ai-agent-cli" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white hover:from-cyan-600 hover:to-blue-600 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/25">
            <Download className="w-5 h-5" />
            Install CLI
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://github.com/Psianturi/somnia-agents-showcase" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gray-800/50 border border-gray-600 rounded-full font-semibold text-white hover:bg-gray-700/50 transition flex items-center justify-center gap-2 backdrop-blur-sm">
            View Live Demos
          </a>
        </div>

        <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 max-w-2xl mx-auto text-left backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span className="text-sm text-gray-400">Quick Start</span>
          </div>
          <code className="text-sm text-gray-300">
            <div className="text-green-400">$ npm install -g somnia-ai-agent-cli</div>
            <div className="text-green-400">$ somnia-cli init MyFirstAgent</div>
            <div className="text-green-400">$ cd MyFirstAgent && somnia-cli deploy</div>
          </code>
        </div>
      </div>
    </section>
  )
}
