select * from language
update language set  name = 'Arabic' where language_id = 4;
update language set name = 'Spanish' where language_id = 2;
update language set name = 'Russian' where language_id = 6;
---------------------------
select * from customer
--Q2--: The foreign key defined for the customer table is: address_id
-- Affect:Foreign keys link data in one table to the data in another table
-- to create a way of cross-referencing the two tables.
---------------------------
drop table customer_review;
--Q3--: This is an easy step, it doesn't need extra checkin.
---------------------------
select * from rental where return_date is null
---------------------------
select film.film_id, film.title, film.replacement_cost, rental.return_date from film
inner join inventory on inventory.film_id = film.film_id
left join rental on rental.inventory_id = inventory.inventory_id
where rental.return_date is null 
order by film.replacement_cost desc
limit 30
---------------------------
select film.film_id, film.title, actor.first_name, actor.last_name from film_actor
inner join actor on actor.actor_id = film_actor.actor_id
inner join film on film.film_id = film_actor.film_id
where actor.first_name = 'Penelope' 
and actor.last_name = 'Monroe'
and film.fulltext @@ to_tsquery('english', 'sumo')
---------------------------
select film.film_id, film.title,film.length, film.rating, category.name as category from film 
inner join film_category on film.film_id = film_category.film_id
inner join category on category.category_id = film_category.category_id
where film.rating = 'R' and film.length < 60 and category.name ='Documentary'
---------------------------
select film.film_id, film.title, film.rental_rate, customer.first_name, customer.last_name, rental.return_date
from rental
inner join customer on rental.customer_id = customer.customer_id
inner join inventory on inventory.inventory_id = rental.inventory_id
inner join film on film.film_id = inventory.film_id
where rental.return_date between '2005-07-28' and '2005-08-01'
and customer.first_name = 'Matthew' and customer.last_name = 'Mahan'
and film.rental_rate >4
---------------------------
select film.film_id, film.title, film.replacement_cost, customer.first_name, customer.last_name, film.description
from customer
inner join rental on rental.customer_id = customer.customer_id
inner join inventory on inventory.inventory_id = rental.inventory_id
inner join film on film.film_id = inventory.film_id
where customer.first_name = 'Matthew' 
and customer.last_name = 'Mahan'
and film.description ilike '%boat%' 
or film.title ilike '%boat%'
order by film.replacement_cost desc limit 1
