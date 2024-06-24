<template>
  <div class="container">
    <div class="card card-decoration">
      <div class="card-header img-container">
        <img
          class="card-img"
          src="/images/illustration-article.svg"
          alt="HTML and CSS card banner"
        />
      </div>

      <div class="card-info">
        <a href="" class="card-label" target="_blank">Learning</a>
        <p class="card-date">Published 21 Dec 2023</p>
        <h2 class="card-title pointer">HTML & CSS foundations</h2>
        <p class="card-body">
          These languages are the backbone of every website, defining structure, content, and
          presentation.
        </p>
      </div>

      <div class="card-author">
        <div class="author-pfp img-container">
          <img src="/images/author-image.webp" alt="" class="author-pfp-img card-img" />
        </div>
        <a href="https://github.com/EliGolam" target="_blank" class="author-name">Elias Golam</a>
      </div>
    </div>

    <!-- <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const emit = defineEmits<{
  (e: 'showHeader', show: boolean): void
}>()

onMounted(() => {
  console.log('On Mounter')
  emit('showHeader', false)
})
</script>

<style lang="scss" scoped>
@import '../../assets/css/challenges/BlogPreviewCard.scss';
</style>
