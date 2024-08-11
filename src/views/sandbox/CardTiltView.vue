<script setup lang="ts">
import TiltCard from '@/components/cards/TiltCard.vue'
</script>

<template>
  <div id="card-tilt-page" class="card-tilt-page">
    <TiltCard class="sandbox-tiltcard" />
  </div>
</template>

<style lang="scss" scoped>
.card-tilt-page {
  --dark-pink: rgb(240, 127, 127);
  --dark-peach: rgb(244, 152, 144);
  --peach: rgb(248, 172, 155);
  --light-peach: rgb(251, 197, 172);
  --light-gold: rgb(255, 217, 184);

  --dark-pink-25: rgb(240, 127, 127, 0.25);
  --dark-pink-50: rgb(240, 127, 127, 0.5);

  --background-color: var(--light-peach);
  --shadow-1: var(--dark-peach);
  --card-color: var(--dark-pink-50);
}

.card-tilt-page {
  $bg-color: var(--background-color);

  background-color: $bg-color;
  min-width: 100%;
  min-height: calc(100vh - var(--min-header-h));

  display: flex;
  justify-content: center;
  align-items: center;

  .sandbox-tiltcard {
    $shadow-1: var(--shadow-1);
    $card-bg-color: var(--card-color);
    $card-w: 200px;
    $card-h: 300px;
    $card-radius: 15px;

    width: $card-w;
    height: $card-h;
    background-color: $card-bg-color;
    border-radius: $card-radius;
    // Padding
  }
}
</style>
