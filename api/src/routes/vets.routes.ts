import { Router } from "express";
import { createVet, deleteVet, readVets, updateVet } from "../controllers/vets.controllers";
import { createVetValidator, updateVetValidator } from "../middlewares/validations.middlewares";


const router=Router();

router.get("/",readVets);

//crearVet
router.post("/createVet",createVetValidator,createVet);

//agregarVet
router.put("/:id",updateVetValidator,updateVet);

//eliminarVet
router.delete("/:id",deleteVet);




export default router;

