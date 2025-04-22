import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Direct route for alternate index page that bypasses Vite host restrictions
router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index-alt.html'));
});

export default router;