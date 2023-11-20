<script setup>
import { ref } from 'vue'
import { tasksStore } from '../main'

const { tasks } = defineProps(['tasks'])

const text = ref('')

const addTask = () => {
  if (text.value.trim() !== '') {
    const index = tasks.findIndex((task) => task.name === text.value)

    if (index !== -1) {
      tasksStore.toggleTask(index)
      text.value = ''
    } else {
      tasksStore.addTask(text.value)
      text.value = ''
    }
  }
}
</script>

<template>
  <section>
    <form @submit.prevent="addTask">
      <label>
        write here
        <input type="text" placeholder="eat tuna" v-model="text" />
        <button @click="addTask" type="submit">Add task</button>
      </label>
    </form>
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
