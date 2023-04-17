<script setup lang="ts"></script>

<template>
  <div class="agregar_foto">
    <div class="letra_nombre">
      <img src="../../assets/user_img/circulo_perfil.png" alt="circulo" />
      <p>A</p>
      <!-- funcion para que selecicione la primera letra del nombre -->
    </div>
    <button>Agregar foto</button>
  </div>
</template>

<style scoped>
.agregar_foto {
  width: 10rem;
  color: var(--bg-btn);
  margin-left: 3.8rem;
  display: flex;
  justify-content: left;

  gap: 0.8rem;
}
.letra_nombre {
  display: block;
  justify-items: center;
  align-items: center;
  position: relative;
}
.letra_nombre img {
  width: 2.5rem;
}
.letra_nombre p {
  font-family: Jost;
  font-weight: 700;
  font-size: small;
  position: absolute;
  top: 0.5em;
  left: 0.98rem;
}
.agregar_foto button {
  height: 2.3em;
  color: var(--bg-btn);
  background-color: white;
  cursor: pointer;
  font-size: medium;
}
</style>
