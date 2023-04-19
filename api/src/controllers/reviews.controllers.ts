import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import { StatusCodes } from "http-status-codes";
import { db } from "../database/db.server";

export const readReviews = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const reviews = await db.review.findMany({
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
            reviews
        })
    }
);

//Crear Review

export const createReview = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const { user_id, vet_id, comment, score } = req.body;
        const review = await db.review.create({
            data: {
                user_id, vet_id, comment, score
            }
        })
        return res.status(StatusCodes.CREATED).json({
            status: "success",
            review
        })
    }
);


//Actualizar Review

export const updateReview = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        const { user_id, vet_id, comment, score } = req.body;
        const review = await db.review.update({
            where: {
                id: Number(id)
            },
            data: {
                user_id, vet_id, comment, score
            }
        });
        return res.status(StatusCodes.OK).json({
            status: "success",
            review
        })
    }
);


//Eliminar Review

export const deleteReview = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        const review = await db.vet.delete({
            where: {
                id: Number(id)
            }
        })
        return res.status(StatusCodes.OK).json({
            status: "success",
            review
        })
    }
);

export default { readReviews, createReview, updateReview, deleteReview };