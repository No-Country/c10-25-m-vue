<template>
    <div class="portada-container-with-fondo">
        <img src="../../assets/home_img/imagen_home_cuerpo.png" alt="" class="portada_veterinaria">
    </div>
</template>

<script  lang="ts">
import { defineComponent  } from 'vue';

export default defineComponent({
  name: 'Portada',
  setup() {


return {
    
};
  },
});
</script>

<style lang="scss" scoped>

.portada-container-with-fondo{
    width: 100%;
    height: 100%;
}

.portada-container-with-fondo img{
    width: 100%;
    height: 100%;
}


</style>