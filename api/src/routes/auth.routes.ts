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
} from './../middlewares/user.middlewares';

//controllers
import { signup, signin, renewToken } from './../controllers/auth.controllers';

import { protect } from '../middlewares/auth.middlewares';

const router = express.Router();

router.post(
  '/signup',
  upload.single('profileImageUrl'),
  createUserValidator,
  validIfExistEmail,
  signup,
);

router.post('/signin', LoginValidation, validIfExistUserByEmail, signin);

router.use(protect);

router.get('/renew', renewToken);

export default router;
