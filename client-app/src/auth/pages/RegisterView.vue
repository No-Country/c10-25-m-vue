<template>
  <div class="login-container">
    <div class="login-grid">
      <div class="login-image">
        <img :src="imagenPortadaRegister" alt="Login Image" />
      </div>

      <div class="login-form" v-if="isComponentVisible">
        <LogoInterno />
        <div class="container__subtitle">
          <h1>Registrate</h1>
          <p>Completá tus datos para comenzar.</p>

          <form @submit="onSubmit">
            <div class="form-group">
              <InputWithLabel
                type="text"
                class="form-row"
                placeholder="Nombre"
                v-model:value="signupFormState.name"
                id="nombre"
                label="Nombre"
                @blur="handleNameBlur"
                :errors="signupFormState.errors.name"
              />

              <InputWithLabel
                type="text"
                class="form-row"
                placeholder="Apellido"
                :errors="signupFormState.errors.surname"
                id="apellido"
                label="Apellido"
                v-model:value="signupFormState.surname"
                @blur="handleSurnameBlur"
              />

              <InputWithLabel
                type="text"
                class="form-row"
                placeholder="Email"
                :errors="signupFormState.errors.email"
                id="email"
                label="Email"
                v-model:value="signupFormState.email"
                @blur="handleEmailBlur"
              />

              <InputWithLabel
                type="number"
                class="form-row"
                placeholder="Teléfono"
                :errors="signupFormState.errors.phone"
                id="telefono"
                label="Teléfono"
                v-model:value="signupFormState.phone"
                @blur="handlePhoneBlur"
              />

              <InputWithLabel
                type="password"
                class="form-row"
                placeholder="Contraseña"
                :errors="signupFormState.errors.password"
                id="contraseña"
                label="Contraseña"
                v-model:value="signupFormState.password"
                @blur="handlePasswordBlur"
              />

              <InputWithLabel
                type="password"
                class="form-row"
                placeholder="Repetir contraseña"
                :errors="signupFormState.errors.confirmPassword"
                id="repetirContraseña"
                label="Repetir contraseña"
                v-model:value="signupFormState.confirmPassword"
                @blur="handleConfirmPasswordBlur"
              />

              <InputWithLabel
                type="file"
                class="form-row"
                placeholder="imagen de perfil"
                :errors="signupFormState.errors.profileImageUrl"
                id="profileImageUrl"
                label="URL de imagen de perfil"
                @change="handleFileChange"
                @blur="handleProfileImageUrlBlur"
                accept="image/png"
              />
            </div>
            <div class="container_btn">
              <button type="submit">Registrarte</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="login-form" v-if="!isComponentVisible">
      <AccountCreationSuccess />
    </div>
    <ServerMessage
      :type="'error'"
      :message="signupStore.serverError ?? undefined"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import InputWithLabel from "../../shared/InputWithLabel.vue";
import AccountCreationSuccess from "../components/AccountCreationSuccess.vue";
import imagenPortadaRegister from "../../assets/auth/primer-plano-gato-lamiendo-oreja-conejo-aislado-blanco-removebg-preview 1.png";
import LogoInterno from "../../shared/LogoInterno.vue";
import ServerMessage from "../components/ServerMessage.vue";
import useSignupRequest from "../composables/useSignupRequest";
import { useSignupStore } from "../../store/auth/signup";
import {
  validateName,
  validateSurname,
  validateEmail,
  validatePhone,
  validatePassword,
  validateConfirmPassword,
  validateProfileImageUrl,
} from "../composables/validationSignup";

const signupStore = useSignupStore();
const isComponentVisible = ref(true);
const { signupFormState, onSubmit } = useSignupRequest();

const handleNameBlur = async () => {
  signupFormState.errors.name = await validateName(signupFormState.name);
};

const handleSurnameBlur = async () => {
  signupFormState.errors.surname = await validateSurname(
    signupFormState.surname
  );
};

const handleEmailBlur = async () => {
  signupFormState.errors.email = await validateEmail(signupFormState.email);
};

const handlePhoneBlur = async () => {
  signupFormState.errors.phone = await validatePhone(signupFormState.phone);
};

const handlePasswordBlur = async () => {
  signupFormState.errors.password = await validatePassword(
    signupFormState.password
  );
};

const handleConfirmPasswordBlur = async () => {
  signupFormState.errors.confirmPassword = await validateConfirmPassword(
    signupFormState.confirmPassword,
    signupFormState.password
  );
};

const handleProfileImageUrlBlur = async () => {
  signupFormState.errors.profileImageUrl = await validateProfileImageUrl(
    signupFormState.profileImageUrl
  );
};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file: File = (target.files as FileList)[0];
  signupFormState.profileImageUrl = file;
  // Aquí puedes actualizar el valor de signupFormState.profileImageUrl con el archivo seleccionado
};
</script>

<style scoped lang="scss">
.container__subtitle {
  display: flex;
  flex-direction: column;
  line-height: 25px;
  padding-top: 5%;
}

form button:hover {
  background: #4f62c1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.login-container {
  background-image: url(../../assets/auth/fonto_auth.png);
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
}

.container_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 9px;
}

.login-form h1 {
  font-family: "Jost";
  font-style: normal;
  font-weight: 500;
  font-size: 33px;

  /* identical to box height */
  padding-top: 10px;

  color: #060859;
}

.login-form p {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  width: 100%;
  font-size: 16px;
  padding: 10px;
  /* identical to box height, or 28px */

  color: #383b43;
}

.login-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}

@media (min-width: 800px) {
  form {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 15px;
    width: 100%;
    width: 436px;
  }

  .login-image {
    display: flex;
    justify-content: center;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
    height: 90%;
  }

  .form-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 15px;
    justify-content: center;
    padding-top: 15px;
  }

  .form-row {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 250px;
  }
}

@media (max-width: 800px) {
  .form-row {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: auto;
  }

  .login-image {
    display: none;
  }
  /* Estilos específicos para dispositivos móviles */
  .login-grid {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .form-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 15px;
    justify-content: center;
    width: 89%;
  }
  form {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 15px;
    padding: 11px;
    align-items: center;
  }
}

.container__form--login {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.form-options {
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  margin-top: 3%;
  cursor: pointer;
  color: #ffffff;
}

input[type="checkbox"] {
  /* styles for checkboxes */
  width: 20px;
  height: 20px;
}
</style>
