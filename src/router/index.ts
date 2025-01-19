import { createRouter, createWebHistory } from 'vue-router'
import schoolList from '@/views/school-list.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'schoolList',
      component: schoolList,
    },
  ],
})

export default router
