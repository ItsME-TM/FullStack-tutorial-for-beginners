# Request Logger

## Project Overview
A Node.js middleware/logger for tracking and analyzing HTTP requests with detailed information.

## Final Goal
Create a logging system that can:
- Log all HTTP requests
- Track response times
- Categorize by status codes
- Store log data
- Generate reports
- Monitor for errors

## Setup Instructions
```bash
# Navigate to project
cd Node\ Projects\request-logger

# Initialize project
npm init -y

# Install dependencies
npm install express morgan
```

## Implementation Steps
1. Create a file named `logger.js`
2. Import Express and Morgan
3. Set up Express server
4. Create custom logging middleware
5. Add request tracking
6. Implement log storage
7. Create report generation
8. Add error monitoring

## Example Usage
```bash
# Start the server with logging
node logger.js

# Test with curl
curl -X GET http://localhost:3000/
curl -X POST -H "Content-Type: application/json" -d '{"name": "test"}' http://localhost:3000/api/data

# Generate report
curl http://localhost:3000/reports/daily

# View logs
curl http://localhost:3000/logs
```

## Code Structure
```javascript
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Log file setup
const logFile = path.join(__dirname, 'requests.log');

// Custom middleware for detailed logging
app.use((req, res, next) => {
    // Start time
    req.startTime = Date.now();
    
    // Log request details
    const logEntry = {
        timestamp: new Date().toISOString(),
        method: req.method,
        url: req.url,
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        statusCode: res.statusCode,
        responseTime: Date.now() - req.startTime
    };
    
    // Save to log file
    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
    
    next();
});

// Morgan for standard logging
app.use(morgan('combined'));

// Routes for testing
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/api/data', (req, res) => {
    res.json({ message: 'Data received' });
});

// Report generation endpoint
app.get('/reports/daily', (req, res) => {
    // Implementation here
});

// View logs endpoint
app.get('/logs', (req, res) => {
    // Implementation here
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

## Learning Points
- Express.js middleware
- HTTP logging best practices
- File system operations
- JSON log formatting
- Performance monitoring
- Error tracking
- Report generation
- Time-based data analysis