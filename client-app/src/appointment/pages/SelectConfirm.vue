<template>
    <div class="abstract">
      <SubHeader/>
       <ReservationFlow>
        <div class="container-header">
        <div class="header">
            Confirmación
                  </div>
          </div>
          <div class="professionals-list">
          </div>
        </ReservationFlow>
    </div>
</template>
  
  <script lang="ts" setup>
  import SubHeader from '../components/subHeader.vue'
  import ReservationFlow from '../components/ReservationFlow.vue'; 
  
  </script>
  <style scoped lang="scss">
  .container-date {
     width:80%; 
     margin:2rem 0 1rem 0; 
     display:inline-block; 
  }
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
     border-radius:0px 0px 10px 10px;}
  </style>