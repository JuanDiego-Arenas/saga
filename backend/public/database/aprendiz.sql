CREATE DATABASE IF NOT EXISTS saga;

CREATE TABLE aprendiz (
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
VALUES ('Juan Diego', 'Arenas', '12345678910', 'arenas@saga.com', '32091237', 'diego', '123');

INSERT INTO aprendices( nombre, correo, edad, direccion, ciudad, estado)
VALUES('Marcos', 'correoexample@gmail.com', 19, 'Calle 12-5', 'Garzón', 1);