
export default function Documentation() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Documentation</h1>
      <p className="mb-6">Welcome to the Somnia Infra Kit documentation. This comprehensive guide covers everything you need to build, test, and deploy autonomous AI agents on the Somnia Blockchain.</p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3 text-cyan-400">🚀 Getting Started</h2>
          <p className="text-gray-300 mb-4">Quick setup guide to install the CLI and create your first agent</p>
          <a href="/documentation/getting-started" className="text-cyan-400 hover:text-cyan-300 font-medium">Start Building →</a>
        </div>
        
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3 text-cyan-400">🎯 Live Demo</h2>
          <p className="text-gray-300 mb-4">See working examples and deployed agents in action</p>
          <a href="/documentation/demo" className="text-cyan-400 hover:text-cyan-300 font-medium">View Demos →</a>
        </div>
        
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3 text-cyan-400">🧪 Testing</h2>
          <p className="text-gray-300 mb-4">Comprehensive testing strategies and best practices</p>
          <a href="/documentation/testing" className="text-cyan-400 hover:text-cyan-300 font-medium">Learn Testing →</a>
        </div>
        
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3 text-cyan-400">🏗️ Architecture</h2>
          <p className="text-gray-300 mb-4">Deep dive into the technical architecture and design patterns</p>
          <a href="/documentation/architecture" className="text-cyan-400 hover:text-cyan-300 font-medium">Explore Architecture →</a>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2 text-cyan-400">Latest Version: v1.0.10</h3>
        <p className="text-gray-300 mb-4">Enhanced deployment workflow, improved template system, and better error handling.</p>
        <div className="flex gap-4">
          <a href="https://www.npmjs.com/package/somnia-ai-agent-cli" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-medium">NPM Package →</a>
          <a href="https://github.com/Psianturi/somnia-infra-kit" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-medium">GitHub Repository →</a>
        </div>
      </div>
    </>
  );
}
