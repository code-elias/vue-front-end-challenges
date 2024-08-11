<script lang="ts" setup>
import FeatureCard from '@/components/feature-section/FeatureCard.vue'
import { cards } from '@/data/FeatureSection/FeatureCards'

const { supervisor, teamBuilder, karma, calculator } = cards
</script>

<template>
  <div class="card-container">
    <div class="card-container__1">
      <FeatureCard
        :title="supervisor.Title"
        :body="supervisor.Body"
        :top-border="supervisor.BorderColor"
        :icon="supervisor.Icon"
      />
    </div>
    <div class="card-container__2">
      <FeatureCard
        :title="teamBuilder.Title"
        :body="teamBuilder.Body"
        :top-border="teamBuilder.BorderColor"
        :icon="teamBuilder.Icon"
      />
      <FeatureCard
        :title="karma.Title"
        :body="karma.Body"
        :top-border="karma.BorderColor"
        :icon="karma.Icon"
      />
    </div>
    <div class="card-container__3">
      <FeatureCard
        :title="calculator.Title"
        :body="calculator.Body"
        :top-border="calculator.BorderColor"
        :icon="calculator.Icon"
      />
    </div>
  </div>
</template>
