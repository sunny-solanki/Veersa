import express from 'express';
import { registerUser, loginUser } from '../controllers/authControllers.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup',protect, registerUser);
router.post('/login',protect, loginUser);

export default router;
