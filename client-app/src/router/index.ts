import { createRouter, createWebHistory } from 'vue-router'

import homeroutes from '../home/router/index'
import authroutes from '../auth/router/router'
import UserView from '../user/router/index'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...homeroutes,
    ...authroutes,
    ...UserView
  ]
})

export default router