<template>
  <div>
    <div class="search-container">
      <input type="text" placeholder="Busqueda por especialista..." v-model="searchSpeciality" @input="updateSearch" />
      <img src="../../assets/appoinment_img/seacrh_icon.svg" class="search-icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, provide } from 'vue';
import { useAppointmentStore } from '../../store/appointment';
export default defineComponent({
  setup() {
    const storeSearchVets = useAppointmentStore();
    const searchSpeciality = ref('');
    const noMatches = ref(false);
    const searchResults = inject<{ id: number; reason: string; speciality: string }[]>('searchResults')!;
    provide('noMatches', noMatches);  
    const updateSearch = (event: Event) => {
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
      item.speciality.includes(searchSpeciality.value));
   
       // Check if results array is empty
         // Check if results array is empty
      if (results.length === 0) {
        // Update noMatches ref
        storeSearchVets.setNoMatches(true);
        searchResults.value = [];     

      } else {
        // Actualiza los resultados de la búsqueda
        searchResults.value = [...results];
        storeSearchVets.setNoMatches(false);
      } 
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