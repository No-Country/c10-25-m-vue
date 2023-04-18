import { useQuery } from "@tanstack/vue-query";
import { storeToRefs } from "pinia";
import { useUserStore } from "../../store/user";
import clinicApi from "../../api/clinic-api";
import { ref, watch } from "vue";
import { usePetsStore } from "../../store/pets";

const getPets = async (userId: number) => {
  const { data } = await clinicApi.get(`/pets/user/${userId}`);

  console.log(data);
};

const usePets = () => {
  const userStore = useUserStore();
  const { user } = storeToRefs(userStore);
  console.log(user.value);

  const petStore = usePetsStore();
  const { pets } = storeToRefs(petStore);

  const { isLoading, data } = useQuery(["pets-user", user.value?.id], () => {
    getPets(user.value?.id!);
  });

  watch(data, (pets) => {
    if (pets) petStore.setPets(pets);
  });

  return {
    //propierties
    isLoading,
    data,
  };
};

export default usePets;
