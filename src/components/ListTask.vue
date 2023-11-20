<script setup>
import { useTaskStore } from '@/stores/task'
//const emit = defineEmits(['add-task', 'delete-task'])
const { tasks } = defineProps(['tasks'])

const tasksStore = useTaskStore()
</script>

<template>
  <section class="task-list">
    <div class="list">
      <div v-for="task in tasks" :key="task.id" :class="`task-item ${task.done && 'done'}`">
        <label>
          <input type="checkbox" v-model="task.done" />
        </label>
        <div class="task-content">
          <input type="text" v-model="task.name" :readonly="task" />
          <button @click="tasksStore.deleteTask(task)">Delete</button>
        </div>
      </div>
    </div>
  </section>
</template>
