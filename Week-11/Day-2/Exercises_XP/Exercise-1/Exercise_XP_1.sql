select * from language;
select film.title, film.description,language.name from film inner join language 
on film.language_id = language.language_id;

select film.title, film.description,language.name from film left outer join language 
on film.language_id = language.language_id;

select film.title, film.description,language.name from film right outer join language 
on film.language_id = language.language_id;

create table new_film (
	id serial primary key,
	name varchar (300) not null
)

insert into new_film (name ) values ('The Walking Dad'), ('The Panisher'), ('Scorpion'), ('Breaking bad');

create table customer_review(
	review_id serial primary key not null,
	film_id int REFERENCES new_film (id) ON DELETE CASCADE ,
	language_id int REFERENCES language (language_id) ON DELETE CASCADE,
	title varchar (500),
	score int,
	review_text text,
	last_update date
)

insert into customer_review (film_id, language_id,title,score,review_text,last_update) 
values (1,1 ,'Great', 9,'My best film','12/08/2022'),(2,2,'wonderfull', 7, 'It is a wonderfull movie','15/02/2023');

select * from customer_review
select * from new_film

delete from new_film where id = 2;

--Answer to Q6: When we delete one record from the 'new_film' table, 
--the corresponding sub-record in the 'customer_review' table is also deleted.

