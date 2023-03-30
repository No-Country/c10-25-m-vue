import { createWebHistory, createRouter } from "vue-router";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;