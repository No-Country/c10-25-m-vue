import { NextFunction, Request, Response } from 'express';

import { db } from './../database/db.server';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';
import { StatusCodes } from 'http-status-codes';
import { URequest, User } from '../interfaces/user.interfaces';

/* This code exports a middleware function called `validIfExistEmail` that checks if a user with a
specific `email` already exists in the database. If the user exists and has a status of "active", it
throws an `AppError` with a message indicating that the user already exists and a status code of
`BAD_REQUEST` (400). If the user does not exist or has a status other than "active", it calls the
`next()` function to pass control to the next middleware function. */
export const validIfExistEmail = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

/*     console.log(user); */

    if (user && user.status === 'active') {
      //TODO: cambiar status a active
      return next(
        new AppError(`already exist an user with email: ${email}`, 400),
      );
    }

    next();
  },
);

/* This code exports a middleware function called `validIfExistUserByEmail` that checks if a user with
a specific `email` exists in the database and has a status of "active". If the user exists, it adds
the user object to the `req` object and calls the `next()` function to pass control to the next
middleware function. If the user does not exist, it creates and throws an `AppError` with a message
indicating that the user was not found and a status code of `NOT_FOUND` (404). */
export const validIfExistUserByEmail = catchAsync(
  async (req: URequest, res: Response, next: NextFunction) => {
    const { email } = req.body;

    const user = await db.user.findFirst({
      where: {
        email,
        status: 'active',
      },
    });

/*     console.log(user); */

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

/* This code exports a middleware function called `validIfExistUserById` that checks if a user with a
specific `id` exists in the database and has a status of "active". If the user exists, it adds the
user object to the `req` object and calls the `next()` function to pass control to the next
middleware function. If the user does not exist, it creates and throws an `AppError` with a message
indicating that the user was not found and a status code of `NOT_FOUND` (404). */
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
        phone: true,
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
