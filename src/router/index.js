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
      component: () => import('../views/VInstruction/VtextAndVmodel.vue')
    },
    {
      path: '/Vfor',
      name: 'Vfor',
      component: () => import('../views/VInstruction/Vfor.vue')
    },
    {
      path: '/Von',
      name: 'Von',
      component: () => import('../views/VInstruction/Von.vue')
    },
    {
      path: '/Vbind',
      name: 'Vbind',
      component: () => import('../views/VInstruction/Vbind.vue')
    },
    {
      path: '/VifAndVshow',
      name: 'VifAndVshow',
      component: () => import('../views/VInstruction/VifAndVshow.vue')
    },
    {
      path: '/Vslot',
      name: 'Vslot',
      component: () => import('../views/VInstruction/VSlot.vue')
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
      path: '/Emit',
      name: 'Emit',
      component: () => import('../views/Emit.vue')
    },
    {
      path: '/ProvideAndInject',
      name: 'ProvideAndInject',
      component: () => import('../views/ProvideAndInject.vue')
    },
    {
      path: '/DataFlow',
      name: 'DataFlow',
      component: () => import('../views/DataFlow.vue')
    },
    {
      path: '/User/:userId',
      name: 'User',
      component: () => import('../views/User.vue'),
      props:true
    },
    {
      path: '/RouteFam',
      name: 'RouteFam',
      component: () => import('../views/RouteFam.vue'),
      children:[
        {
          path:'RouteChildOne',
          component: () => import('../components/Route/RouteChildOne.vue'),
        },
        {
          path:'RouteChildTwo',
          component: () => import('../components/Route/RouteChildTwo.vue'),
        },
      ]
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
    {
      path:"/:pathMatch(.*)*",
      name:"NotFound",
      component: () => import('../views/NotFound.vue'),
    }
  ]
})
export default router
