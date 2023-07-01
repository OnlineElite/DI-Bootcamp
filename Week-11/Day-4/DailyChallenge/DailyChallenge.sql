create table product_orders(
	product_id serial primary key,
	name varchar(300) not null
)
-----------------------------
insert into product_orders (name) 
values ('Panache Juice'), ('Avocado Juice'),('Caffe Latte')
select * from product_orders
-----------------------------
create table items(
	item_id serial primary key,
	name varchar(300) not null,
	price int not null,
	product_id int not null,
	foreign key (product_id) references product_orders (product_id)
)
-----------------------------
insert into items (name, price,product_id)
values ('milke', 2,3), ('avocado', 5,2), ('orange', 3, 2),('apple', 3, 1),('banana', 2,1),('sugar', 1, 3)
select * from items
-----------------------------
create or replace function get_Total_Price(product varchar(300)) 
returns int as $total_price$
declare total int;
begin
	
	total := (select sum(items.price) from items inner join product_orders
			  on product_orders.product_id = items.product_id
			  where product_orders.name = product );
	return total;
end;
$total_price$ language plpgsql;

select get_Total_Price('Avocado Juice') as total_price;








