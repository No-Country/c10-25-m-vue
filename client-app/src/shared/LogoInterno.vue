<template>
  <div>
      <div class="logo_container" @click="goToHome()">  
          <img :src="imagenLogoLogin" alt="Logo" class="logo" :width="widthLogo" :height="heightLogo" />
          <div class="titulo_footer">
                  <h2>Huellitas</h2>
                  <p>Clínica Veterinaria</p>
              </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps  } from 'vue'
import imagenLogoLogin from '../assets/auth/Veterinaria_logo.png'
import { useRouter } from "vue-router"; // Importar goToWelcome
export default defineComponent({
name: 'LogoInterno',
  setup () {
  
const props = defineProps({
  widthLogo: {
      type: String,
      required: true,
      default: '100px',
    },
  heightLogo: {
      type: String,
      required: true,
      default: '100px',
    },
    });

    const router = useRouter();

    function goToHome() {
      router.push("/");
    }
      return {
        ...props,
          imagenLogoLogin,
          goToHome
      }
  }
})
</script>

<style scoped lang="scss">



@media (min-width: 800px) {
.logo{
width:100px;
height:100px;
}
.logo_container{
display:flex;
justify-content:center;
align-items:center;
gap:9px;
cursor:pointer;
}
}

// mobile
@media (max-width: 800px) {
.logo{
width:60px;
height:60px;
}
.logo_container{
display:flex;
justify-content:center;
flex-direction: column;
align-items:center;
gap:0px;
cursor:pointer;
}
}

.login-container h2{
color: var(--bg-btn);
  font-family: Bubblegum Sans;
  font-weight: 400;
  font-size: xx-large;
}

.login-container p{
font-family: 'Jost';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 35px;

color: #000000;
}

</style>