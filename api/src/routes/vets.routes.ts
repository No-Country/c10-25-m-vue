import { Router } from "express";
import { createVet, deleteVet, findVetById, readVets, updateVet, vetSpeciality } from "../controllers/vets.controllers";
import { createVetValidator, updateVetValidator } from "../middlewares/validations.middlewares";
import { protect } from "../middlewares/auth.middlewares";


const router = Router();

router.use(protect);

router.get("/", readVets);

//speciality
router.get("/:speciality", vetSpeciality);

//ID
router.get("/:id", findVetById);

//crearVet
router.post("/createVet", createVetValidator, createVet);

//agregarVet
router.put("/:id", updateVetValidator, updateVet);

//eliminarVet
router.delete("/:id", deleteVet);

export default router;

