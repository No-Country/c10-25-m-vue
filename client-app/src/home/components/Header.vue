<template>
    <div class="header-container-with-logo-nav-registration">
        <img @click="goToHome()" src="../../assets/home_img/logo_huellitas.png" alt="" class="logo">
        <nav>
            <ul v-for="(elementosNav, index) in navItems" :key="index">
                <li>{{ elementosNav }}</li>
            </ul>
        </nav>
        <div class="btn-container-session">
            <button @click="toggleBackground(), goToLogin()"  :class="!noBackground ? 'no-background' : 'btn__on-backgroundLogin'">
              Iniciar sesión
            </button>
            <button @click="toggleBackground(), goToRegister()" :class="noBackground ? 'no-background' : 'btn__on-background'" >
                Registrarme
            </button>
           
        </div>
    </div>
</template>

<script  lang="ts">
import { ref, Ref } from 'vue';
import { useRouter } from 'vue-router'; 
export default {
  setup() {
const navItems = ref(['Inicio', 'Servicios', 'Por qué elegirnos']);
const noBackground: Ref<boolean> = ref(false);

const router = useRouter();

function goToLogin() {
  router.push('/login');
}

function goToRegister() {
  router.push('/register');
}

function goToHome() {
  router.push('/');
}


return {
    navItems,
    noBackground,
    toggleBackground,
    goToHome,
    goToLogin,
    goToRegister
};


function toggleBackground() {
      noBackground.value = !noBackground.value;
    }

  },
}

</script>

<style lang="scss" scoped>


@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
.no-background {
 background-color: transparent !important;
 color: #2E46BA;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
gap: 8px;
width: auto;
height: 51px;
border-radius: 4px;
font-family: 'Jost', sans-serif;
font-size: 1.25rem;
cursor: pointer;
}
.header-container-with-logo-nav-registration{
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

.header-container-with-logo-nav-registration .logo{
    margin-left: 15px;
    cursor: pointer;
    
}

.header-container-with-logo-nav-registration nav {
    display: inline-flex;
    gap: 20px;
}

.header-container-with-logo-nav-registration nav ul li{
    color:var(--text-nav);
    gap: 15px;
    font-size: 1.25rem;
    margin-left: 10px;
    cursor:pointer;
    font-family: 'Jost', sans-serif;
   
}

.header-container-with-logo-nav-registration nav ul li:hover{
    text-decoration: underline;
}


.btn-container-session {
    display: flex;
    gap: 10px;
    margin-right: 15px;
    font-family: 'Jost', sans-serif;
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
color:var(--text-light-btn);
cursor: pointer;
font-family: 'Jost', sans-serif;
}
.btn-container-session .btn__on-backgroundLogin {
background: var(--bg-btnLight);
box-shadow: 0px 2px 4px rgba(58, 87, 232, 0.3);
border:1px solid #2E46BA;
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
color:var(--text-light-btnLogin);
cursor: pointer;
font-family: 'Jost', sans-serif;
}

</style>