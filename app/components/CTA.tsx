import { ArrowRight, Github, BookOpen } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900/50 border border-gray-700 rounded-3xl p-12 text-center backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Start building autonomous AI agents on Somnia Blockchain today
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://www.npmjs.com/package/somnia-ai-agent-cli" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white hover:from-cyan-600 hover:to-blue-600 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/25">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://github.com/Psianturi/somnia-infra-kit" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gray-800/50 border border-gray-600 rounded-full font-semibold text-white hover:bg-gray-700/50 transition flex items-center justify-center gap-2 backdrop-blur-sm">
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1.0.5</div>
              <div className="text-sm text-gray-400">Latest Version</div>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">3</div>
              <div className="text-sm text-gray-400">Agent Templates</div>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">MIT</div>
              <div className="text-sm text-gray-400">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
