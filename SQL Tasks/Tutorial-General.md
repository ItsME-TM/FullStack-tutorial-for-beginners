# SQL Tutorial: Getting Started

Welcome to the SQL practice tasks! We will be using **SQLite**, a lightweight, file-based database.

## 1. Prerequisites
- Ensure **Node.js** is installed.
- (Optional) Install a SQLite viewer like [DB Browser for SQLite](https://sqlitebrowser.org/) to see your data visually.

## 2. One-Time Database Setup
Navigate to the `SQL Tasks` directory and run the setup script. This will create a `tutorial.db` file and populate it with sample data.

```bash
# Navigate to the folder
cd "SQL Tasks"

# Install dependencies
npm install

# Run the setup script
node setup-db.js
```

You should see a message: `"Database 'tutorial.db' has been successfully populated!"`

## 3. How to Run Your Queries
You can run your SQL queries using the SQLite command line or by using a simple Node.js wrapper. For each task, create a `.sql` file and run it against the database.

Example using SQLite CLI:
```bash
sqlite3 tutorial.db < my_query.sql
```

---

# Basic SQL Reference

## SELECT (Choosing Data)
```sql
SELECT column1, column2 FROM table_name;
SELECT * FROM table_name; -- Select all columns
```

## WHERE (Filtering Data)
```sql
SELECT * FROM students WHERE age > 20;
SELECT * FROM books WHERE genre = 'Sci-Fi';
```

## JOIN (Combining Tables)
```sql
SELECT orders.id, customers.name 
FROM orders 
JOIN customers ON orders.customer_id = customers.id;
```

## GROUP BY (Aggregation)
```sql
SELECT department, AVG(salary) 
FROM employees 
GROUP BY department;
```
