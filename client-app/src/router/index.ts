  import { createRouter, createWebHistory } from 'vue-router'
  import homeroutes from '../home/router/index'
  import authroutes from '../auth/router/router'
  import DefaultLayout from '../home/layout/DefaultLayout.vue'
  import DashboardLayout from '../home/layout/DashboardLayout.vue'
  import Welcome from '../home/pages/Welcome.vue'
  import UserView from '../user/router/index'
  import PetsView from '../animal/router/pets'
  
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: DefaultLayout,
        children: [
            ...homeroutes
        ]
      },
      {
        path: '/',
        component: DefaultLayout,
        children: [
            ...authroutes
        ]
      },
      {
        path: '/welcome',
        component: DashboardLayout,
        children: [
          {
            path: '',
            name: 'Welcome',
            component: Welcome
          },
        ]
      },
      {
        path: '/userview',
        component: DashboardLayout,
        children: [
            ...UserView
         ]
      },
      {
        path: '/pets',
        component: DashboardLayout,
        children: [
            ...PetsView
         ]
      },
    ]
  })


export default router