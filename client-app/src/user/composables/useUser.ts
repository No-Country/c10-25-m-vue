import { storeToRefs } from "pinia";
import { useMutation, useQuery } from "@tanstack/vue-query";
import clinicApi from "../../api/clinic-api";
import type { User, UserRes } from "./../interfaces/user.interface";
import { ref, computed, watch } from "vue";
import { useUserStore } from "../../store/auth/user";
import getConfig from "../../utils/getConfig";

const getUser = async (id: number): Promise<User> => {
  const { data } = await clinicApi.get<UserRes>(`/users/${id}`);

  return data.user;
};

const updateUser = async (user: User) => {
  console.log(user);
  await clinicApi.patch(`/users/${user.id}`, user, getConfig());
};

const useUser = () => {
  const store = useUserStore();
  const { user: authUser } = storeToRefs(store);
  const user = ref<User>();

  const userMutation = useMutation(updateUser);

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
    userMutation,

    //Method
    updateUser: userMutation.mutate,
  };
};

export default useUser;
