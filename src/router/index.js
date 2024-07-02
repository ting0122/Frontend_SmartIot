import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'forestage',
      component: () => import('../views/前台/forestage.vue')
    }
  ]
})

export default router
