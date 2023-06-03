import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Inicio from '../components/Inicio.vue'
//Busquedas
import BusquedaCode from '../components/BusquedaCodeCard.vue'
import BusquedaNum from '../components/BusquedaNumEmpleado.vue'
import BusquedaFull from '../components/BusquedaFullName.vue'
//Busquedas por dos condiciones
import BusquedaFechaYNumEmp from '../components/BusquedaFechaYNumEmp.vue'
import BusquedaFechaYFullName from '../components/BusquedaFechaYFullName.vue'
import BusquedaFechaYCodeCard from '../components/BusquedaFechaYCodeCard.vue'
import BusquedaNumpYPanel from '../components/BusquedaNumpYPanel.vue'
//Busqueda por tres condiciones
import BusquedaNumEmpYPanelYFecha from '../components/BusquedaNumEmpYPanelYFecha.vue'

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
    {
      path: '/BusquedaFechaYNumEmp',
      name: 'BusquedaFechaYNumEmp',
      component: BusquedaFechaYNumEmp
    },
    {
      path: '/BusquedaFechaYFullName',
      name: 'BusquedaFechaYFullName',
      component: BusquedaFechaYFullName
    },
    {
      path: '/BusquedaFechaYCodeCard',
      name: 'BusquedaFechaYCodeCard',
      component: BusquedaFechaYCodeCard
    },
    {
      path: '/BusquedaNumEmpYPanelYFecha',
      name: 'BusquedaNumEmpYPanelYFecha',
      component: BusquedaNumEmpYPanelYFecha
    },
    {
      path: '/BusquedaNumpYPanel',
      name: 'BusquedaNumpYPanel',
      component: BusquedaNumpYPanel
    }
  ]
})

export default router
