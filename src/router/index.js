import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Forestage',
      component: () => import('../views/前台/Forestage.vue')
    }
  ]
})

export default router
