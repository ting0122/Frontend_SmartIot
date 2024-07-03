import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'Forestage',
      component: () => import('../views/前台/Forestage.vue')
    }
=======
      name: 'ForeStage',
      component: () => import('../views/前台/ForeStage.vue')
    },
    {
      path: '/BackStage',
      name: 'BackStage',
      component: () => import('../views/後台/BackStage.vue')
    },
>>>>>>> origin/HEAD
  ]
})

export default router
