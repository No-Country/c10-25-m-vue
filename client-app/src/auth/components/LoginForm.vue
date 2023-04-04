<template>
  <div class="login-container">
    <div class="login-grid">
      <div class="login-image">
        <img src="../../assets/auth/gato-domestico-mullido-gris-pelo-largo-mostrando-su-afecto-perro-marron-pelo-largo-removebg-preview 1.png" alt="Login Image" />
      </div>
      <div class="login-form">
  <img src="../../assets/auth/Veterinaria_logotipo-removebg-preview 1.png" alt="Logo" class="logo">

  <form>
    <label for="email">email</label>
    <input type="email" id="email" placeholder="Correo electrónico">
    <label for="password">password</label>
    <input type="password" id="password" placeholder="Contraseña">
    <div class="form-options">
      <label>
        <input type="checkbox"> Recordar inicio de sesión
      </label>
      <a href="#">¿Olvidó su contraseña?</a>
    </div>
    <button type="submit">Iniciar sesión</button>
  </form>
  <p>¿No tienes cuenta? <a href="#">Regístrate</a></p>
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
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 100px;
  height: 100px;
}

form {
  display: flex;
  flex-direction: column;
 

  text-align: left;
  gap: 10px;
}

.container__form--login{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
form label{
  text-align: left;
  
}

form input{
padding: 8px 16px;
width: 436px;
height: 44px;
background: #FFFFFF;
border: 1px solid #3A57E8;
border-radius: 4px;
}
.form-options {
  display: flex;
  justify-content: space-between;
  width: 100%;

}

form button{
  background-color: #3A57E8;
  color: white;
  font-family: 'Jost', sans-serif;
  border: none;
  padding: 8px 16px;
  gap: 10px;
  height: 62px;
  background: #3A57E8;
  box-shadow: 0px 2px 4px rgba(58, 87, 232, 0.3);
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  margin-top:3%;
  cursor: pointer;
  color: #FFFFFF;
  
}

input[type="checkbox"] {
  /* styles for checkboxes */
  width: 20px;
  height: 20px;
}



.form-options p{
 
}
</style>