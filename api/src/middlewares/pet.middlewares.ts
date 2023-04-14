import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { validateFields } from "./validations.middlewares";
import { db } from "../database/db.server";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/appError";
import { StatusCodes } from "http-status-codes";
import { PetRequest } from "../interfaces/pets.interfaces";

export const createPetValidator = [
  body('name').not().isEmpty().withMessage('the name is required'),
  body('user_id')
    .notEmpty()
    .withMessage('The user_id is required')
    .isNumeric()
    .withMessage('user_id must be a number'),
  body('animal_id')
    .notEmpty()
    .withMessage('The animal_id is required')
    .isNumeric()
    .withMessage('animal_id must be a number'),
  validateFields,
];

/* verifyPetExistenceById it verifies the existence of the specified pet
searching it throw the DB, and returns an error if it doesnt exists.*/

export const validPetExistenceById = catchAsync(
  async (req: PetRequest, res: Response, next: NextFunction) => {
    const { id } = req.params

    const pet = await db.pet.findUnique({
      where: {
        id: +id
      },
      select: {
        id: true,
        name: true,
        petImage: true,
        animal: {
          select: {
            id:true,
            name: true,
          }
        },
        user: {
          select: {
            id: true,
            name: true,
            surname: true
          }
        }
      }
    })

    if (!pet) {
      return next(
        new AppError(`Pet with id:${id} was not found`, StatusCodes.NOT_FOUND)
      )
    }

    req.pet = pet
    next()
  }
)