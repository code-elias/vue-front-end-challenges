<script setup lang="ts">
// import { ref } from 'vue'
import { onMounted } from 'vue'
import SectionDivider from '../../components/recipe-page/SectionDivider.vue'
import ListItem from '../../components/recipe-page/ListItem.vue'
import NutritionValue from '../../components/recipe-page/NutritionValue.vue'

// Data
import { prepTime } from '../../data/RecipePage/PrepTime.ts'
import { instructions } from '../../data/RecipePage/Instructions.ts'
import { ingredients } from '../../data/RecipePage/Ingredients.ts'
import { nutritionValues } from '../../data/RecipePage/NutritionValues.ts'

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
  <div class="container">
    <figure class="img-container">
      <img src="/images/image-omelette.jpeg" alt="A beautiful omelette" />
    </figure>

    <div class="recipe">
      <section class="hero">
        <div class="hero__info">
          <h2 class="recipe__title">Simple Omelette Recipe</h2>
          <p class="recipe__summary">
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs
            cooked to perfection, optionally filled with your choice of cheese, vegetables, or
            meats.
          </p>
        </div>
      </section>

      <section class="prep-time info-block">
        <h3 class="info-block__header">Preparation time</h3>
        <ul class="prep-time__list">
          <!-- <li v-for="(element, index) in prepTime" :key="index" class="prep-time__element">
            <strong class="emphasis"> {{ element.Emphasis }} </strong>: {{ element.Text }}
          </li> -->
          <ListItem
            v-for="(element, index) in prepTime"
            :key="index"
            class="prep-time__element"
            :emphasis="element.Emphasis"
            :text="element.Text"
          />
        </ul>
      </section>

      <section class="ingredients">
        <h3 class="section-header">Ingredients</h3>
        <ul class="ingredients__list">
          <li v-for="(ingredient, index) in ingredients" :key="index" class="ingredients__item">
            {{ ingredient }}
          </li>
        </ul>
      </section>

      <SectionDivider />

      <section class="instructions">
        <h3 class="section-header">Instructions</h3>
        <ol class="instructions__steps">
          <ListItem
            v-for="(step, index) in instructions"
            :key="index"
            class="instructions__step"
            :emphasis="step.Emphasis"
            :text="step.Text"
          />
        </ol>
      </section>

      <SectionDivider />

      <section class="nutrition">
        <h3 class="section-header">Nutrition</h3>
        <p>The table below shows nutritional values per serving without the additional fillings.</p>

        <!-- Find how to style this place -->
        <div class="nutrition__table">
          <NutritionValue
            v-for="(value, index) in nutritionValues"
            :key="index"
            class="nutrition__value"
            :category="value.Category"
            :amount="value.Amount"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/css/challenges/RecipePage.scss';
</style>
