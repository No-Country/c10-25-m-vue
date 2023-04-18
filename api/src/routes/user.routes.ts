import { deleteUser, updateProfileImage, updateUser } from './../controllers/user.controllers';
import { findUser, findUsers } from '../controllers/user.controllers';
import {
  validIfExistEmail,
  validIfExistUserById,
} from '../middlewares/user.middlewares';
import { protect, restrictTo } from './../middlewares/auth.middlewares';
import express from 'express';
import { updateUserValidator } from '../middlewares/validations.middlewares';
import { isParamsIdANumber } from '../utils/isParamsIdANumber';
import upload from '../utils/multer';

const router = express.Router();

// router.use(protect);

router.get('/', findUsers);

router
  .patch('/profileImage/:id',
    upload.single('profileImageUrl'),
    isParamsIdANumber,
    validIfExistUserById,
    updateProfileImage
  )

router
  .route('/:id')
  .get(validIfExistUserById, findUser)
  .patch(
    validIfExistUserById,
    updateUserValidator,
    validIfExistEmail,
    updateUser,
  )
  .delete(validIfExistUserById, deleteUser);


export default router;
