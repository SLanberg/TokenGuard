import express, { Router } from "express";

import { signIn, signUp, logOut } from '../controllers/auth.js';

const router: Router = express.Router();

router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.post("/log-out", logOut);

export default router;