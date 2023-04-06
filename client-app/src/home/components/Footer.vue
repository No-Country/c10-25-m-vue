<template>
    <div class="container-footer">
        <div class="logo_footer">
            <img :src="imagenLogo" alt="Logo">
            <div class="titulo_footer">
                <h2>Huellitas</h2>
                <p>Clínica Veterinaria</p>
            </div>
        </div>
        <div class="contacto">
            <h3>Contacto</h3>
            <div class="contacto_items">
                <ul class="">
                    <li>Teléfono</li>
                    <li>Dirección</li>
                    <li>E-mail</li>
                </ul>
                <ul class="">
                    <li>+54 9 547896</li>
                    <li>Av. Corrientes 123 - Cordoba, Argentina</li>
                    <li>huellitasveterinaria@gmail.com</li>
                </ul>
            </div>
        </div>
        <div class="seguinos">
            <h3>Seguinos</h3>
            <ul class="seguinos_items">
                <li><a href="#"><img src="../../assets/home_img/001-facebook.png"></a></li>
                <li><a href="#"><img src="../../assets/home_img/004-instagram.png"></a></li>
                <li><a href="#"><img src="../../assets/home_img/003-twitter.png"></a></li>
            </ul>
        </div>
        <div class="pawprint_footer">
            <img :src="imagenHuellas" alt="pawprint" id="paw1">
            <img :src="imagenHuellas" alt="pawprint" id="paw2">
            <img :src="imagenHuellas" alt="pawprint" id="paw3">
            <img :src="imagenHuellas" alt="pawprint" id="paw4">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import imagenLogo from '../../assets/home_img/Veterinaria_logotipo.png';
import imagenHuellas from '../../assets/home_img/pawprint 1.png';

export default defineComponent({
  name: 'Footer',
  setup() {

    return {
        imagenLogo,
        imagenHuellas

    }
  }
})
</script>

<style lang="scss" scoped>

.container-footer{
    width: 100%;
    background: var(--bg-footer);
    padding: 1em 1em 2em 1em;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr;
    justify-items: center;
    color: var(--text-footer);
    font-family: Jost;
    font-size: small;
    position: relative;
}

.logo_footer{
    margin-left: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

}
.logo_footer img{
    width: 8rem;
    height: 8rem;
}
.titulo_footer{
    width: 8rem;
    height: 7rem;
    margin-top: 3rem;

    display: block;
    align-self:center;

}
.titulo_footer h2{
    color: var(--bg-btn);
    font-family: Bubblegum Sans;
    font-weight: 400;
    font-size: xx-large;
}
.titulo_footer p{
    color: black;
    text-align: center;

}
.contacto{
    margin:0.5rem 3rem 0 1.5rem;
}
.contacto h3{
    width: 6rem;
    text-align: center;
    font-weight: 600;
}
.contacto_items{
    padding: 1em;
    display: flex;
    gap: 1em ;
    
}
.contacto_items ul{
    display: grid;
    row-gap: 1.5em;
}
.contacto li{
    font-size: smaller;
    text-align: left;

}
.seguinos{
    margin:0.5rem 0 0 2em;
}
.seguinos h3{
    width: 5rem;
    font-weight: 600;
    text-align: left;
}
.seguinos_items {
    padding-top: 1em;
    display:flex;
    justify-content: center;
    gap: 2em;
}

#paw1{
    position: absolute;
    top: 45%;
    right: 9%;
    
}
#paw2{
    position: absolute;
    top: 50%;
    right: 4%;

}
#paw3{
    position: absolute;
    top: 70%;
    right: 9%;

}#paw4{
    position: absolute;
    top: 75%;
    right: 4%;
    
}
</style>