import { storeToRefs } from "pinia";
import { useQuery } from "@tanstack/vue-query";
import clinicApi from "../../api/clinic-api";
import type { User, UserRes } from "./../interfaces/user.interface";
import { ref, computed, watch } from "vue";
import { useUserStore } from "../../store/auth/user";

const getUser = async (id: number): Promise<User> => {
  const { data } = await clinicApi.get<UserRes>(`/users/${id}`);

  return data.user;
};

const useUser = () => {
  const store = useUserStore();
  const { user: authUser } = storeToRefs(store);
  const user = ref<User>();

  const { isLoading, data, isError } = useQuery(
    ["user", authUser.value?.id!],
    () => getUser(authUser.value?.id!)
  );

  watch(
    data,
    () => {
      if (data.value) user.value = { ...data.value };
    },
    {
      immediate: true,
    }
  );

  return {
    user,
    isError,
    isLoading,
  };
};

export default useUser;
