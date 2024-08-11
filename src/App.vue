<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import MainNavbar from './components/MainNavbar.vue'
import ToggleHeaderBtn from './components/ToggleHeaderBtn.vue'

const defaultToggleBtnColor = 'default'
const headerOpen = ref<boolean>(true)
const toggleBtnForcedTheme = ref<string>(defaultToggleBtnColor)
const route = useRoute()
const isChallengePreviewPage = ref<boolean>(route.name !== 'home')

function toggleHeader() {
  if (isChallengePreviewPage.value) {
    headerOpen.value = !headerOpen.value
    return
  }
  headerOpen.value = true
}

function showHeader(show: boolean) {
  if (isChallengePreviewPage.value) {
    headerOpen.value = show
  } else {
    headerOpen.value = true
  }
}

function setHeaderToggleColor(color: string) {
  toggleBtnForcedTheme.value = color
}

watch(
  () => route.name,
  (newRouteName) => {
    isChallengePreviewPage.value = isChallengeRoute(newRouteName)
    toggleBtnForcedTheme.value = defaultToggleBtnColor
  }
)

function isChallengeRoute(routeName: any) {
  const baseRoutes = ['home', 'about']
  return !baseRoutes.includes(routeName) && !routeName.includes('sandbox')
}
</script>

<template>
  <div class="app-wrapper">
    <header class="header" :class="{ hidden: !headerOpen }">
      <div class="header-main">
        <div class="header-logo img-container">
          <img src="./assets/codeElias-logo.png" alt="Elias Codes Logo" />
        </div>
        <div class="header-title">
          <h1 class="title">UI/UX Designs</h1>
          <p class="subtitle">by Elias | Software Engineer & UI/UX Developer</p>
        </div>
      </div>

      <MainNavbar />
    </header>

    <main>
      <ToggleHeaderBtn
        @toggleHeader="toggleHeader"
        :headerOpen="headerOpen"
        :btn-color="toggleBtnForcedTheme"
        v-show="isChallengePreviewPage"
      />
      <RouterView @showHeader="showHeader" @setHeaderToggleColor="setHeaderToggleColor" />
    </main>
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.header {
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: space-between;
  position: relative;
  max-height: 300px;
  min-height: var(--min-header-h);
  transition: max-height 600ms ease-in-out;
}

.header-main {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 85vw;
}

.header-logo {
  width: 8rem;
}

.header.hidden {
  overflow: hidden;
  max-height: 0;
}

.header > * {
  padding-top: 1rem;
  padding-bottom: 0.5rem;
}

.header-title {
  display: flex;
  flex-direction: column;
  gap: 0.05rem;
}

.title {
  font-size: var(--fs-5);
}

.subtitle {
  font-size: var(--fs-2);
}
</style>
