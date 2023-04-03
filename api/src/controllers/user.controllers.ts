import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import { StatusCodes } from 'http-status-codes';
import { URequest } from '../interfaces/user.interfaces';
import { db } from '../database/db.server';
import { emit } from 'process';

export const findUsers = catchAsync(
  async (req: URequest, res: Response, next: NextFunction) => {
    const users = await db.user.findMany({
      where: {
        status: 'active',
      },
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        profileImageUrl: true,
      },
    });

    return res.status(StatusCodes.OK).json({
      ok: true,
      results: users.length,
      users,
    });
  },
);

export const findUser = catchAsync(
  async (req: URequest, res: Response, next: NextFunction) => {
    const { user } = req;

    return res.status(StatusCodes.OK).json({
      status: 'success',
      user,
    });
  },
);

export const updateUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { name, surname, email } = req.body;

    await db.user.update({
      where: { id: +id },
      data: {
        name: name.toLowerCase(),
        surname: surname.toLowerCase(),
        email: email.toLowerCase(),
      },
    });

    //TODO: Validar el error en el controlador global

    return res.status(StatusCodes.OK).json({
      status: 'success',
      message: 'The user has been updated!',
    });
  },
);

export const deleteUser = catchAsync(
  async (req: URequest, res: Response, next: NextFunction) => {
    const { id } = req.params;

    await db.user.update({
      where: { id: +id },
      data: {
        status: 'inactive',
      },
    });

    //TODO: Validar el error en el controlador global

    return res.status(StatusCodes.OK).json({
      status: 'success',
      message: 'The user has been deleted!',
    });
  },
);
