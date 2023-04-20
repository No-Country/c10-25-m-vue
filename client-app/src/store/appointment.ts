import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppointmentStore = defineStore("appointment", () => {
  const appointments = ref<any[]>();

  return {
    //state propierties
    appointments,

    //actions
    setAppointments(newAppointment: any[]) {
      appointments.value = newAppointment;
    },
  };
});
