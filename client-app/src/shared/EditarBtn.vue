<template>
  <button class="editar_btn" @click="$emit('update:modelValue', !modelValue)">
    Editar
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.editar_btn {
  height: 2rem;
  background-color: var(--bg-btn);
  color: white;
  font-family: Jost;
  border-radius: 10px;
  padding: 8px 16px;
  box-shadow: 0 2px 4px rgba(58, 87, 232, 0.3);
  cursor: pointer;
}
</style>
