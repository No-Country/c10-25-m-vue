<template>
    <div>
        <div class="logo_container">
          
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
import imagenLogoLogin from "../assets/auth/Veterinaria_logotipo-removebg-preview 1.png";
export default defineComponent({
  
    setup () {
  const props = defineProps({
    widthLogo: {
        type: String,
        required: true,
        default: '130px',
      },
    heightLogo: {
        type: String,
        required: true,
        default: '130px',
      },
      });

  
        return {
          ...props,
            imagenLogoLogin
        }
    }
})
</script>

<style scoped lang="scss">
.logo_container{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:9px;
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