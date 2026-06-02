-- Find all Sci-Fi books published after the year 2010
SELECT title, author 
FROM books 
WHERE genre = 'Sci-Fi' AND year > 2010;
