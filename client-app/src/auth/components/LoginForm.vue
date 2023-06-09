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

          <InputWithLabel placeholder="Correo electronico" type="text" id="email" label="Email" v-model:value="loginFormState.email"
            @blur="validateEmail" :errors="loginFormState.errors.email" />

          <InputWithLabel placeholder="Password" type="password" :errors="loginFormState.errors.password" id="password" label="Password"
            @blur="validatePassword" v-model:value="loginFormState.password" />

          <div class="form-options">
            <label>
              <input v-model="terms" type="checkbox" />Recordarme
            </label>
            <router-link to="/#">Olvidé mi contraseña</router-link>
          </div>
          <div class="container_btn">
            <button type="submit">Iniciar sesión</button>
          </div>
          <span class="error_form">{{ loginFormState.serverError }}</span> <!-- Mostrar el mensaje de error del -->
        </form>
        <p>¿No tienes cuenta? <router-link to="/register">Regístrate</router-link></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LogoInterno from "../../shared/LogoInterno.vue";
import InputWithLabel from "../../shared/InputWithLabel.vue";
import useLoginRequest from '../composables/useLoginRequest';
import imagenPortadaLogin from "../../assets/auth/gato-domestico.png";
import { defineComponent, ref, reactive } from "vue";
import { ErrorMessage  } from "vee-validate";
import * as yup from "yup";

interface FormValues {
  email: string;
  password: string;
  [key: string]: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email()
    .required("Email es requerido."),
  password: yup
    .string()
    .required("Contraseña incorrecta. Por favor, intentá de nuevo.")
    .min(8, "La contraseña debe tener más de 8 caracteres."),
});

export default defineComponent({
  name: "LoginForm",
  components: {
    ErrorMessage,
    LogoInterno,
    InputWithLabel,
  },

  setup() {
    const { loginFormState, onSubmit } = useLoginRequest();
    const terms = ref(false);
    const email = ref('');
    const password = ref('');

    const errors = reactive({
      email: '',
      password: '',
    });

    const validateEmail = async () => {
      try {
        await schema.validateAt("email", { email: email.value });
        errors.email = '';
      } catch (err) {
        if (err instanceof Error) {
          errors.email = err.message;
        }
      }
    };

    const validatePassword = async () => {
      try {
        await schema.validateAt('password', { password: password.value });
        errors.password = '';
      } catch (err) {
        if (err instanceof Error) {
          errors.password = err.message;
        }
      }
    };

    return {
      email,
      password,
      terms,
      schema,
      errors,
      imagenPortadaLogin,
      validateEmail,
      validatePassword,
      loginFormState, 
      onSubmit
    };
  },
});
</script>

<style scoped lang="scss">
.login-container {
  background-image: url(../../assets/auth/fonto_auth.png);
  background-size: cover;
  background-position: center;
  height:89vh;
  // display: flex;
  //   justify-content: center;
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
  width:436px;
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
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 175%;
  /* identical to box height, or 23px */

  display: flex;
  align-items: center;

  color: #C03221;

}
</style>
