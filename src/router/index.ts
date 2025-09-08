import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/floorplan' },
  { path: '/floorplan', name: 'Floorplan', component: () => import('../views/FloorplanView.vue') },
  { path: '/network/custom', name: 'NetworkCustom', component: () => import('../views/NetworkCustomView.vue') },
  { path: '/network/optimize', name: 'NetworkOptimize', component: () => import('../views/NetworkOptimizeView.vue') },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
