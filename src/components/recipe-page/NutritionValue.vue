<script setup lang="ts">
import SectionDivider from './SectionDivider.vue'

defineProps<{
  category: string
  amount: string
}>()
</script>

<template>
  <div class="wrapper">
    <p class="line">
      <span class="line__category">{{ category }}</span>
      <span class="line__amount">{{ amount }}</span>
    </p>

    <SectionDivider :tightSpacing="true" />
  </div>
</template>

<style lang="scss">
.line {
  display: flex;

  > * {
    width: 50%;
  }

  &__amount {
    font-weight: var(--fw-600);
    color: var(--clr-nutmeg);
  }
}
</style>
