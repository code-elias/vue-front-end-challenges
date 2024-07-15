<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps<{
  cardTitle: string
  cardInfo: string
  cardLink: string
  cardBgImage: string
  cardBgPosition?: string
}>()

const cardStyle = computed(() => ({
  backgroundImage: `url(${props.cardBgImage})`,
  backgroundPosition: props.cardBgPosition
}))

function goToLink() {
  router.push(props.cardLink)
}
</script>

<template>
  <div class="card pointer" :style="cardStyle" @click="goToLink">
    <div class="card-content">
      <h3 class="card-title">{{ cardTitle }}</h3>
      <p class="cardInfo">{{ cardInfo }}</p>
      <div class="link-container">
        <RouterLink class="link" :to="cardLink">Explore</RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  /* Shape and size */
  width: 27ch;
  height: 40ch;
  border-radius: 15px;
  overflow: hidden;

  /* Content */
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1em;

  // background-image: url('/src/assets/images/illustration-article.svg');
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow:
    10px 10px 0 -5px var(--color-background),
    10px 10px 0 -2px var(--color-accent);

  /* Transitions */
  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus-within {
    // transform: scale(1.05);
    transform: translate(-5px, -5px);
  }
}

.card-content {
  padding: 0.7rem 1rem;
  color: var(--vt-c-white-soft);
  background: linear-gradient(var(--vt-c-divider-dark-2), var(--vt-c-divider-dark-2) 12%, var(--vt-c-indigo));
}
</style>
