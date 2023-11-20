<script setup>
import { computed } from 'vue'
import FormTask from './components/FormTask.vue'
import ListTask from './components/ListTask.vue'
import ComptadorS from './components/ComptadorS.vue'
import { tasksStore, counterStore } from './main'

const tasks = computed(() => tasksStore.tasks)
const count = computed(() => counterStore.count)
</script>

<template>
  <main>
    <h2>Write your task here!</h2>
    <h3>You have {{ tasks.length }} tasks and {{ tasks.filter((task)=> task.done).length }} tasks done</h3>
    <section>
      <FormTask :tasks="tasks" />
      <ListTask :tasks="tasks" />
    </section>
    <section>
      <ComptadorS :count="count" />
    </section>
  </main>
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
