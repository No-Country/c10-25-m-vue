import { userRouter } from "./../user/router/index";
import { authRouter } from "./../auth/router/router";
import { petRouter } from "./../pets/router";
import { createRouter, createWebHistory } from "vue-router";

import Home from "../home/pages/Home.vue";
import { appointmentRouter } from "../appointment/router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      ...authRouter,
      path: "/auth",
    },
    {
      ...userRouter,
      path: "/user",
    },
    {
      ...petRouter,
      path: "/pet",
    },
    {
      ...appointmentRouter,
      path: "/appointment",
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: () => ({ name: "home" }),
    },
  ],
});

export default router;
