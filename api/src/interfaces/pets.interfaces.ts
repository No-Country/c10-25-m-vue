import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";

export const getPets = catchAsync(
  async (req: Request, res: Response, next:NextFunction) => {
    if(req.query.id){
      
    }
  }
)