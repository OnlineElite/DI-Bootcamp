---------------DailyChallenge---------------

--Part I
create table customer(
	customer_id serial primary key,
	first_name varchar(200) not null,
	last_name varchar(200) not null
);

create table customer_profile(
	id serial primary key,
	isLoggedIn boolean default false,
	customer_id int not null,
	foreign key (customer_id) references customer (customer_id)
)
----------------------------
insert into customer(first_name,last_name) 
values ('John', 'Doe'),('Jerome', 'Lalu'), ('Lea', 'Rive')
select * from customer
----------------------------
insert into customer_profile(isLoggedIn, customer_id)
values(true, 1),(false, 2)
select * from customer_profile
----------------------------
select customer.customer_id, customer.first_name from customer
inner join customer_profile on customer.customer_id = customer_profile.customer_id
where customer_profile.isLoggedIn = true;
----------------------------
select customer.customer_id, customer.first_name, customer_profile.isLoggedIn from customer
left join customer_profile on customer.customer_id = customer_profile.customer_id;
----------------------------
select count(*) from customer
inner join customer_profile on customer.customer_id = customer_profile.customer_id
where customer_profile.isLoggedIn  = false;

--Part II
create table Book(
	book_id serial primary key,
	title varchar(500) not null,
	author varchar(200) not null
)
----------------------------
insert into Book (title, author)
values('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird',' Harper Lee')
select * from Book
----------------------------
create table Student(
	student_id serial primary key,
	name varchar(300) not null unique,
	age int CHECK (age <= 15)
)
----------------------------
insert into Student(name,age) 
values('John', 12), ('Lera', 11), ('Patrick', 10), ('Bob', 14)
select * from Student
----------------------------
create table library(
	book_id int,
	student_id int,
	borrowed_date date,
	primary key (book_id, student_id),
	foreign key (book_id) references Book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	foreign key (student_id) references Student (student_id) ON DELETE CASCADE ON UPDATE CASCADE
);
----------------------------
insert into library(book_id, student_id, borrowed_date)
values(1,1, '2022-02-15'), (3,4, '2021-03-03'), (1,2, '2021-05-23'), (2,4,'2021-08-12')
select * from library
----------------------------
select * from library
----------------------------
select student.name, book.title from library
inner join student on library.student_id = student.student_id
inner join book on library.book_id = book.book_id
----------------------------
select avg(student.age) as average_age from library
inner join student on library.student_id = student.student_id
inner join book on library.book_id = book.book_id
where book.title = 'Alice In Wonderland';
----------------------------
delete from student where student_id = 1;
select * from library

--When we delete a student from the student table
--it is automatically deleted from the library table as well










