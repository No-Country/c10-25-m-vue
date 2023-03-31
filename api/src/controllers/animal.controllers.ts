import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { db } from "../database/db.server";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

export const readAnimals = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    if (!id) {
      const result = await db.animal.findMany()
      return res.json({
        status: 'success',
        data: result
      })
    }
    const result = await db.animal.findUnique({
      where: {
        id: id
      }
    })
    if (!result) {
      next(new AppError('Animal not found', StatusCodes.NOT_FOUND))
      return
    }
    return res.json({
      status: 'success',
      data: result
    })

  }
)

export const createAnimals = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, image } = req.body
    let animal: {name: string, image?: string}
    if (image) {
      animal = {
        name,
        image
      }
    }
    else {
      animal = {
        name
      }
    }
    
    const result = await db.animal.create({
      data: animal,
      select: {
        id: true,
        name: true,
      }
    })
  })
export const updateAnimals = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

  })
export const deleteAnimals = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

  })
