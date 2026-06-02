# Advanced State and Complex Logic

## Managing Multiple States
In more complex applications, you often need to manage several pieces of state simultaneously. In a calculator, this includes:
- First number
- Second number
- Selected operation (+, -, *, /)
- Final result
- Error messages

```javascript
const [num1, setNum1] = React.useState("");
const [num2, setNum2] = React.useState("");
const [op, setOp] = React.useState("+");
```

## Handling Complex Logic
When a component performs many tasks (like math, validation, and error handling), it's best to consolidate that logic into a single function. This keeps your JSX clean and your code easy to debug.

## Form Validation
Always validate user input before processing.
- Check if inputs are numbers using `isNaN()`.
- Check for edge cases, like dividing by zero.
- Use a dedicated `error` state to provide feedback to the user.
