import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',


      name: 'ForeStage',
      component: () => import('../views/前台/ForeStage.vue')
    },
    {
      path: '/BackStage',
      name: 'BackStage',
      component: () => import('../views/後台/BackStage.vue')
    },

  ]
})

export default router
 