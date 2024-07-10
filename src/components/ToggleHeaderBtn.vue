<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  headerOpen: boolean
  btnColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  btnColor: 'default'
})

const emit = defineEmits<{
  (e: 'toggleHeader', value: boolean): void
}>()

function toggle() {
  emit('toggleHeader', !props.headerOpen)
}
</script>

<template>
  <div>
    <button class="toggle-btn" @click="toggle">
      <Icon
        icon="ic:baseline-keyboard-arrow-up"
        class="icon"
        :class="[{ open: !headerOpen }, btnColor]"
      />
    </button>
  </div>
</template>

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

  &.light {
    color: var(--color-light);
  }

  &.dark {
    color: var(--color-dark);
  }

  // &.default { // For testing
  //   color: greenyellow;
  // }
}
</style>
