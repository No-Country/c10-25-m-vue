import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { db } from "../database/db.server";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";
import { capFirst } from "../utils/capitalizateFirst";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import storage from "../utils/firebase";
import { AnimalRequest } from "../interfaces/animal.interfaces";

export const readAnimals = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

    const animals = await db.animal.findMany()

    const animalsPromises = animals.map(async(animal) => {
      const imgRef = ref(storage, animal.image!)
      const url = await getDownloadURL(imgRef);
      animal.image = url
      return animal
    })
  
    const animalsResolve = await Promise.all(animalsPromises)
  


    return res.json({
      status: 'success',
      result: animals.length,
      animals: animalsResolve
    })
  }
)

export const readAnimal = catchAsync(
  async (req: AnimalRequest, res: Response, next: NextFunction) => {
    const animal = req.animal

    const imgRef = ref(storage, animal.image)
    const url = await getDownloadURL(imgRef)

    animal.image = url;
    
    return res.json({
      status: 'success',
      animal
    })
  }
)

export const createAnimal = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body
    const animalName: string = capFirst(name)

    const imgRef = ref(
      storage,
      `animal/${Date.now()}-${req.file?.originalname}`,
    );

    const imgUploaded = await uploadBytes(imgRef, req.file?.buffer!)

    const animal = await db.animal.create({
      data: {
        name: animalName,
        image: imgUploaded ? imgUploaded.metadata.fullPath : 'animal/1681787945282-Veterinaria_logotipo.png'
      }
    })
    return res.status(StatusCodes.CREATED).json({
      status: 'success',
      message: 'The animal has been created successfully',
      animal,

    })
  })

export const updateAnimals = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const { name, image } = req.body

    const animal = await db.animal.update({
      where: {
        id: +id
      },
      data: {
        name: capFirst(name),
        image
      },
    })
    return res.status(StatusCodes.OK).json({
      status: 'success',
      animal
    })
  })

export const deleteAnimals = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const animal = await db.animal.delete({
      where: {
        id: +id
      }
    })
    return res.json({
      status: 'success',
      animal
    })
  })
