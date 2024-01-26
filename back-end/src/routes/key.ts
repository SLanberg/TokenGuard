import express, { Router } from "express";

import { getSecretKey } from '../controllers/key.js';

const router: Router = express.Router();

router.post("/", getSecretKey);

export default router;