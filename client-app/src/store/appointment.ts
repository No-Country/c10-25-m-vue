import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppointmentStore = defineStore("appointment", () => {
  const appointments = ref<any[]>();
  const noMatches = ref(false);
  const selectedVetId = ref<number>();
  const routes = ref<string[]>(['/appointment/vet', '/appointment/date', '/appointment/pet-data', '/appointment/vet-confirm']);
  const currentRouteIndex = ref(0);
  const selectedDate = ref('');
  return {
    //state propierties
    appointments,
    noMatches,
    selectedVetId,
    selectedDate,
    routes,
    currentRouteIndex,

    //actions
    setAppointments(newAppointment: any[]) {
      appointments.value = newAppointment;
    },

    setNoMatches(value: boolean) {
      noMatches.value = value;
    },

    setSelectedVetId(vetId: number) {
      selectedVetId.value = vetId;
    },

    setSelectedDate(date: string) {
      selectedDate.value = date;
    },

    nextRoute() {
      if (currentRouteIndex.value < routes.value.length - 1) {
        currentRouteIndex.value++;
      }
    },

    prevRoute() {
      if (currentRouteIndex.value > 0) {
        currentRouteIndex.value--;
      }
    },

  };
});
