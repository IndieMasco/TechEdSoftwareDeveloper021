CREATE TABLE PawsomeDaycare (
id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
fullname TEXT,
petname TEXT,
email TEXT,
review TEXT
);

INSERT INTO PawsomeDaycare (fullname, petname, email, review)
VALUES ('Sarah Thompson', 'Milo', 'milo.the.golden@gmail.com', 'Milo is a high-energy Golden Retriever, and he absolutely loves Pawsome Daycare. The staff is fantastic and he comes home happy and completely exhausted every time. The facility is always clean, and I appreciate the photo updates they send. Its clear they genuinely care about the dogs.'),
('David Chen', 'Luna and Oliver', 'luna.and.oliver@gmail.com', 'Finding a place I trust with my two cats, Luna and Oliver, was tough, but Pawsome Daycare has been amazing. The cat-specific play area is a huge plus, and theyve become so much more social since starting. The staff is very gentle and attentive. Highly recommend!'),
('Jessica Miller', 'Lucy', 'lucy.owner22@gmail.com', 'Ive been bringing my Beagle, Lucy, here for months and its usually great. However, last week she came home with a small scratch on her ear that wasnt there before. The staff didnt mention anything when I picked her up. Its a minor thing, but it makes me a little nervous. Ill give them one more chance.'),
('Mark Anderson', 'Frankie', 'frankie.doxie@gmail.com', 'The team at Pawsome Daycare is so friendly and welcoming! They know all the dogs by name and always greet my Dachshund, Frankie, with so much excitement. I love that they have different play groups to match energy levels, so I know hes getting the right kind of fun.'),
('Alex Rodriguez', 'Gimli', 'unhappy.petparent@gmail.com', 'I had a terrible experience with the staff. I left a note about my dogs dietary restrictions, and when I picked him up, they told me they had given him a treat he wasnt supposed to have. No apology, just a shrug. This kind of mistake is unacceptable.')