# Local Setup Instructions

This guide will help you set up and run the Bitcoin Education Platform locally without any Replit dependencies.

## Prerequisites

- Node.js v18+ and npm
- PostgreSQL (optional, only needed if you want to use a database)

## Installation Steps

1. **Set up the project structure**:

   First, ensure you're in the project root directory. Then copy the local package.json:

   ```bash
   cp local-package.json package.json
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment**:

   Create a `.env` file in the project root with the following variables:

   ```
   NODE_ENV=development
   
   # PostgreSQL database connection (optional)
   # DATABASE_URL=postgresql://username:password@localhost:5432/database_name
   ```

4. **Run the application** in development mode:

   ```bash
   # Using the combined script (runs both frontend and backend)
   npm run local
   
   # OR run backend and frontend separately
   # Terminal 1 (Backend)
   npm run dev
   
   # Terminal 2 (Frontend)
   npm run client
   ```

5. **Access the application**:

   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000/api

## Project Structure

- `client/`: Frontend React application
- `server/`: Backend Express server
- `shared/`: Shared code between frontend and backend
- `attached_assets/`: Static assets (images, etc.)

## Building for Production

```bash
npm run build
npm run start
```

## Troubleshooting

1. **Port conflicts**: If port 5000 or 5173 is already in use, you can modify the port in:
   - Backend: Edit `server/index.ts`
   - Frontend: Edit `client/vite.local.config.js`

2. **Database issues**: If you're using PostgreSQL, ensure it's running and correctly configured in your `.env` file.

3. **Module resolution errors**: Make sure all imports are correctly using aliases:
   - `@/` for client code
   - `@shared/` for shared code
   - `@assets/` for assets