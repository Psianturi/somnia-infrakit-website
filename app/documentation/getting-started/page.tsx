
export default function GettingStarted() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Getting Started</h1>
      <p className="mb-4">This guide will help you set up the Somnia Infra Kit CLI, create your first agent, and deploy it to the Somnia Blockchain. Make sure you have <b>Node.js 18+</b> and <b>Foundry</b> installed.</p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Install the CLI</h2>
        <p>Install the CLI globally using npm:</p>
        <pre className="bg-gray-900 text-green-400 rounded p-3 text-sm mb-4">npm install -g somnia-ai-agent-cli</pre>
        <p>Check the installation:</p>
        <pre className="bg-gray-900 text-green-400 rounded p-3 text-sm mb-4">somnia-cli --version</pre>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Choose Your Agent Type</h2>
        <p>The CLI offers multiple ways to create agents based on your needs:</p>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 text-cyan-400">Quick Start Options</h3>
          <div className="space-y-3">
            <div className="bg-gray-800/50 rounded p-4">
              <h4 className="font-medium text-white">Basic Agent</h4>
              <p className="text-sm text-gray-300 mb-2">Simple autonomous agent with core functionality</p>
              <pre className="bg-gray-900 text-green-400 rounded p-2 text-xs">somnia-cli init MyAgent</pre>
              <p className="text-xs text-gray-400 mt-1">4 tests included</p>
            </div>

            <div className="bg-gray-800/50 rounded p-4">
              <h4 className="font-medium text-white">DeFi Agent</h4>
              <p className="text-sm text-gray-300 mb-2">Advanced agent with price monitoring and trading signals</p>
              <pre className="bg-gray-900 text-green-400 rounded p-2 text-xs">somnia-cli init MyAgent --template defi</pre>
              <p className="text-xs text-gray-400 mt-1">10 tests included</p>
            </div>

            <div className="bg-gray-800/50 rounded p-4">
              <h4 className="font-medium text-white">NFT Agent</h4>
              <p className="text-sm text-gray-300 mb-2">Agent for floor price tracking and NFT opportunities</p>
              <pre className="bg-gray-900 text-green-400 rounded p-2 text-xs">somnia-cli init MyAgent --template nft</pre>
              <p className="text-xs text-gray-400 mt-1">8 tests included</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 text-cyan-400">Advanced Options</h3>
          <div className="space-y-3">
            <div className="bg-gray-800/50 rounded p-4">
              <h4 className="font-medium text-white">Customization Wizard</h4>
              <p className="text-sm text-gray-300 mb-2">Interactive feature selection from pre-built modules</p>
              <pre className="bg-gray-900 text-green-400 rounded p-2 text-xs">somnia-cli init MyAgent --wizard</pre>
              <p className="text-xs text-gray-400 mt-1">Choose from: staking, rewards, price monitoring, trading, governance</p>
            </div>

            <div className="bg-gray-800/50 rounded p-4 border border-cyan-400/30">
              <h4 className="font-medium text-cyan-400">AI-Powered Custom Agent</h4>
              <p className="text-sm text-gray-300 mb-2">Generate unique contracts using OpenAI GPT-4</p>
              <pre className="bg-gray-900 text-green-400 rounded p-2 text-xs">somnia-cli custom-agent</pre>
              <p className="text-xs text-gray-400 mt-1">Describe requirements in natural language</p>
            </div>
          </div>
        </div>

        <p className="mb-4">After choosing your agent type, navigate to your project:</p>
        <pre className="bg-gray-900 text-green-400 rounded p-3 text-sm mb-4">cd MyFirstAgent</pre>
        <p>Project structure:</p>
        <pre className="bg-gray-900 text-gray-200 rounded p-3 text-xs mb-4">src/  test/  script/  foundry.toml  .env.example  README.md</pre>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Configure Environment</h2>
        <p>Run the configuration wizard to set up RPC and wallet:</p>
        <pre className="bg-gray-900 text-green-400 rounded p-3 text-sm mb-4">somnia-cli config</pre>
        <ul className="list-disc list-inside text-sm text-gray-300 mb-2">
          <li>Somnia RPC URL (default: <code>https://dream-rpc.somnia.network</code>)</li>
          <li>Private Key (encrypted in <code>.env</code>)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Test Your Agent</h2>
        <p>Install dependencies and run tests:</p>
        <pre className="bg-gray-900 text-green-400 rounded p-3 text-sm mb-4">bash setup.sh
forge test</pre>
        <p className="text-gray-400 text-xs">You should see all tests passing if setup is correct.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Deploy to Testnet</h2>
        <p>Deploy your agent to the Somnia testnet:</p>
        <pre className="bg-gray-900 text-green-400 rounded p-3 text-sm mb-4">somnia-cli deploy</pre>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Troubleshooting</h2>
        <ul className="list-disc list-inside text-sm text-gray-300 mb-2">
          <li>Ensure Node.js 18+ is installed and <code>npm</code> is up to date.</li>
          <li>If you see permission errors, try running the install command with <code>sudo</code> (Linux/Mac).</li>
          <li>For network issues, check your internet connection and RPC URL.</li>
        </ul>
      </div>

      <p>For more advanced usage, see the other sections in this documentation.</p>
    </>
  );
}
