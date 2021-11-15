import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/meinePflanzen'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/meinePflanzen'
      },
      {
        path: 'meinePflanzen',
        component: () => import('@/views/MeinePflanzen.vue')
      },
      {
        path: 'datenbank',
        component: () => import('@/views/PflanzenDatenbank.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      },
      {
        path: 'addPlant',
        component: () => import('@/views/AddPlant.vue')
      },
      {
        path: 'detailsPlant',
        component: () => import('@/views/PflanzenDatenbankDetails.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
