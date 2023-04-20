<template>
    <div class="login-container">
      <div class="login-grid">
        <div class="login-image">
          <img :src="imagenPortadaRegister" alt="Login Image" />
        </div>
        <div class="login-form">
        <AccountCreationSuccess />
      </div>
      </div>
      <ServerMessage :type="'error'" :message="signupStore.serverError ?? undefined" />
    </div>
</template>
  


<script lang="ts">
import AccountCreationSuccess from "../components/AccountCreationSuccess.vue";
import imagenPortadaRegister from "../../assets/auth/primer-plano-gato-lamiendo-oreja-conejo-aislado-blanco-removebg-preview 1.png";
import LogoInterno from "../../shared/LogoInterno.vue";
import ServerMessage from "../components/ServerMessage.vue"
import { useSignupStore } from '../../store/auth/signup'
import { defineComponent  } from "vue";
export default defineComponent({
  components: {
    LogoInterno,
    ServerMessage,
    AccountCreationSuccess
  },
  
setup() {
    const signupStore = useSignupStore()
    return{
        imagenPortadaRegister,
        signupStore
    }
}
});
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

@media (min-width: 800px) {
  .login-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}
.login-image {
  display: flex;
  justify-content: center;
}

}

// mobile
@media (max-width: 800px) {
  .login-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90%;
  }

  .login-image {
 display: none;
 
}
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


.form-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 15px;
  justify-content: center;
  padding-top: 15px;
}


</style>