# Password Utils

## Project Overview
A Node.js utility for secure password handling including hashing, verification, and salt generation.

## Final Goal
Create a command-line tool that can:
- Hash passwords with bcrypt
- Verify passwords against hashes
- Generate secure password salts
- Compare passwords securely

## Setup Instructions
```bash
# Navigate to project
cd Node\ Projects\password-utils

# Initialize project
npm init -y

# Install dependencies
npm install bcrypt
```

## Implementation Steps
1. Create a file named `password.js`
2. Import bcrypt module
3. Create password hashing function
4. Create password verification function
5. Add CLI interface
6. Test with sample passwords

## Example Usage
```bash
# Hash a password
node password.js hash --password "mySecretPassword"

# Verify a password
node password.js verify --password "mySecretPassword" --hash "hashed_value_here"

# Generate salt with custom rounds
node password.js salt --rounds 12
```

## Code Structure
```javascript
const bcrypt = require('bcrypt');

async function hashPassword(password, saltRounds = 10) {
    // Implementation here
}

async function verifyPassword(password, hash) {
    // Implementation here
}

function generateSalt(saltRounds = 10) {
    // Implementation here
}

// CLI argument parsing
// Main execution logic
```

## Learning Points
- Password security best practices
- Salt rounds and hashing strength
- Async/await pattern
- Command-line interfaces with Node.js
- Secure password storage principles