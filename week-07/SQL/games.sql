CREATE TABLE IF NOT EXISTS games (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS review (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  review TEXT NOT NULL,
  games_id INTEGER REFERENCES games(id)
);

INSERT INTO games(name) VALUES('Borderlands 4');
INSERT INTO games(name) VALUES('Valheim');
INSERT INTO games(name) VALUES('FINAL FANTASY VII EVER CRISIS');
INSERT INTO games(name) VALUES('Dying Light The Beast');
INSERT INTO games(name) VALUES('Little Nightmares II');

INSERT INTO review(name, review, games_id) VALUES('Sam', 'So far im finding this game amazing', 1);
INSERT INTO review(name, review, games_id) VALUES('Billy', 'Playing this game brings back so many childhood memories', 3);
INSERT INTO review(name, review, games_id) VALUES('Blaine', 'I get lost playing this game one minute it 8PM the next its 2 min the morning', 2);
INSERT INTO review(name, review, games_id) VALUES('ben', 'Never played it but people tell me its good', 5);
INSERT INTO review(name, review, games_id) VALUES('Jack', 'I really enjoyed the first two i hope this is as good as them', 2);
INSERT INTO review(name, review, games_id) VALUES('Sam', 'So far im finding this game amazing', 1);
INSERT INTO review(name, review, games_id) VALUES('Sam', 'I only play this game because of my mate', 3);
INSERT INTO review(name, review, games_id) VALUES('Sam', 'I got this game for free so i will give it a go', 4);

SELECT review.name, review.review, games.name AS games
FROM review
JOIN games ON review.games_id = games.id;

SELECT review.name, review.review, games.name AS games
FROM review
JOIN games ON review.games_id = games.id
WHERE games.id = 1;

SELECT review.name, review.review, games.name AS games
FROM review
JOIN games ON review.games_id = games.id
WHERE games.name = 'Valheim';

SELECT review.id, review.name, review.review, games.name AS game
FROM review
JOIN games ON review.games_id = games.id
WHERE review.name = 'Sam';