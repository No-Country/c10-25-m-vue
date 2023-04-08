<template>
  <BgUser></BgUser>
    <DecoUser></DecoUser>
    <div class="datos_user">
      <div class="logo_chico_user">
        <img src="../../assets/home_img/Veterinaria_logotipo.png" alt="logo">
        <h2>Mis datos</h2>
      </div>
      <EditarBtn></EditarBtn>
    </div>  
    <div class="agregar_foto">
      <div class="letra_nombre">
        <img src="../../assets/user_img/circulo_perfil.png" alt="circulo">
        <p>A</p><!-- funcion para que selecicione la primera letra del nombre -->
      </div>
      <button>Agregar foto</button>
    </div>
    <div class="detalle_user">
      <ul>
        <li>Nombre:</li>
        <li>Apellido:</li>
        <li>E-mail:</li>
        <li>Teléfono:</li>
        <li>Contraseña:</li>
      </ul>
      <button>Cambiar contraseña</button>
      <!-- funcion que devuelva los datos -->
    </div>
  
  
</template>

<script lang="ts" setup>
import BgUser from '../../shared/BgUser.vue';
import DecoUser from './DecoUser.vue';
import EditarBtn from './EditarBtn.vue';
</script>

<style scoped>
.datos_user{
  
  color: var(--text-footer);
  margin: 2rem 4rem 2rem 4rem;
  font-family: Jost;
  font-weight: 600;
  font-size: smaller;
  display: flex;
  justify-content: space-between;

}
.logo_chico_user{
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo_chico_user img{
  width: 2rem;
  height: 2rem;
}
.agregar_foto{
  width: 10rem;
  color: var(--bg-btn);
  margin-left: 3.8rem;
  display: flex;
  justify-content: left;
  
  gap: 0.8rem;
}
.letra_nombre{
  display: block;
  justify-items: center;
  align-items: center;
  position: relative;
}
.letra_nombre img{
  width: 2.5rem;
  
}
.letra_nombre p{
  font-family: Jost;
  font-weight: 700;
  font-size:smaller;
  position: absolute;
  top: 0.5em;
  left: 0.98rem;
  
}
.agregar_foto button{
  height: 2.3em;
  color:var(--bg-btn) ;
  background-color: white;
  cursor: pointer;
  font-size: smaller;
  
}
.detalle_user{
  color: var(--text-footer);
  margin: 1rem 5rem 3rem 5.1rem;

  font-family: Jost;
  font-weight: 600;
  font-size: smaller;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;

  position: relative;
}
.detalle_user li{
  margin: 2rem;

}
.detalle_user button{
  height: 1.5em;
  color: var(--bg-btn);
  background-color: white;
  font-size: smaller;
  cursor: pointer;

  position: absolute;
  left: 20rem;
  bottom: 2rem;
}

</style>