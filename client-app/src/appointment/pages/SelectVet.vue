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
export default defineComponent({

  components: {
    SubHeader,
    ReservationFlow,
    SearchVets,
    ListEspecalist
  },

  setup() {
    const storeSearchVets = useAppointmentStore();
    const searchResults = ref<{ id: number; reason: string; speciality: string }[]>([
      { id: 1, reason: 'Moreira, Valentina - Cardióloga',  speciality: 'cardiología' },
      { id: 2, reason: 'Serra, Vicente - Cardiólogo',      speciality: 'cardiología' },
      { id: 3, reason: 'Zampa, Lucía - Laboratorio',       speciality: 'laboratorio' },
      { id: 4, reason: 'Ortiz, Adriana - Dermatóloga',     speciality: 'dermatología' },
      { id: 5, reason: 'Serna, Natalia - Médica clínica',  speciality: 'medicina clínica' },
      { id: 6, reason: 'González, Pablo - Médico clínico', speciality: 'medicina clínica' },
    ]);
    const selectedVetId = computed(() => storeSearchVets.selectedVetId);
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
