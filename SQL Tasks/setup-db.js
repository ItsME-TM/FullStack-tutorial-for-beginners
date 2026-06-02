const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./tutorial.db');

db.serialize(() => {
    // 1. Library Table
    db.run(`CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        author TEXT,
        year INTEGER,
        genre TEXT
    )`);

    db.run(`INSERT INTO books (title, author, year, genre) VALUES 
        ('The Hobbit', 'J.R.R. Tolkien', 1937, 'Fantasy'),
        ('1984', 'George Orwell', 1949, 'Dystopian'),
        ('Project Hail Mary', 'Andy Weir', 2021, 'Sci-Fi'),
        ('The Martian', 'Andy Weir', 2011, 'Sci-Fi'),
        ('Dune', 'Frank Herbert', 1965, 'Sci-Fi')`);

    // 2. E-commerce Tables
    db.run(`CREATE TABLE IF NOT EXISTS customers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_id INTEGER,
        order_date TEXT,
        amount DECIMAL(10,2),
        FOREIGN KEY(customer_id) REFERENCES customers(id)
    )`);

    db.run(`INSERT INTO customers (name, email) VALUES 
        ('Alice Johnson', 'alice@example.com'),
        ('Bob Smith', 'bob@example.com')`);

    db.run(`INSERT INTO orders (customer_id, order_date, amount) VALUES 
        (1, '2023-05-01', 150.00),
        (2, '2023-05-02', 200.00),
        (1, '2023-05-03', 50.00)`);

    // 3. Employee Table
    db.run(`CREATE TABLE IF NOT EXISTS employees (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        department TEXT,
        salary INTEGER
    )`);

    db.run(`INSERT INTO employees (name, department, salary) VALUES 
        ('John Doe', 'Engineering', 80000),
        ('Jane Doe', 'Engineering', 85000),
        ('Sam Green', 'Marketing', 60000),
        ('Sara White', 'Marketing', 65000),
        ('Mike Brown', 'Sales', 70000)`);

    // 4. Hospital Table
    db.run(`CREATE TABLE IF NOT EXISTS patients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER,
        last_visit TEXT
    )`);

    db.run(`INSERT INTO patients (name, age, last_visit) VALUES 
        ('Old Man Joe', 75, '2022-10-01'),
        ('Young Tim', 10, '2023-04-15'),
        ('Mrs. Smith', 62, '2022-01-20'),
        ('Mr. Bond', 45, '2023-05-10')`);

    // 5. University Tables
    db.run(`CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS courses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS enrollments (
        student_id INTEGER,
        course_id INTEGER,
        FOREIGN KEY(student_id) REFERENCES students(id),
        FOREIGN KEY(course_id) REFERENCES courses(id)
    )`);

    db.run(`INSERT INTO students (name) VALUES ('Charlie'), ('David')`);
    db.run(`INSERT INTO courses (title) VALUES ('Introduction to SQL'), ('Web Development')`);
    db.run(`INSERT INTO enrollments (student_id, course_id) VALUES (1, 1), (2, 1), (1, 2)`);

    console.log("Database 'tutorial.db' has been successfully populated!");
});

db.close();
