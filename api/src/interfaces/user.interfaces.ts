import { NextFunction, Request, Response } from 'express';

export interface UserRespPrisma {
  user: User;
}

export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  passwordChangedAt?: null | Date;
  role: string;
  profileImageUrl: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

interface URequest extends Request {
  user?: any;
}
