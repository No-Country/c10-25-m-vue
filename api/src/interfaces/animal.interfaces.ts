import { Response, Request } from "express";

export interface CreateAnimalRequest extends Request {
  body: {
    name: string
    image: string
  }
}

export interface AnimalRequest extends Request {
    animal?: any
}