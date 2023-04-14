import { Request } from "express";
import { Animal, Appointment, Pet, User } from "@prisma/client";

export interface PetEntity {
  name: string;
  petImage?: string
  animal: Animal;
  animal_id: number;
  user: User 
  user_id: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  appointment?: Appointment[]
} 

export interface PetRequest extends Request {
  pet?: any
}

export interface CreatePetRequest extends PetRequest{
  body: any
}

export interface UpdatePetRequest extends PetRequest {
  pet?: Pet
}
