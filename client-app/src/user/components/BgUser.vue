<template>
  <div class="bg_container">
    <div class="logo_portada_user">
      <img :src="LogoVeter" alt="Logo" id="logo_user">
    </div>
    <div class="fondo_azul">
      <img class="fondo_grande" src="../../assets/user_img/bg-user.png" alt="fondo">
      <div class="perfil_deco">
        <img :src="CatPrefil" alt="gato">
        <h1>Mi perfil</h1>
      </div>
    </div>
    <div class="pawprint_user">
      <img :src="Huellas" alt="huellas">
    </div>
  </div>
</template>

<script lang="ts">
import CatPrefil from '../../assets/user_img/cat perfil.png'
import LogoVeter from '../../assets/home_img/Veterinaria_logotipo.png'
import Huellas from '../../assets/user_img/bg-pawprint.png'

export default {
    components:{
        
    },
  setup() {



return {
  CatPrefil,
  Huellas,
  LogoVeter
};


  },
}

</script>
<style scoped>
.fondo_grande{
  display: none;
}
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
  height: 184px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.perfil_deco{
  height: 10rem;
  margin-top: 1.1rem;
  margin-right: 6rem;
  display:inline-flex;
  justify-content: center;
  
}
.perfil_deco img{
  margin-bottom: -1.5rem;
}
.perfil_deco h1{
  font-family: Jost;
  font-weight: 700;
  color: white;
  align-self: center;
  
}
@media (min-width: 1280px) {
  .fondo_azul{
    height: auto;
    background-image: none;
  }
  .fondo_grande{
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    z-index: -3;
    position: relative;

  }
  .perfil_deco{
    z-index: -2;
    position: absolute;
    right: 33%;
    bottom: 1%;
    
  }
  
}


</style>