# JWT Validator

## Project Overview
A simple Node.js utility to validate JSON Web Tokens (JWTs) with proper error handling and expiration checking.

## Final Goal
Create a command-line tool that can:
- Validate JWT tokens with signature verification
- Check if tokens are expired
- Decode token payloads safely
- Demonstrate JWT operations with a complete example

## Setup Instructions
```bash
# Navigate to project
cd Node\ Projects\jwt-validator

# Initialize project
npm init -y

# Install dependencies
npm install jsonwebtoken
```

## Implementation Steps
1. Create `generate_token.js` - Helper to generate test tokens
2. Create `validator.js` - Main validation logic
3. Implement validation functions
4. Add error handling
5. Test with generated tokens

## Example Usage
```bash
# Generate a token (helper script)
node generate_token.js

# Run the validator (uses embedded token)
node validator.js

# The validator automatically:
# - Validates the token with signature
# - Checks if token is expired
# - Decodes the payload
```

## Code Structure

### generate_token.js
```javascript
const jwt = require("jsonwebtoken");

const secretKey = 'secretKey123';
const payload = {
  userId: 123,
  username: 'john_doe',
  role: 'admin'
};
const expires = '1h';
const token = jwt.sign(payload, secretKey, { expiresIn: expires });
console.log("Generated JWT Token:", token);
```

### validator.js
```javascript
const jwt = require("jsonwebtoken");

// Hardcoded token for demonstration
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJqb2huX2RvZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3ODA1ODI1OSwiZXhwIjoxNzc4MDYxODU5fQ.Hlp0dlVfyxf560vfevzmqiwAYdODHsjlFDl5PUvuqu4";
const secretKey = 'secretKey123';

function validateToken(token, secret) {
  if(!token) return console.error("No token provided for validation.");
  if (!secret) return console.error("Secret key is required for validation.");
  try {
    const decoded = jwt.verify(token, secret);
    return { ok: true, decoded};
  } catch(error) {
    return { ok: false, error: error.message};
  }
}

function checkExpiry(token) {
  if(!token) return console.error("No token provided for expiry check.");
  const decoded = jwt.decode(token);
  if(!decoded || !decoded.exp) return console.error("Invalid token: Unable to decode or missing expiry.");
  const currentTime = Math.floor(Date.now() / 1000);
  return decoded.exp > currentTime ? "Token is valid" : "Token has expired";
}

function decodeToken(token) {
  if(!token) return console.error("No token provided for decoding.");
  const decoded = jwt.decode(token);
  if(!decoded) return console.error("Invalid token: Unable to decode.");
  return decoded;
}

// Run all validations
const validationResult = validateToken(token, secretKey);
const expiryStatus = checkExpiry(token);
const decodedPayload = decodeToken(token);

console.log("Validation Result:", validationResult);
console.log("Expiry Status:", expiryStatus);
console.log("Decoded Payload:", decodedPayload);
```

## Learning Points
- JWT structure (header, payload, signature)
- Synchronous vs asynchronous JWT operations
- Error handling in Node.js
- Token expiration checking
- Payload decoding without verification
- Console logging and output formatting

## Expected Output
When running `node validator.js`, you should see:
```
Validation Result: { ok: true, decoded: { userId: 123, username: 'john_doe', role: 'admin', iat: 1778058259, exp: 1778061859 } }
Expiry Status: Token is valid
Decoded Payload: { userId: 123, username: 'john_doe', role: 'admin', iat: 1778058259, exp: 1778061859 }
```

## Key Features Implemented
1. **Token Validation**: Verifies token signature using secret key
2. **Expiry Check**: Compares expiration time with current time
3. **Payload Decoding**: Safely extracts token payload
4. **Error Handling**: Gracefully handles invalid tokens and errors
5. **Complete Workflow**: Demonstrates the full JWT lifecycle from generation to validation