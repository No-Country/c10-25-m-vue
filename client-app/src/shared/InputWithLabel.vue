<template>
    <div>
        <label :for="id">{{ label }}</label>
        <div class="input-wrapper">
        <input :id="id" :value="value" :type="inputType" :placeholder="placeholder" @input="onInput" @blur="onBlur" 
        :style="errors ? 'border:1px solid #C03221;' : ''"
        />
        <span class="eye-input" v-if="type === 'password'" @click="togglePasswordVisibility" >
            <img v-if="showPassword" src="../assets/auth/eye_open.svg" alt="">
            <img v-else src="../assets/auth/eye_close.svg" alt="">
        </span>
        </div>
        <span class="error_form">{{ errors }}</span>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import ImagenEyeOpenInput from '../assets/auth/eye_open.svg'
import ImagenEyeCloseInput from '../assets/auth/eye_close.svg'
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
        type:{
            type: String,
            required: true
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

        const showPassword = ref(false);
        const onInput = (event: Event) => {
            const target = event.target as HTMLInputElement;
            if (target) {
                emit('update:value', target.value);
            }
        };

        const onBlur = () => {
        emit('blur');
        };

        const togglePasswordVisibility =  () => {
            showPassword.value = !showPassword.value;
        };
        const inputType = computed(() => {
            return props.type === 'password' && showPassword.value ? 'text' : props.type;
        });

        
        return { onInput, onBlur, togglePasswordVisibility,  inputType, showPassword,
                 ImagenEyeOpenInput, ImagenEyeCloseInput
            };
    }
});
</script>
<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
}
.input-wrapper {
    position: relative;
}

.eye-input {
    position: absolute;
    background: none;
    cursor:pointer;
    right: 8px;
    top: 55%;
    transform: translateY(-50%);
    /* Agrega más estilos para el botón aquí */
}
label {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 175%;
    /* identical to box height, or 28px */
    margin-bottom: 6px;
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