import { NextFunction, Request, Response } from 'express';

import { db } from './../database/db.server';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';
import { StatusCodes } from 'http-status-codes';
import { body } from 'express-validator';
import { validateFields } from './validations.middlewares';
import { AnimalRequest } from '../interfaces/animal.interfaces';

// validador de existencia de animal: Buscar animal y corroborar que existe su id
export const validIfExistAnimalById = catchAsync(
  async (req: AnimalRequest, res: Response, next: NextFunction) => {
    const { id } = req.params
    const animal = await db.animal.findUnique({
      where: {
        id: +id
      }
    })
    
    if (!animal){
      return next(
        new AppError('An animal with this id does not exist', StatusCodes.NOT_FOUND)
      )
    }
    
    req.animal = animal
    next()
  }
)


// validador de existencia del nombre del animal: buscar animal por medio del nombre
export const validIfExistAnimalByName = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    const animal = await db.animal.findFirst({
      where: {
        name
      }
    })
    
    if (animal){
      return next(
        new AppError(`This species named: ${name} already exists`, StatusCodes.BAD_REQUEST)
      )
    }

    next()
  }
)

// validador de body de creación del animal
export const createAnimalValidator = [
  body('name').not().isEmpty().withMessage('Name is required'),
  validateFields
]

// validador de update con todos los datos
export const updateAnimalValidator = [
  body('name').not().isEmpty().withMessage('There must be a name'),
  validateFields
]
