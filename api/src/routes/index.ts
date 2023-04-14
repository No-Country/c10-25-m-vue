import { Router } from 'express';

import authRouter from './auth.routes';
import animalRouter from './animal.routes'
import userRouter from './user.routes';
import appointmenRouter from './appointment.routes';
import petRouter from './pets.routes'

const router = Router();

router.use('/auth', authRouter);
router.use('/animals', animalRouter);
router.use('/users', userRouter);
router.use('/pets', petRouter)
router.use('/appointments', appointmenRouter);

export default router;
