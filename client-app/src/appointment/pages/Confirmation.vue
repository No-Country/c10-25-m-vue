<script setup lang="ts"></script>

<template>
  <div class="confirmation">
  <div class="bg_turnos">
    <img src="../../assets/appointment_img_png/dog-turnos.png" alt="perrito con computadora">
  </div>
    <div class="bloque_confirmation">
      <img src="../../assets/appointment_img_png/tilde-confirmation.png" alt="tilde verificado">
      <h2>¡Turno confirmado!</h2>
      <p>Te enviamos un email con los detalles de tu turno</p>
      <button>Ver en Mis turnos</button>
    </div>
  </div>
</template>

<style scoped>
.confirmation{
  width: 100%;
  display: inline-block;
  justify-content: center;
  align-content: center;
  font-family: 'Jost';
  font-size: 1.375rem;
  font-weight: 500;
  
}
.bg_turnos{
  height: 133px;
  background-image: url(../../assets/appointment_img_png/bg-turnos.png);
  background-repeat: no-repeat;
  background-size: cover;

}
.bg_turnos img{
  margin-top: -2.4rem;
}

.bloque_confirmation{
  width: max-content;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  outline: 3px solid var(--bg-btn);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 3rem;
  
  display: inline-block;
  
}
.bloque_confirmation h2{
  color: var(--text-turno);
  font-size: 1.625rem;
  font-weight:600 ;
  margin-top: 1rem;
}
.bloque_confirmation p{
  color: var(--text-footer);
  font-weight: 400;
  margin-top: 2rem;
}
.bloque_confirmation button{
  background:var(--bg-btn);
  color: var(--text-light-btn);

  margin-top: 2rem;
  padding: 8px 16px;
  box-shadow: 0px 2px 4px rgba(58, 87, 232, 0.3);
  border-radius: 10px;

  font-family: 'Jost';
  font-size: 1.375rem;
  font-weight: 500;

}
</style>
