<template>
  <div class="bg_container">
    <div class="logo_portada_user">
      <img src="../assets/home_img/Veterinaria_logotipo.png" alt="Logo" id="logo_user">
      <img src="../assets/user_img/bg-user.png" alt="fondo azul con huellas" id="fondo_user">
    </div>
    <div class="pawprint_user">
      <img src="../assets/user_img/bg-pawprint.png" alt="huellas">
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.bg_container{
  width: 100%;
  
}
.logo_portada_user{
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
#logo_user{
  width: 8rem;
  height: 8rem;
  margin-top: 3rem;
  align-self: center;

}
.pawprint_user{
  position: relative;
  
}
.pawprint_user img{
  position: absolute;
  top: 9rem;
  right: 2%;
}

</style>