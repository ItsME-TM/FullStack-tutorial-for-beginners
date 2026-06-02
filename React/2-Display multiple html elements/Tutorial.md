# JSX and Rendering Multiple Elements

## JSX Rules
JSX (JavaScript XML) allows you to write HTML-like code inside JavaScript. However, it follows strict rules:
1. **Single Parent Element:** A component or variable must return exactly one parent element. You cannot return two adjacent tags like `<h1></h1><p></p>` without a wrapper.
2. **Closing Tags:** All tags must be closed. For example, `<br>` must be written as `<br />`.
3. **CamelCase Attributes:** HTML attributes like `class` become `className` in JSX, and `onclick` becomes `onClick`.

## Wrapping Elements in a Single Parent
To display multiple elements, you must wrap them in a container like a `<div>`, `<section>`, or `<article>`.

```javascript
const element = (
  <div>
    <h1>Heading</h1>
    <p>Paragraph</p>
  </div>
);
```

## Using Fragments
If you don't want to add an extra `<div>` to the DOM (which can mess up CSS styling), you can use a **React Fragment**. It acts as a invisible wrapper.

```javascript
const element = (
  <>
    <h1>Heading</h1>
    <p>Paragraph</p>
  </>
);
```
Alternatively, you can use `<React.Fragment>...</React.Fragment>`.
