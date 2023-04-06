import {
  createAppointmentValidation,
  updateAppointmentValidation,
} from './../middlewares/validations.middlewares';
import express from 'express';

import { protect } from '../middlewares/auth.middlewares';
import {
  createAppointment,
  deleteAppointment,
  findAllAppointment,
  findOneAppointment,
  markCompletedAppointment,
  updateAppointment,
} from '../controllers/appointment.controllers';
import {
  validExistAppointmen,
  validPetIdReqBody,
  validVetIdReqBody,
  validateDate,
  verifyVetAvailability,
} from '../middlewares/appointment.middlewares';

const router = express.Router();

router.use(protect);

router
  .route('/')
  .get(findAllAppointment)
  .post(
    createAppointmentValidation,
    validateDate,
    validVetIdReqBody,
    validPetIdReqBody,
    verifyVetAvailability,
    createAppointment,
  );

router
  .route('/:id')
  .get(validExistAppointmen, findOneAppointment)
  .patch(
    validExistAppointmen,
    updateAppointmentValidation,
    validateDate,
    validVetIdReqBody,
    validPetIdReqBody,
    verifyVetAvailability,
    updateAppointment,
  )
  .delete(validExistAppointmen, deleteAppointment);

router.patch('/:id/completed', validExistAppointmen, markCompletedAppointment);

export default router;
