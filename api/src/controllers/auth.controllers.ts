import { generateJWT } from './../utils/jwt';
import { NextFunction, Request, Response } from 'express';
import { ref, uploadBytes } from 'firebase/storage';
import bcrypt from 'bcrypt';

import { db } from './../database/db.server';
import catchAsync from '../utils/catchAsync';
import storage from './../utils/firebase';

export const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, surname, email, password } = req.body;

    const imgRef = ref(
      storage,
      `users/${Date.now()}-${req.file?.originalname}`,
    );
    const imgUploaded = await uploadBytes(imgRef, req.file?.buffer!);

    const salt = await bcrypt.genSalt(+process.env.BC_ROUNDS! || 10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const user = await db.user.create({
      data: {
        name,
        surname,
        email,
        password: encryptedPassword,
        role: 'user',
        profileImageUrl: imgUploaded.metadata.fullPath,
      },
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
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
