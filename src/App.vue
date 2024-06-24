<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import MainNavbar from './components/MainNavbar.vue'
import ToggleHeaderBtn from './components/ToggleHeaderBtn.vue'

const headerOpen = ref<boolean>(true)

function toggleHeader() {
  headerOpen.value = !headerOpen.value
}

function showHeader(show: boolean) {
  headerOpen.value = show
}
</script>

<template>
  <div class="app-wrapper">
    <header class="header" :class="{ hidden: !headerOpen }">
      <!-- <HelloWorld msg="You did it!" /> -->
      <div class="header-title">
        <h1 class="title">FrontEnd Mentor Challenges</h1>
        <p class="subtitle">by Elias Golam</p>
      </div>

      <MainNavbar />
      <!-- <nav class="navbar">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav> -->
    </header>

    <main class="">
      <ToggleHeaderBtn @toggleHeader="toggleHeader" :headerOpen="headerOpen" />
      <RouterView @showHeader="showHeader" />
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
  overflow: hidden;
  max-height: 300px;
  transition: max-height 600ms ease-in-out;
  /* padding: 1rem 2rem 1rem 2rem; */
}

.header.hidden {
  max-height: 0;
}

.header > * {
  padding-top: 1rem;
  padding-bottom: 0.5rem;
}

.header-title {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title {
  font-size: var(--fs-5);
}

.subtitle {
  font-size: var(--fs-2);
}

/* .navbar {
  display: flex;
  align-items: end;
  justify-content: end;
  gap: 0.5rem;
  font-size: var(--ff-4);
} */
</style>
