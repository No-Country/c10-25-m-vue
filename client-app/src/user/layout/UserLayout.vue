<template>
  <div>
    <header>
      <!-- header contentsp goes here -->
      <HeaderDashboard />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <!-- footer content goes here -->
      <Footer />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import Footer from "../../shared/Footer.vue";
import HeaderDashboard from "../../shared/HeaderDashboard.vue";

const message = "This is my component!";
</script>
