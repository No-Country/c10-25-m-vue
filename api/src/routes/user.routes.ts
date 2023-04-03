import { deleteUser, updateUser } from './../controllers/user.controllers';
import { findUser, findUsers } from '../controllers/user.controllers';
import {
  validIfExistUserByEmail,
  validIfExistUserById,
} from '../middlewares/user.middlewares';
import { protect, restrictTo } from './../middlewares/auth.middlewares';
import express from 'express';

const router = express.Router();

// router.use(protect);

router.get('/', findUsers);

router
  .route('/:id')
  .get(validIfExistUserById, findUser)
  .patch(validIfExistUserById, validIfExistUserByEmail, updateUser)
  .delete(validIfExistUserById, deleteUser);

export default router;
