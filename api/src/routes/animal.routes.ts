import { Router } from "express";
import { createAnimal, deleteAnimals, readAnimal, readAnimals, updateAnimals } from "../controllers/animal.controllers";
import { createAnimalValidator, validIfExistAnimalByName, validIfExistAnimalById, updateAnimalValidator } from "../middlewares/animal.middlewares";
import upload from "../utils/multer";
import { isParamsIdANumber } from "../utils/isParamsIdANumber";

const router = Router()

router
  .route('/')
  .get(readAnimals)
  .post(
    upload.single('image'),
    createAnimalValidator,
    validIfExistAnimalByName,
    createAnimal
  )

router
  .route('/:id')
  .get(
    isParamsIdANumber,
    validIfExistAnimalById,
    readAnimal
  )
  .put(
    upload.single('image'),
    updateAnimalValidator,
    isParamsIdANumber,
    validIfExistAnimalById,
    updateAnimals
    )
  .delete(
    validIfExistAnimalById,
    isParamsIdANumber,
    deleteAnimals)
export default router