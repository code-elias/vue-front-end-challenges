<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { SocialLink } from '@/models/SocialLink'
import SocialLinkComponent from '../../components/social-links-profile/SocialLink.vue'

const emit = defineEmits<{
  (e: 'showHeader', show: boolean): void
}>()

onMounted(() => {
  emit('showHeader', false)
})

const socialLinks = ref<SocialLink[]>([
  new SocialLink('GitHub', 'https://github.com/EliGolam'),
  new SocialLink('Frontend Mentor', 'https://www.frontendmentor.io/profile/EliGolam'),
  new SocialLink('LinkedIn', 'https://www.linkedin.com/in/mahfuzul-golam/'),
  new SocialLink('Twitter', 'https://twitter.com/'),
  new SocialLink('Instagram', 'https://www.instagram.com/')
])
</script>

<template>
  <div class="container">
    <div class="card flex-col-center">
      <header class="card__header flex-col-center">
        <div class="avatar img-container">
          <img src="/images/author-image.webp" alt="Profile Picture" class="avatar__img" />
        </div>

        <section class="card-title flex-col-center">
          <h2 class="card-title__name">Elias Golam</h2>
          <p class="card-title__location">Milan, Italy</p>
        </section>

        <section class="card-subtitle">
          <p>Software Developer, UI/UX Designer and Creative Writer</p>
        </section>
      </header>

      <section class="social flex-col-center">
        <SocialLinkComponent
          v-for="(link, index) in socialLinks"
          class="social__link"
          :key="index"
          :linkTitle="link.title"
          :link="link.url"
        />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/css/challenges/SocialLinksProfileCard.scss';
</style>
