<template>
  <footer
    :style="!isOnHomePage && isOnDashboardPage ? 'background:#fffefe;' : ''"
  >
    <div 
      :class="
        isAuthenticated && !isOnHomePage
          ? 'fondo-footer-sessionOn'
          : 'container-footer'
      "
      >
      <div class="logo_footer" @click="goToHome()">
        <img :src="imagenLogo" alt="Logo" />
        <div class="titulo_footer">
          <h2>Huellitas</h2>
          <p>Clínica Veterinaria</p>
        </div>
      </div>
      <div class="contacto">
        <h3>Contacto</h3>
        <div class="contacto_items">
          <ul class="">
            <li>Teléfono</li>
            <li>Dirección</li>
            <li>E-mail</li>
          </ul>
          <ul class="">
            <li>+54 9 547896</li>
            <li>Av. Corrientes 123 - Cordoba, Argentina</li>
            <li>huellitasveterinaria@gmail.com</li>
          </ul>
        </div>
      </div>
      <div :class="isAuthenticated ? 'seguinos-sessionOn ' : 'seguinos'">
        <h3>Seguinos</h3>
        <ul class="seguinos_items">
          <li>
            <a href="#"><img src="./../assets/home_img/001-facebook.png" /></a>
          </li>
          <li>
            <a href="#"><img src="./../assets/home_img/004-instagram.png" /></a>
          </li>
          <li>
            <a href="#"><img src="./../assets/home_img/003-twitter.png" /></a>
          </li>
        </ul>
      </div>

      <div class="pawprint_footer" v-if="isOnHomePage">
        <img :src="imagenHuellas" alt="pawprint" id="paw1" />
        <img :src="imagenHuellas" alt="pawprint" id="paw2" />
        <img :src="imagenHuellas" alt="pawprint" id="paw3" />
        <img :src="imagenHuellas" alt="pawprint" id="paw4" />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "vue";
import imagenLogo from "./../assets/home_img/Veterinaria_logotipo.png";
import imagenHuellas from "./../assets/home_img/pawprint 1.png";

import { useRouter } from "vue-router"; // Importar goToWelcome
import clinicApi from "../api/clinic-api";
import getConfig from "../utils/getConfig";
import { useUserStore } from "../store/user";
export default defineComponent({
  setup() {
    const router = useRouter();

    const userStore = useUserStore();
    let isAuthenticated = ref(false);
    const isOnHomePage = computed(
      () => router.currentRoute.value.name === "home"
    );
    const isOnDashboardPage = computed(
      () => router.currentRoute.value.name === "dashboard"
    );
    function goToHome() {
      router.push("/");
    }

    onMounted(async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          await clinicApi.get("/auth/renew", getConfig());
          console.log(getConfig());
          console.log(
            "Si se esta ejecutando..." + JSON.stringify(userStore.user)
          );
          isAuthenticated.value = !!userStore.user;
        } catch (error) {
          // handle authentication error
          console.log("Aqui ele erro..." + error);
        }
      }
    });

    return {
      isAuthenticated,
      imagenHuellas,
      imagenLogo,
      isOnHomePage,
      isOnDashboardPage,
      goToHome,
    };
  },
});
</script>

<style lang="scss" scoped>
.fondo-footer-sessionOn {
  background-image: url(/src/assets/home_img/footer_logeado.png);
  height: max-content;
  // height: 308px;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: space-around;
  padding: 3em 1em 0em 1em;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-self: center;
  align-items: center;
  max-width: 100%;
  
  color: var(--text-footer);
  font-family: Jost;
  font-size: 1.125rem;
  position: relative;
  align-items: center;
  
}

.seguinos-sessionOn {
  width: auto;
  margin: 0.5rem 0 0 2em;
  padding-bottom: 8%;
}
.container-footer {
  width: 100%;
  background: var(--bg-footer);
  padding: 1em 1em 2em 1em;
  display: inline-flex;
  flex-direction: column;
  justify-self: center;
  height: 262px;
  color: var(--text-footer);
  font-family: Jost;
  font-size: 1.125rem;
  position: relative;
}

.logo_footer {
  height: 2rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.logo_footer img {
  width: 1.75rem;
  height: 1.75rem;
}

.titulo_footer {
  display: block;
  align-self: center;
}
.titulo_footer h2 {
  color: var(--bg-btn);
  font-family: Bubblegum Sans;
  font-weight: 400;
  font-size: 1rem;
  text-align: left;
}
.titulo_footer p {
  width: max-content;
  color: black;
  text-align: left;
  font-size: 0.75rem;
}
.contacto {
  width: 10rem;
  margin: 1rem auto;
}
.contacto h3 {
  text-align: center;
  font-weight: 600;
  font-size: 0.8rem;
}
.contacto_items {
  font-size: 0.625rem;
  margin: 1rem 0 0.3rem 0;

  display: inline-flex;
  gap: 1em;
}

.contacto_items ul {
  display: grid;
  row-gap: 1.5em;
}
.contacto li {
  font-size: 0.625rem;
  text-align: left;
}

.seguinos {
  margin: auto;
}
.seguinos h3 {
  font-weight: 600;
  font-size: 0.8rem;
  text-align: center;
}
.seguinos_items {
  margin: 1rem 0 1rem 0;

  display: flex;
  justify-content: center;
  gap: 3em;
}
.pawprint_footer {
  display: none;
}
@media (min-width: 618px) {
  .fondo-footer-sessionOn{
    display: flex;
  }
  .container-footer {
    width: 100%;
  }
  .logo_footer {
    margin: 1rem 2rem 2rem 2rem;
  }
}
@media (min-width: 1200px) {
  .fondo-footer-sessionOn{
    height: 308px;
    flex-direction: row;
    justify-self: center;
    align-items:flex-start;
  }
  .container-footer {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr;
    justify-items: center;
  }

  .logo_footer {
    width: auto;
    height: auto;
    margin: 0 3rem 0 2rem;
  }
  .logo_footer img {
    width: 8rem;
    height: 8rem;
  }
  .titulo_footer {
    width: 8rem;
    height: 7rem;
    margin-top: 3rem;
  }
  .titulo_footer h2 {
    text-align: center;
    font-size: 2.25rem;
  }
  .titulo_footer p {
    text-align: center;
    font-size: 1.25rem;
  }
  .contacto {
    width: auto;
    margin: 0.5rem 3rem 0 1.5rem;
  }
  .contacto h3 {
    width: 7rem;
    text-align: center;
    font-weight: 600;
    font-size: 1.25rem;
  }
  .contacto_items {
    width: auto;
    font-size: 1.125rem;
    margin: auto;
    padding: 1em;
    display: flex;
    gap: 1em;
  }
  .contacto_items ul {
    display: grid;
    row-gap: 1.5em;
  }
  .contacto li {
    font-size: 1.125rem;
  }
  .seguinos {
    width: auto;
    margin: 0.5rem 0 0 2em;
  }
  .seguinos h3 {
    width: 5rem;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: left;
  }
  .seguinos_items {
    margin: auto;
    padding-top: 1em;
    gap: 2em;
  }
  .pawprint_footer {
    display: block;
  }
  #paw1 {
    position: absolute;
    top: 45%;
    right: 9%;
  }
  #paw2 {
    position: absolute;
    top: 50%;
    right: 4%;
  }
  #paw3 {
    position: absolute;
    top: 70%;
    right: 9%;
  }
  #paw4 {
    position: absolute;
    top: 75%;
    right: 4%;
  }
}
</style>
