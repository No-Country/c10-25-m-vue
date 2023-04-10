<template>
    <div>
        <div class="logo_container">
            <img :src="imagenLogoLogin" alt="Logo" class="logo" width="130px" height="130px" />
            <div class="titulo_footer">
                    <h2>Huellitas</h2>
                    <p>Clínica Veterinaria</p>
                </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import imagenLogoLogin from "../assets/auth/Veterinaria_logotipo-removebg-preview 1.png";
export default defineComponent({
    setup () {
        

        return {
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

.logo {
  width: 100px;
  height: 100px;
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