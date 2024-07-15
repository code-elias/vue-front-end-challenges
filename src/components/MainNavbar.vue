<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

let isActive = ref(false)

function toggle() {
  isActive.value = !isActive.value
}

function closeSideBar() {
  toggle()
}
</script>

<template>
  <div class="wrapper">
    <div class="collapse-menu">
      <button class="navbar-menu-btn pointer" :class="{ active: isActive }" @click="toggle">
        <span class="top line"></span>
        <span class="middle line"></span>
        <span class="bottom line"></span>
      </button>

      <nav class="sidebar" :class="{ active: isActive }">
        <RouterLink class="navlink sidebar-item" to="/" @click="closeSideBar">Home</RouterLink>
        <RouterLink class="navlink sidebar-item" to="/about" @click="closeSideBar">About </RouterLink>
      </nav>
    </div>

    <nav class="navbar">
      <RouterLink class="navlink" to="/">Home</RouterLink>
      <RouterLink class="navlink" to="/about">About</RouterLink>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: end;
  align-items: center;
}

.navbar {
  visibility: hidden;
  width: 0;
  height: 100%;
  overflow: hidden;

  display: flex;
  gap: 1.2rem;
  align-items: center;
}

.collapse-menu {
  position: fixed;
  z-index: 100;
}

.navbar-menu-btn {
  --btn-size: 20px;
  --btn-padding: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  z-index: 101;

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
    .line {
      background: var(--color-accent);
    }

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

.sidebar {
  --sidebar-w: 100vw;

  position: fixed;
  top: 0;
  right: calc(var(--sidebar-w) * (-1));
  z-index: 100;

  padding-top: 10rem;
  height: 100vh;
  width: var(--sidebar-w);
  overflow: hidden;

  display: flex;
  flex-direction: column;

  background: linear-gradient(-90deg, var(--vt-c-white-soft) 10%, var(--vt-c-white-soft-1) 85%, transparent);
  opacity: 0;

  transition:
    right 250ms ease-in,
    opacity 200ms ease-in-out;

  &.active {
    right: 0;
    opacity: 100%;
  }
}

.sidebar-item {
  padding: 0.5rem 1rem;
  text-align: end;
  transition: all 300ms ease-in-out;

  &:hover {
    // transform: scale(1.05);
    background-color: var(--color-accent);
    color: var(--color-text-inv);
  }
}

@media only screen and (min-width: 700px) {
  .navbar-menu-btn {
    visibility: hidden;
    width: 0;
  }

  .sidebar {
    right: -2000px;
    width: 0;
    visibility: hidden;
  }

  .navbar {
    width: fit-content;
    visibility: visible;
  }

  .navlink {
    position: relative;
    transition:
      transform 150ms ease-in,
      color 150ms ease-in;

    &::after {
      content: '';
      background: var(--color-accent);
      position: absolute;
      bottom: -0.1rem;
      left: 0;
      width: 100%;
      border-radius: 6px;
      height: 2px;

      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 250ms ease-out;
    }

    &:hover {
      color: var(--color-accent);
      transform: translateY(-2px);
    }

    &:hover::after {
      transform: scale(1);
      transform-origin: bottom left;
    }
  }
}
</style>
