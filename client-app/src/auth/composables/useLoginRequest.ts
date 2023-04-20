import axios from "axios";
import { AxiosError } from "axios";
import { reactive } from "vue";
import { useLoginStore } from "../../store/auth/login";
import { useRouter } from "vue-router"; // Importar goToWelcome
import { LoginFormValues } from "../interfaces/InterfacesAuth";
import { useUserStore } from "../../store/user";
import * as yup from "yup";

const URL_API = "http://localhost:3001/api/v1/auth/signin";

export default function useLoginForm() {
  const loginStore = useLoginStore();
  const userStore = useUserStore();
  //Aqui uso la interface, especifico el tipo de objeto que se está creando con la función
  const loginFormState = reactive<
    LoginFormValues & {
      errors: LoginFormValues;
      serverError: string | null;
      serverSuccess: string | null;
    }
  >({
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
    },
    serverError: loginStore.serverError,
    serverSuccess: loginStore.serverSuccess,
  });

  const router = useRouter();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  function goToWelcome() {
    router.push("/user/home");
  }

  const onSubmit = async (event: Event) => {
    event.preventDefault();
    try {
      await schema.validate(
        { email: loginFormState.email, password: loginFormState.password },
        { abortEarly: false }
      );

      // Enviar petición HTTP POST al endpoint de inicio de sesión
      const response = await axios.post(URL_API, {
        email: loginFormState.email,
        password: loginFormState.password,
      });

      if (response.status === 200) {
        const data = await response.data;

        localStorage.setItem("token", data.token);

        userStore.setUser(data.user);
        // Actualizar estado de la aplicación con información del usuario autenticado
        goToWelcome();

        loginStore.setServerSuccess(data.message);
        setTimeout(() => {
          loginStore.setServerSuccess("");
        }, 5000);

        loginFormState.email = "";
        loginFormState.password = "";
      } else {
        // Manejar error del servidor
        const data = await response.data;

        loginStore.setServerError(data.message);
        setTimeout(() => {
          loginStore.setServerError("");
        }, 5000);
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
      } else if (
        (err as AxiosError).isAxiosError &&
        (err as AxiosError).message === "Network Error"
      ) {
        // Manejar error de red

        loginStore.setServerError(
          "Error de conexión. Por favor, inténtelo de nuevo más tarde."
        );
        setTimeout(() => {
          loginStore.setServerError("");
        }, 5000);
      }
    }
  };

  return { loginFormState, onSubmit };
}
