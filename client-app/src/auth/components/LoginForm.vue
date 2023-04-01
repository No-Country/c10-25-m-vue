<template>
  <div class="login-container">
    <div class="login-grid">
      <div class="login-image">
        <img src="../../assets/auth/gato-domestico-mullido-gris-pelo-largo-mostrando-su-afecto-perro-marron-pelo-largo-removebg-preview 1.png" alt="Login Image" />
      </div>
      <div class="login-form">
        <form @submit.prevent="submitForm">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" />

          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const email = ref('')
    const password = ref('')

    function submitForm() {
      // Lógica para enviar el formulario
    }

    return {
      email,
      password,
      submitForm
    }
  }
})
</script>

<style scoped lang="scss">
.login-container {
  background-image: url(../../assets/auth/fonto_auth.png);
  background-size: cover;
  background-position: center;
}

.login-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}

.login-image {
  display: flex;
  justify-content: center;
}

.login-form {
  display: flex;
  justify-content: center;
}
</style>