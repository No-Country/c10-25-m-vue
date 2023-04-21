<template>
    <ul class="professionals-list">
      <li v-for="(item, index) in searchResults" :key="index" 
          class="professional-item" 
         @click="selectVet(item.id, index)"
         :class="{ 'selected': index === selectedIndex }"
         >
        <img :src="`../../src/assets/appoinment_img/avatar-${index + 1}.png`" alt="Avatar" class="avatar" />
        <div class="professional-info">
          <div class="name">{{ item.reason }}</div>
        </div>
      </li>
      <li v-if="noMatches" class="professional-item">
        <div class="professional-info">
        <div class="name">No hay coincidencias 🐶, intente una nueva busqueda.</div>
        </div>
      </li>
    </ul>
</template>
  
  <script lang="ts">
  import { defineComponent, inject, computed, ref } from 'vue';
  import { useAppointmentStore } from '../../store/appointment';
  export default defineComponent({
    setup() {
      const storeSearchVets = useAppointmentStore();
      const searchResults = inject<{ id: number; reason: string; speciality: string }[]>('searchResults')!;
      const noMatches = computed(() => storeSearchVets.noMatches);
      const selectedIndex = ref<number>(); 
      
      const selectVet = (vetId: number, index: number) => {
        storeSearchVets.setSelectedVetId(vetId);
        selectedIndex.value = index;
    }



      return {
        searchResults,
        noMatches,
        selectVet,
        selectedIndex
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
.professionals-list {
   list-style:none; 
   margin:0; 
   padding:0; 
   height:306px; 
   overflow-y:scroll; 
   border:3px solid $primary-color; 
   border-radius:0px 0px 10px 10px;

   li {
      background:$secondary-color; 
      border-bottom:1px solid $primary-color; 
      height:62px; 
      display: flex;
      justify-content: flex-start;
      align-items: center;
      align-content: center;
      padding-left:9px;
      gap:10px;
      &:hover {
         cursor:pointer; 
         background:#B6C2FF; 
         border-bottom:1px solid $primary-color; 
       }
      &.selected {
        background:#B6C2FF; 
         border-bottom:1px solid $primary-color; 
        }
      .professional-item {
       display:flex; 
       align-items:center; 
       padding-left:7px;
     }
     .avatar {
       width:34px; 
       height:35px; 
       filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25)); 
       border-radius:200px; 
     }

     .professional-info {
       margin-left:10px; 
       display:inline-flex; 
       gap:3px;

       .reason,
       .name {
         @include font-styles(500,20px);
         line-height:29px;
         display:flex;
         align-items:center;
         color:#383B43;
       }
     }
   }
}

.professionals-list {
   &::-webkit-scrollbar {
     width:0;
   }

   &:hover {
     &::-webkit-scrollbar {
       width:12px;
       border-radius:25px;
     }

     &::-webkit-scrollbar-track {
       background:#f1f1f1;
     }

     &::-webkit-scrollbar-thumb {
       background:#61606069;
       border-radius:25px;

       &:hover {
         background:#9492929d;
         border-radius:25px;
       }
     }
   }
}
</style>