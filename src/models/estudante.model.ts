import { ResultSetHeader } from "mysql2";
import { IEstudante } from "../interfaces";
import connection from "./connection"

const criaEstudante = async (estudante: IEstudante) => {
  const { nome, tribo, detesta } = estudante;
  const [result] = await connection.execute<ResultSetHeader>(
    `INSERT INTO
    Monitoria.Estudantes(nome, tribo, detesta)
  VALUES
    (?, ?, ?);`,
    [nome, tribo, detesta]
  );
  return result;
}

const listarEstudantes = async () => {
  const [estudantes] = await connection.execute(
    'SELECT * FROM Monitoria.Estudantes'
  );
  return estudantes;
}

export {
  criaEstudante,
  listarEstudantes
};