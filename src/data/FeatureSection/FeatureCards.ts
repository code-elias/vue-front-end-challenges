import { FeatureCard } from '@/models/FeatureCard'

export const cards = {
  supervisor: new FeatureCard(
    'Supervisor',
    'Monitors activity to identify project roadblocks',
    'cyan',
    'supervisor'
  ),
  teamBuilder: new FeatureCard(
    'Team Builder',
    'Scans our talent network to create the optimal team for your project',
    'red',
    'teamBuilder'
  ),
  karma: new FeatureCard(
    'Karma',
    'Regularly evaluates our talent to ensure quality',
    'orange',
    'karma'
  ),
  calculator: new FeatureCard(
    'Calculator',
    'Uses data from past projects to provide better delivery estimates',
    'blue',
    'calculator'
  )
}
