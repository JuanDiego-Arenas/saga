CREATE DATABASE IF NOT EXISTS saga;

USE saga;

CREATE TABLE IF NOT EXISTS aprendiz (
  aprid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  apellido VARCHAR(255) NOT NULL,
  cedula VARCHAR(255) NOT NULL UNIQUE,
  correo VARCHAR(255) NOT NULL,
  celular VARCHAR(255) NULL,
  user VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

INSERT INTO aprendiz (nombre, apellido, cedula, correo, celular, user, password)
VALUES 
  ('Juan Diego', 'Arenas', '3984934d', 'arenas@saga.com', '32091237', 'jda', '123'),
  ('Marcos', 'Monte', '12312312', 'saga@gmail.com', '327848379', 'marquitos', '1234');
