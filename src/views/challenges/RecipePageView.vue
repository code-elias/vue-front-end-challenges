<script setup lang="ts">
// import { ref } from 'vue'
import { onMounted } from 'vue'
import SectionDivider from '../../components/recipe-page/SectionDivider.vue'
import ListItem from '../../components/recipe-page/ListItem.vue'

const emit = defineEmits<{
  showHeader: [show: boolean]
  setHeaderToggleColor: [color: string]
}>()

onMounted(() => {
  emit('showHeader', false)
  emit('setHeaderToggleColor', 'dark')
})

const prepTimeElements = [
  {
    Emphasis: 'Total',
    Text: 'Approximately 10 minutes'
  },
  {
    Emphasis: 'Preparation',
    Text: '5 minutes'
  },
  {
    Emphasis: 'Cooking',
    Text: '5 minutes'
  }
]

const ingredients = [
  '2-3 large eggs',
  'Salt, to taste',
  'Pepper, to taste',
  '1 tablespoon of butter or oil',
  'Optional fillings: cheese, diced vegetables, cooked meats, herbs'
]

const instructions = [
  {
    Emphasis: 'Beat the eggs',
    Text: 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.'
  },
  {
    Emphasis: 'Heat the pan',
    Text: 'Place a non-stick frying pan over medium heat and add butter or oil.'
  },
  {
    Emphasis: 'Cook the omelette',
    Text: 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.'
  },
  {
    Emphasis: 'Add fillings (optional)',
    Text: 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.'
  },
  {
    Emphasis: 'Fold and serve',
    Text: 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.'
  },
  {
    Emphasis: 'Enjoy',
    Text: 'Serve hot, with additional salt and pepper if needed.'
  }
]

const nutritionValues = [
  {
    Category: 'Calories',
    Amount: '277kcal'
  },
  {
    Category: 'Carbs',
    Amount: '0g'
  },
  {
    Category: 'Protein',
    Amount: '20g'
  },
  {
    Category: 'Fat',
    Amount: '22g'
  }
]
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
        <h3 class="info-header">Preparation time</h3>
        <ul class="prep-time__list">
          <!-- <li v-for="(element, index) in prepTimeElements" :key="index" class="prep-time__element">
            <strong class="emphasis"> {{ element.Emphasis }} </strong>: {{ element.Text }}
          </li> -->
          <ListItem
            v-for="(element, index) in prepTimeElements"
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
          <div v-for="(value, index) in nutritionValues" :key="index" class="nutrition__value">
            {{ value.Category }} - {{ value.Amount }}
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/css/challenges/RecipePage.scss';
</style>
