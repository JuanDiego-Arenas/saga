CREATE DATABASE IF NOT EXISTS 'saga';

CREATE TABLE `saga`.`aprendiz` (
  `aprid` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `apellido` VARCHAR(255) NOT NULL,
  `cedula` VARCHAR(255) NOT NULL,
  `correo` VARCHAR(255) NOT NULL,
  `celular` VARCHAR(255) NULL,
  `user` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`aprid`),
  UNIQUE INDEX `cedula_UNIQUE` (`cedula` ASC) VISIBLE,
  UNIQUE INDEX `user_UNIQUE` (`user` ASC) VISIBLE);
