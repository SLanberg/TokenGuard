import express, { Router } from "express";

import { signIn, signUp, logout } from '../controllers/auth.js';

const router: Router = express.Router();

router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.post("/logout", logout);

export default router;