 CREATE TABLE games (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    rating INT,
    agerating TEXT
)

INSERT INTO games (name, rating, agerating)
VALUES ('Gun Game', 7.5, 16),
('N Game', 9, 'PG'),
('Farmer', 4, 'PG'),
('KILLER', 10, 18),
('Moster Trucks', 7, 12)

SELECT * FROM games;