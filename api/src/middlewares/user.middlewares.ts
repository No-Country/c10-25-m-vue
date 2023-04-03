import { NextFunction, Request, Response } from 'express';

import { db } from './../database/db.server';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';
import { StatusCodes } from 'http-status-codes';
import { URequest, User } from '../interfaces/user.interfaces';

export const validIfExistEmail = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    console.log(user);

    if (user && user.status === 'active') {
      //TODO: cambiar status a active
      return next(
        new AppError(`already exist an user with email: ${email}`, 400),
      );
    }

    next();
  },
);

export const validIfExistUserByEmail = catchAsync(
  async (req: URequest, res: Response, next: NextFunction) => {
    const { email } = req.body;

    const user = await db.user.findFirst({
      where: {
        email,
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

    if (!user) {
      return next(
        new AppError(
          `User with email: ${email}, not found`,
          StatusCodes.NOT_FOUND,
        ),
      );
    }

    req.user = user;
    next();
  },
);

export const validIfExistUserById = catchAsync(
  async (req: URequest, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const user = await db.user.findFirst({
      where: {
        id: +id,
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

    if (!user) {
      return next(
        new AppError(`User with id: ${id}, not found`, StatusCodes.NOT_FOUND),
      );
    }

    req.user = user;
    next();
  },
);
