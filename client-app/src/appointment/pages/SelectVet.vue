<template>
  <div class="abstract">
    <SubHeader/>
    <ReservationFlow>
              <div class="container-header">
                <div class="header">
                  Seleccionar profesionales
                </div>
            <SearchVets/>
              </div>
              <ul class="professionals-list">
                <li v-for="(item, index) in 10" :key="index" class="professional-item">
                  <img src="../../assets/appoinment_img/avatar-test.png" alt="Avatar" class="avatar" />
                  <div class="professional-info">
                    <div class="name">Nombre del profesional</div>
                    <div class="city">Ciudad</div>
                  </div>
                </li>
              </ul>
      </ReservationFlow>
  </div>
</template>

<script lang="ts" setup>
import SubHeader from '../components/subHeader.vue'
import ReservationFlow from '../components/ReservationFlow.vue'; 
import SearchVets from '../components/SearchVets.vue'
import { ref } from 'vue';

const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
]);


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
      &:hover {
         cursor:pointer; 
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

       .name,
       .city {
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

.professionals-list-container {
   width:400px; 
   padding:20px; 
   border:1px solid #ccc; 
}
</style>
