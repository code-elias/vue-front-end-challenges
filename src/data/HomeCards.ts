import { HomeChallengeCards } from '@/data/HomeChallengeCards'
import { HomeSandboxCards } from '@/data/HomeSandboxCards'
import { HomeSection } from '@/models/HomeSection'

export const homeCards = [
  new HomeSection('frontend-challenges', 'FrontEnd Challenges', HomeChallengeCards),
  new HomeSection('sandbox', 'Sandbox', HomeSandboxCards)
]
