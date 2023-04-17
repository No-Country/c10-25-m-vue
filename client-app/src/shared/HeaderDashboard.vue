<template>
  <div class="header-container-with-logo-nav-registration">
    <Logo />
    <div class="movile-nav">
      <nav>
        <ul v-for="(elementosNav, index) in navItems" :key="index">
          <li><a :href="elementosNav.value">{{ elementosNav.name }}</a></li>
        </ul>
      </nav>
      <div class="btn-container-session">
        <button
          :class="
            !noBackground ? 'no-backgroundLogin' : 'btn__on-backgroundLogin'">
          <img src="./../assets/home_img/A.png" alt="" />
        </button>
      </div>
    </div>
    <div class="burger">
      <button >
        <img src="../assets/home_img/menu_icon.png" alt="menu hamburguesa">
      </button>  
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";
import Logo from "./LogoHeader.vue";

const navItems = ref([
  {name: 'Inicio', value:'/'},
  {name:'Mi perfil', value:'/user'},
  {name:'Mis mascotas', value:'/pets'},
  {name:'Mis turnos', value:'/'}
]);

const noBackground: Ref<boolean> = ref(false);
const router = useRouter();

function goToWelcome() {
  router.push("/welcome");
}

function goToRegister() {
  router.push("/register");
}

function goToHome() {
  router.push("/");
}

function toggleBackground() {
  noBackground.value = !noBackground.value;
}
</script>

<style lang="scss" scoped>
.header-container-with-logo-nav-registration {
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--bg-menu-user);
  z-index: 10;
  position: relative;
  padding-left: 10px;
  padding: 12px;
}

.header-container-with-logo-nav-registration .logo {
  margin-left: 15px;
  cursor: pointer;
}
.movile-nav{
  width: 80%;
  display: flex;
  justify-content: space-evenly;
}

.header-container-with-logo-nav-registration nav {
  display: inline-flex;
  gap: 2rem;
}
.header-container-with-logo-nav-registration nav ul li a{
  color: var(--text-navDashboard);
  gap: 15px;
  font-size: 1.25rem;
  margin-left: 10px;
  cursor: pointer;
  font-family: "Jost", sans-serif;
}

.btn-container-session {
  display: flex;
  gap: 10px;
  margin-right: 15px;
  font-family: "Jost", sans-serif;
}
.btn-container-session button {
  width: 72px;
  height: 72px;
  left: 1114px;
  top: 29px;
  border-radius: 50%;
  background: var(--bg-btn-user);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
.burger{
  display: none;
}
@media (max-width:930px) {
  .movile-nav{
    width: 100%;
    height: max-content;
    margin: 15rem 0 0 0;
    
    background-color:var(--bg-menu-user);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    
    display:inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    gap: 30px;
    
  }
  .activo{
    display: inline-flex;
  }
  .header-container-with-logo-nav-registration{
    height: 80px;
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

    display: inline-block;
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
    background-color: var(--bg-menu-user);
    margin-right: 3rem;
    display: block;
    z-index: 10;
    cursor: pointer;
  }
  
}
</style>

