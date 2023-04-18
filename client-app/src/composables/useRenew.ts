import { watch } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { useUserStore } from "../store/user";
import clinicApi from "../api/clinic-api";
import getConfig from "../utils/getConfig";
import { LoginResp, LoginUser } from "./../user/interfaces/login.interface";
import { storeToRefs } from "pinia";

const getNewToken = async (): Promise<LoginUser> => {
  const { data } = await clinicApi.get<LoginResp>("/auth/renew", getConfig());
  localStorage.setItem("token", data.token);
  return data.user;
};

const useRenew = () => {
  const store = useUserStore();
  const { user } = storeToRefs(store);

  const { isLoading, data } = useQuery<LoginUser>(["user"], () =>
    getNewToken()
  );

  watch(data, (user) => {
    if (user)
      store.setUser({
        id: +user.id,
        name: user.name,
        email: user.email,
      });
  });

  return {
    //propierties
    isLoading,
    user,
  };
};

export default useRenew;
