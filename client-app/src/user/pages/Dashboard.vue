<template>
  <div class="welcome-container">
    <div class="container-welcome--perfil">
      <img class="subLogo" :src="LogoImg" alt="" />

      <h1>¡Hola Agustin!</h1>
      <img class="portada-img" :src="PortadaImg" alt="" />
    </div>

    <span 
              v-if="loginFormState.serverSuccess"
              :class="[
              loginFormState.serverSuccess ? 'error-server-loginForm' : '',
              { 'slide-fade': loginFormState.serverSuccess },
              ]"><ErrorServer/>{{ loginFormState.serverSuccess }}</span>
  </div>
</template>

<script lang="ts" setup>
import { defineExpose } from "vue";
import LogoImg from "../../assets/welcome_img/Veterinaria_logotipo-removebg-preview 5.png";
import PortadaImg from "../../assets/welcome_img/imagen header 1.png";
import useLoginRequest from "../../auth/composables/useLoginRequest";
import ErrorServer from "../../auth/components/svg/Error.vue";

const { loginFormState } = useLoginRequest();

defineExpose({
  loginFormState
})

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
