# JWT Validator Tutorial

## Project Overview
A Node.js utility for validating, decoding, and checking the expiration of JSON Web Tokens (JWTs) using the `jsonwebtoken` library.

## Files Provided
- `package.json` - Project configuration and dependencies (`jsonwebtoken`)
- `validator.js` - Template file with function signatures and JSDoc comments (TO BE COMPLETED)
- `test.js` - Test script to verify your implementation
- `Task.md` - This file (instructions)
- `generate_token.js` - Helper script to generate test tokens
- `Answer/` - Folder containing completed solution (for reference only)

## Setup Instructions
```bash
# 1. Navigate to project directory
cd "Node Projects/jwt-validator"

# 2. Install dependencies
npm install
```

## Learning Goals
By completing this tutorial, you will:
1. Understand the structure of a JWT (Header, Payload, Signature)
2. Learn how to verify token signatures using a secret key
3. Practice decoding token payloads safely
4. Implement expiration checking logic
5. Understand the difference between `jwt.verify()` and `jwt.decode()`

## Implementation Steps
Follow these steps to complete the tutorial:

### Step 1: Understand the Functions
Read the JSDoc comments in `validator.js` to understand what each function should do:

1. **`validateToken(token, secret)`**
   - Verifies the token signature using the provided secret
   - Returns an object `{ ok: true, decoded }` if valid
   - Returns `{ ok: false, error }` if invalid or expired

2. **`checkExpiry(token)`**
   - Decodes the token without verification
   - Compares the `exp` claim with the current time
   - Returns "Token is valid" or "Token has expired"

3. **`decodeToken(token)`**
   - Decodes and returns the token payload without signature verification

### Step 2: Implement the Functions
Edit `validator.js` and implement the logic. 

**Hint**: Use the `jsonwebtoken` methods:
- `jwt.verify(token, secret)` for validation
- `jwt.decode(token)` for decoding without verification

### Step 3: Test Your Implementation
Run the test script to verify your work:
```bash
node test.js
```

### Step 4: Check Your Results
If all tests pass, you'll see "All tests completed!" at the end.
If tests fail, read the error messages and fix your implementation.

## Example Usage (After Completion)
```javascript
const { validateToken, checkExpiry, decodeToken } = require('./validator.js');

const result = validateToken(myToken, "mySecret");
if (result.ok) {
    console.log("Payload:", result.decoded);
}
```

## Where to Find Help
- Read `jwt-tutorial.md` for detailed JWT explanations
- **DO NOT** look at the `Answer/` folder until you've tried your best!

## Learning Points Covered
- JWT Verification vs Decoding
- Handling `exp` (expiration) timestamps
- Error handling with try/catch for JWT verification
- Security implications of token handling
