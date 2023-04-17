import * as yup from 'yup';
export const signupFormShema = yup.object({
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


export const validateName = async (name: string) => {
    try {
      await signupFormShema.validateAt("name", { name });
      return '';
    } catch (err) {
        if (err instanceof Error) {
            return err.message;
          }
          return 'Error al validar el name';
    }
};

export const validateSurname = async (surname: string) => {
    try {
      await signupFormShema.validateAt("surname", { surname });
      return '';
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      }
      return 'Error al validar el apellido';
    }
  };
  
  export const validateEmail = async (email: string) => {
    try {
      await signupFormShema.validateAt("email", { email });
      return '';
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      }
      return 'Error al validar el correo electrónico';
    }
  };
  
  export const validatePhone = async (phone: string) => {
    try {
      await signupFormShema.validateAt("phone", { phone });
      return '';
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      }
      return 'Error al validar el teléfono';
    }
  };
  
  export const validatePassword = async (password: string) => {
    try {
      await signupFormShema.validateAt("password", { password });
      return '';
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      }
      return 'Error al validar la contraseña';
    }
  };
  
  export const validateConfirmPassword = async (confirmPassword: string, password: string) => {
    try {
      await signupFormShema.validateAt("confirmPassword", { confirmPassword, password });
      return '';
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      }
      return 'Error al validar la confirmación de la contraseña';
    }
  };


export const validateProfileImageUrl = async (profileImageUrl: string | File | null) => {
    if (profileImageUrl instanceof File) {
        // Validar el archivo de imagen usando una función personalizada
    if (profileImageUrl.size === 0) {
        return 'La imagen de perfil es obligatoria, la actual es de size 0';
      } else {
        return '';
      }
    } else if (typeof profileImageUrl === 'string') {
      // Validar la URL de la imagen usando el esquema
      try {
        await signupFormShema.validateAt("profileImageUrl", { profileImageUrl });
        return '';
      } catch (err) {
        if (err instanceof Error) {
          return err.message;
        }
        return 'Error al validar la imagen de perfil';
      }
    } else {
         // Manejar el caso en el que profileImageUrl sea null
    return 'La imagen de perfil es obligatoria';
    }
  };