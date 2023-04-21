<template>
  <div class="">
    <header>
      <!-- header contentsp goes here -->
      <HeaderDashboard :links="routeLink" />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <!-- footer content goes here -->
      <!-- <Footer /> -->
    </footer>
  </div>
</template>

<script lang="ts" setup>
import Footer from "../../shared/Footer.vue";
import HeaderDashboard from "../../shared/HeaderDashboard.vue";
import { routeLink } from "../../router/link-routes";
</script>
<style lang="scss" scoped>
.container-appointment {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
</style>
