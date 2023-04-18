<template>
  <BgPets />
  <section class="section-main">
    <div class="content-h3">
      <h3>
        Acá vas a encontrar los datos de tu mascota después de que reserver un
        turno
      </h3>
    </div>
  </section>
</template>

<script lang="ts" setup>
import EditarBtn from "../../shared/EditarBtn.vue";
import BgPets from "../components/BgPets.vue";
import usePets from "../composables/usePets";

const { isLoading, data } = usePets();

console.log(data);
</script>

<style scoped>
.section-main {
  min-height: 43vh;
  font-family: jost;
}

.content-h3 {
  display: grid;
  place-items: center;
  min-height: 43vh;
  font-size: larger;
}
</style>
