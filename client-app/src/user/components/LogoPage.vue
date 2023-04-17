<script setup lang="ts"></script>

<template>
  <div class="datos_user">
    <div class="logo_chico_user">
      <img src="../../assets/home_img/Veterinaria_logotipo.png" alt="logo" />
      <h2>Mis datos</h2>
    </div>
  </div>
</template>

<style scoped>
.datos_user {
  color: var(--text-footer);
  margin: 2rem 4rem 2rem 4rem;
  font-family: Jost;
  font-weight: 600;
  font-size: larger;
  display: flex;
  justify-content: space-between;
}
.logo_chico_user {
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo_chico_user img {
  width: 2rem;
  height: 2rem;
}
</style>
