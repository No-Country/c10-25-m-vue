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
           
                <form @submit="onSubmit">
                    <div class="form-group">

                        <InputWithLabel class="form-row" placeholder="Nombre" 
                        v-model:value="name" id="nombre" label="Nombre" 
                        @blur="validateName" :errors="errors.name"
                        />

                        <InputWithLabel class="form-row" placeholder="Apellido" 
                        :errors="errors.surname" id="apellido" label="Apellido" 
                        v-model:value="surname"   @blur="validateSurname"/>

                        <InputWithLabel class="form-row" placeholder="Email" 
                        :errors="errors.email" id="email" label="Email" 
                        v-model:value="email" @blur="validateEmail"/>

                        <InputWithLabel class="form-row" placeholder="Teléfono" 
                        :errors="errors.phone" id="telefono" label="Teléfono" 
                        v-model:value="phone" @blur="validatePhone"/>

                        <InputWithLabel class="form-row" placeholder="Contraseña" 
                        :errors="errors.password" id="contraseña" label="Contraseña" 
                        v-model:value="password" @blur="validatePassword"/>

                        <InputWithLabel class="form-row" placeholder="Repetir contraseña" 
                        :errors="errors.confirmPassword" id="repetirContraseña" label="Repetir contraseña" 
                        v-model:value="confirmPassword" @blur="validateConfirmPassword"/>

                    </div>
                    <div class="container_btn">
                    <button type="submit">Registrare</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
    </div>
</template>
  
<script  lang="ts">
import { defineComponent, ref, reactive } from 'vue'
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
    [key: string]: string;
}

const schema = yup.object({
  name: yup
    .string()
    .required('Nombre es requerido'),  
  surname: yup
    .string()
    .required('Apellido es requerido'),  
  email: yup
    .string()
    .email()
    .required('Email es requerido.'),
  phone: yup
    .string()
    .required('Telefono es requerido'),  
  password: yup
    .string()
    .required('Contraseña incorrecta. Por favor, intentá de nuevo.').min(8, 'La contraseña debe tener más de 8 caracteres.'),
  confirmPassword: yup
    .string()
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
        const name = ref('');
        const email = ref('');
        const password = ref('');
        const surname = ref('');
        const phone = ref('');
        const confirmPassword = ref('');
 


    const errors: FormValues = {
        name: "",
        email: "",
        password: "",
        surname: "",
        phone: "",
        confirmPassword:""
  };

  const { handleSubmit, resetForm } = useForm();
  

  const validateName = async () => {
      try {
        await schema.validateAt("name", { name: name.value });
        errors.name = '';
      } catch (err) {
        if (err instanceof Error) {
          errors.name = err.message;
        }
      }
    };

    const validateEmail = async () => {
      try {
        await schema.validateAt("email", { email: email.value });
        errors.email = '';
      } catch (err) {
        if (err instanceof Error) {
          errors.email = err.message;
        }
      }
    };

    const validatePassword = async () => {
      try {
        await schema.validateAt('password', { password: password.value });
        errors.password = '';
      } catch (err) {
        if (err instanceof Error) {
        errors.password = err.message;
        }
      }
    };

    const validateConfirmPassword = async () => {
      try {
        await schema.validateAt('confirmPassword', { confirmPassword: confirmPassword.value });
        errors.confirmPassword = '';
      } catch (err) {
        if (err instanceof Error) {
        errors.confirmPassword = err.message;
        }
      }
    };

    const validateSurname = async () => {
      try {
        await schema.validateAt('surname', { surname: surname.value });
        errors.surname = '';
      } catch (err) {
        if (err instanceof Error) {
        errors.surname = err.message;
        }
      }
    };

    const validatePhone = async () => {
      try {
        await schema.validateAt('phone', { phone: phone.value });
        errors.phone = '';
      } catch (err) {
        if (err instanceof Error) {
        errors.phone = err.message;
        }
      }
    };


    const onSubmit = handleSubmit(async (values) => {
  try {
    await schema.validate(
      {
        name: name.value,
        password: password.value,
        phone: phone.value,
        surname: surname.value,
        confirmPassword: confirmPassword.value,
        email: email.value,
      },
      { abortEarly: false }
    );
    alert(
      JSON.stringify({
        name: name.value,
        password: password.value,
        phone: phone.value,
        surname: surname.value,
        confirmPassword: confirmPassword.value,
        email: email.value,
      })
    );
    resetForm();
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      err.inner.forEach((error) => {
        if (error.path) {
          errors[error.path] = error.message;
        }
      });
    }
  }
});

        return {
            name,
            surname,
            email,
            phone,
            password,
            confirmPassword,
            errors,
            imagenPortadaRegister,
            validateName,
            validateEmail,
            validatePassword,
            validateSurname,
            validateConfirmPassword,
            validatePhone,
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

form button:hover {
  background: #4f62c1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    width:100%;
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