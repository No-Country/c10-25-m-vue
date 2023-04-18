<template>
  <div style="display: flex; flex-direction: column; min-height: 100vh;">
    <header>
      <!-- header contentsp goes here -->
      <HeaderDashboard :links="routeLink" />
    </header>
    <main style="flex-grow: 1;">
      <router-view></router-view>
    </main>

    <div>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Footer from "../../shared/Footer.vue";
import HeaderDashboard from "../../shared/HeaderDashboard.vue";
import { routeLink } from "./../../router/link-routes";
</script>
