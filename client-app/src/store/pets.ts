import { defineStore } from "pinia";
import { ref } from "vue";

export const usePetsStore = defineStore("pet", () => {
  const pets = ref<any[]>();

  return {
    //state propierties
    pets,

    //actions
    setPets(newPets: any[]) {
      pets.value = newPets;
    },
  };
});
