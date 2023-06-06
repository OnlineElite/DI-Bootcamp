CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
)
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);
select * from actors
/*------------Week10/Day2/DailyChallenge-------------*/
select count(first_name) from actors;
INSERT INTO actors (first_name, last_name, age, number_oscars) 
VALUES('Jamal','','15/10/1997',3 );
INSERT INTO actors (first_name, last_name, age, number_oscars) 
VALUES('Jamal','Boujbari','',3 );
/* We will  have an erreur because we didn't fill one field with a constrainte NOT NULL*/