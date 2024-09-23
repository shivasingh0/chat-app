import express from 'express'
import { loginUser, registerUser, searchUser } from '../controllers/userControllers.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/register",registerUser);
router.post("/login", loginUser);
router.get("/", protect, searchUser);

export default router;