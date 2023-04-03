<template>
  <div class="diferentes_container">
    <h2>Descubrí lo que nos hace diferentes</h2>
    <img class="bg_diferentes" id="paw_bg1" src="../../assets/home_img/big_pawprint_home.png"  alt="">
    <img class="bg_diferentes" id="paw_bg2" src="../../assets/home_img/big_pawprint_home.png"  alt="">
    <img class="bg_diferentes" id="paw_bg3" src="../../assets/home_img/big_pawprint_home.png"  alt="">
    <div class="diferentes_item">
      <img src="../../assets/home_img/bulldog-at-vet 1.png" alt="">
      <div class="descripcion">
        <h3>Atención de calidad las 24hs</h3>
        <p>Nuestros expertos están disponibles para cuidar de tu mascota en todo momento.</p>
      </div>
    </div>
    <div class="diferentes_item">
      <div class="descripcion">
        <h3>No necesitás hacer llamadas</h3>
        <p>Reservá, cancelá y reprogramá turnos desde cualquier dispositivo.</p>
      </div>
      <img src="../../assets/home_img/woman_compu.png" alt="">
    </div>
  </div>

</template>

<script lang="ts" setup>

</script>

<style scoped>
.diferentes_container{
  font-family: Jost;
  color: var(--title-servicios);
  display: flex;
  
  flex-direction: column;
  align-items: center;

  position: relative;
  overflow: hidden;
}
.bg_diferentes{
  z-index: -4;
  position: absolute; 
}

#paw_bg1{
  top: 0%;
  left: 70%;
}
#paw_bg2{
  top: 35%;
  left: 0%;
}
#paw_bg3{
  bottom: -5%;
  right: -10%;
}

.diferentes_container h2{
  margin-top: 3rem;
  font-weight: 700;
}
.diferentes_item{
  margin: 3rem;
  display: flex;
  justify-content: center;
  align-content: center;
  
}
.diferentes_item img{
  margin: 1rem;
}
.descripcion{
  padding: 1em 2em;
  display: block;
  align-self: center;
  text-align: left;
}
.descripcion h3{
  margin: 1rem;
  font-weight: 600;
}
.descripcion p{
  padding: 1rem;
  font-weight: 400;
}
</style>