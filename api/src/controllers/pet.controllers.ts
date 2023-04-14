import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import { db } from "../database/db.server";
import { CreatePetRequest, PetRequest } from "../interfaces/pets.interfaces";
import AppError from "../utils/appError";
import { StatusCodes } from "http-status-codes";
import storage from "../utils/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { capFirst } from '../utils/capitalizateFirst'


/* getAllPets, only usable as an administator */

export const getAllPets = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
  const pets =await  db.pet.findMany({
    where:{
      status: true
    },
    select:{
      id: true,
      name: true,
      petImage: true,
      user_id: true,
      animal_id: true
    }
  })

  const petsPromises = pets.map(async(pet) => {
    const imgRef = ref(storage, pet.petImage!)
    const url = await getDownloadURL(imgRef);
    pet.petImage = url
    return pet
  })

  const petsResolve = await Promise.all(petsPromises)

  return res.status(StatusCodes.OK).json({
  status : 'success',
  result: pets.length,
  pets: petsResolve
  })
 }
)

/* getUserPets is the reader for ONLY its users pets.  */

export const getPetById = catchAsync(
  async (req: PetRequest, res: Response, next: NextFunction) => {
    const { pet } = req

    const imgRef = ref(storage, pet.petImage)
    const url = await getDownloadURL(imgRef)

    pet.petImage = url;

    return res.status(StatusCodes.OK).json({
      status: 'success',
      pet
    })

  }
)

export const getUserPetsByUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    const user = await db.user.findUnique({
      where: {
        id: +id
      },
      include: {
        Pet: {
          select: {
            id: true,
            name: true,
            petImage: true,
            animal: {
              select: {
                id: true,
                name: true
              }
            },
            status: true
          }
        }
      }
    })

    const petsPromise = user!.Pet.map(async (pet) => {
      const imgRef = ref(storage, pet.petImage!);
      const url = await getDownloadURL(imgRef)
      pet.petImage = url;

      return pet
    })

    const petsResolved = await Promise.all(petsPromise)

    res.json({
      status: 'success',
      results: user!.Pet.length,
      pets: petsResolved
    })
  }
)
/* getUserPetsByPetsArray, it gets de array of pets passed by body properties, "pets" with the id,
the respons sends an array of pets.*/

export const getUserPetsByPetsArray = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { pets } = req.body

    const petsPromises = pets.map(async (petId: number) => {
      const pet = await db.pet.findUnique({
        where: {
          id: +petId
        },
        include: {
          animal: true
        }
      })
      const imgRef = ref(storage, pet?.petImage!)
      const url = await getDownloadURL(imgRef)

      pet!.petImage = url
      return pet
    })

    const myPets = await Promise.all(petsPromises)

    return res.json({
      status: 'success',
      pets: myPets
    })
  }
)

/* createNewPet verify the existence of user and animal to create a new pet.
If any of those does not exists, it throws an AppError */

export const createNewPet = catchAsync(
  async (req: CreatePetRequest, res: Response, next: NextFunction) => {
    const { name, user_id, animal_id, petImage } = req.body

    const imgRef = ref(
      storage,
      `animal/${Date.now()}-]${req.file?.originalname}`
    )
    const imgUploaded = await uploadBytes(imgRef, req.file?.buffer!)

    /* User Existence verification */
    const user = await db.user.findUnique({
      where: {
        id: +user_id
      }
    })
    if (!user) {
      return next(
        new AppError(`User with id: ${user_id}, not found`, StatusCodes.NOT_FOUND),
      );
    }

    /* Animal existence verification */
    const animal = await db.animal.findUnique({
      where: {
        id: +animal_id
      }
    })
    if (!animal) {
      return next(
        new AppError(`animal with id: ${animal_id}, not found`, StatusCodes.NOT_FOUND),
      );
    }

    const pet = await db.pet.create({
      data: {
        name: capFirst(name),
        petImage: imgUploaded.metadata.fullPath,
        animal_id: +animal_id,
        user_id: +user_id
      }
    })

    return res.status(200).json({
      status: 'success',
      pet: pet
    })
  }
)

/* updateMyPet is a the controller for a general update. It recives by body the pet and replace 
those values updating it. It checks the pet existence and updates it  */
export const updateMyPet = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, status } = req.body
    const { id } = req.params

    const imgRef = ref(
      storage,
      `animal/${Date.now()}-]${req.file?.originalname}`
    )
    const imgUploaded = await uploadBytes(imgRef, req.file?.buffer!)

    const pet = await db.pet.update({
      where: {
        id: +id
      },
      data: {
        name,
        status,
        petImage: imgUploaded.metadata.fullPath
      }
    })
    return res.status(200).json({
      status: 'success',
      pet: pet
    })

  }
)

/* updatePetStatus is a the controller for a status update. It recives by body 
status and replace that value updating it.   */

export const updatePetStatus = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { status } = req.body
    const { id } = req.params

    const pet = await db.pet.update({
      where: {
        id: +id
      },
      data: {
        status
      }
    })
    return res.status(200).json({
      status: 'success',
      pet: pet
    })

  }
)

/* updatePetImage is a the controller for a image update. It recives by body the image as 
"petImage" replace that value updating it.  */

export const updatePetImage = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    const imgRef = ref(
      storage,
      `animal/${Date.now()}-]${req.file?.originalname}`
    )
    const imgUploaded = await uploadBytes(imgRef, req.file?.buffer!)


    const pet = await db.pet.update({
      where: {
        id: +id
      },
      data: {
        petImage: imgUploaded.metadata.fullPath
      }
    })
    return res.status(200).json({
      status: 'success',
      pet: pet
    })

  }
)

/* updatePetName is a the controller for a name update. It recives by body the pet's new name
 and replace that value updating it. */

export const updatePetName = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body
    const { id } = req.params

    const pet = await db.pet.update({
      where: {
        id: +id
      },
      data: {
        name
      }
    })
    return res.status(200).json({
      status: 'success',
      pet: pet
    })

  }
)

/* deletePet, is the controller for pet deletion, in case of whatever happends.
it directly deletes it existance for complete. */

export const deletePet = catchAsync(
  async (req: PetRequest, res: Response, next: NextFunction) => {
    const { id } = req.params

    const petDelete = await db.pet.delete({
      where: {
        id: +id
      }
    })

    return res.status(StatusCodes.OK).json({
      status: 'success',
      petDelete
    })
  }
)
