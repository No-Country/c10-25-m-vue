<script setup lang="ts">
import useUser from "../composables/useUser";
import ChangePassword from "./ChangePassword.vue";

const { user, isError, isLoading } = useUser();

//TODO: Pedir Agregar Campo telefono al backend
</script>

<template>
  <div class="detalle_user">
    <ul>
      <li>Nombre: {{ user?.name }}</li>
      <li>Apellido: {{ user?.surname }}</li>
      <li>E-mail: {{ user?.email }}</li>
      <li>Teléfono:</li>
      <li>Contraseña: ********</li>
    </ul>

    <!-- funcion que devuelva los datos -->
    <ChangePassword />
  </div>
</template>

<style scoped>
.detalle_user {
  color: var(--text-footer);
  margin: 1rem 5rem 3rem 5.1rem;

  font-family: Jost;
  font-weight: 600;
  font-size: smaller;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;

  position: relative;
}
.detalle_user li {
  margin: 2rem;
}
</style>
