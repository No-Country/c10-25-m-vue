// interfaces/interfacesAuth.ts
export interface LoginFormValues {
    email: string;
    password: string;
  }
  
  export interface RegisterFormValues {
    name: string;
    surname: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    profileImageUrl: File | null;
  }

  export interface RegisterFormErrors {
    name: string;
    surname: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    profileImageUrl: string; // El tipo sigue siendo 'string' porque es un mensaje de error
  }