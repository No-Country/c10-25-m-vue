<template>
  <div class="welcome-container">
    <div class="container-welcome--perfil">
      <img class="subLogo" :src="LogoImg" alt="" />

      <h1>¡Hola Agustin!</h1>
      <img class="portada-img" :src="PortadaImg" alt="" />
    </div>

    <ServerMessage :type="'success'" :message="loginStore.serverSuccess ?? undefined" />

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useLoginStore } from '../../store/auth/login'
import LogoImg from "../../assets/welcome_img/Veterinaria_logotipo-removebg-preview 5.png";
import PortadaImg from "../../assets/welcome_img/imagen header 1.png";
import useLoginRequest from "../../auth/composables/useLoginRequest";
import ServerMessage from "../../auth/components/ServerMessage.vue";


export default defineComponent({
  components: {
    ServerMessage
  },
  setup() {
    const { loginFormState } = useLoginRequest();
    const loginStore = useLoginStore()

    return {
      PortadaImg,
      LogoImg,
      loginFormState,
      loginStore
    }
  }
});
</script>

<style lang="scss" scoped>
.welcome-container {
  height: 89vh;
  background: #e5e5e5;
}

.container-welcome--perfil {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
}

.container-welcome--perfil .portada-img {
  width: 100%;
}

.container-welcome--perfil h1 {
  font-family: "Jost";
  font-size: 2.25rem;
  line-height: 175%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;

  color: #3a57e8;
}


</style>
