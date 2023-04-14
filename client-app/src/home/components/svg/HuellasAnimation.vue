<template>
    <div>
        <div class="pawprints">
            <img class="pawprint" src="../../../assets/home_img/pawprint.svg" alt="Pawprint" />
            <img class="pawprint" src="../../../assets/home_img/pawprint.svg" alt="Pawprint" />
            <img class="pawprint" src="../../../assets/home_img/pawprint.svg" alt="Pawprint" />
            <img class="pawprint" src="../../../assets/home_img/pawprint.svg" alt="Pawprint" />
            </div>
    </div>
</template>

<script  lang="ts">
import { defineComponent  } from 'vue';

export default defineComponent({
  name: 'HuellasAnimation',
  components:{
    
  },
  setup() {


return {
    
};
  },
});
</script>

<style lang="scss" scoped>
.pawprints {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .pawprint {
  width: 85px;
  margin: 0px 0;
  opacity: 1;
  animation: stepping 10s infinite;
}
  .pawprint:nth-child(4),
.pawprint:nth-child(3) {
  animation-name: stepping1;
}

.pawprint:nth-child(2),
.pawprint:nth-child(1) {
  animation-name: stepping2;
}

.pawprint:nth-child(4),
.pawprint:nth-child(2) {
  padding-right: 25px;
  margin-right: 25px;
}

.pawprint:nth-child(3),
.pawprint:nth-child(1) {
  padding-left: 25px;
  margin-left: 25px;
}

.pawprint:nth-child(4) {
  animation-delay: 0s;
}

.pawprint:nth-child(3) {
  animation-delay: 1s;
}

.pawprint:nth-child(2) {
  animation-delay: 2s;
}

.pawprint:nth-child(1) {
  animation-delay: 3s;
}

@keyframes stepping1 {
  0%,
  40% {
    opacity: 0;
    transform: translateY(0px);
    animation-timing-function: ease-in-out;
  }
  50%,
  90% {
    opacity: 1;
    transform: translateY(0);
    animation-timing-function: ease-in-out;
  }
}

@keyframes stepping2 {
  0%,
  40% {
    opacity: 0;
    transform: translateY(0px);
    animation-timing-function: ease-in-out;
  }
  50%,
  80% {
    opacity: 1;
    transform: translateY(0);
    animation-timing-function: ease-in-out;
  }
}
</style>