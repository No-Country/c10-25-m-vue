import { Router } from 'express';

import authRouter from './auth.routes';
import userRouter from './user.routes';
import vetsRouter from "./vets.routes";
import appointmenRouter from './appointment.routes';


const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/vets', vetsRouter);
router.use('/appointments', appointmenRouter);



export default router;
