select * from employees;
/*Basic Select Statement*/
select first_name as First, last_name as Last from employees;
select distinct department_id from departments;
select *from employees order by (first_name) desc;
select first_name,last_name,salary,((salary*15)/100) as PF from employees;
select employee_id,first_name,last_name,salary from employees order by (salary) asc;
select sum(salary) from employees;
select max(salary)  , min(salary) from employees;
select avg(salary) from employees;
select count(employee_id) from employees;
select upper(first_name) as first_names from employees;
select substring(first_name,1,3) from employees;
select concat(first_name,' ', last_name) as full_name from employees;
select first_name, last_name ,length(concat(first_name,' ', last_name))-1 from employees;  /*'-1' de l'espace donner*/
select first_name from employees where first_name like '%[1-9]%'  /* check if there is a number in the first name*/
select * from employees limit 10;

/*Restricting And Sorting*/
select * from employees;
select first_name, last_name, salary from employees where salary between 10000 and 15000;
select first_name, last_name, hire_date from employees where extract(year from hire_date) = '1987';
select first_name from employees where first_name like '%e%'and first_name like '%c%';
select employees.last_name,jobs.job_title,employees.salary from employees inner join jobs
on employees.job_id = jobs.job_id 
where job_title not in ('Programmer' , 'Shipping Clerk') and salary not in (4500 ,  10000 , 15000);
select last_name from employees where length(last_name)=6;
select last_name from employees where last_name like '__e%';
select employees.*,jobs.job_title from employees inner join jobs on employees.job_id = jobs.job_id;
select * from employees where upper(last_name) in('JONES','BLAKE','SCOTT','KING','FORD');

