import { NextFunction, Request, Response } from 'express';

import { db } from './../database/db.server';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';
import { StatusCodes } from 'http-status-codes';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { URequest } from '../interfaces/user.interfaces';

export const protect = catchAsync(
  async (req: URequest, res: Response, next: NextFunction) => {
    let token: string = '';

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (token === '') {
      return next(
        new AppError('You are not logged in! Please log in to get access', 401),
      );
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    const user = await db.user.findFirst({
      where: {
        id: decoded.id,
        status: 'active',
      },
    });

    if (!user) {
      return next(
        new AppError(
          'The owner of this token it not longer available',
          StatusCodes.UNAUTHORIZED,
        ),
      );
    }

    if (user.passwordChangedAt) {
      const changedTimeStamp: number = +(
        user.passwordChangedAt.getTime() / 1000
      );

      if (decoded.iat < changedTimeStamp) {
        return next(
          new AppError(
            'User recently changed password!, please login again.',
            401,
          ),
        );
      }
    }

    req.sessionUser = user;
    next();
  },
);

export const protectAccountOwner = catchAsync(
  async (req: URequest, res: Response, next: NextFunction) => {
    const { user, sessionUser } = req;

    if (user.id !== sessionUser.id) {
      return next(
        new AppError('You do not own this account.', StatusCodes.UNAUTHORIZED),
      );
    }
  },
);

export const restrictTo = (...roles) => {
  return (req: URequest, res: Response, next: NextFunction) => {
    if (!roles.includes(req.sessionUser.role)) {
      return next(
        new AppError(
          'You do not have permission to perfom this action.!',
          StatusCodes.FORBIDDEN,
        ),
      );
    }

    next();
  };
};
