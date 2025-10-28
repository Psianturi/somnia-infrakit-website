import { Bot, TrendingUp, Image, Coins } from 'lucide-react'

export default function Templates() {
  const templates = [
    {
      icon: <Bot className="w-12 h-12" />,
      name: 'Basic Agent',
      description: 'Simple autonomous agent with trigger functionality and data storage',
      features: ['Timestamp tracking', 'Data updates', 'Access control', 'Status monitoring'],
      command: 'somnia-cli init MyAgent --template basic'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      name: 'DeFi Agent',
      description: 'Advanced DeFi agent with price monitoring and trading signals',
      features: ['Price tracking', 'Threshold alerts', 'Buy/Sell signals', 'Auto trading'],
      command: 'somnia-cli init MyAgent --template defi'
    },
    {
      icon: <Image className="w-12 h-12" />,
      name: 'NFT Agent',
      description: 'NFT floor price monitoring and trading opportunity detection',
      features: ['Floor price tracking', 'Collection monitoring', 'Opportunity alerts', 'Rarity analysis'],
      command: 'somnia-cli init MyAgent --template nft'
    },
    {
      icon: <Coins className="w-12 h-12" />,
      name: 'Yield Agent',
      description: 'Yield farming and auto-compound strategies for maximum returns',
      features: ['Yield farming', 'Auto-compound', 'Strategy automation', 'Reward tracking'],
      command: 'somnia-cli init MyAgent --template yield'
    }
  ]

  return (
    <section id="templates" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Agent Templates
          </h2>
          <p className="text-xl text-gray-400">
            Choose the perfect template for your use case
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template, i) => (
            <div key={i} className="glass rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                {template.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{template.name}</h3>
              <p className="text-gray-400 mb-6">{template.description}</p>
              
              <div className="space-y-2 mb-6">
                {template.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <code className="text-xs text-purple-400 bg-black/50 px-3 py-2 rounded block overflow-x-auto">
                {template.command}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}