<template>
  <div class="login-container">
    <div class="login-grid">
      <div class="login-image">
        <img :src="imagenPortadaLogin" alt="Login Image" />
      </div>
      <div class="login-form">
        <LogoInterno />
        <h1>Iniciar sesión</h1>

        <form @submit="onSubmit">
          <InputWithLabel
            placeholder="Correo electronico"
            type="text"
            id="email"
            label="Email"
            v-model:value="loginFormState.email"
            @blur="handleEmailBlur"
            :errors="loginFormState.errors.email"
          />

          <InputWithLabel
            placeholder="Password"
            type="password"
            :errors="loginFormState.errors.password"
            id="password"
            label="Password"
            @blur="handlePasswordBlur"
            v-model:value="loginFormState.password"
          />

          <div class="form-options">
            <label> <input v-model="terms" type="checkbox" />Recordarme </label>
            <router-link to="/#">Olvidé mi contraseña</router-link>
          </div>
          <div class="container_btn">
            <button type="submit">Iniciar sesión</button>
          </div>
          <span class="error_form">{{ loginFormState.serverError }}</span>
          <!-- Mostrar el mensaje de error del -->
        </form>
        <p>
          ¿No tienes cuenta?
          <router-link to="/auth/register">Regístrate</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from "vue";
import { validateEmail, validatePassword } from '../composables/validationLogin';
import LogoInterno from "../../shared/LogoInterno.vue";
import InputWithLabel from "../../shared/InputWithLabel.vue";
import useLoginForm from "../composables/useLoginForm";
import imagenPortadaLogin from "../../assets/auth/gato-domestico.png";


/*
En Vue 3 con la opción setup, no necesitas registrar los componentes en la opción components 
como lo harías en la opción data. En su lugar, puedes importar los componentes directamente en 
el script y utilizarlos en la plantilla como etiquetas de componentes.*/

const { loginFormState, onSubmit } = useLoginForm();
// const userStore = useUserStore();
const terms = ref(false);

const handleEmailBlur = async () => {
  loginFormState.errors.email = await validateEmail(loginFormState.email);
};

const handlePasswordBlur = async () => {
  loginFormState.errors.password = await validatePassword(loginFormState.password);
};

/*la sintaxis de setup con la opción lang="ts"
En este caso, debes asegurarte de que el objeto 
que se devuelve esté dentro de una función defineExpose 
para exponer las propiedades a la plantilla */

defineExpose({
  terms,
  loginFormState,
  onSubmit,
  handleEmailBlur,
  handlePasswordBlur
})

</script>

<style scoped lang="scss">
.login-container {
  background-image: url(../../assets/auth/fonto_auth.png);
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.login-container h1 {
  font-family: "Jost";
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  line-height: 48px;
  padding-top: 5%;
  color: #060859;
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

form {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 5px;
  width: 436px;
}

form label {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  text-transform: capitalize;
  color: #383b43;
}

.container__form--login {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

form label {
  text-align: left;
}

form input {
  padding: 8px 16px;
  width: 436px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #3a57e8;
  border-radius: 4px;
}

.form-options {
  display: flex;
  justify-content: space-between;
  width: 100%;
  width: 100%;
  gap: 6px;
  justify-content: space-between;
  align-items: center;
}

form button {
  background-color: #3a57e8;
  color: white;
  font-family: "Jost", sans-serif;
  border: none;
  padding: 8px 16px;
  gap: 10px;
  height: 62px;
  background: #3a57e8;
  box-shadow: 0px 2px 4px rgba(58, 87, 232, 0.3);
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  cursor: pointer;
  color: #ffffff;
}

form button:hover {
  background: #4f62c1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

input[type="checkbox"] {
  width: 20px;
  height: 20px;
}

.form-options label {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
}

.container_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 9px;
}

.login-form p {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;

  color: #383b43;
}

.login-form p a {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-decoration-line: underline;

  color: #3a57e8;
}

.form-options a {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #3a57e8;
}
.form-options a:hover {
  text-decoration-line: underline;
  color: #3a57e8;
}
.error_form {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 175%;
  /* identical to box height, or 23px */

  display: flex;
  align-items: center;

  color: #c03221;
}
</style>
