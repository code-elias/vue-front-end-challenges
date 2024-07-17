<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

withDefaults(
  defineProps<{
    tightSpacing?: boolean
  }>(),
  {
    tightSpacing: true
  }
)
</script>

<template>
  <hr class="section-divider" :class="{ tight: tightSpacing }" />
</template>

<style lang="scss" scoped>
.section-divider {
  margin: 1rem 0;
  border: 1px solid var(--clr-light-grey);

  &.tight {
    margin: 0.5rem 0;
  }
}
</style>
