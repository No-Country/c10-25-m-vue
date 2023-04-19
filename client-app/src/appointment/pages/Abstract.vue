<template>
  <div class="abstract">
    <img class="pawprint" src="../../assets/home_img/Veterinaria_logotipo.png" alt="">
    <div class="bg_portada">
      <h2>Mis turnos</h2>
      <img class="dog" src="../../assets/appointment_img/dog-turnos.png" alt="">
    </div>
    <div class="pawprint_bg">
      <img :src="Huellas" alt="huellas">
    </div>
    <div class="detalle">
      <h3>Turnos confirmados</h3>
      <div class="bloque_detalle">
        <div class="datos">
          <ul class="fecha">
            <li>
              <img src="../../assets/appointment_img/calendar-ico.png" alt="calendario">
              <p>18/04/2023</p>
            </li>
            <li>
              <img src="../../assets/appointment_img/reloj-ico.png" alt="reloj">
              <p>10:00</p>
            </li>
          </ul>
          <ul class="vet">
            <li>
              <img src="../../assets/appointment_img/vet-ico.png" alt="veterinario">
              <p>Moreira, Valentina - cardiólogia</p>
            </li>
            <li>
              <img src="../../assets/appointment_img/perrito-ico.png" alt="perro">
              <p>Terry</p>
            </li>
          </ul>
        </div>
        <div class="btns">
          <button class="btn_reprogramar">
            Reprogramar
          </button>
          <button class="btn_cancelar">
            Cancelar
          </button>
        </div>
      </div>
      <h3>Turnos cancelados</h3>
    </div>
    <div class="otros_turnos">
      <p>Todavía no tenés turnos cancelados.</p>

    </div>
  </div>
</template>


<script lang="ts">
import Huellas from '../../assets/user_img/bg-pawprint.png'

export default {
    components:{
        
    },
  setup() {

return {
  Huellas,
};


  },
}
</script>

<style scoped>
.abstract{
  height: 100%;
  color: var(--text-footer);
  background-color: var(--bg-menu-user);
  font-family: Jost;
  font-size:1rem ;
  font-weight: 500;
  overflow: hidden;

}
.pawprint{
  width: 7%;
  margin-top: 1rem;
  display: inline;
}
.bg_portada{
  width: 100%;
  background-image: url(../../assets/appointment_img/bg-mis-turnos.png);
  background-repeat: no-repeat;
  background-size: cover;
  
  color: var(--bg-header);
  
  display: inline-flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 15px;
}
.bg_portada h2{
  margin-left: 22%;
  margin-top: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
}
.dog{
  margin-bottom: -0.838rem;
}
.detalle{
  width: 80%;
  margin: 2rem 0 1rem 0;
  display: inline-block;
}
.pawprint_bg{
  position: relative;
  
}
.pawprint_bg img{
  position: absolute;
  top: 5rem;
  right: 10%;
}
.detalle h3{
  color: var(--bg-btn);
  
  text-align: left;
  font-size: 1.5rem;
  font-weight: 700;
}
.bloque_detalle{
  width: 45%;
  background-color:var(--bg-header) ;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
  margin: 2rem 0 2rem ;
}
.datos{
  margin:2rem 2rem 1rem 2rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: left;
  align-content: center;
  gap: 30px;
  
}
.fecha{
  font-weight: 600;

  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  
}
.vet{
  display: inline-flex;
  flex-direction: column;
  gap: 30px;
}
.datos li{
  display: inline-flex;
  gap: 15px;

}
.datos img{
  width: 35px;
  height: 36px;
}
.btns{
  width: 100%;
  display: inline-flex;
  justify-content: right;
  align-content:right;
  
}
.btn_reprogramar{
  margin: 1rem;
  padding: 8px 16px;
  font-family: Jost;

  background: #FEFEFE;
  border: 3px solid #3A57E8;
  box-shadow: 0px 2px 4px #8A8F97;
  border-radius: 10px;
  
}
.btn_cancelar{
  height: max-content;
  margin: 1rem 2rem 1rem 0;
  margin-right: 2rem;
  padding: 8px 16px;
  
  color: var(--bg-header);
  background-color:var(--bg-btn) ;
  font-family: Jost;
  border: 3px solid var(--bg-btn);
  
  box-shadow: 0px 2px 4px #8A8F97;
  border-radius: 10px;
}
.otros_turnos{
  height: 10rem;
  color: black;
  margin: 1rem;
  font-size: 1.25rem;
}
</style>
