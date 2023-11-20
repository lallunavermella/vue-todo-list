import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function increment() {
    this.count++
  }
  function decrement() {
    this.count--
  }
  function random() {
    this.count = Math.round(100 * Math.random())
  }

  function doubleCount() {
    this.count = this.count * 2
  }
  return { count, doubleCount, increment, random, decrement }
})
