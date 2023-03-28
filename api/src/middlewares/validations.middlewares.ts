import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { body } from 'express-validator';

const validateFields = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.mapped(),
    });
  }

  next();
};

export const createUserValidator = [
  body('name', 'the name is required').not().isEmpty(),
  body('surname', 'the surname is required').not().isEmpty(),
  body('email', 'the email is required').not().isEmpty(),
  body('email', 'The email must be a correct format').isEmail(),
  body('password')
    .isLength({ min: 8, max: 16 })
    .withMessage('La contraseña debe tener entre 8 y 16 caracteres')
    .matches(/[a-z]/)
    .withMessage('La contraseña debe contener al menos una letra minúscula')
    .matches(/[A-Z]/)
    .withMessage('La contraseña debe contener al menos una letra mayúscula')
    .matches(/[0-9]/)
    .withMessage('La contraseña debe contener al menos un número')
    .matches(/[$&+,:;=?@#|'<>.^*()%!-]/)
    .withMessage('La contraseña debe contener al menos un caracter especial'),
  validateFields,
];
