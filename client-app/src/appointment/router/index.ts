// auth/router.ts
import { RouteRecordRaw } from "vue-router";
import AppointmentLayout from "../layout/AppointmentLayout.vue";
import SelectVet from "../pages/SelectVet.vue";
import SelectDate from "../pages/SelectDate.vue";
import PetData from "../pages/PetData.vue";
import Confirmation from "../pages/Confirmation.vue";
import MyTurns from "../pages/MyTurns.vue";
import Abstract from "../pages/Abstract.vue";

export const appointmentRouter: RouteRecordRaw = {
  path: "/${}",
  redirect: "/appointment/vet",
  component: AppointmentLayout,
  children: [
    {
      path: "/appointment/vet",
      name: "appointment-vet",
      component: SelectVet,
    },
    {
      path: "/appointment/date",
      name: "appointment-date",
      component: SelectDate,
    },
    {
      path: "/appointment/pet-data",
      name: "appointment-pet-data",
      component: PetData,
    },
    {
      path: "/appointment/confirmation",
      name: "appointment-confirmation",
      component: Confirmation,
    },
    {
      path: "/appointment/abstract",
      name: "appointment-abstract",
      component: Abstract,
    },
    {
      path: "/appointment/my-turns",
      name: "appointment-myturns",
      component: MyTurns,
    },
  ],
};
