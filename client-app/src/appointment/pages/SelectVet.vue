<template>
  <div class="abstract">
    <SubHeader/>
        <ReservationFlow >
                  <div class="container-header">
                      <div class="header">
                        Seleccionar profesionales
                      </div>
                <SearchVets/>
                  </div>
                  <ListEspecalist/>
          </ReservationFlow>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, computed } from 'vue';
import SubHeader from '../components/subHeader.vue'
import ReservationFlow from '../components/ReservationFlow.vue'; 
import SearchVets from '../components/SearchVets.vue'
import ListEspecalist from '../components/ListEspecialist.vue'
import { useAppointmentStore } from '../../store/appointment';
import getConfig from "../../utils/getConfig";
import { onMounted } from 'vue';
import axios from 'axios';
import clinicApi from "../../api/clinic-api";
export default defineComponent({

  components: {
    SubHeader,
    ReservationFlow,
    SearchVets,
    ListEspecalist
  },

  setup() {
    const storeSearchVets = useAppointmentStore();
      // Inicializa searchResults como una matriz vacía
  const searchResults = ref<{ id: number;  user_id: string; speciality: string, status: string }[]>([]);
    const selectedVetId = computed(() => storeSearchVets.selectedVetId);
    
    
    onMounted(async () => {
  // Reemplaza esta URL con la URL real de tu API
  // const response = await axios.get('http://localhost:3001/api/v1/vets', getConfig());
  const response = await clinicApi.get("/vets", getConfig());
  searchResults.value = response.data.vets;
  console.log(response.data.vets)
});
    
    provide('searchResults', searchResults);
    return {selectedVetId};
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
.container-header {
   border:2px solid $primary-color; 
   border-radius:6px 7px 0px 0px; 
}

.header {
   padding:7px; 
   justify-content:center; 
   display:flex; 
   align-items:center; 
   text-align:center; 
   color:#FFFFFF; 
   background:$primary-color; 
   @include font-styles(500,22px);
}

.professionals-list-container {
   width:400px; 
   padding:20px; 
   border:1px solid #ccc; 
}
</style>
