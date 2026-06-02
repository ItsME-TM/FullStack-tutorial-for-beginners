# Step-by-Step Guide: Building a Complex Calculator

## 1. Setting Up Multiple States
Initialize states for your inputs, operation, result, and errors. Using empty strings for inputs is often better than `0` for placeholder handling.

```javascript
const [numValue1, setNumValue1] = React.useState("");
const [numValue2, setNumValue2] = React.useState("");
const [operation, setOperation] = React.useState("+");
const [result, setResult] = React.useState("");
const [error, setError] = React.useState("");
```

## 2. Creating the Calculation Function
Create a function that parses the strings to numbers and uses conditional logic (like `if` statements or `switch`) to perform the math.

```javascript
const calculate = () => {
  const a = parseFloat(numValue1);
  const b = parseFloat(numValue2);
  
  if (isNaN(a) || isNaN(b)) {
    setError("Please enter numbers");
    return;
  }
  
  // Reset error if valid
  setError("");
  
  if (operation === "+") setResult(a + b);
  // ... other operations
};
```

## 3. Handling Special Cases
Add a check for division by zero to prevent "Infinity" results.

```javascript
if (operation === "/" && b === 0) {
  setError("Cannot divide by 0");
  return;
}
```

## 4. Resetting State
To clear the calculator, create a function or an inline handler that sets all states back to their initial values.

```javascript
<button onClick={() => {
  setNumValue1("");
  setNumValue2("");
  setResult("");
  setError("");
}}>Reset</button>
```

## 5. Rendering with Conditional Logic
Use the logical AND operator (`&&`) to only show the result or error if they have values.

```javascript
{error && <p className="error">{error}</p>}
{result !== "" && <p className="result">{result}</p>}
```
