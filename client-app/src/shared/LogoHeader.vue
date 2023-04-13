<template>
    <div>
        <div class="logo_container">
            <img :src="imagenLogoLogin" alt="Logo" class="logo" width="63px" height="63px" />
            <div class="titulo_footer">
                    <h2>Huellitas</h2>
                    <p>Clínica Veterinaria</p>
                </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import imagenLogoLogin from "../assets/home_img/logoHeader.png";
export default defineComponent({
  name: 'LogoHeader',
    setup () {
        

        return {
            imagenLogoLogin
        }
    }
})
</script>
<style lang="scss" scoped>
/* font-family title */
@import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap');
/* font-family text */
@import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Jost&display=swap');
.logo_container{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:9px;
}

.logo {
  width: 63px;
  height: 63px;
}

.logo_container .titulo_footer h2{
  color: var(--bg-btn);
    font-family: Bubblegum Sans;
    font-weight: 400;
    font-size: x-large;
  
}

.logo_container p{
  font-family: 'Jost';
font-style: normal;
font-weight: 400;
font-size: regular;
color: #000000;
}

</style>