<template>

      <!-- Contenido de la vista de inicio aquí -->
      <Portada></Portada>
      <Servicios></Servicios>
      <Diferentes></Diferentes>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Portada from '../components/Portada.vue'
import Servicios from '../components/Servicios.vue'
import Diferentes from '../components/Diferentes.vue'
export default defineComponent({
  name: 'Home',
  components: {
    Portada,
    Servicios,
    Diferentes
  },
  setup() {
    const message = 'This is my Contenido del component!';
    return { message };
  },
});
</script>