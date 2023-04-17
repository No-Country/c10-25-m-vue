<template>
  <div class="header-container-with-logo-nav-registration">
    <Logo />
    <!-- <nav>
      <ul v-for="(elementosNav, index) in navItems" :key="index">
        <li>{{ elementosNav }}</li>
      </ul>
    </nav> -->
    <RouterLink v-for="link of props.links" :key="link.path" :to="link.path">{{
      link.title
    }}</RouterLink>
    <div class="btn-container-session">
      <button
        :class="
          !noBackground ? 'no-backgroundLogin' : 'btn__on-backgroundLogin'
        "
      >
        <img src="./../assets/home_img/A.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";
import Logo from "./LogoHeader.vue";
import type { RouterLink } from "../router/link-routes";

interface Props {
  links: RouterLink[];
}

const props = withDefaults(defineProps<Props>(), {
  links: () => [],
});

const noBackground: Ref<boolean> = ref(false);
const router = useRouter();
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

.header-container-with-logo-nav-registration {
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  background: #e5e5e5;
  z-index: 10;
  position: relative;
  padding-left: 10px;
  padding: 12px;
}

.header-container-with-logo-nav-registration .logo {
  margin-left: 15px;
  cursor: pointer;
}

.header-container-with-logo-nav-registration nav {
  display: inline-flex;
  gap: 4rem;
}

.header-container-with-logo-nav-registration nav ul li {
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
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
</style>
