import { Router } from "express";
import { createAnimals, deleteAnimals, readAnimals, updateAnimals } from "../controllers/animal.controllers";
import { createAnimalValidator } from "../middlewares/validations.middlewares";

const router = Router()

router.post('/',createAnimalValidator ,createAnimals)
router.get('/', readAnimals)
router.put('/:id', updateAnimals)
router.delete('/:id', deleteAnimals)

export default router