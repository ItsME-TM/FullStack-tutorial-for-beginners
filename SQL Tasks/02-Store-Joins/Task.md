# Task 2: Store Joins

## Objective
Learn how to combine data from two tables using `JOIN`.

## The Data
1. `customers` table: `id`, `name`, `email`
2. `orders` table: `id`, `customer_id`, `order_date`, `amount`

## The Challenge
List all orders including the **customer's name**, the **order date**, and the **amount**.

## Instructions
1. Open `query.sql` in this folder.
2. Write your SQL query inside it.
3. Run it against the database from the `SQL Tasks` root directory:
   ```bash
   sqlite3 tutorial.db < 02-Store-Joins/query.sql
   ```
4. Verify your results.

## Expected Output
A list showing Alice Johnson and Bob Smith's orders.
