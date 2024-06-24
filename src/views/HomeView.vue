<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
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
  <!-- <TheWelcome /> -->
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
