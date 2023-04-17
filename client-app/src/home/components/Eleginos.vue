<template>
  <div class="diferentes_container" id="eleginos">
    <h2>Por qué elegirnos</h2>
    <img class="bg_diferentes" id="paw_bg1" src="../../assets/home_img/big_pawprint_home.png"  alt="">
    <img class="bg_diferentes" id="paw_bg2" src="../../assets/home_img/big_pawprint_home.png"  alt="">
    <img class="bg_diferentes" id="paw_bg3" src="../../assets/home_img/big_pawprint_home.png"  alt="">
    <div class="diferentes_item">
      <img :src="imagenPortadabulldog" alt="">
      <div class="descripcion">
        <h3>Atención de calidad las 24 hs</h3>
        <p>Nuestros expertos están disponibles para cuidar de tu mascota en todo momento.</p>
      </div>
    </div>
    <div class="diferentes_item">
      <div class="invert">
        <div class="descripcion">
          <h3>No necesitás hacer llamadas</h3>
          <p>Reservá, cancelá y reprogramá turnos desde cualquier dispositivo.</p>
        </div>
        <img src="../../assets/home_img/woman_compu.png" alt="">
      </div>
    </div>
  </div>

</template>

<script lang="ts" >
import { defineComponent, ref } from 'vue'
import imagenPortadabulldog from '../../assets/home_img/bulldog-at-vet 1.png';

export default defineComponent({
  name: 'Diferentes',
  setup() {

    return {
      imagenPortadabulldog
    }
  }
})
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
.invert{
  display: flex;
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
@media (max-width: 987px){
  .bg_diferentes{
    width: 15rem;
  }
  .diferentes_item{
    width: 35rem;
    height: 13rem;
    margin: 1rem;
  }
  .diferentes_item img{
    width: 10rem;
    height: 10rem;
    
  }

}
@media (max-width:693px) {
  .bg_diferentes{
    display: none;
    
  }
  .diferentes_container{
    height: 50rem;
  }
  .diferentes_container h2{
    font-size: 1.25rem;
  }
  .diferentes_item{
    width: 20rem;
    height: 15rem;
    display: inline;
    margin-top: 2rem;
  }
  .diferentes_item img{
    width:7rem ;
    height: 7rem;
  }
  .descripcion{
    padding: 0;
    text-align: center;
  }
  .descripcion h3{
    margin: 1rem;
    font-size: 1.125rem;
  }
  .descripcion p{
    font-size: 1rem;
  }
  .invert{
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
}
@media (max-width: 417px) {
  .descripcion p{
    padding: 2rem;
  }
  .invert img{
    margin-top: 3rem; 
  }
  
}
</style>