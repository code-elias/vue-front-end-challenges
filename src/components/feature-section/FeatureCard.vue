<script lang="ts" setup>
import { computed } from 'vue'
import { featureIcons } from '@/data/FeatureSection/FeatureIcons'

const props = defineProps<{
  title: string
  body: string
  topBorder: string
  icon: string
}>()

const currentIcon = computed(() => featureIcons[props.icon] || null)
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
      <component :is="currentIcon" />
    </footer>
  </div>
</template>
