import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { db } from "../database/db.server";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

export const readAnimals = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.query
    //get all animals
    if (!id) {
      const result = await db.animal.findMany()
      return res.json({
        status: 'success',
        data: result
      })
    }
    //get one animal
    if (isNaN(parseInt(id.toString()))) {
      next(
        new AppError('id must be just a number', StatusCodes.BAD_REQUEST)
      )
      return
    }

    const result = await db.animal.findUnique({
      where: {
        id: parseInt(id.toString())
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
    const animal:string = `${name[0].toString().toUpperCase()}${name.slice(1).toLowerCase()}`

    if(await db.animal.findFirst({where:{name:animal}})){
      next(new AppError('Animal already exists',StatusCodes.BAD_REQUEST))
      return
    }
    const result = await db.animal.create({
      data: {
        name: animal,
        image: image ? image : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fbrowse%2Ficons%2Fterm%2Fanimals%2F&psig=AOvVaw28RyNfEfDt996ND-VusM0L&ust=1680611880008000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKjtgqPdjf4CFQAAAAAdAAAAABAE'
      }
    })
    return res.status(StatusCodes.CREATED).json({
      status: 'success',
      data: result
    })
  })

export const updateAnimals = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const { data } = req.body
    data.name= `${data.name[0].toString().toUpperCase()}${data.name.slice(1).toLowerCase()}`
    if (isNaN(parseInt(id))) {
      next(new AppError('id must be a number', StatusCodes.BAD_REQUEST))
      return
    }

    if(!(await db.animal.findUnique({where:{id:parseInt(id)}}))){
      next(new AppError("Animal not found",StatusCodes.NOT_FOUND))
      return
    }
    const result = await db.animal.update({
      where: {
        id: parseInt(id)
      },
      data: data,
    })
    return res.status(StatusCodes.OK).json({
      status: 'success',
      data: result
    })
  })

export const deleteAnimals = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    if (isNaN(parseInt(id))) {
      next(new AppError('id must be a number', StatusCodes.BAD_REQUEST))
      return
    }
    if(!(await db.animal.findUnique({where:{id:parseInt(id)}}))){
      next(new AppError("Animal not found",StatusCodes.NOT_FOUND))
      return
    }
    const result = await db.animal.delete({
      where: {
        id: parseInt(id)
      }
    })
    return res.json({
      status: 'success',
      data: result
    })
  })
