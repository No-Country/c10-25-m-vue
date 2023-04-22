<template>
  <div class="abstract">
    <HeroAppointment />
    <div class="detalle" v-if="confirmedAppointments.length > 0">
      <h3>Turnos Pendientes</h3>
      <MyTurnCard
        v-for="appointment of confirmedAppointments"
        :appointment="appointment"
        :key="appointment.id"
      />
    </div>
    <div class="detalle" v-else>
      <h3>No tienes turnos pendientes</h3>
    </div>
    <div class="detalle" v-if="cancelledAppointments.length > 0">
      <h3>Turno cancelados</h3>
      <MyTurnCard
        v-for="appointment of cancelledAppointments"
        :appointment="appointment"
        :key="appointment.id"
      />
    </div>
    <div class="otros_turnos" v-else>
      <p>Todavía no tienes turnos cancelados</p>
    </div>
    <div class="detalle" v-if="completedAppointments.length > 0">
      <h3>Turno Realizados</h3>
      <MyTurnCard
        v-for="appointment of completedAppointments"
        :appointment="appointment"
        :key="appointment.id"
      />
    </div>
    <div class="otros_turnos" v-else>
      <p>Todavía no tienes turnos cancelados</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MyTurnCard from "../components/MyTurnCard.vue";
import HeroAppointment from "../components/HeroAppointment.vue";
import useAppointments from "../composables/useAppointments";
import { computed } from "@vue/reactivity";

const { appointments } = useAppointments("pending");

// Filtra los turnos confirmados
const confirmedAppointments = computed(() => {
  if (!appointments.value) {
    return [];
  }
  return appointments.value.filter(
    (appointment) => appointment.status === "pending"
  );
});

const cancelledAppointments = computed(() => {
  if (!appointments.value) {
    return [];
  }
  return appointments.value.filter(
    (appointment) => appointment.status === "cancelled"
  );
});

const completedAppointments = computed(() => {
  if (!appointments.value) {
    return [];
  }
  return appointments.value.filter(
    (appointment) => appointment.status === "completed"
  );
});
</script>

datos fecha vet btns btn_reprogramar btn_cancelar

<style scoped>
.abstract {
  height: 100%;
  color: var(--text-footer);
  background-color: var(--color-bg);
  font-family: Jost;
  font-size: 1rem;
  font-weight: 500;
  overflow: hidden;
}
.pawprint {
  width: 7%;
  margin-top: 1rem;
  display: inline;
}
.bg_portada {
  width: 100%;
  background-image: url(../../assets/appointment_img_png/bg-mis-turnos.png);
  background-repeat: no-repeat;
  background-size: cover;

  color: var(--bg-header);

  display: inline-flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 15px;
}
.bg_portada h2 {
  margin-left: 22%;
  margin-top: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
}
.dog {
  margin-bottom: -1.3rem;
}
.detalle {
  width: 80%;
  margin: 2rem 0 1rem 0;
  display: inline-block;
}
.pawprint_bg {
  position: relative;
}
.pawprint_bg img {
  position: absolute;
  top: 5rem;
  right: 10%;
   z-index:-1000;
}
.detalle h3 {
  color: var(--bg-btn);

  text-align: left;
  font-size: 1.5rem;
  font-weight: 700;
}
.otros_turnos {
  height: 10rem;
  color: black;
  margin: 1rem;
  font-size: 1.25rem;
}
</style>
