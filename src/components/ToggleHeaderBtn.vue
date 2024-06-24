<template>
  <div>
    <button class="toggle-btn" @click="toggle">
      <Icon icon="ic:baseline-keyboard-arrow-up" class="icon" :class="{ open: !headerOpen }" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
// const emit = defineEmits(['toggleHeader'])
// const headerOpen = ref<boolean>(false)

const props = defineProps<{
  headerOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleHeader', value: boolean): void
}>()

function toggle() {
  emit('toggleHeader', !props.headerOpen)
  // headerOpen.value = !headerOpen.value
}
</script>

<style lang="scss" scoped>
.toggle-btn {
  position: absolute;
}

.icon {
  font-size: 4rem;
  transition: transform 300ms ease-in-out 200ms;

  &.open {
    transform: rotate(180deg);
  }
}
</style>
