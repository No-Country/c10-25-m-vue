import { NextFunction, Request, Response } from "express"
import catchAsync from "./catchAsync"
import AppError from "./appError"
import { StatusCodes } from "http-status-codes"

export const isParamsIdANumber = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params 
    if (isNaN(parseInt(id.toString()))) {
      next(
        new AppError('id must be just a number', StatusCodes.BAD_REQUEST)
      )
      return
    }
    next()
  }
)