import express from 'express';
import upload from './../utils/multer';

//middlewares
import { createUserValidator } from './../middlewares/validations.middlewares';
import { signup } from './../controllers/auth.controllers';
//controllers

const router = express.Router();

router.post(
  'signup',
  [upload.single('profileImageUrl'), createUserValidator],
  signup,
);
