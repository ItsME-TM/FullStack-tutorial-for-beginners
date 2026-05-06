# CSV Tools

## Project Overview
A Node.js utility for processing CSV files with features like conversion, validation, and data manipulation.

## Final Goal
Create a tool that can:
- Convert CSV to JSON
- Convert JSON to CSV
- Validate CSV structure
- Filter and transform data
- Merge multiple CSV files

## Setup Instructions
```bash
# Navigate to project
cd Node\ Projects\csv-tools

# Initialize project
npm init -y

# Install dependencies
npm install csv-parser csv-writer
```

## Implementation Steps
1. Create a file named `csv-processor.js`
2. Import CSV parsing and writing modules
3. Create CSV to JSON conversion function
4. Create JSON to CSV conversion function
5. Add data validation
6. Implement filtering and transformation
7. Add file merging capability

## Example Usage
```bash
# Convert CSV to JSON
node csv-processor.js convert --input data.csv --output data.json

# Convert JSON to CSV
node csv-processor.js convert --input data.json --output data.csv --format json

# Filter CSV by column
node csv-processor.js filter --input data.csv --output filtered.csv --column age --operator gt --value 18

# Validate CSV structure
node csv-processor.js validate --input data.csv --schema schema.json
```

## Code Structure
```javascript
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

class CSVProcessor {
    async csvToJson(inputFile, outputFile) {
        // Implementation here
    }
    
    async jsonToCSV(inputFile, outputFile) {
        // Implementation here
    }
    
    async filterCSV(inputFile, outputFile, filters) {
        // Implementation here
    }
    
    async validateCSV(inputFile, schema) {
        // Implementation here
    }
    
    async mergeCSV(inputFiles, outputFile) {
        // Implementation here
    }
}

// CLI argument parsing
// Main execution logic
```

## Learning Points
- CSV parsing and writing
- File system operations in Node.js
- Data transformation and filtering
- Error handling for file operations
- Stream processing for large files
- Command-line interfaces