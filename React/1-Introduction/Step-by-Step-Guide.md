# Step-by-Step Guide: Your First React Render

## 1. Set up the HTML Container
Every React application needs a "root" element in the HTML where the app will be mounted. Create a simple `div` with a unique class or ID.

```html
<div class="js-container"></div>
```

## 2. Include the Necessary Scripts
To run React in the browser without a build tool, include the CDN links for React, ReactDOM, and Babel.

```html
<script src="https://unpkg.com/supersimpledev/react.js"></script>
<script src="https://unpkg.com/supersimpledev/react-dom.js"></script>
<script src="https://unpkg.com/supersimpledev/babel.js"></script>
```

## 3. Create the Rendering Script
Write your React code inside a `<script type="text/babel">` block. This tells Babel to compile the code inside.

## 4. Render a Simple String
Use `document.querySelector` to find your container, then use `ReactDOM` to render text into it.

```javascript
const container = document.querySelector(".js-container");
ReactDOM.createRoot(container).render("Lets learn React!");
```

Now, when you open this HTML file in a browser, you should see "Lets learn React!" displayed on the page.
