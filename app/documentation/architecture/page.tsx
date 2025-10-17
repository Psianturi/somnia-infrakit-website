
export default function Architecture() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Architecture</h1>
      <p className="mb-6">Somnia Agent CLI is structured in modular layers for flexibility and security:</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><b>CLI Layer:</b> Entry point, command routing, error handling, interactive UI.</li>
        <li><b>Command Modules:</b> <b>init</b> (project setup), <b>config</b> (env management), <b>test</b> (testing), <b>deploy</b> (deployment).</li>
        <li><b>Template System:</b> Basic, DeFi, NFT, and Yield agent templates.</li>
        <li><b>Foundry Integration:</b> Smart contract compilation, local sandbox, deployment scripts.</li>
        <li><b>Somnia Blockchain:</b> Testnet deployment, contract verification, transaction broadcasting.</li>
      </ul>
      <p>See the CLI source for more technical details.</p>
    </>
  );
}
