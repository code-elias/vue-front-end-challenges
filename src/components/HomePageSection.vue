<script setup lang="ts">
import type { HomeSection } from '@/models/HomeSection'
import ChallengeCard from '@/components/ChallengeCard.vue'
import { onMounted } from 'vue'

const props = defineProps<{
  section: HomeSection
}>()

onMounted(() => {
  console.log(props.section)
})
</script>

<template>
  <div :id="section.id" class="homepage-section">
    <h2>{{ section.title }}</h2>
    <div class="card-container">
      <ChallengeCard
        v-for="(card, index) in section.cards"
        :key="index"
        :cardTitle="card.Title"
        :cardInfo="card.Info"
        :cardLink="card.Link"
        :cardBgImage="card.BgImg"
        :cardBgPosition="card.BgPosition"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.homepage-section {
  @include flex-center;
  flex-direction: column;
  gap: 2rem;
}

.card-container {
  @include flex-center;
  gap: 3rem;
}
</style>
