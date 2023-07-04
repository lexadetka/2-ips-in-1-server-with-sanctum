import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/Login.vue')
    },

    {
      path: '/testPatch',
      name: 'testPatch',
      component: () => import('../views/pages/TestPatch.vue')
    }
  ]
})

export default router
