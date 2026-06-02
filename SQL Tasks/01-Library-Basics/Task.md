# Task 1: Library Basics

## Objective
Learn how to use `SELECT`, `FROM`, and `WHERE` to filter data.

## The Data
We have a table called `books` with the following columns:
- `id`
- `title`
- `author`
- `year`
- `genre`

## The Challenge
Find all **Sci-Fi** books that were published **after the year 2010**.

## Instructions
1. Open `query.sql` in this folder.
2. Write your SQL query inside it.
3. Run it against the database from the `SQL Tasks` root directory:
   ```bash
   # Make sure you are in the "SQL Tasks" folder
   sqlite3 tutorial.db < 01-Library-Basics/query.sql
   ```
4. Verify your results.

## Expected Output
Your query should return the titles and authors of "Project Hail Mary" and "The Martian".
