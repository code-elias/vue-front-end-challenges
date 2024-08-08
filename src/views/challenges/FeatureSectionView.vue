<script lang="ts" setup>
import FeaturesCards from '@/components/feature-section/FeaturesCards.vue'
import FeaturesHeader from '@/components/feature-section/FeaturesHeader.vue'
import { onMounted } from 'vue'

const emit = defineEmits<{
  (e: 'showHeader', show: boolean): void
}>()

onMounted(() => {
  emit('showHeader', false)
})
</script>

<template>
  <div class="challenge-feature-section">
    <FeaturesHeader />
    <FeaturesCards />
  </div>
</template>

<style lang="scss">
@import '../../assets/css/challenges/FeatureSection.scss';
</style>
