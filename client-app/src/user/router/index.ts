// auth/router.ts
import { RouteRecordRaw } from "vue-router";
import UserLayout from "../layout/UserLayout.vue";
import Dashboard from "../pages/Dashboard.vue";
import UserView from "../pages/UserView.vue";

export const userRouter: RouteRecordRaw = {
  path: "/${}",
  redirect: "/user/home",
  component: UserLayout,
  children: [
    {
      path: "/user/home",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/user/profile",
      name: "profile",
      component: UserView,
    },
  ],
};
