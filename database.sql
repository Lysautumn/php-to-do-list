CREATE DATABASE php_to_do;

CREATE TABLE to_do (
    id serial PRIMARY KEY,
    task VARCHAR(280) NOT NULL,
    completed BOOLEAN DEFAULT false
)