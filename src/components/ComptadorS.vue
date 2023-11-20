<script setup>
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()

const { count } = defineProps(['count'])
</script>
<template>
  <div>Aqui va un comptador</div>
  <div>{{ count }}</div>
  <button @click="counterStore.increment">increment</button>
  <button @click="counterStore.decrement">decrement</button>
  <button @click="counterStore.random">random</button>
  <button @click="counterStore.doubleCount">doble</button>
</template>
