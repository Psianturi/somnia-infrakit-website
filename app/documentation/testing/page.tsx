export default function Testing() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Testing</h1>
      <p className="mb-4">Testing is a critical part of agent development. The Somnia CLI provides built-in support for running and writing tests using Foundry.</p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">How to Run Tests</h2>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>Make sure your project is initialized and configured.</li>
          <li>Run <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli test</code> in your project directory.</li>
        </ol>
        <pre className="bg-gray-900 text-gray-100 rounded p-4 text-xs overflow-x-auto mb-4">{`
$ somnia-cli test

Running tests in local sandbox...
[PASS] test_GetAgentStatus()
[PASS] test_OnlyOwnerCanTriggerAction()
[PASS] test_TriggerActionUpdatesData()
[PASS] test_TriggerActionUpdatesTimestamp()

✅ Tests completed successfully!
`}</pre>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-sm text-gray-300 mb-2">
          <li>Write tests for all critical agent logic and edge cases.</li>
          <li>Use descriptive names for your test functions.</li>
          <li>Check gas usage and optimize for efficiency.</li>
          <li>Validate error handling and permission checks.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Troubleshooting</h2>
        <ul className="list-disc list-inside text-sm text-gray-300 mb-2">
          <li>If tests fail, check your contract logic and configuration.</li>
          <li>Review the output for error messages and stack traces.</li>
          <li>Use <code>somnia-cli --help</code> for more options and debugging tips.</li>
        </ul>
      </div>

      <p>For more advanced testing, refer to the Foundry documentation and explore custom test scenarios for your agent.</p>
    </>
  );
}
