import { NextFunction, Request, Response } from "express";
import { IEstudante } from "../interfaces";
import { criaPessoaEstudante, listStudent } from "../services/estudante.service";

const create = async (req: Request, res: Response, next: NextFunction) => {
  const estudante = req.body as IEstudante;
  const resultado = await criaPessoaEstudante(estudante);
  return res.status(201).json(resultado);
}

const list = async (_req: Request, res: Response, next: NextFunction) => {
  const estudantes = await listStudent();
  return res.status(200).json(estudantes);
}

export {
  create,
  list,
};
