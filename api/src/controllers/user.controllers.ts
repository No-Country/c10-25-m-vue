import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import { StatusCodes } from 'http-status-codes';

export const findUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    return res.status(StatusCodes.OK).json({
      ok: true,
    });
  },
);
