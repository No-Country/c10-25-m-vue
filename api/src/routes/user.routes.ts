import { findUsers } from '../controllers/user.controllers';
import { protect, restrictTo } from './../middlewares/auth.middlewares';
import express from 'express';

const router = express.Router();

router.use(protect);

router.get('/', restrictTo('admin'), findUsers);

export default router;
