import { createRouter, createWebHistory } from 'vue-router'
import ScreenLogin from '../components/ScreenLogin.vue'
import ScreenDashboard from '../components/ScreenDashboard.vue'
const routes = [
  {
    path: '/',
    redirect: '/login', // Redireciona para a página de login por padrão
  },
  {
    path: '/login',
    component: ScreenLogin,
  },
  {
    path: '/dashboard',
    component: ScreenDashboard,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
