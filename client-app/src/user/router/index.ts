// auth/router.ts
import { RouteRecordRaw } from "vue-router";
import UserLayout from "../layout/UserLayout.vue";
import Dashboard from "../pages/Dashboard.vue";

export const userRouter: RouteRecordRaw = {
  path: "/${}",
  redirect: "/user/dashboard",
  component: UserLayout,
  children: [
    {
      path: "/user/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
  ],
};
