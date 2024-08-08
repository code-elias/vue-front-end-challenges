<script lang="ts" setup>
import { featuresHeaderInfo } from '@/data/FeatureSection/FeaturesHeaderInfo'
</script>

<template>
  <div class="container">
    <header class="header">
      <div class="header__first-container">
        <h2 class="header__title">{{ featuresHeaderInfo.title }}</h2>
        <p class="header__subtitle">{{ featuresHeaderInfo.subtitle }}</p>
      </div>

      <p class="header__body">{{ featuresHeaderInfo.body }}</p>
    </header>
  </div>
</template>
