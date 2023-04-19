//encontrar vet, sino existe tirar un error 404 con el mensaje este vet no existe
import { NextFunction, Request, Response } from "express";
import { db } from "../database/db.server";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/appError";
import { StatusCodes } from "http-status-codes";


export const validIfVetExist = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const { user_id } = req.params;
        const vet = await db.vet.findUnique({
            where: {
                id: parseInt(user_id)
            }
        })
        if (!vet) {
            return next(new AppError(`Vet with id: ${user_id}, not found`, StatusCodes.NOT_FOUND))
        }
        next();
    }
);