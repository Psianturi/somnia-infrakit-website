
export default function Architecture() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Architecture</h1>
      <p className="mb-6">Somnia Agent CLI is designed with a modular, layered architecture to ensure flexibility, security, and ease of use for developers building AI agents on the Somnia Blockchain.</p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">System Overview</h2>
        <pre className="bg-gray-900 text-gray-100 rounded p-4 text-xs overflow-x-auto mb-4">
{`
┌─────────────────────────────────────────────────────────────┐
│                    SOMNIA AGENT CLI                         │
├─────────────────────────────────────────────────────────────┤
│  CLI Layer (index.js)                                      │
│  ├── init     ├── config   ├── test    ├── deploy          │
│  ├── status   └── verify                                   │
├─────────────────────────────────────────────────────────────┤
│  Command Layer (commands/)                                  │
│  ├── Project Management    ├── Environment Setup            │
│  ├── Testing Framework     └── Deployment Pipeline          │
├─────────────────────────────────────────────────────────────┤
│  Template System                                           │
│  ├── Basic Agent          ├── DeFi Agent                   │
│  ├── NFT Agent            └── Yield Agent                  │
├─────────────────────────────────────────────────────────────┤
│  Foundry Integration                                        │
│  ├── Smart Contract Compilation                           │
│  ├── Local Testing Sandbox                                │
│  └── Deployment Scripts                                   │
├─────────────────────────────────────────────────────────────┤
│  Somnia Blockchain                                         │
│  ├── Testnet Deployment                                   │
│  ├── Contract Verification                                │
│  └── Transaction Broadcasting                             │
└─────────────────────────────────────────────────────────────┘
`}
        </pre>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Layer Details</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><b>CLI Layer:</b> The entry point (index.js) using Commander.js for command parsing, routing, and error handling. Provides interactive prompts and user feedback.</li>
          <li><b>Command Modules:</b> Each CLI command (init, config, test, deploy, status, verify) is a separate module for project setup, environment management, testing, deployment, and verification.</li>
          <li><b>Template System:</b> Offers multiple agent templates (Basic, DeFi, NFT, Yield) to bootstrap new projects with best practices and ready-to-use code.</li>
          <li><b>Foundry Integration:</b> Integrates with Foundry for Solidity smart contract compilation, local sandbox testing, and deployment scripting.</li>
          <li><b>Somnia Blockchain:</b> Handles testnet deployment, contract verification, and transaction broadcasting to the Somnia network.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Component Example</h2>
        <pre className="bg-gray-900 text-gray-100 rounded p-4 text-xs overflow-x-auto mb-4">
{`agent-template/
├── src/AgentContract.sol     # Core agent logic
├── test/Agent.t.sol          # Comprehensive tests
├── script/Deploy.s.sol       # Deployment script
└── foundry.toml              # Foundry configuration
`}
        </pre>
        <p className="text-gray-400 text-sm">Each template provides a full project structure for rapid development and testing.</p>
      </div>

      <p>For more technical details, see the CLI source code and the official documentation.</p>
    </>
  );
}
