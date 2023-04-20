import { generateJWT } from './../utils/jwt';
import { NextFunction, Request, Response } from 'express';
import { ref, uploadBytes } from 'firebase/storage';
import bcrypt from 'bcrypt';
import { StatusCodes } from 'http-status-codes';

import { db } from './../database/db.server';
import catchAsync from '../utils/catchAsync';
import storage from './../utils/firebase';
import AppError from '../utils/appError';
import { URequest } from './../interfaces/user.interfaces';

/* This code exports a function called `signup` that handles the registration of a new user. It takes
in a request, response, and next function as parameters. */
export const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, surname, email, password, phone } = req.body;
    //TODO: CREAR MIDDLEWARE PARA VALIDAR EL BUFFER
    const imgRef = ref(
      storage,
      `users/${Date.now()}-${req.file?.originalname}`,
    );

    const imgUploaded = await uploadBytes(imgRef, req.file?.buffer!);

    const salt = await bcrypt.genSalt(+process.env.BC_ROUNDS! || 10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const user = await db.user.create({
      data: {
        name: name.toLowerCase(),
        surname: surname.toLowerCase(),
        email: email.toLowerCase(),
        password: encryptedPassword,
        phone,
        role: 'user',
        profileImageUrl: imgUploaded.metadata.fullPath,
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

    const token: string = await generateJWT(user.id);

    return res.status(200).json({
      status: 'success',
      message: 'The user has been registered successfully',
      token,
      user,
    });
  },
);

/* This code exports a function called `signin` that handles the authentication of a user. It takes in
a request, response, and next function as parameters. It checks if the provided email and password
match with the user's credentials in the database. If the credentials are correct, it generates a
JWT token and sends it back to the client along with the user's information. If the credentials are
incorrect, it returns an error message. */
export const signin = catchAsync(
  async (req: URequest, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const { user } = req;

    if (!(await bcrypt.compare(password, user.password))) {
      return next(
        new AppError('Incorrect email or password', StatusCodes.UNAUTHORIZED),
      );
    }

    const token = await generateJWT(user.id);

    res.status(StatusCodes.OK).json({
      status: 'success',
      message: 'You are logged in',
      token,
      user: {
        id: user.id,
        name: user.name,
        surname: user.surname,
        role: user.role,
      },
    });
  },
);

/* This code exports a function called `renewToken` that generates a new JWT token for an authenticated
user. It takes in a request, response, and next function as parameters. It first extracts the user's
ID from the request's `sessionUser` property. It then generates a new JWT token using the user's ID.
It then queries the database to find the user with the provided ID and checks if the user is active.
If the user is not found or is not active, it returns an error message. If the user is found and is
active, it sends back a success response with the new JWT token and the user's information. */
export const renewToken = catchAsync(
  async (req: URequest, res: Response, next: NextFunction) => {
    const { id } = req.sessionUser;

    const token = await generateJWT(id);

    const user = await db.user.findFirst({
      where: {
        id,
        status: 'active',
      },
    });

    if (!user) {
      return next(new AppError('User not found', StatusCodes.NOT_FOUND));
    }

    return res.status(200).json({
      status: 'success',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  },
);
