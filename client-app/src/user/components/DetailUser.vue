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
    <div class="btn__changed-password">
      <ChangePassword />
    </div>
  </div>
</template>

<style scoped>
.detalle_user {
  color: var(--text-footer);
  margin: 1rem 5rem 3rem 5.1rem;

  width: 100%;

  font-family: Jost;
  font-weight: 600;
  font-size: 1.25rem;
  text-align: left;

  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: end;
}
.detalle_user li {
  margin: 2rem;
}
.btn__changed-password {
  margin-bottom: 2rem;
}
@media (max-width: 663px) {
  .detalle_user{
    height: max-content;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 0;

    font-size: 1.125rem;
  
  }
  .detalle_user ul{
    align-self: center;
  }
  .detalle_user li{
    margin: 2rem 0 1rem 0;
  }
  .btn__changed-password{
    margin: 2rem 0 2rem 0;
  }
  
}
</style>
