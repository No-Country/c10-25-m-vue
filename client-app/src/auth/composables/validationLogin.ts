// composables/validations.ts
import * as yup from 'yup';

export const loginFormSchema = yup.object({
  email: yup.string().email().required('Email es requerido.'),
  password: yup
    .string()
    .required('Contraseña incorrecta. Por favor, intentá de nuevo.')
    .min(8, 'La contraseña debe tener más de 8 caracteres.')
});


export const validateEmail = async (email: string) => {
  try {
    await loginFormSchema.validateAt('email', { email });
    return '';
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    }
    return 'Error al validar el email';
  }
};

export const validatePassword = async (password: string) => {
  try {
    await loginFormSchema.validateAt('password', { password });
    return '';
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    }
    return 'Error al validar la contraseña';
  }
};