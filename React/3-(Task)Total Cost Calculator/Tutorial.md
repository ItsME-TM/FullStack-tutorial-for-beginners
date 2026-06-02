# Introduction to useState and Event Handling

## What is useState?
`useState` is a React Hook that lets you add state to functional components. State is data that changes over time and triggers a re-render of the component when updated.

```javascript
const [value, setValue] = React.useState(initialValue);
```
- `value`: The current state value.
- `setValue`: A function to update the state.
- `initialValue`: The starting value (e.g., `0`, `""`, or `false`).

## Event Handling in React
React handles events similarly to HTML, but with camelCase naming.

### onChange
The `onChange` event is used with form elements like `<input>` to detect when the user types. You can access the input's current value via `event.target.value`.

```javascript
<input onChange={(event) => console.log(event.target.value)} />
```

### onClick
The `onClick` event is used to trigger a function when an element is clicked.

```javascript
<button onClick={() => alert('Clicked!')}>Click Me</button>
```
