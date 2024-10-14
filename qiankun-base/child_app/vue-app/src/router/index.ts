import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router';

let routes = [
  {
    path: '/list',
    name: 'list',
    component: () => import('@/components/list.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/components/detail.vue')
  }
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory('/vue-app'),
  routes
});

export default router;