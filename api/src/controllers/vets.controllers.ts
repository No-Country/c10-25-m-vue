import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import { StatusCodes } from "http-status-codes";
import { db } from "../database/db.server";

export const readVets = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const vets = await db.vet.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        surname: true,
                        email: true,
                        profileImageUrl: true,
                    }
                }
            }
        });
        return res.status(StatusCodes.OK).json({
            status: "success",
            vets
        })
    }
);

///Crear Vet

export const createVet = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const { user_id, speciality, phone } = req.body;
        const vet = await db.vet.create({
            data: {
                user_id, speciality, phone
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
        const { phone, speciality, user_id } = req.body;
        const vet = await db.vet.update({
            where: {
                id: Number(id)
            },
            data: {
                user_id, speciality, phone
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


//Encontrar vet por Especialidad

export const vetSpeciality = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const { speciality } = req.params;
        const vet = await db.vet.findMany({
            where: {
                speciality: speciality
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        surname: true,
                        email: true,
                        profileImageUrl: true,
                    }
                }
            }
        })
        return res.status(StatusCodes.OK).json({
            status: "success",
            vet
        })
    }
);

//Encontrar vet por ID

export const findVetById = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        const vet = await db.vet.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        surname: true,
                        email: true,
                        profileImageUrl: true,
                    }
                }
            }
        })
        return res.status(StatusCodes.OK).json({
            status: "success",
            vet
        })
    }
);



export default { readVets, createVet, updateVet, deleteVet, vetSpeciality, findVetById };



