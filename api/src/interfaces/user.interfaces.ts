import { AppointmentStatus } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

export interface UserRespPrisma {
  user: User;
}

export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  passwordChangedAt?: null | Date;
  role: string;
  profileImageUrl: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface URequest extends Request {
  user?: any;
  sessionUser?: any;
  query:{
    status?: AppointmentStatus
  }
}

export interface ApRequest extends URequest {
  appointment?: any;
  vet?: any;
}
