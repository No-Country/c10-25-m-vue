<template>
    <div class="login-container">
      <div class="login-grid">
        <div class="login-image">
          <img :src="imagenPortadaRegister" alt="Login Image" />
        </div>
      </div>
      <div class="login-form">
        <AccountCreationSuccess />
      </div>
      <ServerMessage :type="'error'" :message="signupStore.serverError ?? undefined" />
    </div>
</template>
  


<script lang="ts">
import AccountCreationSuccess from "../components/AccountCreationSuccess.vue";
import imagenPortadaRegister from "../../assets/auth/primer-plano-gato-lamiendo-oreja-conejo-aislado-blanco-removebg-preview 1.png";
import LogoInterno from "../../shared/LogoInterno.vue";
import ServerMessage from "../components/ServerMessage.vue"
import { useSignupStore } from '../../store/auth/signup'
import { defineComponent  } from "vue";
export default defineComponent({
  components: {
    LogoInterno,
    ServerMessage,
    AccountCreationSuccess
  },
  
setup() {
    const signupStore = useSignupStore()
    return{
        imagenPortadaRegister,
        signupStore
    }
}
});
</script>

<style scoped>

</style>