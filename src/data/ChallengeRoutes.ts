import { HomeChallengeCards } from './HomeChallengeCards'

export const challengeRoutes = HomeChallengeCards.map((challenge) => {
  return {
    path: `/${challenge.Link}`,
    name: challenge.Link,
    component: () => import(`../views/challenges/${challenge.ComponentName}.vue`)
  }
})
