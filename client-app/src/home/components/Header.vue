<template>
    <div class="header-container-with-logo-nav-registration">
        <img src="../../assets/home_img/Veterinaria_logotipo.png" alt="" class="logo">
        <nav>
            <ul v-for="(elementosNav, index) in navItems" :key="index">
                <li>{{ elementosNav }}</li>
            </ul>
        </nav>
        <div class="btn-container-session">
            <button>
                Inicio Sesion
            </button>
            <button>
                Registrate
            </button>
        </div>
    </div>
</template>

<script  lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {
const navItems = ref(['Inicio', 'Servicios', 'Por qué elegirnos']);

return {
    navItems,
};
  },
});
</script>

<style lang="scss" scoped>

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

.btn-container-session button{
background: var(--bg-btn);
padding: 10px;
border-radius: 4px;
color:var(--text-light-btn);
cursor: pointer;
}

</style>