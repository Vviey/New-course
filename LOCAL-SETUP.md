# Local Development Setup Guide

This guide provides detailed instructions for setting up and running the Bitcoin Quest application locally without any external dependencies.

## Prerequisites

- Node.js v18 or later
- npm v9 or later

## Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bitcoin-quest.git
   cd bitcoin-quest
   ```

2. **Set up local configuration files**
   This project includes clean configuration files without Replit-specific dependencies:
   ```bash
   # Replace package.json with local version that doesn't have Replit dependencies
   cp local-package.json package.json
   
   # Copy the CommonJS version of the Tailwind config for local development
   cp local-tailwind.config.js tailwind.config.js
   
   # Create local environment file
   cp .env.example .env
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the application locally**
   The easiest way to run both the backend and frontend servers is with:
   ```bash
   node run-local.js
   ```

   This script will:
   - Start the backend API server on port 5000
   - Start the frontend development server on port 5173
   - Set environment variables to skip any Replit-specific code

4. **Access the application**
   Open your browser and navigate to: http://localhost:5173

## Common Issues & Fixes

### "Module not found" errors
If you see module not found errors, ensure all dependencies are properly installed:
```bash
npm install
```

### Port conflicts
If either port 5000 or 5173 is already in use, you'll need to modify the `run-local.js` script to use different ports.

### CORS issues
The application has CORS settings that allow localhost by default, but if you're experiencing CORS issues:
1. Verify that you're accessing the frontend on the correct port (5173)
2. Check that the backend API server is running on port 5000
3. Ensure there are no proxy configurations in your network that might interfere

## Project Structure 

For a purely frontend development workflow, here are the most important directories:

- `/client/src/pages` - Main page components for each realm and mission
- `/client/src/components` - Reusable UI components
- `/client/src/lib` - Utilities and mission data
- `/client/src/context` - React context providers for state management

## Development Tips

- The application uses in-memory storage by default
- All realms are unlocked in local development mode
- User progress is stored in memory and will be lost on server restart
- No database connection is required for local development

## Contributing

When making changes:
1. Follow the existing code structure
2. Ensure components are responsive and work on various screen sizes
3. Test your changes across different browsers
4. Make sure the application remains compatible with both local development and production environments