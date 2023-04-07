import { reactive } from 'vue';
import * as yup from 'yup';
import { Ref } from 'vue';

interface FormValues {
    email: string;
    password: string;
}

export function useFormValidation(schema: yup.ObjectSchema<FormValues>, formValues: FormValues) {
  const errors = reactive({
    email: '',
    password: '',
  });

  const validateField = async (field: keyof FormValues) => {
    try {
      await schema.validateAt(field, formValues);
      errors[field] = '';
    } catch (err) {
      if (err instanceof Error) {
        errors[field] = err.message;
      }
    }
  };

  const validateForm = async () => {
    try {
      await schema.validate(formValues, { abortEarly: false });
      errors.email = '';
      errors.password = '';
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error.path === 'email') {
            errors.email = error.message;
          } else if (error.path === 'password') {
            errors.password = error.message;
          }
        });
      }
    }
  };

  return { errors, validateField, validateForm };
}