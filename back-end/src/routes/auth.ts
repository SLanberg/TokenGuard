import express, { Router } from "express";

import { signin, signup, logout } from '../controllers/auth.js';

const router: Router = express.Router();

router.post("/sign-in",signin);
router.post("/sign-up",signup);
router.post("/logout",logout);

export default router;