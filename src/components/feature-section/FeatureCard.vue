<script lang="ts" setup>
import TeamBuilderIcon from './icons/TeamBuilderIcon.vue'

defineProps<{
  title: string
  body: string
  topBorder: string
}>()
</script>

<template>
  <div class="card" :class="topBorder">
    <div class="top-container">
      <header>
        <h3 class="card__title">{{ title }}</h3>
      </header>

      <p class="card__body">{{ body }}</p>
    </div>

    <footer class="card__icon">
      <TeamBuilderIcon />
    </footer>
  </div>
</template>
