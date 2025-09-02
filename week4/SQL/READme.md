# Basic SOL queries

#### Create a table
- Constraints: dtat type that we want to store in each column
- TEXT & VARCHAR(255) are the same thing but for VARCHAR(255) the number puts a limit on how many characters can ve out in
- is column: represent each entry uniquely (PRIMARY KEY)

`CREATE TABLE staff (`
`  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,`
`  name TEXT,`
`  location VARCHAR(255),`
`  age INT,`
`  role VARCHAR(255)`
`);`

#### Add new data to the table

`INSERT INTO staff (name, location, age, role)`
`VALUES ('JOE','Norwich', 78, 'TA'),`
`('Manny', 'Norwich', 50, 'Instructpr'),`
`('Tim', 'Norwich', 102, 'Course Director')`

#### Select some data from my table

- When we select specific columns, we are not creating a new table. We are filtering the current table

`SELECT * FROM staff;`

`SELECT name, location FROM staff`

- The keyword WHERE adds conditions to our SELECT

`SELECT * FROM staff WHERE name = 'Joe';`