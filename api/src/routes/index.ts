import { Router } from 'express';

import authRouter from './auth.routes';
import animalRouter from './animal.routes'

const router = Router();

router.use('/auth', authRouter);
router.use('/animal', animalRouter);

export default router;
