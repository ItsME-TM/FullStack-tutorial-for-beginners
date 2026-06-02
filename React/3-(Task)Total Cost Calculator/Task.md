# Task: Total Cost Calculator

## Instructions

Imagine you are building a simple shopping cart. The product cost is given, and the shipping cost is $5. Your task is to:

1. Create a variable named `shippingCost` and set it to 5.
2. Calculate the total cost by adding `productCost` and `shippingCost`.
3. Display the results on the website using the following design:

---

Product cost: $<u>A</u>

Shipping cost: $<u>B</u>

Total cost: $<u>C</u>

## [Place your order]

- Replace <u>A</u> with the value of `productCost`.
- Replace <u>B</u> with the value of `shippingCost`.
- Replace <u>C</u> with the calculated total cost.

## Note

You will code the solution in React. After you finish, the answer section will explain how the solution works.

---

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
