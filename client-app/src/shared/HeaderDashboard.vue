<template>
  <div class="header-container-with-logo-nav-registration">
    <div class="movile-nav" :class="{' activo':isMenuOpen}">
      <div class="logo__">
    <Logo />
  </div>
    <div class="movile-nav" 
    :class="[isMenuOpen ? 'activo' : '', isMenuOpen ? 'flex-mobile' : 'flex-desktop']"
   
    >
      <RouterLink v-for="link of props.links" :key="link.path" :to="link.path">{{
        link.title
      }}</RouterLink>
      <RouterLink :to="'/pet/user/' + userid"> Mis mascotas </RouterLink>
      
      <div class="btn-container-session">
        <button @click="toggleLogoutModal" :class="!noBackground ? 'no-backgroundLogin' : 'btn__on-backgroundLogin'
        ">
          <img src="./../assets/home_img/A.png" alt="" />
        </button>
        <span v-if="isLogoutModalOpen" class="logout-btn">
          <p @click="logout">
            Cerrar Sesión</p>
        </span>
      </div>
    </div>
    <div class="burger" @click="toggleMenu">
      <button >
        <img src="../assets/home_img/menu-burger1.png" alt="menu hamburguesa">
      </button>  
    </div>
    
    </div>

   
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";
import Logo from "./LogoHeader.vue";
import type { RouterLink } from "../router/link-routes";
import useLogoutModal from "../auth/composables/useLogoutModal";
import useRenew from "../composables/useRenew";
interface Props {
  links: RouterLink[];
}

useRenew();

const userid = 2;

const props = withDefaults(defineProps<Props>(), {
  links: () => [],
});

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};


const { isLogoutModalOpen, toggleLogoutModal, logout } = useLogoutModal();
const noBackground: Ref<boolean> = ref(false);
const router = useRouter();
let movileNavActivo = false
</script>

<style lang="scss" scoped>

.burger{
  cursor:pointer;
}
.header-container-with-logo-nav-registration {
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  // background: var(--bg-menu-user);
  background-color: #fffefe;
  z-index: 10;
  position: relative;
  padding-left: 10px;
  padding: 12px;
}

.movile-nav{
  width: 100%;
  display: inline-flex;
  justify-content:space-between;
  align-content: center;
  align-items: center;

}
.logout-btn {
  width: 225px;
  height: 72px;
  position: absolute;
  top: 81px;
  right: -80px;
  background: #ebf1fa;
  border: 3px solid #3a57e8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;

  p {
    font-family: "Jost";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    justify-content: center;
    /* identical to box height */

    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    width: 100%;
    background: none;
    border: none;
    color: #383b43;
    cursor: pointer;
  }

  p:hover {
    text-decoration: underline;
  }
}

.header-container-with-logo-nav-registration .logo {
  margin-left: 15px;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
  font-family: "Jost";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 175%;
  /* identical to box height, or 42px */
  color: #2e46ba;
}

.movile-nav {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.header-container-with-logo-nav-registration nav {
  display: inline-flex;
  gap: 2rem;
}

.header-container-with-logo-nav-registration nav ul li a {
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
  position: relative;
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

.burger {
  display: none;

  button{
    background:none;
  }
}

.flex-desktop{
    display:flex;
  }
  .flex-mobile{
    display:none;
  }
@media (max-width: 930px) {
  .flex-desktop{
    display:none;
  }
  .flex-mobile{
    display:flex;
  }

  .logo__{
    position: absolute;
    top: 15%;
    left: 38%;
  }
  .movile-nav {
    width: 85%;
    height: max-content;
    margin: 15rem 0 0 0;
    z-index: 11;

    background-color: var(--bg-menu-user);
 
    border-radius: 10px;

    display: inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    gap: 30px;
  }
  .activo {
    display: inline-flex;
  }
  .header-container-with-logo-nav-registration {
    height: 80px;
  }
  .header-container-with-logo-nav-registration nav {
    display: inline-block;
  }
  .header-container-with-logo-nav-registration li {
    padding: 15px;
  }
  .btn-container-session {
    width: 10rem;
    margin: auto;
    margin-bottom: 15px;
    gap: 30px;

    display: inline-flex;
    flex-direction: column;
    justify-self: center;
    align-self: center;
    
  }
  .btn-container-session button{
    margin: auto;
  }
  .btn-container-session .btn__on-background {
    border-radius: 20px;
    padding: 10px;
  }
  .btn-container-session .no-backgroundLogin {
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-content: center;
  }
  .burger {
    background-color: var(--bg-menu-user);
    margin-right: 3rem;
    display: block;
    z-index: 12;
    cursor: pointer;
  }
}

// @media (max-width: 530px) {
//   .header-container-with-logo-nav-registration{
//     justify-content: space-around;
//   }
//   .header-container-with-logo-nav-registration .logo{
//     width: 30%;
//     z-index: 1;
//   }
//   .burger{
//     margin-right: 5%;
//   }
//   .movile-nav{
//     width: 380px;
//     right: 5%;
  
//   }
// }


@media (max-width:600px) {
  .movile-nav{
    // position: absolute;
    // right: 5%;
    // top:-220px;
  }


  .flex-desktop{
    display:none;
  }
  .flex-mobile{
    display:flex;
  }
  .logo__{
    position: absolute;
    top: 15%;
    left: 38%;
  }

  // .logo__{
  //   display:none;
  // }
  .burger{
    position: absolute;
    right: 5%;
    top:30%;
cursor:pointer;
    button {
      background:none;
      cursor:pointer;
    }
  }
  
}
</style>
