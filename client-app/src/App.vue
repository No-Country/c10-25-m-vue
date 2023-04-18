<template>
  <div class="App">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import useRenew from "./composables/useRenew";

useRenew();
</script>

<style lang="scss">
.App {
  text-align: center;
  position: relative;
  width: 100%;
  height: 100%;
}

html {
  font-size: 16px;
}
</style>
