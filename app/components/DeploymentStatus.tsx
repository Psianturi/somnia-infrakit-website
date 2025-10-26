import { ArrowRight } from 'lucide-react'

export default function DeploymentStatus() {
  const deployments = [
    {
      name: 'TestWorkflowAgent',
      description: 'Latest deployment via GitHub Actions CI/CD workflow',
      address: '0x...',
      network: 'Somnia Testnet',
      status: '✅ Live',
      txHash: '0xc11bae6e25b78669e3a6738681b5469d4031136e8d2bede890693eb9fca11df2',
      owner: '0x535EfE3671BB95C9cB2e0Dc77F7101A001476586'
    },
    {
      name: 'DemoBasicAgent',
      description: 'Simple autonomous agent with trigger functionality',
      address: '0x0ae8b1BF59127693819567f6Fb2EB47Fb7C3BAd4',
      network: 'Somnia Testnet',
      status: '✅ Live',
      txHash: '0x64c3d5be107d8f9371046db2594ae99492f0e0c6f6444998b23bba30c4eb7349',
      owner: '0x535EfE3671BB95C9cB2e0Dc77F7101A001476586'
    },
    {
      name: 'DemoDeFiAgent',
      description: 'Advanced DeFi price monitoring and trading signals',
      address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      network: 'Local Anvil',
      status: '✅ Deployed',
      txHash: '0x6cca961d37334c04925992bce440065b6a80396ab44150408f1d929c4a27a02c',
      owner: '0x535EfE3671BB95C9cB2e0Dc77F7101A001476586'
    }
  ]

  return (
    <section id="deployment-status" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Live Deployment Status
          </h2>
          <p className="text-xl text-gray-300">
            Real-world AI agents deployed and operational on Somnia Network
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {deployments.map((deployment, i) => (
            <div key={i} className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/50 transition backdrop-blur-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{deployment.name}</h3>
                  <p className="text-gray-300 mb-4">{deployment.description}</p>
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  {deployment.status}
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Contract Address:</span>
                  <code className="text-cyan-400 bg-gray-800/50 px-2 py-1 rounded">
                    {deployment.address}
                  </code>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Network:</span>
                  <span className="text-white">{deployment.network}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Owner:</span>
                  <code className="text-green-400">{deployment.owner.slice(0, 6)}...{deployment.owner.slice(-4)}</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Transaction:</span>
                  <code className="text-blue-400">{deployment.txHash.slice(0, 10)}...{deployment.txHash.slice(-8)}</code>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex gap-4">
                  <a
                    href={`https://shannon-explorer.somnia.network/tx/${deployment.txHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
                  >
                    View Transaction
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  {deployment.address !== '0x...' && (
                    <a
                      href={`https://shannon-explorer.somnia.network/address/${deployment.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition"
                    >
                      View Contract
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-6">
            All deployments are fully tested and verified using the Somnia AI Agent CLI
          </p>
          <a
            href="https://github.com/Psianturi/somnia-agents-showcase"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white hover:from-cyan-600 hover:to-blue-600 transition"
          >
            View All Demo Projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}