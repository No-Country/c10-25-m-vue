import { Router } from 'express';

import authRouter from './auth.routes';
import animalRouter from './animal.routes'
import userRouter from './user.routes';

const router = Router();

router.use('/auth', authRouter);
router.use('/animal', animalRouter);
router.use('/users', userRouter);

export default router;
