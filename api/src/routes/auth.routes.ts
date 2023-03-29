import express from 'express';
import upload from './../utils/multer';

//middlewares
import {
  createUserValidator,
  LoginValidation,
} from './../middlewares/validations.middlewares';
import {
  validIfExistEmail,
  validIfExistUserByEmail,
} from './../middlewares/auth.middlewares';

//controllers
import { signin, signup } from './../controllers/auth.controllers';

const router = express.Router();

router.post(
  '/signup',
  upload.single('profileImageUrl'),
  createUserValidator,
  validIfExistEmail,
  signup,
);

router.post('/signin', LoginValidation, validIfExistUserByEmail, signin);

export default router;
