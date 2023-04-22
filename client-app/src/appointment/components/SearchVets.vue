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
import { useSearchResultsStore } from '../../store/searchresult';

export default defineComponent({
  setup() {
    const storeSearchVets = useAppointmentStore();
    const searchResultsStore = useSearchResultsStore();
    const searchSpeciality = ref('');
    const noMatches = ref(false);
    const searchResults = inject<{ id: number; user_id: string; speciality: string, status: string }[]>('searchResults')!;
    
    console.log("Sear " + searchResults)
    provide('noMatches', noMatches);  
    const updateSearch = (event: Event) => {
      const results = searchResultsStore.results.filter((item) =>
        item.speciality.includes(searchSpeciality.value)
      );

      if (results.length === 0) {
        storeSearchVets.setNoMatches(true);
        searchResultsStore.setResults([]);
      } else {
        searchResultsStore.setResults(results);
        storeSearchVets.setNoMatches(false);
      }
    };
     
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