import { Zap, Shield, Code, Puzzle, Settings, Rocket } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Setup',
      description: 'Bootstrap complete AI Agent projects in seconds with interactive templates'
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: 'Multiple Templates',
      description: 'Choose from Basic, DeFi, or NFT agent templates with smart features'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Customization Wizard',
      description: 'Personalized agent creation with guided setup and feature selection'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Built-in Testing',
      description: 'Comprehensive test suite with Foundry integration and gas analysis'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Deployment',
      description: 'Encrypted credential management and automatic contract verification'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Auto Upgrades',
      description: 'Keep dependencies and templates up-to-date automatically'
    }
  ]

  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-400">
            Complete infrastructure toolkit for Somnia Blockchain
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="glass rounded-2xl p-8 hover:bg-white/10 transition group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}