<script setup lang="ts">
import { ref, watch } from "vue";

interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();

const userData = ref({
  name: "",
  surname: "",
  email: "",
});
</script>

<template>
  <div>
    <div v-if="props.isOpen" class="modal">
      <div class="modal-content">
        <span class="close"><i class="fa-solid fa-xmark"></i></span>
        <h2>Actualizar información</h2>
        <form class="modal-form">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="userData.name" />
          <label for="surname">Apellido:</label>
          <input type="text" id="surname" v-model="userData.surname" />
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="userData.email" />
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin-top: 10px;
}
.modal {
  font-family: jost;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  position: relative;
}

.close {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 28px;
  font-weight: bold;
  color: black;
  cursor: pointer;
}

.modal-form {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  height: 230px;
}

.modal-form label {
  width: 30%;
}

.modal-form input {
  width: 100%;
  border-bottom: 1px solid #ccc;
}

.modal-form button {
  width: 100%;
  padding: 0.6rem;
  background-color: var(--bg-btn);
  color: var(--text-light-btn);
  border-radius: 5px;
  transition: all 300ms;

  box-shadow: 1px 1px 3px var(--text-light-btnLogin);
}

.modal-form button:hover {
  background-color: var(--text-nav);
}

.modal-form button:active {
  box-shadow: 2px 2px 3px var(--text-light-btnLogin) inset;
}
</style>
