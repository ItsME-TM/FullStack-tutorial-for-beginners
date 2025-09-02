# Explanation: React and State in Total Cost Calculator

## What is React?

React is a JavaScript library for building user interfaces. It lets you create reusable components that update automatically when data changes.

## What is State?

State is a way for React components to keep track of changing data. When state changes, React automatically updates the UI.

## How does the Total Cost Calculator work?

- We use a React function component called `TotalCostCalculator`.
- We use `React.useState` to create two pieces of state:
  - `productCost`: stores the value entered by the user.
  - `totalCost`: stores the calculated total cost.
- The input box lets the user type a product cost. Every time the user types, the value is saved in `productCost`.
- When the user clicks the "Calculate Total Cost" button, we add the shipping cost ($5) to the product cost and update `totalCost`.
- The UI updates automatically to show the new total cost.

## New Concepts Used

- **React Components:** Functions that return UI elements.
- **JSX:** A syntax that looks like HTML, used to describe UI in React.
- **State (`useState`):** Lets components remember values and update the UI when those values change.
- **Event Handling:** Functions like `onChange` and `onClick` respond to user actions.

React makes it easy to build interactive apps by keeping the UI in sync with your data!
