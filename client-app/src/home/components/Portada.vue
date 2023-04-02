<template>
    <div class="portada-container-with-fondo">
        <div alt="" class="portada_veterinaria"></div>
        <div class="grid-container">
          <div class="grid-item">
            <img src="../../assets/home_img/huellas_portada.png" alt="Imagen izquierda">
          </div>
          <div class="grid-item">
            <h1>Tu mascota merece la mejor atención</h1>
            <p>Somos un equipo de profesionales comprometidos con la salud y el <br>bienestar de tu mascota. ¡Reservá tu turno y conocenos!</p>
            <button>Reservar un turno</button>
          </div>
          <div class="grid-item">
            <img src="../../assets/home_img/huellas_portada.png" alt="Imagen derecha">
          </div>
        </div>
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

@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');


.portada-container-with-fondo{
    width: 100%;
    height: 100%;
}

.portada-container-with-fondo .portada_veterinaria{
  width: 100%;
    height: 572px;
    background-image: url(../../assets/home_img/imagen_home_cuerpo.png);
    position:relative;
    background-size: cover;
    margin-top: -8.8%;
    background-repeat: no-repeat;
    z-index: 8;
}

.grid-container {
  display: grid;
  grid-template-columns: 15% 70% 15%;
}

.grid-item {
  text-align: center;
}

.grid-item h1{
  color: #232D42;
  font-family: 'Jost';
font-style: normal;
font-weight: 700;
font-size: 2.825rem;
line-height: 61px;
text-align: center;
font-family: 'Jost', sans-serif;
}

.grid-item p{
  color:#383B43;
  font-family: 'Jost';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 35px;
text-align: center;

}

.grid-item img {
  max-width: 100%;
  margin:2px;
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
  margin-top:3%;
  cursor: pointer;
  color: #FFFFFF;
}


</style>