-- DROP DATABASE --
DROP DATABASE IF EXISTS nerdsculinary_db;

-- CREATE DATABASE --
CREATE DATABASE nerdsculinary_db;

\c nerdsculinary_db;

-- Create users table --
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

-- Create recipe table --
CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    recipe_title VARCHAR(30) NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create tag table --
CREATE TABLE tag (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    user_id INTEGER NOT NULL,
    recipe_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);