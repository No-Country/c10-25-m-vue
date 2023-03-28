import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';

export const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
      status: 'success',
      message: 'The user has been registered successfully',
    });
  },
);
