<script lang="ts" setup>
import { Appointment } from "../interfaces/appointments";
import moment from "moment";

interface Props {
  appointment: Appointment;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="bloque_detalle">
    <div class="datos">
      <ul class="fecha">
        <li>
          <img
            src="../../assets/appoinment_img/calender.svg"
            alt="calendario"
          />
          <p>
            {{ moment(props.appointment.date).format("DD/MM/YYYY") }}
          </p>
        </li>
        <li>
          <img src="../../assets/appoinment_img/time.svg" alt="reloj" />
          <p>{{ moment(props.appointment.date).format("HH:mm:ss") }}</p>
        </li>
      </ul>
      <ul class="vet">
        <li>
          <img src="../../assets/appoinment_img/female.svg" alt="veterinario" />
          <p>
            {{ props.appointment.vet.user.surname }},
            {{ props.appointment.vet.user.name }} -
            {{ props.appointment.vet.speciality }}
          </p>
        </li>
        <li>
          <img src="../../assets/appoinment_img/pets.svg" alt="perro" />
          <p>{{ props.appointment.pet.name }}</p>
        </li>
      </ul>
    </div>
    <div class="btns">
      <button class="btn_reprogramar">Reprogramar</button>
      <button class="btn_cancelar">Cancelar</button>
    </div>
  </div>
</template>

<style lang="css" scoped>
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

@media (max-width: 865px) {
  .bloque_detalle{
    margin: 1rem 0 1rem 0;
  } 
}

@media (max-width: 445px) {
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
</style>
