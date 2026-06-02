# Password Utils Tutorial

## Project Overview
A Node.js utility for secure password handling including hashing, verification, and salt generation using bcrypt.

## Files Provided
- `package.json` - Project configuration and dependencies (bcrypt)
- `package-lock.json` - Exact dependency versions
- `password.js` - Template file with function signatures and JSDoc comments (TO BE COMPLETED)
- `test.js` - Test script to verify your implementation
- `Task.md` - This file (instructions)
- `answer/` - Folder containing completed solution (for reference only)

## Setup Instructions
```bash
# 1. Navigate to project directory
cd "D:\Programmes\react\React-tutorial-for-beginners\Node Projects\password-utils"

# 2. Install dependencies (RUN THIS FIRST)
npm install
```

## Learning Goals
By completing this tutorial, you will:
1. Understand password security best practices
2. Learn how bcrypt works with salt rounds
3. Practice async/await patterns in Node.js
4. Learn to read and follow JSDoc documentation
5. Implement secure password handling functions
6. Test your code with automated tests

## Implementation Steps
Follow these steps to complete the tutorial:

### Step 1: Understand the Functions
Read the JSDoc comments in `password.js` to understand what each function should do:

1. **`hashPassword(password, saltRounds)`**
   - Hashes a plain text password using bcrypt
   - Returns a Promise that resolves to the hashed password string
   - Takes optional saltRounds parameter (default: 10)

2. **`verifyPassword(password, hash)`**
   - Verifies if a plain text password matches a stored hash
   - Returns a Promise that resolves to true if password matches hash, false otherwise

3. **`generateSalt(saltRounds)`**
   - Generates a bcrypt salt with specified rounds
   - Returns a Promise that resolves to the generated salt string
   - Takes optional saltRounds parameter (default: 10)

### Step 2: Implement the Functions
Edit `password.js` and replace the empty function bodies with your implementation:

**Hint**: Use the bcrypt methods:
- `bcrypt.hash(password, saltRounds)` for hashing
- `bcrypt.compare(password, hash)` for verification  
- `bcrypt.genSalt(saltRounds)` for salt generation

### Step 3: Test Your Implementation
Run the test script to verify your work:
```bash
node test.js
```

### Step 4: Check Your Results
If all tests pass, you'll see "All tests completed!" at the end.
If tests fail, read the error messages and fix your implementation.

## Example Usage (After Completion)
Once your implementation is correct, you can use the functions like this:
```javascript
const { hashPassword, verifyPassword, generateSalt } = require('./password.js');

// Hash a password
const hash = await hashPassword("myPassword", 12);

// Verify a password
const isMatch = await verifyPassword("myPassword", hash);

// Generate a salt
const salt = await generateSalt(10);
```

## Where to Find Help
- Read `bcrypt-tutorial.md` for detailed bcrypt explanations
- **DO NOT** look at the `answer/` folder until you've tried your best!
- The answer folder contains the completed solution for reference only

## Learning Points Covered
- Password security best practices (never store plain text passwords)
- How salt rounds affect security and performance
- Async/await pattern with Promises
- Reading and following JSDoc documentation
- Secure password verification using bcrypt.compare()
- Module exports and imports in Node.js

## Important Notes
- The functions must return Promises (use async/await or return Promise directly)
- Handle edge cases like missing passwords or hashes
- Use console.error() for error messages as shown in the template
- Default saltRounds value is 10 if not provided
- Bcrypt is intentionally slow - this is a security feature!