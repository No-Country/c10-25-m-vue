import { userRouter } from "./../user/router/index";
import { authRouter } from "./../auth/router/router";
import { petRouter } from "./../pets/router";
import { createRouter, createWebHistory } from "vue-router";

import Home from "../home/pages/Home.vue";
import { appointmentRouter } from "../appointment/router";
import { LoginResp, LoginUser } from "../user/interfaces/login.interface";
import clinicApi from "../api/clinic-api";
import getConfig from "../utils/getConfig";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

// Función para verificar si el usuario está autenticado
async function isAuthenticated() {
  try {
    const { data } = await clinicApi.get<LoginResp>("/auth/renew", getConfig());
    localStorage.setItem("token", data.token);
    console.log("me ejecuto 3", !!data.user);
    return !!data.user;
  } catch (error) {
    return false;
  }
}

// Función para requerir autenticación en una ruta protegida
function requireAuth(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void {
  isAuthenticated().then((authenticated) => {
    if (authenticated) {
      console.log("me ejecuto 1");
      next();
    } else {
      console.log("me ejecuto 2");
      next("/auth/login");
    }
  });
}

function requireNotAuth(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void {
  isAuthenticated().then((authenticated) => {
    if (authenticated) {
      next({ name: "home" });
    } else {
      next();
    }
  });
}

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
      beforeEnter: requireNotAuth,
    },
    {
      ...userRouter,
      path: "/user",
      // beforeEnter: requireAuth,
    },
    {
      ...petRouter,
      path: "/pet",
      beforeEnter: requireAuth,
    },
    {
      ...appointmentRouter,
      path: "/appointment",
      // beforeEnter: requireAuth,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: () => ({ name: "home" }),
    },
  ],
});

export default router;