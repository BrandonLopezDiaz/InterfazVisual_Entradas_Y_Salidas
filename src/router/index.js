import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Inicio from '../components/Inicio.vue'
//Busquedas
import BusquedaCode from '../components/BusquedaCodeCard.vue'
import BusquedaNum from '../components/BusquedaNumEmpleado.vue'
import BusquedaFull from '../components/BusquedaFullName.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashBoard.vue')
    },
    {
      path: '/Inicio',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/BusquedaCodeCard',
      name: 'BusquedaCodeCard',
      component: BusquedaCode
    },
    {
      path: '/BusquedaFull',
      name: 'BusquedaFull',
      component: BusquedaFull
    }, {
      path: '/BusquedaNum',
      name: 'BusquedaNum',
      component: BusquedaNum
    },
  ]
})

export default router
