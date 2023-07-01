-----------------Exercises_XP-----------------
--> Subqueries
select first_name, last_name, salary from employees
where salary > (select salary from employees where last_name = 'Bell')
---------------------------
select first_name, last_name from employees 
where job_id in (select job_id from jobs where job_title like '%Manager%')
and department_id in (select department_id from departments 
where location_id in (select location_id from locations
where country_id = (select country_id from countries where country_name = 'United States of America')))
---------------------------
select first_name, last_name from employees 
where job_id in (select job_id from jobs where job_title like '%Manager%')
---------------------------
select first_name, last_name,salary from employees
where salary > (select avg(salary) from employees)
---------------------------
select first_name, last_name from employees
where salary = (select min(salary) from employees)
---------------------------
select first_name, last_name from employees 
where job_id not in (select job_id from jobs where job_title like '%Manager%')
---------------------------
select employee_id, first_name, last_name, salary from employees
where salary > (select avg(salary) from employees)
---------------------------
select salary from employees order by salary desc limit 5
---------------------------
select salary from employees order by salary asc limit 5
---------------------------
select * from employees 
where department_id not  in (select department_id from departments)

-- Joins
select departments.location_id,locations.street_address,locations.city,locations.state_province,countries.country_name
from departments 
inner join locations on locations.location_id = departments.location_id
inner join countries on countries.country_id = locations.country_id
---------------------------
select CONCAT(employees.first_name,'  ',employees.last_name) as employee_name ,employees.department_id, departments.department_name
from employees inner join departments 
on employees.department_id = departments.department_id
---------------------------
select locations.city,CONCAT(employees.first_name,'  ',employees.last_name) as employee_name,
jobs.job_title,departments.department_id,departments.department_name from employees
inner join departments on employees.department_id = departments.department_id
inner join locations on locations.location_id = departments.location_id
inner join jobs on jobs.job_id = employees.job_id
where locations.city = 'London';
---------------------------
select employees.employee_id, employees.last_name as Employee,employees.manager_id, Employees.last_name as Manager
from employees
inner join jobs on jobs.job_id = employees.job_id
---------------------------
select employees.employee_id,CONCAT(employees.first_name,'  ',employees.last_name) as employee_name ,employees.department_id, departments.department_name
from employees inner join departments 
on employees.department_id = departments.department_id
---------------------------
select employees.employee_id,jobs.job_title,CURRENT_DATE - hire_date AS total_working_days from employees
inner join jobs on jobs.job_id = employees.job_id
where employees.department_id = 9
---------------------------
select jobs.job_title,departments.department_name,CONCAT(employees.first_name,'  ',employees.last_name) as nanager_name,locations.city
from employees
inner join departments on employees.department_id = departments.department_id
inner join locations on locations.location_id = departments.location_id
inner join jobs on jobs.job_id = employees.job_id
where jobs.job_title like '%Manager%';
---------------------------
select jobs.job_title, avg(salary) as average_salary from employees
inner join jobs on jobs.job_id = employees.job_id
group by (jobs.job_title)
---------------------------
select departments.department_name,employees.first_name,employees.last_name,employees.hire_date, employees.salary
from employees
inner join departments on employees.department_id = departments.department_id
inner join jobs on jobs.job_id = employees.job_id
where jobs.job_title like '%Manager%'
and DATE_PART('year', AGE(CURRENT_DATE, employees.hire_date)) >15

--String Function
update employees set phone_number = '999'
where phone_number like '%124%'
select * from employees
---------------------------
select * from employees where length(first_name) >= 8
---------------------------
select first_name,last_name, concat(upper(SUBSTRING (first_name, 1, 1)),last_name,'@example.com') as Email 
from employees
---------------------------
SELECT employee_id,email ,LEFT(email, LENGTH(email) - 3) AS new_email
FROM employees
---------------------------
SELECT job_id, job_title,
    CASE
        WHEN job_title ~ ' ' THEN SPLIT_PART(job_title, ' ', 1)
        ELSE job_title
    END AS first_word_job_title
FROM jobs
---------------------------
select first_name, length(first_name) as F_name_length
from employees
where first_name like 'A%' or first_name like 'J%' or first_name like'M%'
order by first_name;
---------------------------
select first_name, concat(salary, ' $') as SALARY from employees





