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


INSERT INTO app_user (username, email, password) VALUES ('tahmid', 'tahmid@tahmid.com', 'password');
INSERT INTO app_user (username, email, password) VALUES ('new_user', 'newuser@gmail.com', 'hello123');  


INSERT INTO app_price (product_id, size, stripe_price_id, unit_amount, currency) VALUES (2, '3ml', 'price_1PaLOM00JqWikrEqPjbMVxQC', 600, 'gbp'); 
INSERT INTO app_price (product_id, size, stripe_price_id, unit_amount, currency) VALUES (2, '6ml', 'price_1PaLOj00JqWikrEqC3668voq', 1000, 'gbp'); 
INSERT INTO app_price (product_id, size, stripe_price_id, unit_amount, currency) VALUES (2, '12ml', 'price_1PaLPD00JqWikrEqdpSCikKH', 1800, 'gbp'); 
INSERT INTO app_price (product_id, size, stripe_price_id, unit_amount, currency) VALUES (2, '24ml', 'price_1PaLPn00JqWikrEqgDx8PyCm', 3500, 'gbp'); 

INSERT INTO app_price (product_id, size, stripe_price_id, unit_amount, currency) VALUES (3, '3ml', 'price_1PaLMP00JqWikrEq4SJ1f1be', 600, 'gbp'); 
INSERT INTO app_price (product_id, size, stripe_price_id, unit_amount, currency) VALUES (3, '6ml', 'price_1PaLMb00JqWikrEqyBVPQIrE', 1000, 'gbp'); 
INSERT INTO app_price (product_id, size, stripe_price_id, unit_amount, currency) VALUES (3, '12ml', 'price_1PaLNI00JqWikrEqLj1iYPnp', 1800, 'gbp'); 
INSERT INTO app_price (product_id, size, stripe_price_id, unit_amount, currency) VALUES (3, '24ml', 'price_1PaLNn00JqWikrEqZcwirGJr', 3500, 'gbp');

INSERT INTO app_price (product_id, size, stripe_price_id, unit_amount, currency) VALUES (4, '3ml', 'price_1PaLKR00JqWikrEqVRNdvfSI', 600, 'gbp'); 
INSERT INTO app_price (product_id, size, stripe_price_id, unit_amount, currency) VALUES (4, '6ml', 'price_1PaLKt00JqWikrEqChDfNMqM', 1000, 'gbp'); 
INSERT INTO app_price (product_id, size, stripe_price_id, unit_amount, currency) VALUES (4, '12ml', 'price_1PaLLD00JqWikrEqD3oTFF6b', 1800, 'gbp'); 
INSERT INTO app_price (product_id, size, stripe_price_id, unit_amount, currency) VALUES (4, '24ml', 'price_1PaLLa00JqWikrEqOCVAT0uB', 3500, 'gbp');
