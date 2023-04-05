import { Router } from 'express';

import authRouter from './auth.routes';
import userRouter from './user.routes';
import appointmenRouter from './appointment.routes';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/appointments', appointmenRouter);

export default router;
