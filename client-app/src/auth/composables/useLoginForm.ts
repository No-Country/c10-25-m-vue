import { reactive } from 'vue';
import * as yup from 'yup';
import { useUserStore }  from '../../store/auth/user'; // Importar userStore
import { useRouter } from 'vue-router';  // Importar goToWelcome

const URL_API = 'http://localhost:3001/api/v1/auth/signin';

export default function useLoginForm() {

    const userStore = useUserStore();
    const router = useRouter();
    const state = reactive({
      email: '',
      password: '',
      errors: {
        email: '',
        password: ''
      },
      serverError: '' // Agregar propiedad para almacenar el error del servidor
    });

    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(8).required()
    });

    function goToWelcome() {
      router.push('/welcome');
    }

    const onSubmit = async (event: Event) => {
        event.preventDefault();
      try {
        await schema.validate(
          { email: state.email, password: state.password },
          { abortEarly: false }
        );
        
        // Enviar petición HTTP POST al endpoint de inicio de sesión
        const response = await fetch(URL_API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: state.email,
            password: state.password
          })
        });

        if (response.ok) {
          const data = await response.json();
          // Actualizar estado de la aplicación con información del usuario autenticado
          userStore.user = data.user;
          goToWelcome();
          state.email = "";
          state.password = "";
        } else {
            // Manejar error del servidor
            const data = await response.json();
            state.serverError = data.message;
          }
         
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          err.inner.forEach((error) => {
            if (error.path === 'email') {
              state.errors.email = error.message;
            } else if (error.path === 'password') {
              state.errors.password = error.message;
            }
          });
        } else if (err instanceof TypeError) {
            // Manejar error de red
            state.serverError = "Error de conexión. Por favor, inténtelo de nuevo más tarde.";
          }
      }
    };

    return { state, onSubmit };

};