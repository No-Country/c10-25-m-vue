import { Router } from "express";
import { createVet, deleteVet, readVets, updateVet } from "../controllers/vets.controllers";
import { db } from "../database/db.server";

const router=Router();

router.get("/",readVets);

//crearVet
router.post("/createVet",createVet);

//agregarVet
router.put("/:id", updateVet);

//eliminarVet
router.delete("/:id",deleteVet);












export default router;

