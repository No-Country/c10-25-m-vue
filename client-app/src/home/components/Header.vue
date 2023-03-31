<template>
    <div class="header-container-with-logo-nav-registration">
        <img src="../../assets/home_img/Veterinaria_logotipo.png" alt="" class="logo">
        <nav>
            <ul v-for="(elementosNav, index) in navItems" :key="index">
                <li>{{ elementosNav }}</li>
            </ul>
        </nav>
        <div class="btn-container-session">
            <button @click="toggleBackground"  v-bind:class="!noBackground ? 'no-background' : 'btn__on-background'">
              Inicio de Sesion
            </button>
            <button @click="toggleBackground" :class="noBackground ? 'no-background' : 'btn__on-background'" >
                Registrate
            </button>
        </div>
    </div>
</template>

<script  lang="ts">
import { ref, Ref } from 'vue';
 
export default {
  setup() {
const navItems = ref(['Inicio', 'Servicios', 'Por qué elegirnos']);
const noBackground: Ref<boolean> = ref(false);

return {
    navItems,
    noBackground,
    toggleBackground,
};


function toggleBackground() {
      noBackground.value = !noBackground.value;
    }

  },
}

</script>

<style lang="scss" scoped>
.no-background {
 background-color: transparent !important;
 color: #2E46BA;


display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
gap: 8px;
width: 133px;
height: 51px;
border-radius: 4px;

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
}

.header-container-with-logo-nav-registration .logo{
    margin-left: 15px;
    width: 50px;
}

.header-container-with-logo-nav-registration nav {
    display: inline-flex;
    gap: 20px;
}

.header-container-with-logo-nav-registration nav ul li{
    color:var(--text-nav);
    gap: 15px;
    margin-left: 10px;
    cursor:pointer;
   
}

.header-container-with-logo-nav-registration nav ul li:hover{
    text-decoration: underline;
}


.btn-container-session {
    display: flex;
    gap: 10px;
    margin-right: 15px;
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
width: 133px;
height: 51px;
border-radius: 4px;
color:var(--text-light-btn);
cursor: pointer;
}

</style>