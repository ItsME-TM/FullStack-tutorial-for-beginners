# Core React Concepts in Chatbot Project

This chatbot project demonstrates several important React concepts for beginners:

## 1. Functional Components

- The project uses functions like `ChatInput`, `ChatMessage`, `ChatMessages`, and `App` to define UI components.
- Functional components are the recommended way to build React UIs.

## 2. JSX Syntax

- Components return JSX, which looks like HTML but allows embedding JavaScript expressions.
- Example: `<button>Send</button>` and `{sender === "bot" && <img src="../bot.png" width="50" />}`

## 3. Props

- Data is passed to components using props, e.g., `ChatMessage({ message, sender })`.
- Props allow components to be reusable and dynamic.

## 4. Rendering Lists

- The `ChatMessages` component uses `.map()` to render multiple chat messages from an array.
- Each child in a list should have a unique `key` prop.

## 5. Conditional Rendering

- The project uses conditional rendering to show different images for bot and user messages:
  ```jsx
  {
    sender === "bot" && <img src="../bot.png" width="50" />;
  }
  {
    sender === "user" && <img src="../user.png" width="50" />;
  }
  ```

## 6. Event Handling

- The `Test` button demonstrates how to handle events with `onClick`.
- Example: `<button onClick={test}>Test</button>`

## 7. Component Composition

- The `App` component combines `ChatInput` and `ChatMessages` to build the full UI.

## 8. ReactDOM Rendering

- The app is rendered into the DOM using `ReactDOM.createRoot(container).render(<App />);`

---

This project is a good starting point for learning how to:

- Build UI with React components
- Pass data and handle events
- Render lists and conditionally display elements
- Organize code for a simple interactive app
