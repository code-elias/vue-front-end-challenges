import type { ChallengeCard } from '@/models/ChallengeCard'

export class HomeSection {
  id: string
  title: string
  cards: ChallengeCard[]

  constructor(id: string, title: string, cards: ChallengeCard[]) {
    this.id = id
    this.title = title
    this.cards = cards
  }
}
