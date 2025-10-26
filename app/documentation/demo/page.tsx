
export default function Demo() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Demo</h1>
      <p className="mb-4">This section demonstrates a typical workflow using the Somnia Infra Kit CLI, from installation to deployment and verification. You can use these steps to quickly test the CLI and see real output.</p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Quick Demo Steps</h2>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>Install CLI: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">npm install -g somnia-ai-agent-cli</code></li>
          <li>Create Agent: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli init MyFirstAgent</code></li>
          <li>Configure: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli config</code></li>
          <li>Setup & Test: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">bash setup.sh && forge test</code></li>
          <li>Deploy: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli deploy</code></li>
          <li>Verify (optional): <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli verify &lt;contract-address&gt;</code></li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Sample Output</h2>
        <pre className="bg-gray-900 text-gray-100 rounded p-4 text-xs overflow-x-auto mb-4">{`
$ forge test

Running 4 tests for test/Agent.t.sol:AgentTest
[PASS] test_GetAgentStatus() (gas: 12345)
[PASS] test_OnlyOwnerCanTriggerAction() (gas: 23456)
[PASS] test_TriggerActionUpdatesData() (gas: 34567)
[PASS] test_TriggerActionUpdatesTimestamp() (gas: 45678)
Test result: ok. 4 passed; 0 failed; finished in 1.23s

✅ All tests passed!
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

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Live Deployment Example</h2>
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-3 text-cyan-400">Recent Successful Deployment</h3>
          <div className="space-y-2 text-sm">
            <p><span className="text-gray-400">Contract Address:</span> <code className="text-green-400">0x...</code></p>
            <p><span className="text-gray-400">Transaction Hash:</span> <a href="https://shannon-explorer.somnia.network/tx/0xc11bae6e25b78669e3a6738681b5469d4031136e8d2bede890693eb9fca11df2" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">0xc11bae6e25b78669e3a6738681b5469d4031136e8d2bede890693eb9fca11df2</a></p>
            <p><span className="text-gray-400">Network:</span> <span className="text-white">Somnia Testnet</span></p>
            <p><span className="text-gray-400">Status:</span> <span className="text-green-400">✅ Deployed Successfully</span></p>
          </div>
          <p className="text-xs text-gray-400 mt-4">Click the transaction hash to view on Somnia Explorer</p>
        </div>
      </div>
      
      <p>For advanced usage, see the DeFi Agent demo and explore the CLI documentation for more features.</p>
    </>
  );
}
