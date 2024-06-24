<script setup lang="ts">
import ChallengeCard from '../components/ChallengeCard.vue'
</script>

<template>
  <div class="wrapper">
    <ChallengeCard
      cardTitle="Blog Preview Card"
      cardInfo="TEST"
      cardLink="blog-preview-card"
      cardBgImage="/images/illustration-article.svg"
      cardBgPosition="top"
    />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
</style>
