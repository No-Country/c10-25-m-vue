<template>
    <div>
        <div class="detalle">
      <div class="container-contador-proceso">
        <span v-for="(item, index) in routesFlow" :key="index" :class="{ 'inactive': index !== activeItem }"
          :style="{ backgroundColor: index !== activeItem ? '#8A8F97' : '' }">
          {{ index +1 }}
        </span>
      </div>
      <div class="bloque_detalle">
        <div class="container-interno">
          <slot></slot>
        </div>
      </div>
      <div class="btn-group-reserva">
        <button class="btn-atras" @click="prevRoute">Atrás</button>
        <button class="btn_active" @click="nextRoute">Siguiente</button>
      </div>
    </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAppointmentStore } from '../../store/appointment';

export default defineComponent({
  setup() {
    const router = useRouter();
    const currentRoute = router.currentRoute.value.path;

    const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
]);

  const storeSearchVets = useAppointmentStore();
  const currentRouteIndexRefresh = storeSearchVets.routes.indexOf(currentRoute);
  const currentRouteIndex = storeSearchVets.currentRouteIndex;
  const routesFlow = storeSearchVets.routes

  if (currentRouteIndexRefresh !== -1) {
      storeSearchVets.currentRouteIndex = currentRouteIndexRefresh;
    }
    
    
  watch(() => storeSearchVets.currentRouteIndex, () => {
    router.push(storeSearchVets.routes[storeSearchVets.currentRouteIndex]);
  });

  const nextRoute = () => {
    console.log("click")
    storeSearchVets.nextRoute();
}
  const prevRoute = () => {
    storeSearchVets.prevRoute();
  }
  const activeItem = ref(currentRouteIndexRefresh); 
  
    return { activeItem, nextRoute, prevRoute, items, routesFlow }
  }
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

.btn-atras {
  width: 75px;
  height: 51px;
  @include font-styles(400, 20px);
  line-height: 175%;
  color: $primary-color;
  border: 2px solid $primary-color;
  filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
  @extend %button-styles;

  &:hover {
    text-decoration: underline;
  }
}

.btn_active:hover {
   text-decoration: underline;
}

.btn-group-reserva {
   display:flex;
   justify-content:flex-end;
   width:82%;
   gap:3rem;

   .btn_active {
      width:112px;
      height:51px;
      @include font-styles(400,20px);
      line-height:175%;
      color:#FFFFFF;
      background:$primary-color;
      box-shadow:0px 2px 4px rgba(58,87,232,0.3);
      @extend %button-styles;
   }
}


.container-contador-proceso {
   display:inline-flex; 
   gap:3.3rem;

   span {
     width:50px; 
     height:50px; 
     border-radius:50%; 
     display:flex; 
     justify-content:center; 
     align-items:center; 
     background:$primary-color; 
     box-shadow:0px 4px 4px rgba(0,0,0,0.25); 
     @include font-styles(700,32px);
     line-height:46px;
     display:flex;
     cursor:pointer;
     padding:4px;
     color:$secondary-color;
   }
}


.container-interno {
  width: 718px;
  border: 1px solid $primary-color;
  border-radius: 10px;
}



.abstract {
   height:100%; 
   color:var(--text-footer); 
   background-color:var(--color-bg); 
   font-family:$font-family; 
   font-size:1rem; 
   font-weight:500; 
   overflow:hidden; 
}

.pawprint {
   width:7%; 
   margin-top:1rem; 
   display:inline; 
}





.detalle {
   width:80%; 
   margin:2rem 0 1rem 0; 
   display:inline-block; 
}



.detalle h3 {
  color:$primary-color;
  text-align:left;
  font-size:1.5rem;
  font-weight:700;
}

.bloque_detalle {
  width:100%;
  height:502px;
  display:flex;
  justify-content:center;
  align-items:center;
}

.datos {
  margin: 3rem 2rem 1rem 2rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: left;
  align-content: center;
  gap: 30px;
}

.fecha {
  font-weight: 600;

  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}

.vet {
  display: inline-flex;
  flex-direction: column;
  gap: 30px;
}

.datos li {
  display: inline-flex;
  gap: 15px;
}

.datos img {
  width: 35px;
  height: 36px;
}

.btns {
  width: 100%;
  margin-bottom: 1.5rem;
  display: inline-flex;
  justify-content: right;
  align-content: right;
}

.btn_reprogramar {
  margin: 1rem;
  padding: 8px 16px;
  font-family: Jost;

  background: #fefefe;
  border: 3px solid #3a57e8;
  box-shadow: 0px 2px 4px #8a8f97;
  border-radius: 10px;
}

.btn_cancelar {
  height: max-content;
  margin: 1rem 2rem 1rem 0;
  margin-right: 2rem;
  padding: 8px 16px;

  color: var(--bg-header);
  background-color: var(--bg-btn);
  font-family: Jost;
  border: 3px solid var(--bg-btn);

  box-shadow: 0px 2px 4px #8a8f97;
  border-radius: 10px;
}

.otros_turnos {
  height: 10rem;
  color: black;
  margin: 1rem;
  font-size: 1.25rem;
}
</style>