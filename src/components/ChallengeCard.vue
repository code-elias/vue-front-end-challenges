<template>
  <div
    class="card pointer"
    :style="{ backgroundImage: `url(${cardBgImage})`, backgroundPosition: cardBgPosition }"
  >
    <div class="card-content">
      <h3 class="card-title">{{ cardTitle }}</h3>
      <p class="cardInfo">{{ cardInfo }}</p>
      <RouterLink :to="cardLink">Explore</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  cardTitle: String
  cardInfo: String
  cardLink: String
  cardBgImage: String
  cardBgPosition: String
}>()
</script>

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
  background-size: cover;

  /* Transitions */
  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus-within {
    transform: scale(1.05);
  }
}

.card-content {
  padding: 0.7rem 1rem;
  color: var(--vt-c-white-soft);
  background: linear-gradient(
    var(--vt-c-divider-dark-2),
    var(--vt-c-divider-dark-2) 12%,
    var(--vt-c-indigo)
  );
}

/*
.card {
  --clr-neutral-dark: hsl(207, 19%, 5%);
  --clr-neutral: hsl(0, 0%, 100%);
  --clr-accent: hsl(142, 90%, 61%);
  color: var(--clr-neutral);
  background-image: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg);
  background-position: bottom;
  background-size: cover;
  padding: 10rem 0 0;
  max-width: 35ch;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  transition: transform 500ms ease;
}

.card:hover,
.card:focus-within {
  transform: scale(1.05);
}

.card-content {
  --padding: 1.5rem;
  padding: var(--padding);
  background: linear-gradient(hsl(213 5% 1% / 0), hsl(213 5% 1% / 0.4) 12%, hsl(213 5% 1% / 1));
}

.card-title {
  position: relative;
  width: max-content;
}

.card-title::after {
  content: '';
  position: absolute;
  left: calc(var(--padding) * -1);
  bottom: -3px;
  height: 4px;
  width: calc(100% + var(--padding));
  background-color: var(--clr-accent);
  border-radius: 0 100px 100px 0;

  transform-origin: right;
  transition: transform 500ms cubic-bezier(0.69, 0.25, 0.82, 0.56);
}

.card:hover .card-title:after,
.card:focus-within .card-title:after {
  transform-origin: left;
  transform: scaleX(1);
}

.card-body {
  color: rgba(255, 255, 255, 0.85);
}

.button {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: var(--clr-neutral-dark);
  background-color: limegreen;
  border: none;
  border-radius: 100px;
  padding: 0.4em 1.2em;

  transition: background-color 400ms ease-out;
}

.button:hover,
.button:focus {
  background-color: var(--clr-neutral);
}

@media (hover) {
  .card-content {
    transform: translateY(68%);
    transition: transform 500ms ease;
  }

  .card:hover .card-content,
  .card:focus-within .card-content {
    transform: translateY(0%);
    transition-delay: 500ms;
  }

  .card:focus-within .card-content {
    transition-duration: 0ms;
  }

  .card-content > *:not(.card-title) {
    opacity: 0;
    transition: opacity 300ms ease;
    transition-delay: 1000ms;
  }

  .card:hover .card-content > *:not(.card-title),
  .card:focus-within .card-content > *:not(.card-title) {
    opacity: 1;
  }

  .card:focus-within .card-content > *:not(.card-title) {
    transition-delay: 500ms;
  }

  .card-title::after {
    transform: scaleX(0);
  }
}
  */
</style>
