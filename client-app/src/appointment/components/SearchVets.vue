

<template>
  <div>
    <div class="search-container">
      <input type="text" placeholder="Buscar..." v-model="searchSpeciality" @input="updateSearch" />
      <img src="../../assets/appoinment_img/seacrh_icon.svg" class="search-icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue';
export default defineComponent({
  setup() {
    const searchSpeciality = ref('');
    const searchResults = inject<{ id: number; reason: string; speciality: string }[]>('searchResults')!;


    const updateSearch = (event: Event) => {
      const searchSpeciality = (event.target as HTMLInputElement).value;
      // Realiza la búsqueda en el array de items
      const items = [
        { id: 1, reason: 'Moreira, Valentina - Cardióloga', speciality: 'cardiología' },
        { id: 2, reason: 'Serra, Vicente - Cardiólogo', speciality: 'cardiología' },
        { id: 3, reason: 'Zampa, Lucía - Laboratorio', speciality: 'laboratorio' },
        { id: 4, reason: 'Ortiz, Adriana - Dermatóloga', speciality: 'dermatología' },
        { id: 5, reason: 'Serna, Natalia - Médica clínica', speciality: 'medicina clínica' },
        { id: 6, reason: 'González, Pablo - Médico clínico', speciality: 'medicina clínica' },
      ];
      const results = items.filter((item) => 
      item.speciality.includes(searchSpeciality));
      // Actualiza los resultados de la búsqueda
      searchResults.value = [...results];
    }

    return {
      updateSearch,
      searchSpeciality,
     
    };
  },
});
</script>

<style scoped lang="scss">
$primary-color: #3A57E8;
$secondary-color: #EBF1FA;
$font-family: 'Jost';

@mixin font-styles($weight, $size) {
  font-family: $font-family;
  font-style: normal;
  font-weight: $weight;
  font-size: $size;
}

%button-styles {
  cursor: pointer;
  border-radius: 10px;
}
.search-icon {
   position:absolute; 
   top:10px; 
   left:10px; 
}

.search-container {
  position: relative;
  background: $secondary-color;
  border: 3px solid $primary-color;
  border-radius: 0px;

  input {
    width: 100%;
    padding: 6px;
    border: 1px solid #ccc;
    padding-left: 38px;
    @include font-styles(500,20px);
    line-height:29px;
    display:flex;
    align-items:center;
    color:rgba(56,59,67,0.76);
   }
}
</style>