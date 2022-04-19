CREATE TABLE consumer(
   consumer_id INTEGER NOT NULL,
   username VARCHAR(10),
   consumer_password VARCHAR(20),
   wallet DOUBLE PRECISION NOT NULL,
   PRIMARY KEY (consumer_id)
);
 
CREATE TABLE genre(
   genre_id INTEGER NOT NULL,
   genre_name VARCHAR(12),
   PRIMARY KEY (genre_id)
);
CREATE TABLE development_studio (
   studio_id INTEGER NOT NULL,
   studio_name VARCHAR(30),
   PRIMARY KEY (studio_id)
);
CREATE TABLE sale(
   sale_id INTEGER NOT NULL,
   percent_off INTEGER NOT NULL,
   PRIMARY KEY (sale_id)
);
 
CREATE TABLE game (
   game_id INTEGER NOT NULL,
   title VARCHAR(30),
   rating DOUBLE PRECISION,
   base_price DOUBLE PRECISION,
   release_date VARCHAR(10),
   PRIMARY KEY (game_id)
);
 
CREATE TABLE pc_game(
   game_id INTEGER NOT NULL,
   operating_system VARCHAR(10),
   PRIMARY KEY (game_id),
   FOREIGN KEY (game_id) REFERENCES game(game_id)
);
 
CREATE TABLE vr_game(
   game_id INTEGER NOT NULL,
   play_area VARCHAR(10),
   headset_type VARCHAR(20),
   controller_type VARCHAR(30),
   PRIMARY KEY (game_id),
   FOREIGN KEY (game_id) REFERENCES game(game_id)
);
 
CREATE TABLE owns(
   consumer_id INTEGER NOT NULL,
   game_id INTEGER NOT NULL,
   PRIMARY KEY(consumer_id, game_id),
   FOREIGN KEY(consumer_id) REFERENCES consumer(consumer_id) ON DELETE CASCADE,
   FOREIGN KEY(game_id) REFERENCES game(game_id) ON DELETE CASCADE
);
 
CREATE TABLE type_of(
   game_id INTEGER NOT NULL,
   genre_id INTEGER NOT NULL,
   PRIMARY KEY(game_id, genre_id),
   FOREIGN KEY(game_id) REFERENCES game(game_id) ON DELETE CASCADE,
   FOREIGN KEY(genre_id) REFERENCES genre(genre_id) ON DELETE CASCADE
);
 
CREATE TABLE created(
   game_id INTEGER NOT NULL,
   studio_id INTEGER NOT NULL,
   PRIMARY KEY(game_id),
   FOREIGN KEY(game_id) REFERENCES game(game_id) ON DELETE CASCADE,
   FOREIGN KEY(studio_id) REFERENCES Development_Studio(studio_id) ON DELETE CASCADE
);
 
CREATE TABLE participates_in(
   sale_id INTEGER NOT NULL,
   game_id INTEGER NOT NULL,
   PRIMARY KEY(sale_id, game_id),
   FOREIGN KEY(sale_id) REFERENCES sale(sale_id) ON DELETE CASCADE,
   FOREIGN KEY(game_id) REFERENCES game(game_id) ON DELETE CASCADE
);

-- now adding data
-- Game entity
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(0, 'Assassin’s Creed', '01/01/2000', 30.0, 9.0);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(1, 'Dark Souls', '01/01/2001', 30.0, 9.5);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(2, 'Tomb Raider', '02/02/2002', 60.0, 8.0);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(3, 'LEGO Star Wars', '03/03/2003', 30.0, 10.0);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(4, 'Uncharted', '04/04/2004', 60.0, 9.5);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(5, 'Sonic Mania', '05/05/2005', 20.0, 9.0);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(6, 'Bloodborne', '06/06/2006', 60.0, 10.0);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(7, 'Call of Duty', '07/07/2007', 60.0, 9.0);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(8, 'Battlefield', '08/08/2008', 15.0, 6.4);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(9, 'Batman: Arkham City', '09/09/2009', 45.0, 9.3);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(10, 'Pokemon', '10/10/2010', 20.0, 10.0);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(11, 'Super Smash Bros.', '11/11/2011', 60.0, 10.0);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(12, 'Fire Emblem', '12/12/2012', 30.0, 8.5);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(13, 'CS:GO', '01/13/2013', 0.0, 7.0);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(14, 'The Legend of Zelda', '02/14/2014', 60.0, 10.0);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(15, 'VRChat', '03/15/2015', 30.0, 7.8);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(16, 'Valorant', '06/02/2020', 0.0, 8.0);
 
-- PC Game Entity
INSERT INTO pc_game(game_id, operating_system)
VALUES(13, 'Windows');
 
