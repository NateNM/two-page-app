import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import ProductView from '../views/ProductView.vue'
import NotFoundView from "../views/NotFoundView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: ProductView
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFoundView
    }
  ]
})

export default router
