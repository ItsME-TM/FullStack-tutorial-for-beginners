# Task 4: Hospital Filtering

## Objective
Practice advanced filtering with dates and multiple conditions.

## The Data
Table `patients`: `id`, `name`, `age`, `last_visit`

## The Challenge
Find all patients who are **older than 60** AND whose last visit was **before 2023**.

## Instructions
1. Open `query.sql` in this folder.
2. Write your SQL query inside it.
3. Run it against the database from the `SQL Tasks` root directory:
   ```bash
   sqlite3 tutorial.db < 04-Hospital-Filtering/query.sql
   ```
4. Verify your results.

## Expected Output
Your query should return "Old Man Joe" and "Mrs. Smith".
