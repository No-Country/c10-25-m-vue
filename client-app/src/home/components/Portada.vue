<template>
  <div class="portada-container-with-fondo">
    <div alt="" class="portada_veterinaria"></div>
    <div class="grid-container">
      <div class="grid-item huellas">
        <HuellasAnimation />
      </div>
      <div class="grid-item movile">
        <h1>Tu mascota merece la mejor atención</h1>
        <p>Somos un equipo de profesionales comprometidos con la salud y el <br>bienestar de tu mascota. ¡Reservá tu turno
          y conocenos!</p>
        <button>Reservar un turno</button>
      </div>
      <div class="grid-item huellas">
        <!-- <img src="../../assets/home_img/huellas_portada.png" alt="Imagen derecha"> -->
        <HuellasAnimation />
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import { defineComponent } from 'vue';
import HuellasAnimation from '../components/svg/HuellasAnimation.vue'
export default defineComponent({
  name: 'Portada',
  components: {
    HuellasAnimation
  },
  setup() {


    return {

    };
  },
});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');


.portada-container-with-fondo {
  width: 100%;
  height: 100%;
}

.portada-container-with-fondo .portada_veterinaria {
  width: 100%;
  height: 572px;
  background-image: url(../../assets/home_img/dog-portada.png);
  position: relative;
  background-size: cover;
  margin-top: -2.5%;
  background-repeat: no-repeat;
  z-index: 8;
  background-position: bottom;
}

.grid-container {
  display: grid;
  grid-template-columns: 15% 70% 15%;
}

.grid-item {
  text-align: center;
  padding-top:3%;
}

.grid-item h1 {
  color: #232D42;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  font-size: 2.625rem;
  line-height: 61px;
  text-align: center;
  font-family: 'Jost', sans-serif;
}

.grid-item p {
  color: #383B43;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  text-align: center;

}

.grid-item img {
  max-width: 100%;
  margin: 2px;
}

.grid-item button {
  background-color: #3A57E8;
  color: white;
  font-family: 'Jost', sans-serif;
  border: none;
  padding: 8px 16px;
  gap: 10px;
  height: 62px;
  background: #3A57E8;
  box-shadow: 0px 2px 4px rgba(58, 87, 232, 0.3);
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  margin-top: 3%;
  cursor: pointer;
  color: #FFFFFF;
}

.grid-item button:hover {
  background: #4f62c1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
@media (max-width:986px) {
  .grid-item{
    display: block;
    align-self: center;
  }
  .grid-item h1{
    outline: 2px solid green;
    font-size: 1.8rem;
    
  }
  .grid-item br{
    display: none;
  }
  .grid-item p{
    padding-top: 1rem;
    padding-bottom: 1rem;
    
    font-size: 1rem;
    line-height: 1.438rem;
    
  }
  .huellas{
    width: 1px;
  }
}
@media (max-width:579px) {
  .movile{
    width:100%;
  }
  .grid-item{
    outline: 2px solid purple;
  }
  .grid-item h1{
    font-size: 1.375rem;
  }

}
</style>