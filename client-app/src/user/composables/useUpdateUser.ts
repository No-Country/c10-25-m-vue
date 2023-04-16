import { watch, ref } from "vue";
import { storeToRefs } from "pinia";
import clinicApi from "../../api/clinic-api";
import { useUserStore } from "../../store/auth/user";
import getConfig from "../../utils/getConfig";
import { useMutation } from "@tanstack/vue-query";

const updateUser = async (data: any, id: number) => {
  await clinicApi.patch(`/users/${id}`, data, getConfig());
};

const useUpdatePassword = (data: any) => {
  const store = useUserStore();
  const { user } = storeToRefs(store);
  let closeModal = ref<boolean>(false);

  const userMutation = useMutation(() => updateUser(data, user.value?.id!));

  watch(userMutation.isSuccess, () => {
    closeModal.value = true;
  });
};

export default useUpdatePassword;
