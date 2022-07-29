import { NextFunction, Request, Response } from "express"
import Joi from "joi"
import ApiError from "./apiError";

const EstudanteFull = Joi.object({
  nome: Joi.string().min(3).required(),
  tribo: Joi.string().max(10).required(),
  detesta: Joi.string().max(30).required()
})

const validarEstudante = async (req: Request, _res: Response, next: NextFunction) => {
  const { error } = EstudanteFull.validate(req.body);
  if(error) throw new ApiError(400, error.message);
  next()
}

export default {
  validarEstudante
}
