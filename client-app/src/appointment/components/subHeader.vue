<template>
    <div>
        <div class="sub-header">
            <div class="bg_portada">
                <div></div>
                <div class="titulo-portada">
                    <h1>Reservar Turno</h1>
                    <img class="dog" src="../../assets/appointment_img_png/dog-turnos.png" alt="perro con computadora" />
                </div>
                </div>
                <div class="pawprint_bg">
                <img :src="Huellas" alt="huellas" />
                </div>
        </div>
    </div>
</template>

<script setup lang="ts">
  import Huellas from "../../assets/appoinment_img/huellas_appointment.png"
  
</script>

<style scoped lang="scss">
$primary-color: #3A57E8;
$secondary-color: #EBF1FA;
$font-family: 'Jost';

@mixin font-styles($weight, $size) {
  font-family: $font-family;
  font-style: normal;
  font-weight: $weight;
  font-size: $size;
}

.pawprint_bg {
   position:relative;

   img {
     position:absolute; 
     top:2rem; 
     right:10%; 
   }
}
.titulo-portada {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h1 {
    @include font-styles(700,36px);
    line-height:52px;
    display:flex;
    align-items:center;
    color:#FFFFFF;
   }
}
.bg_portada {
   width:100%; 
   background-image:url(/src/assets/appoinment_img/img-header-appointment.png); 
   background-repeat:no-repeat; 
   color:var(--bg-header); 
   align-items:center; 
   display:flex; 
   justify-content:space-evenly; 
   flex-direction:row; 
   align-content:center; 
   align-items:center; 
   gap:15px; 
   max-width:100%; 
   width:100%; 
   background-size:cover;

   h2 {
     margin-left:22%; 
     margin-top:1rem; 
     font-size:2.5rem; 
     font-weight:700; 
   }
}

.dog {
   margin-top:-1.9375rem; 
}
</style>