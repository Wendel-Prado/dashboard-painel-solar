import { createRouter, createWebHistory } from 'vue-router'
import ScreenDashboard from '../components/ScreenDashboard.vue'
import ScreenUsers from '../components/ScreenUsers.vue'
const routes = [
  {
    path: '/',
    redirect: '/dashboard', // Redireciona para a página de login por padrão
  },

  {
    path: '/dashboard',
    component: ScreenDashboard,
  },
  {
    path: '/users',
    component: ScreenUsers,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
