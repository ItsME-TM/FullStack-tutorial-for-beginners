# Deep Dive into useState and useEffect

## useState Recap
`useState` allows components to "remember" values between renders. Updating state triggers React to update the DOM.

## Understanding useEffect
`useEffect` is a Hook that lets you perform **side effects** in functional components. Side effects include data fetching, subscriptions, or manually changing the DOM.

### Syntax
```javascript
React.useEffect(() => {
  // Your effect code here
}, [dependencies]);
```

## Dependency Arrays
The second argument to `useEffect` controls when the effect runs:
1. **No array:** Runs after every render.
2. **Empty array `[]`:** Runs only once, when the component **mounts** (appears on the screen).
3. **With variables `[count]`:** Runs only when the specified variables change.

### Example: API Fetching
You typically want to fetch data only once when the page loads, so you use an empty dependency array.
