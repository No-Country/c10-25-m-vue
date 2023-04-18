<template>
  <BgPets />
  <section class="section-main" v-if="pets">
    <div class="content-h3" v-if="pets.length <= 0">
      <h3>
        Acá vas a encontrar los datos de tu mascota después de que reserver un
        turno
      </h3>
    </div>
    <div v-else class="content-pets">
      <PetCard v-for="pet of pets" :pet="pet" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import EditarBtn from "../../shared/EditarBtn.vue";
import BgPets from "../components/BgPets.vue";
import PetCard from "../components/PetCard.vue";
import usePets from "../composables/usePets";

const route = useRoute();
const { id } = route.params as { id: string };

const { isLoading, pets } = usePets(+id);
</script>

<style scoped>
.section-main {
  min-height: 43vh;
  font-family: jost;
  background-color: #fffefe;
}

.content-h3 {
  display: grid;
  place-items: center;
  min-height: 43vh;
  font-size: larger;
}

.content-pets {
  min-height: 43vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  padding: 3rem;
}
</style>
