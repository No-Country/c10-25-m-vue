import {
  restrictTo,
  protectAccountOwner,
} from './../middlewares/auth.middlewares';
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
  getMyAppointments,
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
  .route('/myAppointments')
  .get(getMyAppointments)

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
      protectAccountOwner,
      updateAppointment,
    )
    .delete(validExistAppointmen, protectAccountOwner, deleteAppointment);

router.patch(
  '/:id/completed',
  validExistAppointmen,
  restrictTo('vet', 'admin'),
  markCompletedAppointment,
);

export default router;
