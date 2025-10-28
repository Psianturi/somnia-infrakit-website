import { Terminal, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-6 h-6 text-purple-400" />
              <span className="font-bold text-gradient">Somnia Infra Kit</span>
            </div>
            <p className="text-sm text-gray-400">
              Infrastructure toolkit for building autonomous AI agents on Somnia Blockchain
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="https://www.npmjs.com/package/somnia-ai-agent-cli" target="_blank" rel="noopener noreferrer" className="block hover:text-purple-400">Documentation</a>
              <a href="https://github.com/Psianturi/somnia-infra-kit" target="_blank" rel="noopener noreferrer" className="block hover:text-purple-400">GitHub</a>
              <a href="https://www.npmjs.com/package/somnia-ai-agent-cli" target="_blank" rel="noopener noreferrer" className="block hover:text-purple-400">NPM Package</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Templates</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="block hover:text-purple-400">Basic Agent</div>
              <div className="block hover:text-purple-400">DeFi Agent</div>
              <div className="block hover:text-purple-400">NFT Agent</div>
              <div className="block hover:text-purple-400">Yield Agent</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <div className="flex gap-4">
              <a href="https://github.com/Psianturi/somnia-infra-kit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 Somnia Infra Kit. MIT License. Built with ❤️ for Somnia Blockchain</p>
        </div>
      </div>
    </footer>
  )
}