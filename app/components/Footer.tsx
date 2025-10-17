import { Terminal, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 px-4 bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white">Somnia Infra Kit</span>
            </div>
            <p className="text-sm text-gray-400">
              Infrastructure toolkit for building autonomous AI agents on Somnia Blockchain
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Resources</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="https://www.npmjs.com/package/somnia-ai-agent-cli" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition">Documentation</a>
              <a href="https://github.com/Psianturi/somnia-infra-kit" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition">GitHub</a>
              <a href="https://www.npmjs.com/package/somnia-ai-agent-cli" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition">NPM Package</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Templates</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="block hover:text-cyan-400 transition cursor-pointer">Basic Agent</div>
              <div className="block hover:text-cyan-400 transition cursor-pointer">DeFi Agent</div>
              <div className="block hover:text-cyan-400 transition cursor-pointer">NFT Agent</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Community</h4>
            <div className="flex gap-4">
              <a href="https://github.com/Psianturi/somnia-infra-kit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition">
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Somnia Infra Kit.  Built with ❤️ for Somnia Blockchain</p>
        </div>
      </div>
    </footer>
  )
}
