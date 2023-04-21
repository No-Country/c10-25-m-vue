import axios from 'axios';
import { AxiosError } from 'axios';
import { reactive } from "vue";
import { useSignupStore } from '../../store/auth/signup'
import { useRouter } from "vue-router";
import { RegisterFormValues, RegisterFormErrors } from '../interfaces/InterfacesAuth';
import * as yup from "yup";

const URL_API = import.meta.env.VITE_API_URL;

export default function useRegistroForm() {
   const signupStore = useSignupStore()
   const signupFormState = reactive<RegisterFormValues & { errors: RegisterFormErrors; serverError: string | null; serverSuccess: string | null; }>({
        name: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        profileImageUrl: null,
        errors: {
          name: '',
          surname: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          profileImageUrl: '',
        },
        serverError: signupStore.serverError,
        serverSuccess: signupStore.serverSuccess,
  });

  const router = useRouter();
  const schema = yup.object({
    name: yup.string().required("Nombre es requerido"),
    surname: yup.string().required("Apellido es requerido"),
    email: yup.string().email().required("Email es requerido."),
    phone: yup.string().required("Telefono es requerido"),
    password: yup
      .string()
      .min(8, 'La contraseña debe tener entre 8 y 16 caracteres')
      .max(16, 'La contraseña debe tener entre 8 y 16 caracteres')
      .matches(/[a-z]/, 'La contraseña debe contener al menos una letra minúscula')
      .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
      .matches(/[0-9]/, 'La contraseña debe contener al menos un número')
      .matches(/[$&+,:;=?@#|'<>.^*()%!-]/, 'La contraseña debe contener al menos un carácter especial')
      .required('La contraseña es obligatoria'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Las contraseñas deben coincidir")
      .required("La confirmación de la contraseña es requerida"),
      profileImageUrl: yup.string().required('La imagen de perfil es obligatoria')
  });

  function goToAccountSuccess() {
    router.push("/auth/success");
  }

  const onSubmit = async (event: Event) => {
    event.preventDefault();
    try {
      await schema.validate(
        {
          name: signupFormState.name,
          surname: signupFormState.surname,
          email: signupFormState.email,
          phone: signupFormState.phone,
          password: signupFormState.password,
          confirmPassword: signupFormState.confirmPassword,
          profileImageUrl: signupFormState.profileImageUrl,
        },
        { abortEarly: false }
      );
  
      // Crear objeto FormData y agregar valores del formulario
      const formData = new FormData();
      formData.append('name',     signupFormState.name);
      formData.append('surname',  signupFormState.surname);
      formData.append('email',    signupFormState.email);
      formData.append('phone',    signupFormState.phone);
      formData.append('password', signupFormState.password);

      // Agregar la imagen solo si no es null
      if (signupFormState.profileImageUrl) {
        formData.append('profileImageUrl', signupFormState.profileImageUrl);
      }

      // Enviar petición HTTP POST al endpoint de registro
      const response = await axios.post(URL_API, formData, {
      });
  
      if (response.status === 200) {
        const data = await response.data;
     
        // Aqui la vista redict luego del registro exitoso
        goToAccountSuccess();
          
        signupStore.setServerSuccess(data.message)
        setTimeout(() => {
          signupStore.setServerSuccess('')
        }, 5000)
  
      } else {
        // Manejar error del servidor
        const data = await response.data;
          
        signupStore.setServerError(data.message)
        setTimeout(() => {
          signupStore.setServerError('')
        }, 5000)
      }
    } catch (err: unknown) {
          if (err instanceof yup.ValidationError) {
            err.inner.forEach((error) => {
              if (error.path && error.path in signupFormState.errors) {
                signupFormState.errors[error.path as keyof typeof signupFormState.errors] = error.message;
              }
            });
          } else if ((err as AxiosError).isAxiosError && (err as AxiosError).message === 'Network Error') {
            // Manejar error de red
        
            signupStore.setServerError(
              'Error de conexión. Por favor, inténtelo de nuevo más tarde.'
            );
            setTimeout(() => {
              signupStore.setServerError('')
            }, 5000)
          }  else if ((err as AxiosError).isAxiosError && (err as AxiosError).response) {
            // Mostrar mensaje de error del servidor
            const axiosError = err as AxiosError;
            if (axiosError.response && axiosError.response.status === 400) {
                const responseData = axiosError.response.data as { message: string };
             
                signupStore.setServerError(responseData.message);
                setTimeout(() => {
                    signupStore.setServerError('')
                }, 5000)
            } else if (axiosError.response && axiosError.response.status === 500) {
              const responseData = axiosError.response.data as { message: string };
             
              signupStore.setServerError(
                'Error de conexión. Por favor, inténtelo de nuevo más tarde.'
              );
              setTimeout(() => {
                  signupStore.setServerError('')
              }, 5000)
          } 
        } else {
            // Manejar otros tipos de errores
        }
    }
  }

  return { signupFormState, onSubmit };
}
