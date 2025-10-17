import DocsLayout from './layout';

export default function GettingStarted() {
  return (
    <DocsLayout>
      <h1 className="text-3xl font-bold mb-4">Getting Started</h1>
      <p className="mb-4">Welcome to the Somnia Agent CLI documentation! Follow these steps to get started:</p>
      <ol className="list-decimal list-inside space-y-2 mb-6">
        <li>
          <b>Install CLI:</b> <code className="bg-gray-800 px-2 py-1 rounded text-green-400">npm install -g somnia-ai-agent-cli</code>
        </li>
        <li>
          <b>Create Agent:</b> <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli init MyFirstAgent</code>
        </li>
        <li>
          <b>Configure:</b> <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli config</code>
        </li>
        <li>
          <b>Test Locally:</b> <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli test</code>
        </li>
        <li>
          <b>Deploy:</b> <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli deploy</code>
        </li>
      </ol>
      <p>For more details, see the other sections in this documentation.</p>
    </DocsLayout>
  );
}
