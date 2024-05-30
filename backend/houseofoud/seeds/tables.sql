-- this is the data that will be seeded into the app

DROP TABLE IF EXISTS app_review;
DROP SEQUENCE IF EXISTS review_id_seq;
DROP TABLE IF EXISTS app_user;
DROP SEQUENCE IF EXISTS users_id_seq;


CREATE SEQUENCE IF NOT EXISTS review_id_seq;
CREATE TABLE app_review (
  id SERIAL PRIMARY KEY,
  stars int,
  subject text,
  content text,
  name text
);

CREATE SEQUENCE IF NOT EXISTS users_id_seq;
CREATE TABLE app_user (
  id SERIAL PRIMARY KEY,
  username text,
  email text,
  password text
);

-- Finally, we add any records that are needed

INSERT INTO app_review (stars, subject, content, name) VALUES (5, 'wow', 'Hard to believe how good this is.', 'Tahmid C.');
INSERT INTO app_review (stars, subject, content, name) VALUES (4, 'Amazing', 'Game changer. I can''t leave my house without a bottle.', 'Ikram I.');
INSERT INTO app_review (stars, subject, content, name) VALUES (5, 'So good that I need to stay inside.', 'Dangerous fragrances. Fitnah became too much. Would not recommend if you are unmarried.', 'John B.');
INSERT INTO app_review (stars, subject, content, name) VALUES (5, 'Premium.', 'The only place where I''ll be getting fragrances from now.', 'Abu Imran K.');


INSERT INTO app_user (username, email, password) VALUES ('tahmid', 'tahmid@tahmid.com', 'mashallah10');
INSERT INTO app_user (username, email, password) VALUES ('new_user', 'newuser@gmail.com', 'hello123');  
