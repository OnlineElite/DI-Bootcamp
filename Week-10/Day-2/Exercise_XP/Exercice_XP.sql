/*------Week_10/Day_2/Exercise_XP--------*/
drop database if exists public;
create database public;
create table items(
	item_id serial primary key,
	item_name varchar (200) not null,
	item_price int
)
insert into items (item_name, item_price) values ('Small Desk',100),('large desk',300),('fan', 80);
create table customers (
	customer_id serial primary key,
	first_name varchar (300) not null,
	last_name varchar (300)not null
)
insert into customers (first_name, last_name) values ('Greg','Jones'),('Sandra','Jones'),('Scott', 'Scott'),
('Trevor', 'Green'),('Melanie', 'Johnson');
select * from items;
select * from items where item_price > 80;
select * from items where item_price <= 300;
select * from customers where last_name like 'Smith'; /* The outcome is an empty row*/
select * from customers where last_name like 'Jones';
select * from customers where first_name != 'Scott';







