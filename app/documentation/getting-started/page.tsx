
export default function GettingStarted() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Getting Started</h1>
      <p className="mb-4">This guide will help you set up the Somnia Agent CLI, create your first agent, and deploy it to the Somnia Blockchain. Make sure you have <b>Node.js 18+</b> installed.</p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Install the CLI</h2>
        <p>Install the CLI globally using npm:</p>
        <pre className="bg-gray-900 text-green-400 rounded p-3 text-sm mb-4">npm install -g somnia-ai-agent-cli</pre>
        <p>Check the installation:</p>
        <pre className="bg-gray-900 text-green-400 rounded p-3 text-sm mb-4">somnia-cli --version</pre>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Create a New Agent Project</h2>
        <p>Initialize a new agent project with interactive template selection:</p>
        <pre className="bg-gray-900 text-green-400 rounded p-3 text-sm mb-4">somnia-cli init MyFirstAgent</pre>
        <p>Navigate to your project folder:</p>
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
        <p>Run the test suite locally:</p>
        <pre className="bg-gray-900 text-green-400 rounded p-3 text-sm mb-4">somnia-cli test</pre>
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
