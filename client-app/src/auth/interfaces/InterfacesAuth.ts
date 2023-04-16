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
    [key: string]: string;
  }