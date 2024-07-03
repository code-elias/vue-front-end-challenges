<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { SocialLink } from '@/models/SocialLink'
import SocialLinkComponent from '../../components/social-links-profile/SocialLink.vue'
import { PersonalSocials } from '../../data/PersonalSocials'

const emit = defineEmits<{
  // (e: 'showHeader', show: boolean): void // Version below 3.2
  showHeader: [show: boolean] // From v3.3+
  setHeaderToggleColor: [color: string]
}>()

onMounted(() => {
  emit('showHeader', false)
  emit('setHeaderToggleColor', 'light')
})

const socialLinks = ref<SocialLink[]>(PersonalSocials)
</script>

<template>
  <div class="container">
    <div class="card flex-col-center">
      <header class="card__header flex-col-center">
        <div class="avatar img-container">
          <img src="/images/author-image.webp" alt="Elias Profile Picture" class="avatar__img" />
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
