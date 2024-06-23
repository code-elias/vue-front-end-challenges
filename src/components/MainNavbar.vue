<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import vue from '@vitejs/plugin-vue'

let isActive = ref(false)

function toggle() {
  isActive.value = !isActive.value
}

function closeNavBar() {
  toggle()
}
</script>

<template>
  <div class="wrapper">
    <button class="navbar-menu-btn pointer" :class="{ active: isActive }" @click="toggle">
      <span class="top line"></span>
      <span class="middle line"></span>
      <span class="bottom line"></span>
    </button>
  </div>

  <nav class="navbar" :class="{ active: isActive }">
    <RouterLink class="navitem" to="/" @click="closeNavBar">Home</RouterLink>
    <RouterLink class="navitem" to="/about" @click="closeNavBar">About</RouterLink>
  </nav>
  <!-- <div>
    <nav class="navbar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div> -->
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: end;
  align-items: center;
}

.navbar {
  --navbar-w: 60vw;

  position: absolute;
  top: 100%;
  // right: 0;
  right: calc(var(--navbar-w) * (-1));
  z-index: 100;

  height: 100vh;
  width: var(--navbar-w);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  background: linear-gradient(-90deg, var(--vt-c-white-soft), var(--vt-c-white-soft-1));
  opacity: 0;

  transition:
    right 250ms ease-in,
    opacity 200ms ease-in-out;

  &.active {
    right: 0;
    opacity: 100%;
  }
}

.navitem {
  padding: 0.5rem 1rem;
  text-align: end;

  transition: all 250ms;

  &:hover {
    // transform: scale(1.05);
    background-color: var(--vt-c-indigo);
    color: var(--color-text-inv);
  }
}

.navbar-menu-btn {
  --btn-size: 20px;
  --btn-padding: 5px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(var(--btn-size) + 2 * var(--btn-padding));
  padding: var(--btn-padding);

  .line {
    background: var(--color-text);
    border-radius: 2px;

    display: block;
    width: var(--btn-size);
    height: 2px;

    transform-origin: center;

    transition: all 400ms ease;
  }

  /* HOVER */
  &:hover {
  }

  /* ACTIVE */
  &.active {
    .top {
      transform: translateY(9px) rotate(-45deg);
    }

    .middle {
      opacity: 0;
    }

    .bottom {
      transform: translateY(-9px) rotate(45deg);
    }
  }
}
</style>
