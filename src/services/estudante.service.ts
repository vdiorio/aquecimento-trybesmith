import { IEstudante } from "../interfaces";
import { criaEstudante, listarEstudantes } from "../models/estudante.model";

const criaPessoaEstudante = async (estudante: IEstudante) => {
  return criaEstudante(estudante);
}

const listStudent = async () => {
  return listarEstudantes()
}
export {
  listStudent,
  criaPessoaEstudante,
};