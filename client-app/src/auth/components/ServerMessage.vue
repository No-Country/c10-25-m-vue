<template>
    <div v-if="message" :class="[type === 'error' ? 'error-server-loginForm' : 'success-server-loginForm', { 'slide-fade': message }]">
      <ErrorServer v-if="type === 'error'" />
      <SuccessServer v-else />
      {{ message }}
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue'
  import ErrorServer from '../components/svg/ErrorServerIcon.vue'
  import SuccessServer from '../components/svg/SuccessServerIcon.vue'
  
  export default defineComponent({
    name: 'ServerMessage',
    components: {
      ErrorServer,
      SuccessServer,
    },
    props: {
      type: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: false,
        default: null,
      },
    },
  })
</script>
  
  <style>
  .error-server-loginForm,
  .success-server-loginForm {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 8px;
    position: absolute;
    width: 279px;
    height: 60px;
    border-radius: 4px;
    top: 62%;
    left: 2%;
  }
  
  .error-server-loginForm {
    background: #f2d6d3;
    border: 2px solid #c03221;
  }
  
  .success-server-loginForm {
    background: #d3f2d6;
    border: 2px solid #21c032;
  }
  
  @keyframes slide-fade {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .slide-fade {
    animation: slide-fade 0.5s ease-in-out forwards;
  }
  </style>