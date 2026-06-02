# bcrypt Password Hashing Tutorial

## What is bcrypt?

bcrypt is a password-hashing function designed by Niels Provos and David Mazières. It's based on the Blowfish cipher and is specifically designed to be:

1. **Slow** - Makes brute-force attacks computationally difficult
2. **Adaptive** - The work factor can be increased as hardware gets faster
3. **Salted** - Each password automatically gets a unique random salt

## Why Use bcrypt for Passwords?

When storing passwords, security best practices require that we never store the actual password. Instead, we store a cryptographic hash. bcrypt is particularly well-suited for password hashing because:

- **Defense against brute-force**: The intentional slowness makes guessing passwords expensive
- **Built-in salt management**: Each hash includes its own salt, eliminating salt storage concerns
- **Future-proof**: You can increase the work factor over time as computers improve
- **Industry standard**: Widely adopted and thoroughly tested

## Core Concepts to Understand

### Salting
A salt is random data that is combined with a password before hashing. This ensures that:
- Identical passwords hash to different values
- Rainbow table attacks become ineffective
- Each password requires a separate brute-force effort

### Work Factor (Salt Rounds)
The bcrypt algorithm includes a cost factor that determines how computationally expensive the hashing process is. Higher values mean:
- More security (slower to compute)
- Longer hash generation time
- Better protection against future hardware improvements

Typical values range from 10-12 for most applications today, but this should be periodically increased.

### Bcrypt Library Methods
When implementing the functions, you will use these methods from the bcrypt library:
- `bcrypt.hash(password, saltRounds)` - Hashes a password with a generated salt
- `bcrypt.compare(password, hash)` - Compares a password against a hash
- `bcrypt.genSalt(saltRounds)` - Generates a salt (returns a Promise)

All three methods return Promises, so they work naturally with async/await.

## What Each Function Should Do Conceptually

### hashPassword
This function should take a plain text password and produce a secure hash that includes:
- The bcrypt algorithm identifier
- The work factor used
- The salt that was generated
- The resulting hash of password+salt

Think of it as: `hashPassword(password) → bcrypt_format_string`

### verifyPassword
This function should take a plain text password and a previously generated hash, then determine if they match by:
- Extracting the salt and work factor from the stored hash
- Hashing the input password with the same parameters
- Comparing the result to the stored hash

Think of it as: `verifyPassword(password, stored_hash) → true/false`

### generateSalt
This function should produce a bcrypt-specific salt string that includes:
- The algorithm identifier
- The work factor
- Random salt data

This salt is what gets incorporated into the final hash by the hash function.

Think of it as: `generateSalt() → bcrypt_salt_string`

## Key Points for Implementation

When implementing these functions, remember:

1. **Asynchronous Nature**: All bcrypt operations in Node.js are asynchronous and return Promises
2. **Error Handling**: Consider what should happen if inputs are missing or invalid
3. **Default Values**: The saltRounds parameter commonly defaults to 10 when not specified
4. **Return Types**: Each function returns a Promise that resolves to a specific type (string or boolean)
5. **Bcrypt Methods**: You'll need to use the appropriate methods from the bcrypt library

## Security Implementation Guidelines

- Never log or expose plain text passwords
- Never attempt to "decrypt" a bcrypt hash (it's one-way by design)
- Always use constant-time comparison for password verification (bcrypt.compare does this)
- Consider increasing salt rounds periodically as part of maintenance
- Store only the hash - never the original password or intermediate values

## Understanding the Bcrypt Hash Format

A bcrypt hash string follows this format: `$2b$12$[salt][hash]`
- `$2b$` indicates the bcrypt algorithm version
- `12` is the work factor (log₂ of iterations)
- Next 22 characters are the salt
- Remaining 31 characters are the password hash

This format allows bcrypt.extract() to work internally - you don't need to parse this manually.

## Practice Approach

To successfully complete this implementation:
1. Read the JSDoc comments in password.js carefully - they specify exactly what each function should do
2. Think about what bcrypt method corresponds to each operation
3. Remember that all operations return Promises
4. Consider edge cases like null/undefined inputs
5. Test your implementation with the provided test.js

The goal is to understand password security principles while gaining practical experience with:
- Asynchronous JavaScript programming
- Using native Node.js modules
- Implementing secure authentication patterns
- Following documentation (JSDoc) to implement functionality
