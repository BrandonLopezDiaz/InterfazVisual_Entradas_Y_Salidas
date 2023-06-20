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
      //Declaro a mi componente una que va a respoder a path y en el codigo va ser llamado como estan en el name.
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashBoard.vue')
    },
    {
      //Declaro a mi componente una que va a respoder a path y en el codigo va ser llamado como estan en el name.
      path: '/Inicio',
      name: 'Inicio',
      component: Inicio
    },
    {
      //Declaro a mi componente una que va a respoder a path y en el codigo va ser llamado como estan en el name.
      path: '/BusquedaCodeCard',
      name: 'BusquedaCodeCard',
      component: BusquedaCode
    },
    {
      //Declaro a mi componente una que va a respoder a path y en el codigo va ser llamado como estan en el name.
      path: '/BusquedaFull',
      name: 'BusquedaFull',
      component: BusquedaFull
    }, 
    {
      //Declaro a mi componente una que va a respoder a path y en el codigo va ser llamado como estan en el name.
      path: '/BusquedaNum',
      name: 'BusquedaNum',
      component: BusquedaNum
    },
    {
      //Declaro a mi componente una que va a respoder a path y en el codigo va ser llamado como estan en el name.
      path: '/BusquedaFechaYNumEmp',
      name: 'BusquedaFechaYNumEmp',
      component: BusquedaFechaYNumEmp
    },
    {
      //Declaro a mi componente una que va a respoder a path y en el codigo va ser llamado como estan en el name.
      path: '/BusquedaFechaYFullName',
      name: 'BusquedaFechaYFullName',
      component: BusquedaFechaYFullName
    },
    {
      //Declaro a mi componente una que va a respoder a path y en el codigo va ser llamado como estan en el name.
      path: '/BusquedaFechaYCodeCard',
      name: 'BusquedaFechaYCodeCard',
      component: BusquedaFechaYCodeCard
    },
    {
      //Declaro a mi componente una que va a respoder a path y en el codigo va ser llamado como estan en el name.
      path: '/BusquedaNumEmpYPanelYFecha',
      name: 'BusquedaNumEmpYPanelYFecha',
      component: BusquedaNumEmpYPanelYFecha
    },
    {
      //Declaro a mi componente una que va a respoder a path y en el codigo va ser llamado como estan en el name.
      path: '/BusquedaNumpYPanel',
      name: 'BusquedaNumpYPanel',
      component: BusquedaNumpYPanel
    }
  ]
})

export default router
