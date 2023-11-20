import './assets/main.css'
import './assets/style.css'
import { useTaskStore } from '@/stores/task'
import { useCounterStore } from '@/stores/counter'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
export const tasksStore = useTaskStore()
export const counterStore = useCounterStore()
app.mount('#app')
