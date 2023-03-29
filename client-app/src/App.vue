<template>
  <DefaultLayout>
    <!-- Contenido principal de la aplicación -->
    {{ message }}
  </DefaultLayout>
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