# Somnia Infra Kit Website

Modern, responsive website for Somnia Infra Kit - the complete infrastructure toolkit for building autonomous AI agents on Somnia Blockchain.

## About Somnia Infra Kit

Somnia Infra Kit is a comprehensive CLI tool that enables developers to:
- Create autonomous AI agents with pre-built templates
- Test agents locally with Foundry framework
- Deploy to Somnia Testnet with one command
- Build frontend dashboards for agent monitoring

**Current Version**: 1.1.2  
**NPM Package**: `somnia-ai-agent-cli`  
**Network**: Somnia Testnet (Chain ID: 50312)

## Quick Start

```bash
# Install the CLI globally
npm install -g somnia-ai-agent-cli

# Create your first agent
somnia-cli init MyAgent
cd MyAgent

# Setup dependencies and build
bash setup.sh

# Test and deploy
forge test
somnia-cli deploy
```

## Available Templates

- **Basic Agent**: Simple trigger functionality
- **DeFi Agent**: Price monitoring and trading signals  
- **NFT Agent**: Floor price tracking and opportunities
- **Yield Agent**: Auto-compound farming strategies

## Features

- **Modern Design**: Clean, professional design with gradient backgrounds and glass morphism
- **Responsive**: Fully responsive design that works on all devices
- **Fast**: Built with Next.js 15 for optimal performance
- **SEO Optimized**: Proper meta tags and structured data
- **Live Status**: Real deployment status from Somnia Testnet

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom utilities
- **Icons**: Lucide React
- **Deployment**: Vercel ready

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── components/          # Reusable components
│   │   ├── Hero.tsx        # Hero section with quick start
│   │   ├── Features.tsx    # Feature highlights
│   │   ├── HowItWorks.tsx  # Step-by-step guide
│   │   ├── Templates.tsx   # Agent templates showcase
│   │   ├── DeploymentStatus.tsx # Live deployment status
│   │   └── CTA.tsx         # Call to action
│   ├── globals.css         # Global styles with Tailwind
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── public/                 # Static assets
└── tailwind.config.js      # Tailwind configuration
```

## Deployment

This website is optimized for deployment on Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

## Related Projects

- **CLI Tool**: [somnia-agent-cli-sandbox](https://github.com/Psianturi/somnia-agent-cli-sandbox)
- **Agent Showcase**: [somnia-agents-showcase](https://github.com/Psianturi/somnia-agents-showcase)
- **NPM Package**: [somnia-ai-agent-cli](https://www.npmjs.com/package/somnia-ai-agent-cli)

## License

MIT License - Built with ❤️ for the Somnia ecosystem.