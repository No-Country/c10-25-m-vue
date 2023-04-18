import { ref } from 'vue';

export default function useLogoutModal() {
  const isLogoutModalOpen = ref(false);

  function toggleLogoutModal() {
    isLogoutModalOpen.value = !isLogoutModalOpen.value;
  }

  function logout() {
    isLogoutModalOpen.value = false;
  }

  return {
    isLogoutModalOpen,
    toggleLogoutModal,
    logout,
  };
}