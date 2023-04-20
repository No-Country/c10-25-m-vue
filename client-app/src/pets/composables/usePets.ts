import { useQuery } from "@tanstack/vue-query";
import { storeToRefs } from "pinia";
import { useUserStore } from "../../store/user";
import clinicApi from "../../api/clinic-api";
import { ref, watch } from "vue";
import { usePetsStore } from "../../store/pets";
import type { Pet, RespPet } from "../interfaces/pet.interface";
import getConfig from "../../utils/getConfig";

const getPets = async (userId: number): Promise<Pet[]> => {
  console.log("----: ", userId);
  const { data } = await clinicApi.get<RespPet>(
    `/pets/user/${userId}`,
    getConfig()
  );

  return data.pets;
};

const usePets = (userId: number) => {
  const petStore = usePetsStore();
  const { pets } = storeToRefs(petStore);

  const { isLoading, data } = useQuery(["pets-user", userId], () => {
    return userId ? getPets(userId) : [];
  });

  watch(data, (pets) => {
    if (pets) petStore.setPets(pets);
  });

  return {
    //propierties
    isLoading,
    pets,
  };
};

export default usePets;
