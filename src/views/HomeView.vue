<script setup lang="ts">
import ChallengeCard from '../components/ChallengeCard.vue'
import { HomeChallengeCards } from '../data/HomeChallengeCards'
</script>

<template>
  <div class="wrapper card-container">
    <ChallengeCard
      v-for="(card, index) in HomeChallengeCards"
      :key="index"
      :cardTitle="card.Title"
      :cardInfo="card.Info"
      :cardLink="card.Link"
      :cardBgImage="card.BgImg"
      :cardBgPosition="card.BgPosition"
    />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  flex: 1;
}

.card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 3rem 0;
}
</style>
