import { defineStore } from 'pinia';

interface UserData {
    id: string;
    name: string;
    email: string;
  }

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: null as UserData | null
  }),
  actions: {

    
    setUser(userData: UserData) {
      this.user = userData;
    },
    clearUser() {
      this.user = null;
    }
  }
});