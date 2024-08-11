<script setup lang="ts">
import ChallengeCard from '@/components/ChallengeCard.vue'
import HomePageSection from '@/components/HomePageSection.vue'
// import { HomeChallengeCards } from '@/data/HomeChallengeCards'
import { homeCards } from '@/data/HomeCards'
</script>

<template>
  <div class="wrapper">
    <HomePageSection v-for="(section, index) in homeCards" :key="index" :section="section" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  flex: 1;
  padding: 3rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
