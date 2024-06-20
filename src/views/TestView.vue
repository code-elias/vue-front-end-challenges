<template>
  <div class="card" @mouseover="scaleUp" @mouseout="scaleDown">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <input v-model="userInput" @input="handleInput" placeholder="Type something..." />
    <p v-if="showMessage">{{ message }}</p>
    <button @click="calculateSquare">Calculate Square</button>
    <button @click="goHome">Go Home</button>
    <button @click="increaseCount">Increase count > {{ count }}</button>
    <p v-if="result !== null">Square of {{ number }} is {{ result }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Define reactive state variables
const title = ref<string>('Simple Card')
const description = ref<string>('This is a description of the card.')
const userInput = ref<string>('')
const message = ref<string>('')
const showMessage = ref<boolean>(false)
const number = ref<number>(0)
const result = ref<number | null>(null)
let count = ref<number>(0)

// Define functions
const handleInput = () => {
  message.value = `You typed: ${userInput.value}`
  showMessage.value = true
}

const calculateSquare = () => {
  result.value = number.value ** 2
}

const router = useRouter()
const goHome = () => {
  router.push('/')
}

const scaleUp = (event: Event) => {
  ;(event.currentTarget as HTMLElement).style.transform = 'scale(1.1)'
}

const scaleDown = (event: Event) => {
  ;(event.currentTarget as HTMLElement).style.transform = 'scale(1)'
}

function increaseCount() {
  count.value++
  console.log(count.value)
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: transform 0.3s;

  h2 {
    margin: 0 0 10px;
  }

  p {
    margin: 10px 0;
  }

  input {
    margin: 10px 0;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    margin: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: 600px) {
    padding: 10px;
    font-size: 14px;
  }
}
</style>
