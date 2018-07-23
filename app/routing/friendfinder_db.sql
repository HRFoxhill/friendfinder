DROP DATABASE IF EXISTS friendfinder_db;

CREATE DATABASE friendfinder_db;


USE friendfinder_db;

CREATE TABLE quiz (
  id INTEGER NOT NULL AUTO_INCREMENT,
  `question` VARCHAR (30) NOT NULL,
  `answer` INT (10) NOT NULL,
  
  PRIMARY KEY (id)
);


SELECT * FROM quiz;