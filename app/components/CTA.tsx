import { ArrowRight, Github, BookOpen } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Build?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Start building autonomous AI agents on Somnia Blockchain today
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://www.npmjs.com/package/somnia-ai-agent-cli" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:glow transition flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://github.com/Psianturi/somnia-infra-kit" target="_blank" rel="noopener noreferrer" className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2">
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-black/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">v1.1.0</div>
              <div className="text-sm text-gray-400">Latest Version</div>
            </div>
            <div className="bg-black/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">4</div>
              <div className="text-sm text-gray-400">Agent Templates</div>
            </div>
            <div className="bg-black/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">MIT</div>
              <div className="text-sm text-gray-400">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}