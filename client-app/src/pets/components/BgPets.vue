<template>
  <div class="bg_container">
    <div class="logo_portada_user">
      <img src="../../assets/home_img/Veterinaria_logotipo.png" alt="Logo" id="logo_user">
    </div>
    <div class="fondo_azul">
      <div class="mascotas_deco">
        <img src="../../assets/pets_img/deco-pets.png" alt="gato">
        <h1>Mis mascotas</h1>
      </div>
    </div>
    <div class="pawprint_user">
      <img src="../../assets/user_img/bg-pawprint.png" alt="huellas">
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.bg_container{
  width: 100%;
  position: relative;
  
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
.fondo_azul{
  background-image: url(../../assets/user_img/bg-user.png);
  height: max-content;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.mascotas_deco{
  height: 12rem;
  margin-left: -4rem;
  display:inline-flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-content: baseline;
  align-items: baseline;
  position: relative;

}
.mascotas_deco img{
  height: 14.2rem;
  margin-top: -3rem;
  position: absolute;
  top: 19%;
  left: 80%;
}
.mascotas_deco h1{
  font-family: Jost;
  font-weight: 700;
  color: white;
  align-self: center;
  
}
@media (max-width:417px) {
  .mascotas_deco{
    margin-left: -8rem;
  }
  .mascotas_deco img{
    left: 70%;
  }
  
}

</style>