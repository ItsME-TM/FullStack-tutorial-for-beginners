# Step-by-Step Guide: Building a Total Cost Calculator

## 1. Creating State for Inputs
Use `React.useState` to create state variables for the product cost and the final total cost.

```javascript
const [productCost, setProductCost] = React.useState(0);
const [totalCost, setTotalCost] = React.useState(0);
```

## 2. Updating State on Input Change
Attach an `onChange` handler to your input field. Use the setter function (`setProductCost`) to update the state as the user types.

```javascript
<input
  onChange={(event) => {
    setProductCost(event.target.value);
  }}
/>
```

## 3. Calculating the Result on Button Click
Define a function to perform the calculation. Remember to convert the input string to a number using `Number()` or `parseFloat()`.

```javascript
function findTotalCost() {
  const shippingCost = 5;
  const result = shippingCost + Number(productCost);
  setTotalCost(result);
}
```

## 4. Triggering the Calculation
Bind your calculation function to the `onClick` event of a button.

```javascript
<button onClick={findTotalCost}>Calculate Total Cost</button>
```

## 5. Displaying the State
Use curly braces `{}` to show the current `totalCost` in your JSX.

```javascript
<label>Total Cost: {totalCost}</label>
```
