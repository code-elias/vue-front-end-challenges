<script setup lang="ts">
import ChallengeCard from '../components/ChallengeCard.vue'
</script>

<template>
  <div class="wrapper card-container">
    <ChallengeCard
      cardTitle="Blog Preview Card"
      cardInfo="Challenge to create a Blog Preview Card using HTML and CSS"
      cardLink="blog-preview-card"
      cardBgImage="/images/illustration-article.svg"
      cardBgPosition="top"
    />

    <ChallengeCard
      cardTitle="Social links profile"
      cardInfo="Social link-sharing profile"
      cardLink="social-links-profile"
      cardBgImage="/images/social-link-page-preview.png"
      cardBgPosition="top"
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
}
</style>
