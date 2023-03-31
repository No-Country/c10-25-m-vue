<template>
    <div class="container-footer">
        <div class="logo_footer">
            <img src="../../assets/home_img/Veterinaria_logotipo.png" alt="Logo">
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
        <div>
            <h3>Seguinos</h3>
            <ul class="seguinos">
                <li><a href="#"><img src="../../assets/home_img/001-facebook.png"></a></li>
                <li><a href="#"><img src="../../assets/home_img/004-instagram.png"></a></li>
                <li><a href="#"><img src="../../assets/home_img/003-twitter.png"></a></li>
            </ul>
        </div>
        <div class="pawprint_footer">
            <img src="../../assets/home_img/pawprint 1.png" alt="pawprint" id="paw1">
            <img src="../../assets/home_img/pawprint 1.png" alt="pawprint" id="paw2">
            <img src="../../assets/home_img/pawprint 1.png" alt="pawprint" id="paw3">
            <img src="../../assets/home_img/pawprint 1.png" alt="pawprint" id="paw4">
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

.container-footer{
    width: 100%;
    height: 100%;
    background: var(--bg-footer);
    padding:20px;
    display: flex;
    gap: 10px;
    
    color: var(--text-footer);
    font-family: Jost;
    font-size: small;
}
.container-footer li{
    margin: 1rem;
}
.logo_footer{
    display: flex;
    padding: 20px;

}
.logo_footer img{
    width:150px;
    height: 150px;
}
.titulo_footer{
    width: 200px;
    height: 150px;
    margin-top: 40px;
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
.contacto h3{
    width: 140px;
    text-align: center;
    font-weight: 600;
}
.contacto_items{
    display: flex;
}

.contacto li{
    font-size: smaller;
    text-align: left;
}

.seguinos  {
    display:flex;
    justify-content: center;
}
.seguinos h3{
    font-weight: 600;
}
.pawprint_footer{
    width: 80%;
    position:relative;
    
}

#paw1{
    position: absolute;
    top: 30%;
    left: 2%;
    
}
#paw2{
    position: absolute;
    top: 35%;
    left: 30%;

}
#paw3{
    position: absolute;
    top: 60%;
    left: 10%;

}#paw4{
    position: absolute;
    top: 65%;
    left: 40%;
    
}
</style>