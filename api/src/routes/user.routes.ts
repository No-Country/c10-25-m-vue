import { deleteUser, updateUser } from './../controllers/user.controllers';
import { findUser, findUsers } from '../controllers/user.controllers';
import {
  validIfExistEmail,
  validIfExistUserById,
} from '../middlewares/user.middlewares';
import { protect, restrictTo } from './../middlewares/auth.middlewares';
import express from 'express';
import { updateUserValidator } from '../middlewares/validations.middlewares';

const router = express.Router();

// router.use(protect);

router.get('/', findUsers);

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
