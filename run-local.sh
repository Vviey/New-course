#!/bin/bash

# Clear screen for better visibility
clear

# Print header
echo "========================================================"
echo "  Running Bitcoin Quest: Asha's Journey (Local Mode)    "
echo "========================================================"
echo ""
echo "This script runs the application with in-memory storage"
echo "No database connection required"
echo ""

# Make sure all environment variables are unset to force in-memory mode
echo "Setting up local environment..."
unset PGDATABASE
unset PGHOST
unset PGPASSWORD
unset PGPORT
unset PGUSER
unset DATABASE_URL

# Run the development server
echo "Starting application in development mode..."
echo ""
npm run dev