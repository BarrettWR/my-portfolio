import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Work from '../views/Work.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: About
    },
    {
      path: '/work',
      component: Work
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})

export default router
