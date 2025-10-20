import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Templates from './components/Templates'
import DeploymentStatus from './components/DeploymentStatus'
import CTA from './components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Templates />
      <DeploymentStatus />
      <CTA />
    </>
  )
}
