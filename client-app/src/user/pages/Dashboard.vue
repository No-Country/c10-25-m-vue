<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useLoginStore } from "../../store/auth/login";
import LogoImg from "../../assets/welcome_img/Veterinaria_logotipo-removebg-preview 5.png";
import ServerMessage from "../../auth/components/ServerMessage.vue";
import PortadaImg from "../../assets/welcome_img/imagen header 1.png";
import { ref } from "vue";
import { useUserStore } from "../../store/user";

const store = useUserStore();
const { user } = storeToRefs(store);
const loginStore = useLoginStore();
const hasAppointments = ref(true);
</script>

<template>
  <div class="welcome-container">
    <div class="container-welcome--perfil">
      <img class="subLogo" :src="LogoImg" alt="" />
      <h1>¡Hola {{ user?.name }}!</h1>
      <img class="portada-img" :src="PortadaImg" alt="" />
    </div>
    <div class="container-welcome-reservas">
      <span class="title-next"> Próximos turnos </span>
      <div class="container-info-inter">
        <span class="container-info-appoinment">
          <span v-if="!hasAppointments" class="texto-interno"
            >Todavía no tenés próximos turnos.</span
          >
          <div class="appoinments">
            <div class="time-appoinment">
              <span>
                <img src="../../assets/appoinment_img/calender.svg" alt="" />
                18/18/1990</span
              >
              <span>
                <img src="../../assets/appoinment_img/time.svg" alt="" />
                10:00</span
              >
            </div>
            <div class="locations">
              <span>
                <img src="../../assets/appoinment_img/female.svg" alt="" />
                Moreira, Valentina - Cardióloga</span
              >
            </div>
            <div class="pets-icon">
              <span>
                <img src="../../assets/appoinment_img/pets.svg" alt="" />
                Terry</span
              >
            </div>
          </div>
        </span>
        <button>Reservar un turno</button>
      </div>
    </div>

    <ServerMessage
      :type="'success'"
      :message="loginStore.serverSuccess ?? undefined"
    />
  </div>
</template>
<style lang="scss" scoped>
.time-appoinment {
  display: inline-flex;
  gap: 10px;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;
  span {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
  }
}

.pets-icon,
.locations {
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
}
.appoinments {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 300px;
  height: auto;
  padding: 16px 27px;
  gap: 19px;
  display: flex;
  flex-direction: column;
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 175%;
  color: #383b43;
}

.container-info-appoinment {
  width: 100%;
  padding-left: 5%;
}
.welcome-container {
  background-color: #fffefe;
  display: flex;
  flex-direction: column;
}

.container-welcome--perfil {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
}

.container-info-inter button {
  background-color: #3a57e8;
  color: white;
  font-family: "Jost", sans-serif;
  border: none;
  padding: 8px 16px;
  gap: 10px;
  height: 62px;
  background: #3a57e8;
  box-shadow: 0px 2px 4px rgba(58, 87, 232, 0.3);
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  margin-top: 3%;
  cursor: pointer;
  color: #ffffff;
}

.container-info-inter {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  max-height: max-content;
  position: relative;
  height: 100%;
  padding-top: 3%;
}

.title-next {
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 175%;
  /* identical to box height, or 42px */
  padding-left: 5%;
  display: flex;
  align-items: center;
  text-align: center;

  color: #3a57e8;
}

.texto-interno {
  font-family: "Jost";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 175%;
  /* identical to box height, or 35px */

  display: flex;
  align-items: center;
  text-align: center;

  color: #383b43;
}

.container-welcome--perfil .portada-img {
  width: 100%;
}

.container-welcome-reservas {
  background-color: #fffefe;
  height: 405px;
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
