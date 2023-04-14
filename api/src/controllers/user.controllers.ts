import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import { StatusCodes } from 'http-status-codes';
import { URequest } from '../interfaces/user.interfaces';
import { db } from '../database/db.server';
import { getDownloadURL, ref } from '@firebase/storage';
import storage from '../utils/firebase';

/* This code exports a function named `findUsers` that uses the `catchAsync` middleware to handle any
errors that may occur during the execution of the function. The function retrieves a list of active
users from the database and returns it as a JSON response with a status code of 200 (OK). The
response includes the number of results and an array of user objects that contain their id, name,
surname, email, and profile image URL. */
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

    const usersPromises = users.map(async (user) => {
      const imgRef = ref(storage, user.profileImageUrl!);
      const url = await getDownloadURL(imgRef);
      user.profileImageUrl = url;

      return user;
    });

    const userResolved = await Promise.all(usersPromises);

    return res.status(StatusCodes.OK).json({
      ok: true,
      results: users.length,
      users: userResolved,
    });
  },
);

export const findUser = catchAsync(
  async (req: URequest, res: Response, next: NextFunction) => {
    const { user } = req;

    const imgRef = ref(storage, user.profileImageUrl);
    const url = await getDownloadURL(imgRef);

    user.profileImageUrl = url;

    return res.status(StatusCodes.OK).json({
      status: 'success',
      user,
    });
  },
);

/* This code exports a function named `updateUser` that uses the `catchAsync` middleware to handle any
errors that may occur during the execution of the function. The function updates a user's name,
surname, and email in the database based on the user's id, which is obtained from the request
parameters. The updated values are obtained from the request body. The function returns a JSON
response with a status code of 200 (OK) and a success message. */
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

/* This code exports a function named `deleteUser` that uses the `catchAsync` middleware to handle any
errors that may occur during the execution of the function. The function updates a user's status to
"inactive" in the database based on the user's id, which is obtained from the request parameters.
The function returns a JSON response with a status code of 200 (OK) and a success message. */
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
