import { Request, Response } from 'express';

export type GardenioxContext = {
  req: Request;
  res: Response;
};
