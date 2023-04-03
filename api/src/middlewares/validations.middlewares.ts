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
  body('name').not().isEmpty().withMessage('the name is required'),
  body('surname').not().isEmpty().withMessage('the surname is required'),
  body('email')
    .not()
    .isEmpty()
    .withMessage('the email is required')
    .isEmail()
    .withMessage('The email must be a correct format'),
  body('password')
    .isLength({ min: 8, max: 16 })
    .withMessage('Password must be between 8 and 16 characters')
    .matches(/[a-z]/)
    .withMessage('Password must contain at least one lowercase letter')
    .matches(/[A-Z]/)
    .withMessage('Password must contain at least one capital letter')
    .matches(/[0-9]/)
    .withMessage('Password must contain at least one number')
    .matches(/[$&+,:;=?@#|'<>.^*()%!-]/)
    .withMessage('Password must contain at least one special character'),
  validateFields,
];

export const LoginValidation = [
  body('email')
    .notEmpty()
    .withMessage('The email is required')
    .isEmail()
    .withMessage('The email must be a correct format'),
  body('password')
    .isLength({ min: 8, max: 16 })
    .withMessage('Password must be between 8 and 16 characters')
    .matches(/[a-z]/)
    .withMessage('Password must contain at least one lowercase letter')
    .matches(/[A-Z]/)
    .withMessage('Password must contain at least one capital letter')
    .matches(/[0-9]/)
    .withMessage('Password must contain at least one number')
    .matches(/[$&+,:;=?@#|'<>.^*()%!-]/)
    .withMessage('Password must contain at least one special character'),
  validateFields,
];

export const updateUserValidator = [
  body('name').not().isEmpty().withMessage('the name is required'),
  body('surname').not().isEmpty().withMessage('the surname is required'),
  body('email')
    .not()
    .isEmpty()
    .withMessage('the email is required')
    .isEmail()
    .withMessage('The email must be a correct format'),
  validateFields,
];
