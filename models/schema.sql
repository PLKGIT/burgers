-- Drops the burgers database if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the burgers database --
CREATE DATABASE burgers_db;
-- Use the burgers database --
USE burgers_db;
-- Create the burgers table --
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(50) NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);