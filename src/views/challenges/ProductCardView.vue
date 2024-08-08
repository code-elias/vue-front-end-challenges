<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onMounted } from 'vue'

const emit = defineEmits<{
  showHeader: [show: boolean]
  setHeaderToggleColor: [color: string]
}>()

onMounted(() => {
  emit('showHeader', false)
  emit('setHeaderToggleColor', 'dark')
})
</script>

<template>
  <div class="challenge-product-card">
    <div class="card">
      <div class="card__banner">
        <img
          class="card__banner__img img-mobile"
          src="../../assets/img/image-product-mobile.jpg"
          alt="Photo of a Chanel Perfume bottle"
        />
        <img
          class="card__banner__img img-desktop"
          src="../../assets/img/image-product-desktop.jpg"
          alt="Photo of a Chanel Perfume bottle"
        />
      </div>

      <div class="card__wrapper">
        <header class="card__header">
          <h2 class="card__header__title">Gabrielle Essence Eau De Parfum</h2>
          <p class="card__header__subtitle">Perfume</p>
        </header>

        <div class="card__body flow">
          <p class="card__body__content">
            A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </p>
          <div class="card__body__price-tag">
            <p class="card__body__price-tag__discount text-green">$149.99</p>
            <p class="card__body__price-tag__old">
              <s>$169.99</s>
            </p>
          </div>
        </div>

        <footer class="card__footer">
          <button class="card__footer__btn">
            <Icon icon="ic:outline-shopping-cart" class="card__footer__btn__icon" />
            Add to Cart
          </button>
        </footer>
      </div>
    </div>

    <div class="attribution">
      <p>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      </p>
      <p>Coded by <a href="#">@CodeElias (Elias)</a>.</p>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/css/challenges/ProductCard.scss';
</style>
