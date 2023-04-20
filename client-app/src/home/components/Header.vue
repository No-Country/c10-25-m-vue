<template>
  <div class="header-container-with-logo-nav-registration">
    <img
      @click="goToHome()"
      src="../../assets/home_img/logo_huellitas.png"
      alt=""
      class="logo"
    />
    <div class="movile-nav" :class="{'activo':!movileNavActivo}">
      <nav>
        <ul v-for="(elementosNav, index) in navItems" :key="index">
          <li><a :href="elementosNav.value">{{ elementosNav.name }}</a></li>
        </ul>
      </nav>
  
      <div class="btn-container-session">
        <button
          @click="toggleBackground(), goToLogin()"
          :class="
            !noBackground ? 'no-backgroundLogin' : 'btn__on-backgroundLogin'">
          Iniciar sesión
        </button>
        <button
          @click="toggleBackground(), goToRegister()"
          :class="noBackground ? 'no-background' : 'btn__on-background'"
        >
          Registrarme
        </button>
      </div>
    </div>
    <div class="burger">
      <button @click="movileNavActivo=!movileNavActivo">
        <img src="../../assets/home_img/menu_icon.png" alt="menu hamburguesa">
      </button>  
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";


const navItems = ref([
  {name: 'Inicio', value:'/'},
  {name:'Servicios', value:'#servicios'},
  {name:'Por qué elegirnos', value:'#eleginos'}
]);

const noBackground: Ref<boolean> = ref(false);

const router = useRouter();

function goToLogin() {
  router.push("/auth/login");
}

function goToRegister() {
  router.push("/auth/register");
}

function goToHome() {
  router.push("/");
}

function toggleBackground() {
  noBackground.value = !noBackground.value;
};

let movileNavActivo = false

</script>

<style lang="scss" scoped>
.no-background {
  background-color: transparent !important;
  color: #2e46ba;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: auto;
  height: 51px;
  border-radius: 4px;
  font-family: "Jost", sans-serif;
  font-size: 1.25rem;
  cursor: pointer;
}
.no-backgroundLogin {
  background-color: transparent !important;
  color: #2e46ba;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: auto;
  height: 51px;
  border-radius: 4px;
  font-family: "Jost", sans-serif;
  font-size: 1.25rem;
  cursor: pointer;
}
.header-container-with-logo-nav-registration {
  width: 100%;
  height: 80px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-header);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  z-index: 10;
  position: relative;
}
.header-container-with-logo-nav-registration .logo {
  margin-left: 15px;
  cursor: pointer;
}
.movile-nav{
  width: 80%;
  display: inline-flex;
  justify-content:space-evenly;
  align-content: center;
  align-items: center;

}
.header-container-with-logo-nav-registration nav {
  display: inline-flex;
  gap: 20px;
}

.header-container-with-logo-nav-registration nav ul li a {
  color: var(--text-nav);
  gap: 15px;
  font-size: 1.25rem;
  margin-left: 10px;
  cursor: pointer;
  font-family: "Jost", sans-serif;
}

.header-container-with-logo-nav-registration nav ul li a:hover {
  text-decoration: underline;
  color: #0e1c5f;
}

.btn-container-session {
  display: flex;
  gap: 10px;
  margin-right: 15px;
  font-family: "Jost", sans-serif;
}

.btn-container-session .btn__on-background {
  background: var(--bg-btn);
  box-shadow: 0px 2px 4px rgba(58, 87, 232, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: auto;
  height: 51px;
  font-size: 1.25rem;
  border-radius: 4px;
  color: var(--text-light-btn);
  cursor: pointer;
  font-family: "Jost", sans-serif;
}
.btn-container-session .btn__on-background:hover {
  background: #4f62c1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.btn-container-session .btn__on-backgroundLogin {
  background: var(--bg-btnLight);
  box-shadow: 0px 2px 4px rgba(58, 87, 232, 0.3);
  border: 1px solid #2e46ba;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: auto;
  height: 51px;
  font-size: 1.25rem;
  border-radius: 4px;
  color: var(--text-light-btnLogin);
  cursor: pointer;
  font-family: "Jost", sans-serif;
}
.btn-container-session .btn__on-backgroundLogin:hover {
  background: var(--bg-btnLight);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #2e46ba;
}

.no-backgroundLogin:hover {
  border: 1px solid #2e46ba;
}
.no-backgroundLogin:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.no-background:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.burger{
  display: none;
}
@media (max-width:930px) {
  .movile-nav{
    width: 100%;
    height: max-content;
    margin: 15rem 0 0 0;
    z-index: 11;
    
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    
    display:none; 
    // inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    gap: 30px;
    
  }
  .activo{
    display: inline-flex;
  }
  .header-container-with-logo-nav-registration nav{
    display: inline-block;
  }
  .header-container-with-logo-nav-registration li{
    padding: 15px;
  }
  .btn-container-session{
    width: 10rem;
    margin: auto;
    margin-bottom: 15px;
    gap: 30px;

    display: inline-flex;
    flex-direction: column;
    justify-self: center;
    align-self: center;
  }
  .btn-container-session .btn__on-background {
    border-radius: 20px;
    padding: 10px;
  }
  .btn-container-session .no-backgroundLogin{
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);

  }
  .burger{
    background-color: transparent;
    margin-right: 3rem;
    display: block;
    z-index: 12;
    cursor: pointer;
  }
  
}
@media (max-width: 530px) {
  .header-container-with-logo-nav-registration{
    justify-content: space-around;
  }
  .header-container-with-logo-nav-registration .logo{
    width: 30%;
    z-index: 1;
  }
  .burger{
    margin-right: 5%;
  }
  .movile-nav{
    width: 90%;
  }
}
@media (max-width:410px) {
  .movile-nav{
    position: absolute;
    right: 5%;
  }
  .burger{
    position: absolute;
    right: 5%;
  }
}
</style>
