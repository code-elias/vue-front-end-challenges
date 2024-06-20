<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import ChallengeCard from '../components/ChallengeCard.vue'
</script>

<template>
  <main class="main">
    <div class="wrapper">
      <ChallengeCard
        cardTitle="New Challenge"
        cardInfo="TEST"
        cardLink="about"
        cardBgImage="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
      />
    </div>
    <!-- <TheWelcome /> -->
  </main>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
