import { NextFunction, Request, Response } from 'express';
import ApiError from './apiError';

const errorMiddleware = (err: ApiError, _req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  
  const { status, message } = err;
  return res.status(status).json({ message });
};

export default errorMiddleware;
