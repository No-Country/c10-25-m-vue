<template>
  <!-- Contenido de la vista de inicio aquí -->
  <header>
    <Header></Header>
  </header>
  <Portada></Portada>
  <Servicios></Servicios>
  <Eleginos></Eleginos>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script lang="ts" setup>
import Header from "../components/Header.vue";
import Portada from "../components/Portada.vue";
import Servicios from "../components/Servicios.vue";
import Eleginos from "../components/Eleginos.vue";
import Footer from "../../shared/Footer.vue";
</script>
