<template>
    <form @submit.prevent="onSubmit">
      <InputWithLabel
        v-for="input in inputs"
        :key="input.id"
        :id="input.id"
        :label="input.label"
        :value="input.value"
        @update:value="updateValue(input.id, $event)"
      />
      <button type="submit">Enviar</button>
    </form>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  import InputWithLabel from './InputWithLabel.vue';
  
  interface Input {
    id: string;
    label: string;
    value: string;
  }
  
  export default defineComponent({
    name: 'Form',
    components: {
      InputWithLabel
    },
    props: {
      inputs: {
        type: Array as () => Input[],
        required: true
      }
    },
    emits: ['submit'],
    setup(props, { emit }) {
      const updateValue = (id: string, value: string) => {
        const input = props.inputs.find(input => input.id === id);
        if (input) {
          input.value = value;
        }
      };
  
      const onSubmit = () => {
        emit('submit', props.inputs);
      };
  
      return { updateValue, onSubmit };
    }
  });
  </script>

  <style lang="scss" scoped>
  form {
  display: flex;
  flex-direction: column;

  text-align: left;
  gap: 5px;
}

form label{
  font-family: 'Jost';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 175%;
/* identical to box height, or 28px */

text-transform: capitalize;
color: #383B43;
}

form label {
  text-align: left;
}
  </style>