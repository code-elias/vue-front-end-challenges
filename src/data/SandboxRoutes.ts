import { HomeSandboxCards } from '@/data/HomeSandboxCards'

export const sandboxRoutes = HomeSandboxCards.map((sandbox) => {
  return {
    path: `/${sandbox.Link}`,
    name: sandbox.Link,
    component: () => import(`@/views/sandbox/${sandbox.ComponentName}.vue`)
  }
})
