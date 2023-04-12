import { User } from './../interfaces/user.interfaces';
import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';
import { db } from '../database/db.server';
import { ApRequest } from '../interfaces/user.interfaces';

/* This code exports a middleware function called `validateDate` that checks if the date provided in
the request body is greater than or equal to the current date. If the date provided is less than the
current date, it returns an error using the `AppError` class from the `utils` folder. If the date
provided is valid, it calls the `next()` function to pass control to the next middleware function. */
export const validateDate = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const currentDate = new Date();
    const requestDate = new Date(req.body.date);

    if (requestDate < currentDate) {
      return next(
        new AppError(
          'the provided date is less than the current date',
          StatusCodes.BAD_REQUEST,
        ),
      );
    }

    next();
  },
);

/* This code exports a middleware function called `validExistAppointmen` that checks if an appointment
with a given `id` exists and has a status of "pending" in the database. If the appointment does not
exist or has already been completed or canceled, it returns an error using the `AppError` class from
the `utils` folder. If the appointment exists and has a status of "pending", it attaches the
appointment object to the `req` object and calls the `next()` function to pass control to the next
middleware function. */
export const validExistAppointmen = catchAsync(
  async (req: ApRequest, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const appointment = await db.appointment.findFirst({
      where: {
        id: +id,
        status: 'pending',
      },
      include: {
        vet: true,
        pet: {
          include: {
            user: true,
          },
        },
      },
    });

    console.log(appointment);

    if (!appointment) {
      return next(
        new AppError(
          'The appointment does not exist or has already been completed or canceled',
          StatusCodes.NOT_FOUND,
        ),
      );
    }
    req.user = appointment.pet.user;
    req.appointment = appointment;
    next();
  },
);

interface Appointment {
  id: number;
  date: Date;
}

interface Vet {
  id: number;
  speciality: string;
  Appointment: Appointment[];
}

function isAppointmentAvailable(vet: Vet, date: Date): boolean {
  // Check if there is an appointment reserved within 30 minutes of the given date
  const appointments = vet.Appointment;
  for (let i = 0; i < appointments.length; i++) {
    const appointmentDate = new Date(appointments[i].date);
    if (
      appointmentDate.getUTCFullYear() === date.getUTCFullYear() &&
      appointmentDate.getUTCMonth() === date.getUTCMonth() &&
      appointmentDate.getUTCDate() === date.getUTCDate() &&
      appointmentDate.getUTCHours() === date.getUTCHours() &&
      Math.abs(appointmentDate.getUTCMinutes() - date.getUTCMinutes()) < 30
    ) {
      return false;
    }
  }
  return true;
}

function isVetAvailable(vet: Vet, date: Date): boolean {
  // Check if date is on a weekend
  if (date.getUTCDay() === 0 || date.getUTCDay() === 6) {
    return false;
  }

  // Check if date is before 8am or after 6pm UTC
  const hour = date.getUTCHours();
  if (hour < 8 || hour >= 18) {
    return false;
  }

  // Check if date is between 12pm and 2pm UTC
  if (hour >= 12 && hour < 14) {
    return false;
  }

  // Check if there is an appointment within the next 30 minutes
  if (!isAppointmentAvailable(vet, date)) {
    return false;
  }

  // If all checks passed, vet is available
  return true;
}

/* This code exports a middleware function called `verifyVetAvailability` that checks if a given vet is
available on a given date. It uses the `isVetAvailable` function to check if the date is on a
weekend, before 8am or after 6pm UTC, between 12pm and 2pm UTC, or if the vet is already booked at
that time. If the vet is not available, it returns an error using the `AppError` class from the
`utils` folder. If the vet is available, it calls the `next()` function to pass control to the next
middleware function. */
export const verifyVetAvailability = catchAsync(
  async (req: ApRequest, res: Response, next: NextFunction) => {
    const { date } = req.body;
    const { vet } = req;

    const dateFilt = new Date(date);
    const hasAvailability = isVetAvailable(vet, dateFilt);

    if (!hasAvailability) {
      return next(
        new AppError(
          'The selected date is not available',
          StatusCodes.BAD_REQUEST,
        ),
      );
    }

    next();
  },
);

//TODO: pasar la funcion valid vetId y petId a sus respectivos archivos, recordar cambiar las importaciones

/* This code exports a middleware function called `validVetIdReqBody` that checks if a `vetId` exists
in the request body and if it corresponds to an existing vet in the database with a `status` of
`true`. If the vet does not exist or has a `status` of `false`, it returns an error using the
`AppError` class from the `utils` folder. If the vet exists and has a `status` of `true`, it calls
the `next()` function to pass control to the next middleware function. */
export const validVetIdReqBody = catchAsync(
  async (req: ApRequest, res: Response, next: NextFunction) => {
    const { vetId } = req.body;

    const vet = await db.vet.findFirst({
      where: {
        id: vetId,
        status: true,
      },
      include: {
        Appointment: true,
      },
    });

    if (!vet) {
      return next(new AppError('Vet not found', StatusCodes.NOT_FOUND));
    }

    req.vet = vet;
    next();
  },
);

/* This code exports a middleware function called `validPetIdReqBody` that checks if a `petId` exists
in the request body and if it corresponds to an existing pet in the database with a `status` of
`true`. If the pet does not exist or has a `status` of `false`, it returns an error using the
`AppError` class from the `utils` folder. If the pet exists and has a `status` of `true`, it calls
the `next()` function to pass control to the next middleware function. */
export const validPetIdReqBody = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { petId } = req.body;

    const pet = await db.pet.findFirst({
      where: {
        id: petId,
        status: true,
      },
    });

    if (!pet) {
      return next(new AppError('Vet not found', StatusCodes.NOT_FOUND));
    }

    next();
  },
);
