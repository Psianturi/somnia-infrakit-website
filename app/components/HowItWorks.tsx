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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            How It Works
          </h2>
          <p className="text-xl text-gray-300">
            Get started in 4 simple steps
          </p>
        </div>

        {/* Timeline Style */}
        <div className="relative flex flex-col items-center max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600 opacity-40 z-0" style={{transform: 'translateX(-50%)'}} />
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex items-center w-full mb-12 last:mb-0">
              {/* Step number and line connector */}
              <div className="flex flex-col items-center mr-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center font-bold text-xl text-white border-4 border-gray-900 shadow-lg`}>
                  {i + 1}
                </div>
                {i !== steps.length - 1 && (
                  <div className="flex-1 w-1 bg-gradient-to-b from-cyan-500 to-purple-600 opacity-60 my-1" style={{minHeight: '40px'}} />
                )}
              </div>
              {/* Card */}
              <div className="flex-1 bg-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/50 transition backdrop-blur-sm shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br mb-4 rounded-full flex items-center justify-center text-white mx-auto md:mx-0" style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white text-center md:text-left">{step.title}</h3>
                <code className="text-sm text-green-400 bg-gray-800/50 px-3 py-1 rounded block text-center md:text-left">
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
