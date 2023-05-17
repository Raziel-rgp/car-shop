import { Request, Response, NextFunction } from 'express';

export default class VerifyErrors {
  public static verify(error: Error, _req: Request, res: Response, next: NextFunction) {
    if (error.message === 'Invalid mongo id') {
      return res.status(422).json({ message: error.message });
    }
    if (error.message === 'Car not found') {
      return res.status(404).json({ message: error.message });
    }
    next();
  }
}