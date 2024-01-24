import express, { Router } from "express";

import { signin, signup, logout } from '../controllers/auth.js';

const router: Router = express.Router();

router.post("/signin",signin);
router.post("/signup",signup);
router.post("/logout",logout);

export default router;