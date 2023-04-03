<template>
 <div class="App">
  <DefaultLayout>
    <router-view></router-view>
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

<style lang="scss">


.App{
  text-align: center;
  position: relative;
  width: 100%;
  height: 100%;        
}
</style>