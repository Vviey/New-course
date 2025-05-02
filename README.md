# Bitcoin Quest: Asha's Journey

A comprehensive, gamified Bitcoin education platform that transforms complex cryptocurrency learning into an engaging, narrative-driven experience through Asha's interactive journey across five distinct realms.

## Key Features

- Interactive storyline following Asha as she explores the world of Bitcoin and money
- Five distinct learning realms, each with its own theme and lessons
- Game mechanics including badges, rewards, and progress tracking
- Privacy-first approach with unique user IDs instead of personal information
- African-inspired visual design with animations and interactive elements

## Project Structure

- `/client` - Frontend React application
  - `/src/components` - UI components
  - `/src/pages` - Page components
  - `/src/hooks` - Custom React hooks
  - `/src/lib` - Utility functions and constant values
  - `/src/context` - React context providers
- `/server` - Backend Express server
- `/shared` - Shared code between client and server
- `/public` - Static assets

## Getting Started

### For Local Development (No Database Required)

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

The application will automatically use in-memory storage when no database connection is available, making it easy to explore all realms and missions without needing to set up PostgreSQL.

### Important Notes for Local Testing

- When running locally, the application uses MemStorage by default
- User progress is stored in memory and will be lost when the server restarts
- All realms and missions are accessible without database configuration
- The DB connection in server/db.ts has been configured to use dummy implementations when DATABASE_URL is not set

## Built With

- React - Frontend framework
- Express - Backend framework
- Tailwind CSS - Styling
- Framer Motion - Animations
- Drizzle ORM - Database interactions

## License

This project is licensed under the MIT License.