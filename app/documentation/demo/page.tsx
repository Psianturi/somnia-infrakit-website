import DocsLayout from '../layout';

export default function Demo() {
  return (
    <DocsLayout>
      <h1 className="text-3xl font-bold mb-4">Demo</h1>
      <ol className="list-decimal list-inside space-y-2 mb-6">
        <li>Install CLI: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">npm install -g @somnia/agent-cli</code></li>
        <li>Create Agent: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli init MyFirstAgent</code></li>
        <li>Configure: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli config</code></li>
        <li>Test Locally: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli test</code></li>
        <li>Deploy: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli deploy</code></li>
        <li>Verify (optional): <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli verify &lt;contract-address&gt;</code></li>
      </ol>
      <p>For advanced usage, see the DeFi Agent demo in the CLI docs.</p>
    </DocsLayout>
  );
}
