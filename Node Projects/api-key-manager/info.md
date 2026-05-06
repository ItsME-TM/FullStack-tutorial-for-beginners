# API Key Manager

## Project Overview
A Node.js utility for generating, validating, and managing API keys with security features.

## Final Goal
Create a tool that can:
- Generate cryptographically secure API keys
- Validate API keys
- Track usage per API key
- Implement rate limiting
- Store API keys securely

## Setup Instructions
```bash
# Navigate to project
cd Node\ Projects\api-key-manager

# Initialize project
npm init -y

# Install dependencies
npm install crypto uuid
```

## Implementation Steps
1. Create a file named `api-key-manager.js`
2. Import required modules
3. Create API key generation function
4. Create validation function
5. Add usage tracking
6. Implement rate limiting
7. Create storage mechanism (JSON file or database)

## Example Usage
```bash
# Generate new API key
node api-key-manager.js generate --user "john_doe"

# Validate API key
node api-key-manager.js validate --key "generated_key_here"

# Check usage stats
node api-key-manager.js stats --key "generated_key_here"

# Set rate limit
node api-key-manager.js rate-limit --key "key_here" --limit 100 --per hour
```

## Code Structure
```javascript
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

class APIKeyManager {
    constructor() {
        // Initialize storage
    }
    
    generateAPIKey(userId) {
        // Implementation here
    }
    
    validateAPIKey(key) {
        // Implementation here
    }
    
    trackUsage(key) {
        // Implementation here
    }
    
    checkRateLimit(key, limit, period) {
        // Implementation here
    }
}

// CLI interface
// Main execution logic
```

## Learning Points
- Cryptographic random number generation
- UUID generation
- Class-based architecture in Node.js
- Simple data persistence
- Rate limiting algorithms
- API key security practices