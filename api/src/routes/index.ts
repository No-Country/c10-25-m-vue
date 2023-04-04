import { Router } from 'express';

import authRouter from './auth.routes';
import userRouter from './user.routes';
import vetsRouter from "./vets.routes";

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/vets',vetsRouter);

export default router;
