<template>
    <div>
        <label :for="id">{{ label }}</label>
        <input :id="id" :value="value" :placeholder="placeholder" @input="onInput" @blur="onBlur" />
        <span class="error_form">{{ errors }}</span>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'InputWithLabel',
    props: {
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        errors: {
            type: String,
            required: false
        },
        value: {
            type:  String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        }
    },
    emits: ['update:value', 'blur'],
    setup(props, { emit }) {
        const onInput = (event: Event) => {
            const target = event.target as HTMLInputElement;
            if (target) {
                emit('update:value', target.value);
            }
        };

        const onBlur = () => {
        emit('blur');
        };

        return { onInput, onBlur };
    }
});
</script>
<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
}

label {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 175%;
    /* identical to box height, or 28px */

    text-transform: capitalize;
    color: #383B43;
}

form input {
    padding: 8px 16px;
    width: 100%;
    height: 44px;
    background: #ffffff;
    border: 1px solid #3a57e8;
    border-radius: 4px;
}

.error_form {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 175%;
  /* identical to box height, or 23px */

  display: flex;
  align-items: center;

  color: #C03221;

}
</style>