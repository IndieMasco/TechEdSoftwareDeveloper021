-- create the tables
CREATE TABLE IF NOT EXISTS authors (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT
);


CREATE TABLE IF NOT EXISTS books (
  barcode_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, --in a real case, you'd insert this value yourself
  title TEXT,
  year INT,
  price INT,
  stock INT,
  author_id INT REFERENCES authors(id)
);

CREATE TABLE IF NOT EXISTS genres (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  genre VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS book_genres (
  book_barcode_id INT REFERENCES books(barcode_id),
  genre_id INT REFERENCES genres(id),
  PRIMARY KEY (book_barcode_id, genre_id) --we make sure that the relationship between books and genres is unique
);

--insert data

INSERT INTO genres (genre) VALUES
('children'),
('fantasy'),
('dystopian'),
('thriller'),
('horror'),
('fiction'),
('non-fiction'),
('art'),
('self help');

INSERT INTO books (title, year, price, stock) VALUES
('The Hobbit', 1937, 10, 20),
('Tiny Habits' , 2019, 15, 20),
('The Lord of the Rings', 1947, 67, 20),
('The Silmarillion', 1977, 18, 20),
('Misery',  1987, 67, 20),
('The Lion, the Witch and the Wardrobe', 1950, 10, 20),
('Steal Like An Artist',  2012, 13, 20),
('1984', 1949, 56, 10);

INSERT INTO authors (name) VALUES 
('JRR Tolkien'),
('BJ Fogg' ),
('Stephen King'),
('C.S.Lewis'),
('Austin Kleon'),
('George Orwell');

INSERT INTO book_genres (book_barcode_id, genre_id) VALUES 
(1, 1),
(1, 2),
(2, 7),
(2, 9),
(3, 2),
(3, 6);

--manipulating the data

--Read all the data about books, including the book author and the book genre
SELECT books.title, books.year, books.price, books.stock, authors.name AS "author", ARRAY_AGG(genres.genre) AS "genres" FROM 
authors JOIN books ON authors.id = books.author_id
LEFT JOIN book_genres ON books.barcode_id = book_genres.book_barcode_id
LEFT JOIN genres ON book_genres.genre_id = genres.id
GROUP BY books.title, books.year, books.price, books.stock, authors.name;

-- ARRAY_AGG puts together in an array the values of a particular column, so no repeated entries appear in the results. We also use GROUP BY for those columns that would be repeated.

-- our original JOIN only showed results with matches in all tables involved --> some books were missing because they did not have a genre
-- we added two LEFT JOINs to show all the data in the books table, even if the entries do not have a genre yet

--Read all the data about books, including the book author
SELECT books.title AS "book title", books.year "publishing year", books.price, books.stock, authors.name AS "author" FROM 
books JOIN authors ON books.author_id = authors.id;