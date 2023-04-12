<template>
    <div>
<h1>Welcome</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Welcome',
  components: {
 
  },
  setup() {
    const message = 'This is my Contenido del component!';
    return { message };
  },
});
</script>

<style lang="scss" scoped>

</style>