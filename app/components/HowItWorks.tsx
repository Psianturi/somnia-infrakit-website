import { Download, FileCode, TestTube, Rocket } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: <Download className="w-8 h-8" />,
      title: 'Install CLI',
      description: 'npm install -g somnia-ai-agent-cli',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: <FileCode className="w-8 h-8" />,
      title: 'Create Agent',
      description: 'somnia-cli init MyAgent',
      color: 'from-pink-600 to-blue-600'
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: 'Test Locally',
      description: 'somnia-cli test',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Deploy',
      description: 'somnia-cli deploy',
      color: 'from-cyan-600 to-purple-600'
    }
  ]

  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            How It Works
          </h2>
          <p className="text-xl text-gray-400">
            Get started in 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {step.icon}
                </div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <code className="text-sm text-purple-400 bg-black/50 px-3 py-1 rounded">
                  {step.description}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}