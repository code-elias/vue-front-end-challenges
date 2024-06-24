<template>
  <div>
    <button class="toggle-btn" @click="toggle">
      <Icon icon="ic:baseline-keyboard-arrow-up" class="icon" :class="{ open: !headerOpen }" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps<{
  headerOpen: boolean // Prop to keep track of the State of the Header
}>()

const emit = defineEmits<{
  (e: 'toggleHeader', value: boolean): void
}>()

function toggle() {
  emit('toggleHeader', !props.headerOpen)
}
</script>

<style lang="scss" scoped>
.toggle-btn {
  position: absolute;
  z-index: 90;
}

.icon {
  font-size: 4rem;
  transition: transform 300ms ease-in-out 200ms;

  &.open {
    transform: rotate(180deg);
  }
}
</style>
