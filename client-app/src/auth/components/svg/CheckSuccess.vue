<template>
    <div>
        <svg width="98" height="88" viewBox="0 0 98 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g class="checkmark__circle" filter="url(#filter0_d_149_1175)">
                    <path d="M67.7088 11.8479C68.8452 10.4984 68.6793 8.47148 67.2435 7.44628C60.796 2.84261 53.1037 0.242648 45.1367 0.0161543C36.1019 -0.240697 27.2464 2.56994 20.0133 7.99002C12.7803 13.4101 7.5961 21.1201 5.30565 29.8636C3.0152 38.607 3.75349 47.8685 7.40022 56.1386C11.0469 64.4088 17.3871 71.2001 25.3875 75.4059C33.3879 79.6116 42.5768 80.9838 51.4569 79.2988C60.3369 77.6138 68.3845 72.971 74.2882 66.127C79.4942 60.0919 82.7625 52.6589 83.7118 44.7937C83.9232 43.0421 82.5385 41.5526 80.7757 41.4816C79.0129 41.4105 77.5419 42.786 77.3039 44.5341C76.4298 50.9555 73.7132 57.0124 69.4505 61.954C64.4898 67.7048 57.7275 71.606 50.2658 73.0219C42.8041 74.4377 35.0829 73.2847 28.3603 69.7507C21.6378 66.2168 16.3103 60.5102 13.246 53.5609C10.1818 46.6117 9.56141 38.8295 11.486 31.4826C13.4106 24.1357 17.7668 17.6571 23.8445 13.1027C29.9223 8.54837 37.3634 6.18666 44.9551 6.40249C51.4785 6.58794 57.7827 8.66711 63.1134 12.3525C64.5647 13.3558 66.5723 13.1973 67.7088 11.8479Z" fill="#3A57E8"/>
                    <path d="M84 12.4856L44.8959 51.792L27.1213 33.9254" stroke="#3A57E8" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <filter class="checkmark__check" id="filter0_d_149_1175" x="0" y="0" width="98" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_149_1175"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_149_1175" result="shape"/>
                    </filter>
                    </defs>
                    </svg>
    </div>
</template>

<script  lang="ts">
import { defineComponent  } from 'vue';

export default defineComponent({
  name: 'CheckSuccess',
  components:{
    
  },
  setup() {


return {
    
};
  },
});
</script>
<style lang="scss" scoped>
.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: none;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  margin: 10% auto;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #d3d3d3;
  }
}
</style>