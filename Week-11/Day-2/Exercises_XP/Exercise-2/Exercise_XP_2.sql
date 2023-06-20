select * from language
update language set  name = 'Arabic' where language_id = 4;
update language set name = 'Spanish' where language_id = 2;
update language set name = 'Russian' where language_id = 6;

select * from customer
--Q2--: The foreign key defined for the customer table is: address_id
-- Affect:Foreign keys link data in one table to the data in another table
-- to create a way of cross-referencing the two tables.

drop table customer_review;
--Q3--: This is an easy step, it doesn't need extra checkin.

select * from rental;
select * from store;
select  count(*) from rental left outer join store
on rental.rental_id = store.store_id
where rental_id > 2;--????








