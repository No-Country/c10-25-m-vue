<template>
  <BgUser />
  <LogoPage />
  <div class="button__position">
    <EditarBtn v-model="isOpen" />
  </div>
  <AddPhote />
  <DetailUser />
  <ModalUpdate :isOpen="isOpen" v-model="isOpen" />
</template>

<script lang="ts" setup>
import EditarBtn from "../../shared/EditarBtn.vue";
import AddPhote from "../components/AddPhote.vue";
import BgUser from "../components/BgUser.vue";
import DetailUser from "../components/DetailUser.vue";
import LogoPage from "../components/LogoPage.vue";
import { ref } from "vue";
import ModalUpdate from "../components/modalUpdate.vue";

const isOpen = ref<boolean>(false);
</script>

<style scoped>
.button__position {
  position: absolute;
  right: 3%;
}
</style>
