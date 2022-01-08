import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
//import i18n from '../i18n'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/:lang/tabs/meinePflanzen'
    //redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/:lang/tabs/meinePflanzen'
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
        path: 'datenbank/:pid',
        component: () => import('@/views/PflanzenDatenbankDetails.vue')
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
        path: 'login',
        component: () => import('@/views/Login.vue')
      },
      {
        path: 'reg',
        component: () => import('@/views/Registration.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
