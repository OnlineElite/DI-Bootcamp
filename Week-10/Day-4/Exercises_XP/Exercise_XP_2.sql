/*--Exercise 2 : Dvdrental Database--*/
select * from customer;
select concat(first_name , '  ', last_name) as full_name from customer;
select distinct create_date from customer ;
select * from customer order by(first_name) desc;
select film_id,title, description,release_year, rental_rate from film order by(rental_rate) asc;
select address, phone from address where district = 'Texas';
select * from film where film_id in (15,150);
select film_id, title, description,length, rental_rate from film where title = 'Scorpion';
select film_id, title, description,length, rental_rate from film where title like 'Sc%';
select * from film order by (rental_rate) asc limit 10;
select customer.first_name, customer.last_name, payment.amount, payment.payment_date from customer
inner join payment on customer.customer_id = payment.payment_id order by (customer.customer_id);
SELECT title, film_id FROM film WHERE film_id NOT IN (SELECT film_id FROM inventory where film.film_id = inventory.film_id);
select city.city, country.country from country inner join city on country.country_id = city.country_id
where country.country_id in (city.country_id );





