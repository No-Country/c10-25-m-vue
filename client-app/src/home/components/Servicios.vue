<template>
  <div class="servicios_container" id="servicios">
    <h2>Nuestros servicios</h2>
    <ul class="servicios_list">
      <li class="servicios_item items_a item_left">
        <div><img src="../../assets/home_img/estetoscopio.png" alt="estetoscopio">
        </div>
        <p>Consultas</p></li>
      <li class="servicios_item items_a item_right">
        <div><img src="../../assets/home_img/microscope.png" alt="microscopio">
        </div>
        <p>Laboratorio</p>
      </li>
      <li class="servicios_item items_a item_left">
        <div><img src="../../assets/home_img/heartbeat.png" alt="corazon">
        </div>
        <p>Cirugía e internación</p>
      </li>
      <li class="servicios_item items_b item_right" id="farmacia">
        <div><img src="../../assets/home_img/pharmacy.png" alt="farmacia">
        </div>
        <p>Farmacia</p>
      </li>
      <li class="servicios_item items_b item_left" id="vacunacion">
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
  font-size: 2rem;
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.servicios_container h2{
  color: var(--title-servicios);
  font-weight: 700;
  font-size: 2.25rem;
  margin-top: 2rem;
  
}
.servicios_list{
  margin: 2rem;
  padding: 2em;
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 2fr);
  grid-template-rows: repeat(2, 2fr);
  gap: 1em; /*4em; */
  
}
.items_a{
  grid-column: span 4;
}
.items_b{
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

@media (max-width:984px) {
  
  .servicios_list{
    display: flex;
    flex-direction: column;
    
  }
  .servicios_item{
    display: inline-flex;
    flex-direction: row;
    gap: 1rem;
  }
  .items_b{
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .item_right{
    flex-direction:row-reverse ;
  }
  #farmacia{
    margin-right: 20rem;
  }
  .servicios_item div{
    width: 5rem;
    height: 5rem;
  }
}
@media (max-width: 516px) {
  .servicios_container{
    font-size: 1.125rem;
  }
  .servicios_container h2{
    font-size: 1.25rem;
  }
}
#farmacia{
    margin-right: 4rem;
  }
@media (max-width: 430px) {
  .servicios_item div{
    width: 2.5rem;
    height: 2.5rem;

  }
  .servicios_item img{
    width: 1.5rem;
    height: 1.5rem;
  }
  #farmacia{
    margin-right: 3rem;
  }
}

</style>