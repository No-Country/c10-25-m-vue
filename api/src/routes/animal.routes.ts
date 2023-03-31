import { Router } from "express";
import { createAnimals, deleteAnimals, readAnimals, updateAnimals } from "../controllers/animal.controllers";

const router = Router()

router.post('/', createAnimals)
router.get('/:id', readAnimals)
router.put('/:id', updateAnimals)
router.delete('/:id', deleteAnimals)

export default router