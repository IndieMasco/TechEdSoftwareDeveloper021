CREATE TABLE IF NOT EXISTS biscuits (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  biscuit_name VARCHAR(255),
  src TEXT,
  description TEXT,
  crunchiness INT,
  dunkable INT,
  overall_quality INT
);

INSERT INTO biscuits (biscuit_name, src, description, crunchiness, dunkable, overall_quality) 
VALUES ('Bourbon', 'https://images.unsplash.com/photo-1603194556500-bdd4c947a952?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 6, 8, 7),
('Custard Cream', 'https://avatars.githubusercontent.com/u/144026692?v=4', 'Pretty sweet', 5, 6, 5),
('Hobnob', 'https://upload.wikimedia.org/wikipedia/commons/9/95/Hobnobs.jpg', 'Mouth-watering piece of heaven', 4, 10, 9),
('Ginger Nuts', 'https://images.unsplash.com/photo-1557089706-68d02dbda277?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 4, 9, 9 ),
('Jammie Dodgers', 'https://media.istockphoto.com/id/1403031213/photo/biscuits-on-a-plate.jpg?s=2048x2048&w=is&k=20&c=OfgfrYa9_S3vUJX0oV1zDQayRs_ljsBeWOQjgUj0Q0g=', 'Delicious biscuit with a jam center', 4, 10, 7);

SELECT biscuit_name, src, description, crunchiness, dunkable, overall_quality FROM biscuits;

SELECT biscuit_name AS "Biscuit Name", src AS "Image Link", description AS "Biscuit Description", crunchiness AS "Crunchiness", dunkable AS "Dunkable", overall_quality AS "Overall Quality" FROM biscuits;

SELECT biscuit_name AS "Biscuit Name", crunchiness AS "Crunchiness", dunkable AS "Dunkable", overall_quality AS "Overall Quality" FROM biscuits;

UPDATE biscuits SET description = 'just an average biscuit' WHERE id = 4;
SELECT id, biscuit_name, description FROM biscuits WHERE id = 4;