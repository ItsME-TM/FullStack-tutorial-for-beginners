# URL Shortener

## Project Overview
A simple Node.js web application for shortening URLs with click tracking and analytics.

## Final Goal
Create a web server that can:
- Shorten long URLs
- Redirect to original URLs
- Track click analytics
- Generate unique short codes
- Store URL mappings

## Setup Instructions
```bash
# Navigate to project
cd Node\ Projects\url-shortener

# Initialize project
npm init -y

# Install dependencies
npm install express nanoid
```

## Implementation Steps
1. Create a file named `server.js`
2. Import Express and nanoid
3. Set up Express server
4. Create short URL endpoint
5. Create redirect endpoint
6. Add click tracking
7. Implement URL storage
8. Add analytics endpoint

## Example Usage
```bash
# Start the server
node server.js

# Shorten a URL (POST)
curl -X POST -H "Content-Type: application/json" -d '{"url": "https://example.com/very/long/url"}' http://localhost:3000/shorten

# Get analytics (GET)
curl http://localhost:3000/analytics/abc123

# Follow short URL (GET)
curl http://localhost:3000/abc123
```

## Code Structure
```javascript
const express = require('express');
const { nanoid } = require('nanoid');
const app = express();
const PORT = 3000;

// In-memory storage (use database for production)
const urlDatabase = {};

// Middleware
app.use(express.json());

// Endpoints
app.post('/shorten', (req, res) => {
    // Implementation here
});

app.get('/:shortCode', (req, res) => {
    // Implementation here
});

app.get('/analytics/:shortCode', (req, res) => {
    // Implementation here
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

## Learning Points
- Express.js framework basics
- REST API design
- URL routing and parameters
- HTTP status codes
- Simple data persistence
- Analytics tracking
- nanoid for unique ID generation
- Basic web security practices