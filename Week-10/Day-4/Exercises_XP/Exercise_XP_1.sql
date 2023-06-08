/*--Exercise 1 : Items And Customers--*/
select * from items order by (item_price) asc;
select * from items where item_price >= 80 order by (item_price) desc;
select first_name,last_name from customers order by (first_name) limit 3 ;
select last_name from customers order by(last_name) desc;
select * from customers;