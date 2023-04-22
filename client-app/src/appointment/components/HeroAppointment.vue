<template>
  <img
    class="pawprint"
    src="../../assets/home_img/Veterinaria_logotipo.png"
    alt="logo"
  />
  <div class="bg_portada">
    <h2>Mis turnos</h2>
    <img
      class="dog"
      src="../../assets/appointment_img_png/dog-turnos.png"
      alt="perro con computadora"
    />
  </div>
  <div class="pawprint_bg">
    <img :src="Huellas" alt="huellas" />
  </div>
</template>

<script setup lang="ts">
import Huellas from "../../assets/user_img/bg-pawprint.png";
</script>

<style scoped>
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
 
}
.otros_turnos {
  height: 10rem;
  color: black;
  margin: 1rem;
  font-size: 1.25rem;
}
</style>
