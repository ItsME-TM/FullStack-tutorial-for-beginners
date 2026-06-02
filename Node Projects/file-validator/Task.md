# File Validator

## Project Overview
A Node.js utility for validating files by type, size, and content to ensure security and compliance.

## Final Goal
Create a tool that can:
- Detect file types (MIME types)
- Validate file sizes
- Check for malicious content
- Verify file extensions
- Scan for potential security threats

## Setup Instructions
```bash
# Navigate to project
cd Node\ Projects\file-validator

# Initialize project
npm init -y

# Install dependencies
npm install file-type
```

## Implementation Steps
1. Create a file named `file-validator.js`
2. Import file-type and other required modules
3. Create file type detection function
4. Add file size validation
5. Implement content scanning
6. Create security checks
7. Add batch processing capability

## Example Usage
```bash
# Validate a single file
node file-validator.js validate --file "document.pdf"

# Check file type
node file-validator.js type --file "image.png"

# Validate with size limits
node file-validator.js validate --file "large_video.mp4" --max-size 50MB

# Batch validate directory
node file-validator.js batch --directory "./uploads" --allowed-types pdf,jpg,png

# Scan for malicious content
node file-validator.js scan --file "suspicious_file.exe"
```

## Code Structure
```javascript
const fs = require('fs');
const path = require('path');
const FileType = require('file-type');

class FileValidator {
    async detectFileType(filePath) {
        // Implementation here
    }
    
    async validateFileSize(filePath, maxSize) {
        // Implementation here
    }
    
    async checkExtension(filePath, allowedExtensions) {
        // Implementation here
    }
    
    async scanForMaliciousContent(filePath) {
        // Implementation here
    }
    
    async validateFile(filePath, options) {
        // Implementation here
    }
    
    async batchValidate(directory, options) {
        // Implementation here
    }
}

// CLI argument parsing
// Main execution logic
```

## Learning Points
- File system operations
- MIME type detection
- File size calculations
- Security scanning basics
- Batch processing
- Error handling for file operations
- Path manipulation in Node.js