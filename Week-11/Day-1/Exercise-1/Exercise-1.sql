create table countries(
	country_id serial primary key,
	country_name varchar(300)
)
insert into countries (country_name) values ('Morocco'),('Egypt'),('China'),('Spain')
alter table actors add column country_id  int 
alter table actors add foreign key (country_id) references countries(country_id);
update actors set country_id = actor_id;
select * from actors

select actors.first_name, actors.last_name,countries.country_name from actors inner join countries 
on actors.country_id = countries.country_id;

select actors.first_name, actors.last_name,countries.country_name from actors left outer join countries 
on actors.country_id = countries.country_id;

select actors.first_name, actors.last_name,countries.country_name from actors right outer join countries 
on actors.country_id = countries.country_id;

select actors.first_name, actors.last_name,countries.country_name from actors full outer join countries 
on actors.country_id = countries.country_id;
