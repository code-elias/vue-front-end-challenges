<script setup lang="ts">
import { RouterLink, RouterView, createRouter } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import MainNavbar from './components/MainNavbar.vue'
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

        <MainNavbar />
        <!-- <nav class="navbar">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav> -->
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
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: space-between;
  position: relative;
  /* padding: 1rem 2rem 1rem 2rem; */
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
