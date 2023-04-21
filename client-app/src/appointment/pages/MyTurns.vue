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
    <div class="detalle">
      <h3>Turnos confirmados</h3>
      <div class="bloque_detalle">
        <div class="datos">
          <ul class="fecha">
            <li>
              <img
                src="../../assets/appoinment_img/calender.svg"
                alt="calendario"
              />
              <p>18/04/2023</p>
            </li>
            <li>
              <img src="../../assets/appoinment_img/time.svg" alt="reloj" />
              <p>10:00</p>
            </li>
          </ul>
          <ul class="vet">
            <li>
              <img
                src="../../assets/appoinment_img/female.svg"
                alt="veterinario"
              />
              <p>Moreira, Valentina - cardiólogia</p>
            </li>
            <li>
              <img src="../../assets/appoinment_img/pets.svg" alt="perro" />
              <p>Terry</p>
            </li>
          </ul>
        </div>
        <div class="btns">
          <button class="btn_reprogramar">Reprogramar</button>
          <button class="btn_cancelar">Cancelar</button>
        </div>
      </div>

      
      <div class="bloque_detalle">
        <div class="datos">
          <ul class="fecha">
            <li>
              <img
              src="../../assets/appoinment_img/calender.svg"
              alt="calendario"
              />
              <p>18/04/2023</p>
            </li>
            <li>
              <img src="../../assets/appoinment_img/time.svg" alt="reloj" />
              <p>10:00</p>
            </li>
          </ul>
          <ul class="vet">
            <li>
              <img
              src="../../assets/appoinment_img/female.svg"
              alt="veterinario"
              />
              <p>Moreira, Valentina - cardiólogia</p>
            </li>
            <li>
              <img src="../../assets/appoinment_img/pets.svg" alt="perro" />
              <p>Terry</p>
            </li>
          </ul>
        </div>
        <div class="btns">
          <button class="btn_reprogramar">Reprogramar</button>
          <button class="btn_cancelar">Cancelar</button>
        </div>
      </div>
      
      
      <div class="bloque_detalle">
        <div class="datos">
          <ul class="fecha">
            <li>
              <img
                src="../../assets/appoinment_img/calender.svg"
                alt="calendario"
              />
              <p>18/04/2023</p>
            </li>
            <li>
              <img src="../../assets/appoinment_img/time.svg" alt="reloj" />
              <p>10:00</p>
            </li>
          </ul>
          <ul class="vet">
            <li>
              <img
              src="../../assets/appoinment_img/female.svg"
              alt="veterinario"
              />
              <p>Moreira, Valentina - cardiólogia</p>
            </li>
            <li>
              <img src="../../assets/appoinment_img/pets.svg" alt="perro" />
              <p>Terry</p>
            </li>
          </ul>
        </div>
        <div class="btns">
          <button class="btn_reprogramar">Reprogramar</button>
          <button class="btn_cancelar">Cancelar</button>
        </div>
      </div>
      
      <!-- !agregando turnos, hay 2 lineas vacias por bloque

      <div class="bloque_detalle">
        <div class="datos">
          <ul class="fecha">
            <li>
              <img
                src="../../assets/appoinment_img/calender.svg"
                alt="calendario"
              />
              <p>18/04/2023</p>
            </li>
            <li>
              <img src="../../assets/appoinment_img/time.svg" alt="reloj" />
              <p>10:00</p>
            </li>
          </ul>
          <ul class="vet">
            <li>
              <img
                src="../../assets/appoinment_img/female.svg"
                alt="veterinario"
              />
              <p>Moreira, Valentina - cardiólogia</p>
            </li>
            <li>
              <img src="../../assets/appoinment_img/pets.svg" alt="perro" />
              <p>Terry</p>
            </li>
          </ul>
        </div>
        <div class="btns">
          <button class="btn_reprogramar">Reprogramar</button>
          <button class="btn_cancelar">Cancelar</button>
        </div>
      </div>
      -->

      <h3>Turnos cancelados</h3>
    <div class="detalle" v-if="cancelledAppointments.length > 0">
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
  margin: 2rem 5rem 1rem 8rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
.pawprint_bg {
  position: relative;
}
.pawprint_bg img {
  position: absolute;
  top: 5rem;
  right: 10%;
}
.detalle h3 {
  color: var(--bg-btn);

  text-align: left;
  font-size: 1.5rem;
  font-weight: 700;

  grid-column: span 3;
}
.bloque_detalle {
  width: min-max (300px, 400px);
  
  margin: 2rem 0 2rem 0;

  background-color: var(--bg-header);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;

}
.datos {
  margin: 3rem 2rem 1rem 2rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: left;
  align-content: center;
  gap: 30px;
}
.fecha {
  font-weight: 600;

  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}
.vet {
  display: inline-flex;
  flex-direction: column;
  gap: 30px;
}
.datos li {
  display: inline-flex;
  gap: 15px;
}
.datos img {
  width: 35px;
  height: 36px;
}
.btns {
  width: 100%;
  margin-bottom: 1.5rem;
  display: inline-flex;
  justify-content: right;
  align-content: right;
}
.btn_reprogramar {
  margin: 1rem;
  padding: 8px 16px;
  font-family: Jost;

  background: #fefefe;
  border: 3px solid #3a57e8;
  box-shadow: 0px 2px 4px #8a8f97;
  border-radius: 10px;
  cursor: pointer;
}
.btn_reprogramar:hover{
  background-color: var(--bg-btn);
  color:var(--color-bg);
  border: 3px solid #3A57E8;
}
.btn_cancelar {
  height: max-content;
  margin: 1rem 2rem 1rem 0;
  margin-right: 2rem;
  padding: 8px 16px;

  color: var(--bg-header);
  background-color: var(--bg-btn);
  font-family: Jost;
  border: 3px solid var(--bg-btn);

  box-shadow: 0px 2px 4px #8a8f97;
  border-radius: 10px;
  cursor: pointer;
}
.btn_cancelar:hover{
  background-color: var(--color-bg);
  color:var(--bg-btn);
  border: 3px solid #3A57E8;
}
.otros_turnos {
  width: 100%;
  height: 10rem;
  color: black;
  margin: 1rem;
  font-size: 1.25rem;

  grid-column: span 3;
}
@media (max-width: 1243px) {
  .detalle {
    margin: 2rem 5rem 1rem 5rem;

    grid-template-columns: repeat(2, 1fr);
  }
  .detalle h3{
    grid-column: span 2;
  }
  .otros_turnos{
    grid-column: span 2;

  }
}
@media (max-width: 865px) {
  .bloque_detalle{
    width: min-max(300px, 400px);
    margin: 1rem 0 1rem 0;
  }
  
  .detalle {
    margin: 2rem 5rem 1rem 4rem;
    grid-template-columns: repeat(1, 1fr);

  }
  .detalle h3{
    grid-column: span 1;
    
  }
  .otros_turnos{
    grid-column: span 1;
  }
}
@media (max-width: 445px) {
  .detalle{
    margin: 2rem 1rem 1rem 1rem;
    
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .btns{
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .btn_cancelar{
    margin: auto;
  }
  
}
@media (min-width: 1444px) {
  .detalle{
    grid-template-columns: repeat(4,1fr);
  }
  .detalle h3{
    grid-column: span 4;
  }
}

</style>



