<template>
  <!-- Contenido de la vista de inicio aquí -->
  <header>
    <Header></Header>
  </header>
  <Portada></Portada>
  <Servicios></Servicios>
  <Diferentes></Diferentes>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script lang="ts" setup>
import Portada from "../components/Portada.vue";
import Servicios from "../components/Servicios.vue";
import Diferentes from "../components/Diferentes.vue";
import Header from "../components/Header.vue";
import Footer from "../../shared/Footer.vue";
</script>
