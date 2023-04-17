import { defineStore } from "pinia";
import { ref } from "vue";
interface User {
  id: number;
  name: string;
  email: string;
}

export const useUserStore = defineStore("user", () => {
  const user = ref<User | null>();

  return {
    //State propiertes
    user,
    //getters

    //actions
    setUser(userData: User) {
      user.value = userData;
    },
    clearUser() {
      user.value = null;
    },
  };
});
