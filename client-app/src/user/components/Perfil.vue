<template>
  
    <DecoUser></DecoUser>
    <div class="logo_chico_user">
      <img src="" alt="logo">
      <h2>Mis datos</h2>
    </div>  
    <EditarBtn></EditarBtn>
    <div class="agregar_foto">
      <div class="letra_nombre">
        A<!-- funcion para que selecicione la primera letra del nombre -->
      </div>
      <button>Agregar foto</button>
    </div>
    <div class="datos_user">
      datos
      <!-- funcion que devuelva los datos -->
      <button>cambiar contraseña</button>
    </div>
  
  
</template>

<script lang="ts" setup>

import DecoUser from './DecoUser.vue';
import EditarBtn from './EditarBtn.vue';

</script>

<style scoped>

</style>