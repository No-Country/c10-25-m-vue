import { NextFunction, Request, Response } from 'express';

import { db } from './../database/db.server';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';
import { StatusCodes } from 'http-status-codes';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { URequest } from '../interfaces/user.interfaces';

/* This code exports a middleware function called `protect` that checks if a user is logged in and has
a valid token. It does this by checking the `Authorization` header of the request for a bearer
token. If a token is found, it verifies the token using the `jsonwebtoken` library and retrieves the
user associated with the token from the database. If the user is found and their status is active,
the user object is added to the `sessionUser` property of the request object and the next middleware
function is called. If the user is not found or their status is not active, an error is returned
with a 401 or 403 status code. */
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

/* `protectAccountOwner` is a middleware function that checks if the user in the session is the owner
of the account being accessed. It does this by comparing the `id` of the `user` object in the
request with the `id` of the `sessionUser` object in the request. If the `id`s do not match, it
returns an error with a 401 status code. This middleware function is used to restrict access to
certain routes that can only be accessed by the owner of the account. */
export const protectAccountOwner = catchAsync(
  async (req: URequest, res: Response, next: NextFunction) => {
    const { user, sessionUser } = req;

    console.log(user.id, sessionUser.id);

    if (user.id !== sessionUser.id) {
      return next(
        new AppError('You do not own this account.', StatusCodes.UNAUTHORIZED),
      );
    }
    next();
  },
);

/**
 * The function restricts access to certain routes based on user roles.
 * @param roles - a rest parameter that allows the function to accept any number of arguments as an
 * array.
 * @returns A middleware function that checks if the role of the user in the session matches any of the
 * roles passed as arguments. If the user's role is not included in the roles array, it will return an
 * error with a 403 status code. If the user's role is included in the roles array, it will call the
 * next middleware function.
 */
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
