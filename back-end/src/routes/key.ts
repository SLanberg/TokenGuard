import express, { Router } from "express";

import { getSecretKey } from '../controllers/key.js';

const router: Router = express.Router();

router.get("/",getSecretKey);

export default router;