<template>
  <BgUser />

  <div class="content">
    <div>
      <LogoPage />
      <AddPhote />
      <DetailUser />
    </div>

    <div class="button__position">
      <EditarBtn v-model="isOpen" />
    </div>
  </div>
  <ModalUpdate :isOpen="isOpen" @selection="changeIsOpen" />
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

const changeIsOpen = () => {
  isOpen.value = !isOpen;
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: inherit;
  width: 60%;
  margin-right: 20%;
  margin-left: 20%;
  position: relative;
}
.button__position {
  margin-top: 2.3rem;
}
@media (max-width: 700px) {
  .content{
    height: max-content;
    display: inline-flex;
    justify-content: center;
    align-content: center;
  
  }
  
}
@media (max-width:435px) {
  .content{
    width: 80%;
    margin: 0;
    flex-direction:column;
  }
  .button__position{
    margin:2rem 0 2rem 0;
  }
}
</style>
