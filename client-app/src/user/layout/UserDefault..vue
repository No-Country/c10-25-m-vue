<template>
  <header>
    <MenuDos></MenuDos>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <FooterDos></FooterDos>
  </footer>
</template>

<script lang="ts" setup>
import MenuDos from '../components/MenuDos.vue';
import FooterDos from '../components/FooterDos.vue';
</script>

<style scoped>

</style>