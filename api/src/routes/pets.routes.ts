import { Router } from 'express'
import { isParamsIdANumber } from '../utils/isParamsIdANumber'
import { validIfExistUserById } from '../middlewares/user.middlewares'
import { createNewPet, deletePet, getAllPets, getPetById, getUserPetsByUser, updateMyPet, updatePetImage, updatePetName, updatePetStatus } from '../controllers/pet.controllers'
import upload from '../utils/multer'
import { createPetValidator, validPetExistenceById } from '../middlewares/pet.middlewares'
import { restrictTo } from '../middlewares/auth.middlewares'

const router = Router()

router
  .route('/')
  .get(
    /* restrictTo('admin', 'vet') */
    getAllPets
  )

router
  .route('/user/:id')
  .post(
    upload.single('petImage'),
    createPetValidator,
    isParamsIdANumber,
    createNewPet
  )
  .get(
    isParamsIdANumber,
    validIfExistUserById,
    getUserPetsByUser
  )

router
  .patch(
    "/image/:id",
    upload.single('petImage'),
    isParamsIdANumber,
    validPetExistenceById,
    updatePetImage
  )
  
router
  .patch(
    "/name/:id",
    isParamsIdANumber,
    validPetExistenceById,
    updatePetName
  )

router.patch(
  "/status/:id",
  isParamsIdANumber,
  validPetExistenceById,
  updatePetStatus
)

router
  .route('/:id')
  .get(
    isParamsIdANumber,
    validPetExistenceById,
    getPetById)
  .patch(
    upload.single('petImage'),
    isParamsIdANumber,
    validPetExistenceById,
    updateMyPet
  )
  .delete(
    isParamsIdANumber,
    validPetExistenceById,
    deletePet
  )



export default router