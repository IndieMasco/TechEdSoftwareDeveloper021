CREATE TABLE character (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    age INT,
    gender TEXT,
    class TEXT,
    race TEXT,
    background TEXT,
    alignment TEXT,
    other TEXT
);

INSERT INTO character (name, age, gender, class, race, background, alignment, other) 
VALUES (
    'Raphael',
    76,
    'Male',
    'Beast master ranger',
    'Dragonborn',
    'Soldier',
    'Neutral',
    'My time in the temple has been spent enjoying fine food, drink, and high society, which has left me unaccustomed to rough living. Due to my sheltered upbringing, I have little practical experience interacting with people outside of my temple''s elite circles. I also have a pet snake named Sally'
);