// auth/router.ts
import LoginComponent from '../components/LoginForm.vue'
import RegisterComponent from '../components/RegisterForm.vue'


export default [
  { 

        path: '/login',
        name: 'login',
        component: LoginComponent
     
  },
  {
        path: '/register',
        name: 'register',
        component: RegisterComponent
  }
]