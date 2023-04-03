import { createRouter, createWebHistory } from 'vue-router'
import homeroutes from '../home/router/index'
import authroutes from '../auth/router/router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...homeroutes,
    ...authroutes
  ]
})

export default router