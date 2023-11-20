import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([])

  const addTask = (taskText) => {
    tasks.value.unshift({ name: taskText, done: false, id: Math.floor(Math.random() * 999) })
  }

  const toggleTask = (index) => {
    tasks.value[index].done = true
  }

  const deleteTask = (task) => {
    tasks.value = tasks.value.filter((x) => x !== task)
  }

  return { tasks, addTask, toggleTask, deleteTask }
})
