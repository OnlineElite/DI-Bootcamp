/*--Daily Challenge : SQL Puzzle--*/

/*--The Answers--*/
--The Answer to Q1 is :0
--The Answer to Q2 is :2
--The Answer to Q3 is :0
--The Answer to Q4 is :2

/*--Queries--*/
CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES(5,'Pawan'),(6,'Sharlee'),(7,'Krish'),(NULL,'Avtaar')
SELECT * FROM FirstTab
CREATE TABLE SecondTab (id integer )
INSERT INTO SecondTab VALUES(5),(NULL)
SELECT * FROM SecondTab

/*--Check The Answers--*/
--Q1. What will be the OUTPUT of the following statement?
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
--Q2. What will be the OUTPUT of the following statement?
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
--Q3. What will be the OUTPUT of the following statement?
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
--Q4. What will be the OUTPUT of the following statement?
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
