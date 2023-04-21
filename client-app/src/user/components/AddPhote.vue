<script setup lang="ts"></script>

<template>
  <div class="agregar_foto">
    <div class="letra_nombre">
      <p>A</p>
      <!-- funcion para que selecicione la primera letra del nombre -->
    </div>
    <button>Agregar foto</button>
  </div>
</template>

<style scoped>
.agregar_foto {
  width:max-content;
  color: var(--bg-btn);
  margin-left: 3.8rem;
  display: flex;
  justify-content: left;
  align-content: center;
  

  gap: 0.8rem;
}
.letra_nombre {
  width: 63px;
  height: 63px;
  background-image: url(../../assets/user_img/circulo_perfil.png);
  background-repeat: no-repeat;
  background-size:contain;
  background-position: center;

  display: inline-flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.letra_nombre p {
  font-family: Jost;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 10px;

}
.agregar_foto button {
  width: max-content;
  height: 3rem;
  color: var(--bg-btn);
  background-color: white;
  cursor: pointer;
  font-weight: 400;
  font-size: 20px;
}
</style>
