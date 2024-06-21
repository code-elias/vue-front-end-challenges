<script setup lang="ts">
import { RouterLink, RouterView, createRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="app-wrapper">
    <header>
      <div class="header">
        <!-- <HelloWorld msg="You did it!" /> -->
        <div class="header-title">
          <h1 class="title">FrontEnd Mentor Challenges</h1>
          <p class="subtitle">by Elias Golam</p>
        </div>

        <nav class="navbar">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <!-- <RouterLink to="/test">Test</RouterLink> -->
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
}

.header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  padding: 1rem 2rem 1rem 2rem;
}

.title {
  font-size: var(--fs-5);
}

.subtitle {
  font-size: var(--fs-2);
}

.header-title {
  display: flex;
  align-items: end;
  gap: 0.5rem;
}

.navbar {
  display: flex;
  align-items: end;
  justify-content: end;
  gap: 0.5rem;
  font-size: var(--ff-4);
}
</style>
