<template>
 <div class="App">
    <router-view></router-view>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'MyComponent',
  components: {
   
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
