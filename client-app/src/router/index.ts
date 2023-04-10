import { createRouter, createWebHistory } from 'vue-router'

import homeroutes from '../home/router/index'
import authroutes from '../auth/router/router'
import UserView from '../user/router/index'
import PetsView from '../animal/router/pets'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...homeroutes,
    ...authroutes,
    ...UserView,
    ...PetsView
  ]
})

export default router