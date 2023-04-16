import { reactive } from "vue";
import * as yup from "yup";
import { useUserStore } from "../../store/auth/user"; // Importar userStore
import { useRouter } from "vue-router"; // Importar goToWelcome
import { LoginFormValues } from '../interfaces/InterfacesAuth';

const URL_API = "http://localhost:3001/api/v1/auth/signin";

export default function useLoginForm() {
//Aqui uso la interface, especifico el tipo de objeto que se está creando con la función 
const loginFormState = reactive<LoginFormValues & { errors: LoginFormValues; serverError: string }>({
    email: '',
    password: '',
    errors: {
      email: '',
      password: ''
    },
    serverError: ''
});

  const userStore = useUserStore();
  const router = useRouter();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  function goToWelcome() {
    router.push("/user/dashboard");
  }

  const onSubmit = async (event: Event) => {
    event.preventDefault();
    try {
      await schema.validate(
        { email: loginFormState.email, password: loginFormState.password },
        { abortEarly: false }
      );

      // Enviar petición HTTP POST al endpoint de inicio de sesión
      const response = await fetch(URL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginFormState.email,
          password: loginFormState.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Actualizar estado de la aplicación con información del usuario autenticado
        userStore.user = data.user;
        goToWelcome();
        loginFormState.email = "";
        loginFormState.password = "";
      } else {
        // Manejar error del servidor
        const data = await response.json();
        loginFormState.serverError = data.message;
      }
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error.path === "email") {
            loginFormState.errors.email = error.message;
          } else if (error.path === "password") {
            loginFormState.errors.password = error.message;
          }
        });
      } else if (err instanceof TypeError) {
        // Manejar error de red
        loginFormState.serverError =
          "Error de conexión. Por favor, inténtelo de nuevo más tarde.";
      }
    }
  };

  return { loginFormState, onSubmit };
}
