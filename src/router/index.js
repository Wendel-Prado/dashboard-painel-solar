import { createRouter, createWebHistory } from 'vue-router'
import ScreenLogin from '../components/ScreenLogin.vue'
import ScreenDashboard from '../components/ScreenDashboard.vue'
import ScreenUsers from '../components/ScreenUsers.vue'
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
