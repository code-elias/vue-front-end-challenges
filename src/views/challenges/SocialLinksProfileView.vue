<script setup lang="ts">
import { onMounted } from 'vue'
import SocialLink from '../../components/social-links-profile/SocialLink.vue'

onMounted(() => {
  console.log('Mounted Social Links')
})
</script>

<template>
  <div class="container">
    <div class="card flex-col-center">
      <header class="card__header flex-col-center">
        <div class="avatar img-container">
          <img src="/images/avatar-jessica.jpeg" alt="Profile Picture" class="avatar__img" />
        </div>

        <section class="card-title flex-col-center">
          <h2 class="card-title__name">Elias Golam</h2>
          <p class="card-title__location">Milan, Italy</p>
        </section>

        <section class="card-subtitle">
          <p>Software Developer, UI/UX Designer and Creative Writer</p>
        </section>
      </header>

      <section class="social">
        <SocialLink class="social__link" linkTitle="GitHub" link="https://www.google.com/" />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/css/challenges/SocialLinksProfileCard.scss';
</style>
