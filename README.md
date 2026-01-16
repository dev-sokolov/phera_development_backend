## pHera Backend — Image Upload & pH Analysis API

This is a lightweight Node.js/Express backend for handling image uploads and generating simulated pH analysis results.
It is designed to be used with the pHera frontend and supports secure file uploads, validation, and REST API endpoints.

## Features

Upload image (PNG/JPEG)
Validate file size and format
Block dangerous file extensions (e.g., .exe)
Generate simulated pH value and confidence score
Return formatted timestamp
Configurable CORS (secured by allowed origins)
Centralized error handling
Healthcheck endpoint for monitoring

## Project Structure
src/
 ├── controllers/
 │    └── images.controller.js
 ├── middlewares/
 │    ├── errorHandler.js
 │    ├── fileFilter.js
 │    ├── upload.js
 │    └── uploadMiddleware.js
 ├── routes/
 │    └── images.router.js
 ├── utils/
 │    ├── HttpException.js
 │    └── analyzePH.js
 ├── server.js
 └── index.js
README.md
package.json
nodemon.json

## Installation
npm install

## Environment Variables

Create a .env file in the project root:

PORT=3000
FRONTEND_URL=http://localhost:5173

## Running the Server

## Development mode (auto-restart with nodemon)
npm run dev

## Production mode
npm start


## API Endpoints

## Health check

GET /api/health

Returns:

{
  "status": "ok",
  "timestamp": "2024-01-10T13:45:12.123Z",
  "uptime": 53.71
}

## Upload image for pH analysis

POST /api/upload

Form-data:
Field	Type	Required	Description
image	File	Yes	        PNG or JPEG (max 10MB)

Example Response:
{
  "phValue": 5.4,
  "date": "10.01.24 | 3:15 PM",
  "confidence": 96
}

## File Validation Rules

✔ Only image/png and image/jpeg
✔ Max size: 10 MB
❌ .exe and binary executables are blocked
❌ Any other MIME type is rejected

This is handled by:

fileFilter.js
upload.js
uploadMiddleware.js

## pH Analysis Logic

The function analyzePH() simulates:

pH value between 4.0–7.0
Confidence 92–99%
Timestamp formatting
Returns JSON result back to the client

Located in:
src/utils/analyzePH.js

## Error Handling

Handled globally by:
src/middlewares/errorHandler.js


Returns consistent JSON:

{
  "success": false,
  "status": 400,
  "message": "Image file is required"
}

## CORS Protection

Only these origins are allowed:

http://localhost:5173

FRONTEND_URL (from .env)

If request comes from unauthorized origin — it is blocked with a CORS error.

## Scripts (from package.json)
"scripts": {
  "start": "node src/index.js",
  "dev": "nodemon src/index.js"
}

## Notes

This backend does not store images — it processes them in memory.

pH detection is simulated for prototyping.

Ready for migration to real ML model if needed.
