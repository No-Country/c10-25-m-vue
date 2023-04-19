import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useLogoutModal() {
  const isLogoutModalOpen = ref(false);
  const router = useRouter();

  function toggleLogoutModal() {
    isLogoutModalOpen.value = !isLogoutModalOpen.value;
  }

  function logout() {
    isLogoutModalOpen.value = false;
    localStorage.clear();
    router.push({ name: "login" });
    window.location.reload();
  }

  return {
    isLogoutModalOpen,
    toggleLogoutModal,
    logout,
  };
}
