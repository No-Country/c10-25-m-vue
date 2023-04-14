<template>
  <div class="servicios_container">
    <h2>Nuestros servicios</h2>

    <ul class="servicios_list">
      <li class="servicios_item items-a">
        <div><img src="../../assets/home_img/estetoscopio.png" alt="estetoscopio">
        </div>
        <p>Consultas</p></li>
      <li class="servicios_item items-a">
        <div><img src="../../assets/home_img/microscope.png" alt="microscopio">
        </div>
        <p>Laboratorio</p>
    </li>
      <li class="servicios_item items-a">
        <div><img src="../../assets/home_img/heartbeat.png" alt="corazon">
        </div>
        <p>Cirugía e internación</p>
      </li>
      <li class="servicios_item items-b" id="farmacia">
        <div><img src="../../assets/home_img/pharmacy.png" alt="farmacia">
        </div>
        <p>Farmacia</p>
      </li>
      <li class="servicios_item items-b" id="vacunacion">
        <div><img src="../../assets/home_img/jeringa.png" alt="jeringa">
        </div>
        <p>Vacunación</p>
      </li>
    </ul>
  
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.servicios_container{
  width: 100%;
  margin-top: 2rem;
  padding: 2rem;
  background-image:url(../../assets/home_img/fondo-2.png) ;
  background-size: cover;
  background-position: relative;

  font-family: Jost;
  font-weight: 500;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.servicios_container h2{
  color: var(--title-servicios);
  font-weight: 700;
  margin-top: 2rem;
  
}
.servicios_list{
  margin: 2rem;
  padding: 2em;
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 2fr);
  grid-template-rows: repeat(2, 2fr);
  gap: 4em;
  
}
.items-a{
  grid-column: span 4;
}
.items-b{
  position: absolute;
  top:60%;
}
#farmacia{
  left: 27%;
}
#vacunacion{
  right: 26%;
}
.servicios_item{
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.servicios_item div{
  width: 6rem;
  height: 6rem;

  box-sizing: content-box;
  padding: 7px;
  
  background-color:var(--bg-icons);
  border: solid 2px var(--bg-btn);
  border-radius: 50%;
  
  display:flex;
  justify-content: center;
  align-items: center;
  
}

</style>