INSERT INTO pc_game(game_id, operating_system)
VALUES(5, 'Mac');

-- VR Game Entity
INSERT INTO vr_game(game_id, play_area, headset_type, controller_type)
VALUES(15, 10, 'HTC Vive', 'Tracked Motion Controllers');

-- Sale Entity
INSERT INTO sale(sale_id, percent_off)
VALUES(0, 20.0);
 
INSERT INTO sale(sale_id, percent_off)
VALUES(1, 40.0);
 
INSERT INTO sale(sale_id, percent_off)
VALUES(2, 60.0);
 
INSERT INTO sale(sale_id, percent_off)
VALUES(3, 80.0);

-- Participates In Relationship
INSERT INTO participates_in(sale_id, game_id)
VALUES(0, 2);
 
INSERT INTO participates_in(sale_id, game_id)
VALUES(1, 4);
 
INSERT INTO participates_in(sale_id, game_id)
VALUES(2, 6);
 
INSERT INTO participates_in(sale_id, game_id)
VALUES(3, 8);
 
-- Development Studio Entity
INSERT INTO development_studio(studio_id, studio_name) VALUES(0, 'Microsoft Game Studios');
INSERT INTO development_studio(studio_id, studio_name) VALUES(1, 'Activision Blizzard');
INSERT INTO development_studio(studio_id, studio_name) VALUES(2, 'Electronic Arts');
INSERT INTO development_studio(studio_id, studio_name) VALUES(3, 'Nintendo');
INSERT INTO development_studio(studio_id, studio_name) VALUES(4, 'Valve');

-- Created Relationship
INSERT INTO created(game_id, studio_id) VALUES(0, 0);
INSERT INTO created(game_id, studio_id) VALUES(1, 2);
INSERT INTO created(game_id, studio_id) VALUES(2, 1);
INSERT INTO created(game_id, studio_id) VALUES(3, 4);
INSERT INTO created(game_id, studio_id) VALUES(4, 3);
INSERT INTO created(game_id, studio_id) VALUES(5, 0);
INSERT INTO created(game_id, studio_id) VALUES(6, 3);
INSERT INTO created(game_id, studio_id) VALUES(7, 2);
INSERT INTO created(game_id, studio_id) VALUES(8, 1);
INSERT INTO created(game_id, studio_id) VALUES(9, 4);
INSERT INTO created(game_id, studio_id) VALUES(10, 0);
INSERT INTO created(game_id, studio_id) VALUES(11, 4);
INSERT INTO created(game_id, studio_id) VALUES(12, 3);
INSERT INTO created(game_id, studio_id) VALUES(13, 1);
INSERT INTO created(game_id, studio_id) VALUES(14, 2);
INSERT INTO created(game_id, studio_id) VALUES(15, 2);
INSERT INTO created(game_id, studio_id) VALUES(16, 0);

-- Genre Entry
INSERT INTO genre(genre_id, genre_name) VALUES(0, 'RPG');
INSERT INTO genre(genre_id, genre_name) VALUES(1, 'Action');
INSERT INTO genre(genre_id, genre_name) VALUES(2, 'Adventure');
INSERT INTO genre(genre_id, genre_name) VALUES(3, 'Platformer');
INSERT INTO genre(genre_id, genre_name) VALUES(4, 'FPS');

-- Type Of Relationship
INSERT INTO type_of(game_id, genre_id) VALUES(0, 1);
INSERT INTO type_of(game_id, genre_id) VALUES(1, 2);
INSERT INTO type_of(game_id, genre_id) VALUES(2, 4);
INSERT INTO type_of(game_id, genre_id) VALUES(3, 0);
INSERT INTO type_of(game_id, genre_id) VALUES(4, 3);
INSERT INTO type_of(game_id, genre_id) VALUES(5, 0);
INSERT INTO type_of(game_id, genre_id) VALUES(6, 3);
INSERT INTO type_of(game_id, genre_id) VALUES(7, 2);
INSERT INTO type_of(game_id, genre_id) VALUES(8, 4);
INSERT INTO type_of(game_id, genre_id) VALUES(9, 3);
INSERT INTO type_of(game_id, genre_id) VALUES(10, 1);
INSERT INTO type_of(game_id, genre_id) VALUES(11, 4);
INSERT INTO type_of(game_id, genre_id) VALUES(12, 2);
INSERT INTO type_of(game_id, genre_id) VALUES(13, 3);
INSERT INTO type_of(game_id, genre_id) VALUES(14, 0);
INSERT INTO type_of(game_id, genre_id) VALUES(15, 0);
INSERT INTO type_of(game_id, genre_id) VALUES(16, 4);

