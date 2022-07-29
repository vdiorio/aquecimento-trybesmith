DROP SCHEMA IF EXISTS Monitoria;
CREATE SCHEMA IF NOT EXISTS Monitoria;

CREATE TABLE Monitoria.Estudantes (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  nome TEXT NOT NULL,
  tribo TEXT NOT NULL,
  detesta TEXT NOT NULL
);

INSERT INTO
  Monitoria.Estudantes(nome, tribo, detesta)
VALUES
  ("Vitor Diorio", "15 A", "Azeitona");
