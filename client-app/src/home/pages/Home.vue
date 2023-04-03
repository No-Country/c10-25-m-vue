<template>

      <!-- Contenido de la vista de inicio aquí -->
      <Portada></Portada>
   
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Portada from '../components/Portada.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Portada
  },
  setup() {
    const message = 'This is my Contenido del component!';
    return { message };
  },
});
</script>