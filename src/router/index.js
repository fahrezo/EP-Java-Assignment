import { createRouter, createWebHistory } from 'vue-router'
import ResultPage from '../views/ResultPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ResultPage
    }
  ]
})

export default router