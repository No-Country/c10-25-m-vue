import express from 'express';
import upload from './../utils/multer';

//middlewares
import { createUserValidator } from './../middlewares/validations.middlewares';
import { validIfExistEmail } from './../middlewares/auth.middlewares';

//controllers
import { signup } from './../controllers/auth.controllers';

const router = express.Router();

router.post(
  '/signup',
  upload.single('profileImageUrl'),
  createUserValidator,
  validIfExistEmail,
  signup,
);

export default router;
