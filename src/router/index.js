import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Inicio from '../pages/Inicio.vue';
import Pedidos from '../components/ListaCompra.vue'
import { useAuthStore } from '../stores/auth'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Inicio,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/auth/Login.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: Pedidos
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  const logado = sessionStorage.getItem('logado');
  if (!authStore.logado && to.name !== 'Login' && !logado)
    return { name: 'Login' };
  else if (logado && to.name === 'Login') return { name: 'Home' };
});

export default router;
