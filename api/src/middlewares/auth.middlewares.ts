import { NextFunction, Request, Response } from 'express';

import { db } from './../database/db.server';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';

export const validIfExistEmail = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return next(
        new AppError(`already exist an user with email: ${email}`, 400),
      );
    }

    next();
  },
);
