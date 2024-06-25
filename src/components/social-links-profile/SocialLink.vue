<script setup lang="ts">
defineProps<{
  linkTitle: string
  link: string
}>()
</script>

<template>
  <div class="wrapper">
    <a :href="link" target="_blank" class="link">{{ linkTitle }}</a>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
}

.link {
  display: block;
  width: 100%;
  padding: 0.8rem 0;
  text-align: center;
}
</style>
