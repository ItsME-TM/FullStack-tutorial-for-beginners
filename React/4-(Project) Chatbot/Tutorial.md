# Components, Props, and Lists

## Component Structure
React apps are built by combining small, independent pieces called **Components**. A component is a JavaScript function that returns JSX.
- **Functional Components:** The modern standard.
- **Composition:** Components can contain other components (e.g., an `App` component containing `Header` and `Footer`).

## Props (Properties)
Props are used to pass data from a parent component to a child component. They are read-only and help make components reusable.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Usage
<Welcome name="Alice" />
```

## Mapping Over Arrays
To render a list of data, we use the JavaScript `.map()` method. React requires a unique `key` prop for each item in a list to track changes efficiently.

```javascript
{items.map((item) => (
  <li key={item.id}>{item.text}</li>
))}
```
