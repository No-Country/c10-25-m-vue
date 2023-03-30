<template>
 <div class="App">
  <DefaultLayout>
    <!-- Contenido principal de la aplicación -->
    <Portada></Portada>
  </DefaultLayout>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DefaultLayout from './home/layout/DefaultLayout.vue'
import Portada from './home/components/Portada.vue'

export default defineComponent({
  name: 'MyComponent',
  components: {
    DefaultLayout,
    Portada
  },
  setup() {
    const message = 'This is my Contenido del component!';
    return { message };
  },
});
</script>

<style lang="scss">


.App{
  text-align: center;
  position: relative;
  width: 100%;
  height: 100%;        
}
</style>