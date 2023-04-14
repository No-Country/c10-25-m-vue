// auth/router.ts
import { RouteRecordRaw } from "vue-router";
import AuthLayout from "../layout/AuthLayout.vue";
import LoginView from "../pages/LoginView.vue";
import RegisterView from "../pages/RegisterView.vue";

export const authRouter: RouteRecordRaw = {
  path: "/${}",
  redirect: "/auth/login",
  component: AuthLayout,
  children: [
    {
      path: "/auth/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/auth/register",
      name: "register",
      component: RegisterView,
    },
  ],
};
