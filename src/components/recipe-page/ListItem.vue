<script setup lang="ts">
defineProps<{
  emphasis: string
  text: string
}>()
</script>

<template>
  <li>
    <strong class="emphasis"> {{ emphasis }} </strong>: {{ text }}
  </li>
</template>

<style lang="scss" scoped></style>
