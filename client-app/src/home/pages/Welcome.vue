<template>
    <div class="welcome-container">

        <div class="container-welcome--perfil">
            <img class="subLogo" src="../../assets/welcome_img/Veterinaria_logotipo-removebg-preview 5.png" alt="">

            <h1>¡Hola Agustin!</h1>
            <img class="portada-img" src="../../assets/welcome_img/imagen header 1.png" alt="">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Welcome',
  components: {
 
  },
  setup() {
    const message = 'This is my Contenido del component!';
    return { message };
  },
});
</script>

<style lang="scss" scoped>
.welcome-container {

  height:89vh;
  background: #e5e5e5;

  // display: flex;
  //   justify-content: center;
}

.container-welcome--perfil{
    display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:1.5rem;
}

.container-welcome--perfil .portada-img{
    width:100%;

}

.container-welcome--perfil h1{
    font-family: 'Jost';
    font-size: 2.25rem;
line-height: 175%;
/* identical to box height, or 63px */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.05em;

color: #3A57E8;

}
</style>