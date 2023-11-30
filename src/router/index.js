import { createRouter, createWebHistory } from 'vue-router'
import Entry from '../views/Entry.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Entry',
      component: Entry
    },
    {
      path: '/VtextAndVmodel',
      name: 'VtextAndVmodel',
      component: () => import('../views/VtextAndVmodel.vue')
    },
    {
      path: '/Vfor',
      name: 'Vfor',
      component: () => import('../views/Vfor.vue')
    },
    {
      path: '/Von',
      name: 'Von',
      component: () => import('../views/Von.vue')
    },
    {
      path: '/Vbind',
      name: 'Vbind',
      component: () => import('../views/Vbind.vue')
    },
    {
      path: '/VifAndVshow',
      name: 'VifAndVshow',
      component: () => import('../views/VifAndVshow.vue')
    },
    {
      path: '/WatchAndComputed',
      name: 'WatchAndComputed',
      component: () => import('../views/WatchAndComputed.vue')
    },
    {
      path: '/Props',
      name: 'Props',
      component: () => import('../views/Props.vue')
    },
    {
      path: '/Three',
      name: 'Three',
      component: () => import('../views/Practice/Three.vue')
    },
    {
      path: '/Nine',
      name: 'Nine',
      component: () => import('../views/Practice/Nine.vue')
    },
    {
      path: '/ExpenseTrackerLogin',
      name: 'ExpenseTrackerLogin',
      component: () => import('../views/Practice/ExpenseTrackerLogin.vue')
    },
    {
      path: '/ExpenseTrackerSignup',
      name: 'ExpenseTrackerSignup',
      component: () => import('../views/Practice/ExpenseTrackerSignup.vue')
    },
    {
      path: '/ExpenseTrackerProfile',
      name: 'ExpenseTrackerProfile',
      component: () => import('../views/Practice/ExpenseTrackerProfile.vue')
    },
  ]
})
export default router
