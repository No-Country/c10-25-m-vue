import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import { StatusCodes } from "http-status-codes";
import { db } from "../database/db.server";

export const readVets = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const vets = await db.vet.findMany();
        return res.status(StatusCodes.OK).json({
            status: "success",
            vets
        })
    }
);

///Crear Vet

export const createVet = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const { name, lastName, phone, email } = req.body;
        const vet = await db.vet.create({
            data: {
                name,
                lastName,
                phone,
                email
            }
        })
        return res.status(StatusCodes.CREATED).json({
            status: "success",
            vet
        })
    }
);


///Actualizar Vet

export const updateVet = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        const { name, lastName, phone, email } = req.body;
        const vet = await db.vet.update({
            where: {
                id: Number(id)
            },
            data: {
                name,
                lastName,
                phone,
                email
            }
        })
        return res.status(StatusCodes.OK).json({
            status: "success",
            vet
        })
    }
);


///Eliminar Vet

export const deleteVet = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        const vet = await db.vet.delete({
            where: {
                id: Number(id)
            }
        })
        return res.status(StatusCodes.OK).json({
            status: "success",
            vet
        })
    }
);

export default {readVets,createVet,updateVet,deleteVet};