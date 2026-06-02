# Step-by-Step Guide: Using Hooks

## 1. Implementing a Counter with Logging
Create a counter state and use `useEffect` to log a message every time the count changes.

```javascript
const [count, setCounter] = React.useState(0);

React.useEffect(() => {
  console.log("The count value has changed:", count);
}, [count]); // Runs whenever 'count' changes
```

## 2. Setting up Data Fetching
Create a state to hold your fetched data (e.g., an array of users).

```javascript
const [users, setUsers] = React.useState([]);
```

## 3. Fetching from an API
Use `fetch()` inside a `useEffect` with an empty dependency array. This ensures the request happens only once.

```javascript
React.useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setUsers(data));
}, []); // Empty array = run once on mount
```

## 4. Displaying the Data
Map through the `users` state to render the list in your UI.

```javascript
<ul>
  {users.map(user => (
    <li key={user.id}>{user.name}</li>
  ))}
</ul>
```
