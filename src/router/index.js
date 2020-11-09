import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'
import EmployeeView from '../pages/EmployeeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/EmployeeView/:firstName/:lastName/:email/:avatar',
    name: 'EmployeeView',
    component: EmployeeView,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router