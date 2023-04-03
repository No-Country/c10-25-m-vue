import { Response, Request } from "express";

export interface AnimalRequest extends Request {
  body: {
    id: number
  }

}