-- Consumer Entity
INSERT INTO consumer(consumer_id, username, consumer_password, wallet) VALUES(0, 'Thomas', 'securePassword384', 18.00);
INSERT INTO consumer(consumer_id, username, consumer_password, wallet) VALUES(1, 'Franklin', 'p@ssw0rd!!', 4.23);
INSERT INTO consumer(consumer_id, username, consumer_password, wallet) VALUES(2, 'Harold', 'us3rn@m3!', 10.18);
 
-- Owns Relationship
INSERT INTO owns(consumer_id, game_id) VALUES(0, 4);
INSERT INTO owns(consumer_id, game_id) VALUES(0, 2);
INSERT INTO owns(consumer_id, game_id) VALUES(0, 8);
INSERT INTO owns(consumer_id, game_id) VALUES(1, 12);
INSERT INTO owns(consumer_id, game_id) VALUES(1, 3);
INSERT INTO owns(consumer_id, game_id) VALUES(1, 7);
INSERT INTO owns(consumer_id, game_id) VALUES(2, 6);
INSERT INTO owns(consumer_id, game_id) VALUES(2, 5);
 
-- Queries data

--Get Actual Price Of Game (sales Included)

-- Get the base price of a game: 

SELECT base_price FROM game WHERE game_id = [game_id];

-- Get the highest sale amount off: 

SELECT percent_off FROM sale, participates_in WHERE sale.sale_id = participates_in.sale_id AND participates_in.game_id = [game_id] ORDER BY percent_off LIMIT 1;

-- Get All Games of a Genre, Sorted By Rating

SELECT title FROM game, type_of WHERE type_of.genre_id = [genre_id] AND type_of.game_id = game.game_id ORDER BY rating;

-- Get a Consumer’s Password and consumer_id to compare for login

SELECT consumer_id, consumer_password FROM consumer WHERE username = [username];

-- Get Creator of a Game

SELECT development_studio.studio_name FROM created, development_studio, game WHERE development_studio.studio_id = created.studio_id AND game.game_id = created.game_id AND game.game_id = [game_id];

-- Get Rating of a Game based on game_id

SELECT rating from game WHERE game_id = [game_id];

-- Get All games By A Development Studio

SELECT game.title FROM game, created, development_studio WHERE created.game_id = game.game_id AND development_studio.studio_id = created.studio_id AND development_studio.studio_id = [studio_id];

-- Get All games Owned By A Consumer

SELECT game.title FROM game, owns, consumer WHERE owns.game_id = game.game_id AND consumer.consumer_id = owns.consumer_id AND consumer.consumer_id = [consumer_id];

-- Deleting a Game Based On ID

DELETE FROM game WHERE game_id = [game_id];

-- Updating a Game’s Rating

UPDATE game SET rating = [new_rating] WHERE game_id = [game_id];

-- Updating a Development Studio’s Name
UPDATE development_studio SET studio_name = [new_name] WHERE studio_id = [studio_id];


-- Demo Queries

-- Search for a user that doesn't exist
SELECT * FROM consumer where consumer_id = 3;
 
-- We Create the Consumer
INSERT INTO consumer(consumer_id, username, consumer_password, wallet) VALUES(3, 'Robert', 'pleaseDontHack', 180.00);
 
-- We create new games
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(160, 'Valorant: Please Help', '06/02/2023', 0.0, 5.0);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(139, 'Assassin’s Creed Valhalla', '04/04/2019', 0.0, 8.5);
 
INSERT INTO game (game_id, title, release_date, base_price, rating)
VALUES(198, 'Genshin Impact Ultimate', '03/15/2022', 0.0, 7.0);
 
-- User gets these games
INSERT INTO owns(consumer_id, game_id) VALUES(3, 160);
INSERT INTO owns(consumer_id, game_id) VALUES(3, 139);
INSERT INTO owns(consumer_id, game_id) VALUES(3, 198);
 
-- Updating the consumer’s password
UPDATE consumer SET consumer_password= 'igotHacked' WHERE consumer_id = 3;
UPDATE game SET rating = 7.5 WHERE game_id = 160;

-- Checking consumer's password again after it was updated
SELECT consumer_id, consumer_password FROM consumer WHERE username = 'Robert';

-- Getting all the games the consumer owns
SELECT game.title, game.rating FROM owns, game WHERE owns.consumer_id = [consumer_id] AND owns.game_id = game.game_id;

-- Delete some of the games
DELETE FROM game WHERE game_id = 160;
DELETE FROM game WHERE game_id = 139;
 
-- Getting all the games the consumer owns
SELECT game.title, game.rating FROM owns, game WHERE owns.consumer_id = 3 AND owns.game_id = game.game_id;
