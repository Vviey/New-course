#!/bin/bash

# Simple local development startup script for the Bitcoin Education Platform

# Create package.json if it doesn't exist
if [ ! -f "package.json" ]; then
  echo "Copying local-package.json to package.json..."
  cp local-package.json package.json
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
  echo "Creating default .env file..."
  cat > .env << EOL
NODE_ENV=development

# PostgreSQL database connection (optional)
# DATABASE_URL=postgresql://username:password@localhost:5432/database_name
EOL
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Run the application
echo "Starting the application..."
node start-local.js