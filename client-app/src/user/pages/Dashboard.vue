<script lang="ts" setup>
import { storeToRefs } from "pinia";
import LogoImg from "../../assets/welcome_img/Veterinaria_logotipo-removebg-preview 5.png";
import PortadaImg from "../../assets/welcome_img/imagen header 1.png";
import { useUserStore } from "../../store/auth/user";

const store = useUserStore();
const { user } = storeToRefs(store);
</script>

<template>
  <div class="welcome-container">
    <div class="container-welcome--perfil">
      <img class="subLogo" :src="LogoImg" alt="" />

      <h1>¡Hola {{ user?.name }}!</h1>
      <img class="portada-img" :src="PortadaImg" alt="" />
    </div>
  </div>
</template>

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
