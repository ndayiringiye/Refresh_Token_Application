import express from "express";
import { handleLOgin } from "../services/loginService.js";

const router = express.Router();

router.post("/login", handleLOgin);

export default router;