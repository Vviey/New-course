#!/bin/bash

# Run-local shell script for Unix-based systems
# This script starts both the backend and frontend servers for local development

# Set environment variables
export NODE_ENV=development
export LOCAL_DEV=true
export SKIP_REPLIT=true

# Display startup message
echo "=================================================="
echo "  STARTING LOCAL DEVELOPMENT ENVIRONMENT"
echo "=================================================="
echo ""
echo "This will start:"
echo " - Backend API server on port 5000"
echo " - Frontend dev server on port 5173"
echo ""
echo "Access the application at: http://localhost:5173"
echo "Press Ctrl+C to stop all servers"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed or not in PATH"
    echo "Please install Node.js v18 or later"
    exit 1
fi

# Run the JavaScript version
node run-local.js