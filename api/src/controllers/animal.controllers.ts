import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { db } from "../database/db.server";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";
import { capFirst } from "../utils/capitalizateFirst";
import { ref, uploadBytes } from "firebase/storage";
import storage from "../utils/firebase";
import { AnimalRequest } from "../interfaces/animal.interfaces";
/*TO DO:
 Separar en dos rutas los read animals. 
 Cambiar las respuestas
 Crear rutas separadas para los updates
 Crear referencia para guardado de imagenes
*/
export const readAnimals = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

    const animals = await db.animal.findMany()
    return res.json({
      status: 'success',
      result: animals.length,
      animals: animals
    })
  }
)

export const readAnimal = catchAsync(
  async (req: AnimalRequest, res: Response, next: NextFunction) => {
    const animal = req.animal
    
    return res.json({
      status: 'success',
      animal
    })
  }
)

export const createAnimal = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, image } = req.body
    const animalName: string = capFirst(name)

    const imgRef = ref(
      storage,
      `animal/${Date.now()}-${req.file?.originalname}`,
    );

    const imgUploaded = await uploadBytes(imgRef, req.file?.buffer!)

    const animal = await db.animal.create({
      data: {
        name: animalName,
        image: image ? imgUploaded.metadata.fullPath : 'https://thenounproject.com/api/private/icons/13643/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkNqkBGzMVewzcJSGNAxN6luZCpttf2fWwxUfcI-NfqD5v4k5QwxeTYRJsAiW5kzedRmEhyQpFfiUA43636U3VgpFIcA%3D%3D'
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
