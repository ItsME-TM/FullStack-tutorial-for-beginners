# Step-by-Step Guide: Displaying Multiple Elements

## 1. Define a JSX Element with Multiple Children
Create a constant that holds your JSX. Remember to wrap everything in a single parent `<div>` or a Fragment `<>`.

```javascript
const element = (
  <div>
    <h1>Hi lets Make multiple elements</h1>
    <p>This is a paragraph</p>
    <button>Click Me</button>
    <p>Another paragraph with simple JavaScript Code {2 + 3}</p>
  </div>
);
```

## 2. Using JavaScript Expressions
Inside your JSX, you can use curly braces `{}` to embed any valid JavaScript expression, such as math or variables.

## 3. Identify the Container
Make sure you have a target element in your HTML.

```javascript
const container = document.querySelector(".js-container");
```

## 4. Render to the DOM
Use the `ReactDOM` root to render your multiline JSX element.

```javascript
ReactDOM.createRoot(container).render(element);
```

By following these steps, you can build complex UIs by nesting many elements within a single React render call.
