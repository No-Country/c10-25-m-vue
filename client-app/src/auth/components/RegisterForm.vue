<template>
    <div class="login-container">
        <div class="login-grid">
            <div class="login-image">
                <img :src="imagenPortadaRegister"
                    alt="Login Image" />
            </div>
            <div class="login-form">
                <LogoInterno/>
                <div class="container__subtitle">
                <h1>Registrate</h1>
                <p>Completá tus datos para comenzar.</p>
               </div>
                <form @submit="onSubmit">
                    <div class="form-group">
                        <InputWithLabel class="form-row" placeholder="Nombre" :errors="errors.name" id="nombre" label="Nombre" v-model:value="name" />
                        <InputWithLabel class="form-row" placeholder="Apellido" :errors="errors.surname" id="apellido" label="Apellido" v-model:value="surname" />
                        <InputWithLabel class="form-row" placeholder="Email" :errors="errors.email" id="email" label="Email" v-model:value="email" />
                        <InputWithLabel class="form-row" placeholder="Teléfono" :errors="errors.phone" id="telefono" label="Teléfono" v-model:value="phone" />
                        <InputWithLabel class="form-row" placeholder="Contraseña" :errors="errors.password" id="contraseña" label="Contraseña" v-model:value="password" />
                        <InputWithLabel class="form-row" placeholder="Repetir contraseña" :errors="errors.confirmPassword" id="repetirContraseña" label="Repetir contraseña" v-model:value="confirmPassword" />
                    </div>
                    <div class="container_btn">
                    <button type="submit">Registrare</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>
  
<script  lang="ts">
import { defineComponent, ref } from 'vue'
import InputWithLabel from '../../shared/InputWithLabel.vue'
import imagenPortadaRegister from '../../assets/auth/primer-plano-gato-lamiendo-oreja-conejo-aislado-blanco-removebg-preview 1.png';
import LogoInterno from '../../shared/LogoInterno.vue'
import * as yup from "yup";
import { useForm } from "vee-validate";

interface FormValues {
    name:string;
    surname:string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

const schema = yup.object<FormValues>({
  name: yup.string().required(),  
  surname: yup.string().required(),  
  email: yup.string().email().required('Email es requerido.'),
  phone: yup.number().required(),  
  password: yup.string().required('Contraseña incorrecta. Por favor, intentá de nuevo.').min(8, 'La contraseña debe tener más de 8 caracteres.'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir')
    .required('La confirmación de la contraseña es requerida')
});


export default defineComponent({
    name: 'RegisterForm',
    components:{
        LogoInterno,
        InputWithLabel
    },
    setup() {


        const { useFieldModel, errors, handleSubmit, validate } = useForm<FormValues>({
      validationSchema: schema,
      validateOnInput: false
    });

        const [name, surname, email, phone, password, confirmPassword ] = useFieldModel([ 'name', 'surname', 'email', 'phone', 'password', 'confirmPassword']);
        const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values, null, 2));
    });
        return {
            name,
            surname,
            email,
            phone,
            password,
            confirmPassword,
            validate,
            errors,
            imagenPortadaRegister,
            onSubmit
        }
    }
})
</script>
  
<style scoped lang="scss">

.container__subtitle{
    display:flex;
  
flex-direction: column;
line-height:25px;
padding-top:5%;
}
.login-container {
    background-image: url(../../assets/auth/fonto_auth.png);
    background-size: cover;
    background-position: center;
}

.container_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 9px;
}

.login-form h1 {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
 
  /* identical to box height */
  padding-top: 10px;

  color: #060859;

}

.login-form p {
    font-family: 'Jost';
font-style: normal;
font-weight: 400;
width:100%;
font-size: 16px;
padding:10px;
/* identical to box height, or 28px */


color: #383B43;
}
.login-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
}

.form-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 10px;
    justify-content: center;
    padding-top:15px;
    
}

.login-image {
    display: flex;
    justify-content: center;
}

.login-form {
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
}

.form-row {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

form {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 10px;
    width:90%;
}

.container__form--login {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}



.form-options {
    display: flex;
    justify-content: space-between;
    width: 100%;

}

form button {
    background-color: #3A57E8;
    color: white;
    font-family: 'Jost', sans-serif;
    border: none;
    padding: 8px 16px;
    gap: 10px;
    height: 62px;
    background: #3A57E8;
    box-shadow: 0px 2px 4px rgba(58, 87, 232, 0.3);
    border-radius: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    margin-top: 3%;
    cursor: pointer;
    color: #FFFFFF;

}

input[type="checkbox"] {
    /* styles for checkboxes */
    width: 20px;
    height: 20px;
}


</style>