import { Router } from 'express';

import authRouter from './auth.routes';
import animalRouter from './animal.routes'
import userRouter from './user.routes';
import vetsRouter from "./vets.routes";
import appointmenRouter from './appointment.routes';
import petRouter from './pets.routes';
import reviewRouter from './reviews.router';



const router = Router();

router.use('/auth', authRouter);
router.use('/animals', animalRouter);
router.use('/users', userRouter);
router.use('/pets', petRouter)
router.use('/vets', vetsRouter);
router.use('/appointments', appointmenRouter);
router.use('/reviews', reviewRouter);


export default router;
