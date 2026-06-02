# Task 5: University Enrollment

## Objective
Work with Many-to-Many relationships and triple joins.

## The Data
1. `students`: `id`, `name`
2. `courses`: `id`, `title`
3. `enrollments`: `student_id`, `course_id` (junction table)

## The Challenge
Find the names of all students enrolled in the course **'Introduction to SQL'**.

## Instructions
1. Open `query.sql` in this folder.
2. Write your SQL query inside it.
3. Run it against the database from the `SQL Tasks` root directory:
   ```bash
   sqlite3 tutorial.db < 05-University-Enrollment/query.sql
   ```
4. Verify your results.

## Expected Output
The names of the students (Charlie and David).
