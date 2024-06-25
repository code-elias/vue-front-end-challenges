<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Mounted Social Links')
})
</script>

<template>
  <div class="container">
    <div class="card test">
      <div class="avatar img-container">
        <img src="/images/avatar-jessica.jpeg" alt="Profile Picture" class="avatar__img" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/css/challenges/SocialLinksProfileCard.scss';
</style>
