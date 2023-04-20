import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import catchAsync from '../utils/catchAsync';
import { db } from '../database/db.server';
import { ApRequest, URequest } from '../interfaces/user.interfaces';
import { AppointmentStatus } from '@prisma/client';

/* This code exports a function named `findAllAppointment` which is an asynchronous function that
retrieves all appointments with a status of "pending" from the database using the
`db.appointment.findMany()` method. It then sends a JSON response with the status code 200 and the
retrieved appointments. The function is wrapped in a `catchAsync` function which handles any errors
that may occur during the execution of the function. */
export const findAllAppointment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const appointments = await db.appointment.findMany({
      where: {
        status: 'pending',
      },
      include: {
        vet: true,
      },
    });

    res.status(StatusCodes.OK).json({
      status: 'success',
      results: appointments.length,
      appointments,
    });
  },
);

/*  */
export const getMyAppointments = catchAsync(
  async (req: URequest, res: Response, next: NextFunction) => {
    const { status } = req.query;
    const { sessionUser } = req;

    const statusList: AppointmentStatus[] = [
      'pending',
      'completed',
      'cancelled',
    ];

    const appointments = await db.appointment.findMany({
      where: {
        pet: {
          user_id: sessionUser.id,
        },
        status: status ? status : { in: statusList },
      },
      include: {
        pet: true,
        vet: {
          include: {
            user: {
              select: {
                name: true,
                surname: true,
                email: true,
                phone: true,
              },
            },
          },
        },
      },
    });

    return res.status(StatusCodes.OK).json({
      status: 'success',
      appointments: appointments,
    });
  },
);

/* This code exports a function named `findOneAppointment` which is an asynchronous function that
retrieves a single appointment from the database using the `req.appointment` property. It then sends
a JSON response with the status code 200 and the retrieved appointment. The function is wrapped in a
`catchAsync` function which handles any errors that may occur during the execution of the function.
The `ApRequest` type is used to define the type of the `req` parameter, which includes an
`appointment` property. */
export const findOneAppointment = catchAsync(
  async (req: ApRequest, res: Response, next: NextFunction) => {
    const { appointment } = req;

    return res.status(StatusCodes.OK).json({
      status: 'success',
      appointment,
    });
  },
);

/* This code exports a function named `createAppointment` which is an asynchronous function that
creates a new appointment in the database using the `db.appointment.create()` method. The
appointment data is obtained from the request body, which includes the appointment date, reason, vet
ID, and pet ID. Once the appointment is created, a JSON response with the status code 201 and a
success message is sent back to the client. The function is wrapped in a `catchAsync` function which
handles any errors that may occur during the execution of the function. */
export const createAppointment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { date, reason, vetId, petId } = req.body;

    await db.appointment.create({
      data: {
        date,
        reason,
        vet_id: vetId,
        pet_id: petId,
      },
    });

    res.status(StatusCodes.CREATED).json({
      status: 'success',
      message: 'The appointment has been created!',
    });
  },
);

export const updateAppointment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { date } = req.body;

    await db.appointment.update({
      where: {
        id: +id,
      },
      data: {
        date: new Date(date),
      },
    });

    res.status(StatusCodes.OK).json({
      status: 'success',
      message: 'The appointment has been rescheduled!',
    });
  },
);

export const deleteAppointment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    await db.appointment.update({
      where: {
        id: +id,
      },
      data: {
        status: 'cancelled',
      },
    });

    res.status(StatusCodes.OK).json({
      status: 'success',
      message: 'The appointment has been cancelled!',
    });
  },
);

export const markCompletedAppointment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    await db.appointment.update({
      where: {
        id: +id,
      },
      data: {
        status: 'completed',
      },
    });

    res.status(StatusCodes.OK).json({
      status: 'success',
      message: 'The appointment has been completed!',
    });
  },
);
