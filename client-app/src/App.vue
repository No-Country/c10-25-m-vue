<template>
 <div class="App">
  <DefaultLayout>
    <!-- Contenido principal de la aplicación -->
    {{ message }}
  </DefaultLayout>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DefaultLayout from './home/layout/DefaultLayout.vue'

export default defineComponent({
  name: 'MyComponent',
  components: {
    DefaultLayout,
  },
  setup() {
    const message = 'This is my Contenido del component!';
    return { message };
  },
});
</script>

<style lang="sass">
.App {
  text-align: center;
  position: relative;
  width: 100%;
  height: 100%;
  border:2px solid red;
}
</style>