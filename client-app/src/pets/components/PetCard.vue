<script setup lang="ts">
import { Pet } from "../interfaces/pet.interface";

interface Props {
  pet: Pet;
}

const props = defineProps<Props>();
</script>

<template>
  <section class="card-pet">
    <img class="card-pet__img" :src="props.pet.petImage" alt="" />

    <div class="card-pet__data">
      <h3>{{ props.pet.name }}</h3>
      <p>{{ props.pet.animal.name }}</p>
      
    </div>
    <div class="card-pet__options-icons">
      <i class="fa-solid fa-pen"></i>
      <i class="fa-solid fa-trash-can"></i>
    </div>
  </section>
</template>

<style scoped>
.card-pet {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: min-max(300px, 100%);
  /* 100%; */
  height: 200px;
  box-shadow: 2px 2px 4px #ddd;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}

.card-pet:hover {
  transform: translateY(-5px);
  box-shadow: 4px 4px 8px #ccc;
}

.card-pet__img {
  width: 50%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.card-pet__data {
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
}

.card-pet__data h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.card-pet__data p {
  margin: 0;
  font-size: 1.2rem;
  color: #666;
}

.card-pet__options-icons {
  padding-right: 1rem;
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.card-pet__options-icons i {
  font-size: 1.5rem;
  color: #3a57e8;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.card-pet__options-icons i:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 767px) {
  .card-pet {
    flex-direction: column;
    height: auto;
  }

  .card-pet__img {
    width: 100%;
    height: 250px;
  }

  .card-pet__data {
    width: 100%;
    padding: 1rem;
    text-align: center;
  }

  .card-pet__options-icons {
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
    gap: 8px;
  }
}
</style>
