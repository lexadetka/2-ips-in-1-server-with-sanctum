import {createRouter, createWebHistory} from 'vue-router'

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
        },
        {
            path: '/testPost',
            name: 'testPost',
            component: () => import('../views/pages/TestPost.vue')
        },
        {
            path: '/registration',
            name: 'registration',
            component: () => import('../views/auth/registration.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token')

    if (!token) {
        if (to.name === 'login' || to.name === 'registration') {
          return next()
        } else {
          return next({
            name:'login'
          })
        }
    }
  if (to.name === 'login' || to.name === 'registration' && token){
   return next({
     name: 'testPatch'
   })
  }
  next()
})

export default router
