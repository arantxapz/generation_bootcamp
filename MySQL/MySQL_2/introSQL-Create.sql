-- Crear

-- crear una base de datos
-- CREATE SCHEMA familia;
CREATE DATABASE familia;

-- seleccionar la base de datos
USE familia;

-- crear tabla de persona, es necesario poner mínimo una columna
-- no es necesario poner NOT NULL en llave primaria, se llena automáticamente con auto_increment
-- Por defecto el valor asignado es NULL
-- Debemos especificar cúal es la llave primaria
CREATE TABLE persona (
persona_id int AUTO_INCREMENT, 
nombre VARCHAR (255) NOT NULL,
nombre VARCHAR (255) NOT NULL,
edad int NOT NULL, 
estado VARCHAR (255) DEFAULT "Desconocido",
cumpleanios DATE,
PRIMARY KEY (persona_id)
);
