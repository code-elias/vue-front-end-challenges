<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import vue from '@vitejs/plugin-vue'

let isActive = ref(false)

function toggle() {
  isActive.value = !isActive.value
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
