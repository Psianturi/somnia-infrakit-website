
export default function Demo() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Demo</h1>
      <p className="mb-4">This section demonstrates a typical workflow using the Somnia Agent CLI, from installation to deployment and verification. You can use these steps to quickly test the CLI and see real output.</p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Quick Demo Steps</h2>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>Install CLI: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">npm install -g @somnia/agent-cli</code></li>
          <li>Create Agent: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli init MyFirstAgent</code></li>
          <li>Configure: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli config</code></li>
          <li>Test Locally: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli test</code></li>
          <li>Deploy: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli deploy</code></li>
          <li>Verify (optional): <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli verify &lt;contract-address&gt;</code></li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Sample Output</h2>
        <pre className="bg-gray-900 text-gray-100 rounded p-4 text-xs overflow-x-auto mb-4">{`
$ somnia-cli test

Running tests in local sandbox...
[PASS] test_GetAgentStatus()
[PASS] test_OnlyOwnerCanTriggerAction()
[PASS] test_TriggerActionUpdatesData()
[PASS] test_TriggerActionUpdatesTimestamp()

✅ Tests completed successfully!
`}</pre>
        <p className="text-gray-400 text-xs">You should see all tests passing if your setup is correct.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Tips</h2>
        <ul className="list-disc list-inside text-sm text-gray-300 mb-2">
          <li>Use <code>somnia-cli --help</code> to see all available commands and options.</li>
          <li>Try <code>somnia-cli init MyAgent --template defi</code> for a DeFi agent demo.</li>
          <li>Check the <b>Testing</b> section for more on writing and running tests.</li>
        </ul>
      </div>

      <p>For advanced usage, see the DeFi Agent demo and explore the CLI documentation for more features.</p>
    </>
  );
}
