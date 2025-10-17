
export default function Testing() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Testing</h1>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Install and check CLI version</li>
        <li>Use <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli --help</code> for all commands</li>
        <li>Project initialization and template selection</li>
        <li>Run <code className="bg-gray-800 px-2 py-1 rounded text-green-400">somnia-cli test</code> for local tests</li>
        <li>Check project structure and generated files</li>
        <li>Validate configuration and error handling</li>
      </ul>
      <p>All commands should execute without errors and tests should pass for a valid setup.</p>
    </>
  );
}
