import { RouteRecordRaw } from "vue-router";

import PetLayout from "../layout/PetLayout.vue";
import PetsView from "../pages/PetsView.vue";

export const petRouter: RouteRecordRaw = {
  path: "/${}",
  redirect: "/pet/user/:id",
  component: PetLayout,
  children: [
    {
      path: "/pet/user/:id",
      name: "mypets",
      component: PetsView,
    },
  ],
};
