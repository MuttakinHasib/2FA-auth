import express from 'express';
import { register, registerVerify } from '../controllers/userControllers.js';

const router = express.Router();

router.post('/register', register);
router.post('/register/verify', registerVerify);

export default router;
